'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { AuthModal } from '@/components/ui/AuthModal';
import { api } from '@/lib/api';
import {
  persistence,
  SubmissionLogEntry,
  calculateRealStreak,
  isProblemSolved,
  getCanonicalCodeId,
} from '@/lib/persistence';
import { ChapterGroup } from '@/lib/types';
import { TechnicalDifficulty, ApertureStatus } from '@/components/ui/Badge';
import { JourneyHero, RelationalCatalogMatrix } from '@/components/ui/Cards';
import {
  Terminal, ChevronRight
} from 'lucide-react';

const MODULE_DEFINITIONS = [
  { id: 1, title: 'Basic SQL Projections & Filters', total: 20 },
  { id: 2, title: 'Aggregate Functions & Metrics', total: 15 },
  { id: 3, title: 'GROUP BY & Threshold Filtering', total: 20 },
  { id: 4, title: 'Relational Multi-Table Joins', total: 35 },
  { id: 5, title: 'Scalar & Correlated Subqueries', total: 20 },
  { id: 6, title: 'Analytical Window Functions', total: 30 },
  { id: 7, title: 'Common Table Expressions (CTEs)', total: 15 },
  { id: 8, title: 'CASE & Conditional Expressions', total: 10 },
  { id: 9, title: 'String Manipulation & Parsing', total: 20 },
  { id: 10, title: 'Date & Timestamp Arithmetic', total: 20 },
  { id: 11, title: 'Deduplication & Set Operations', total: 10 },
  { id: 12, title: 'Advanced Relational Analytics', total: 35 },
];

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const [chapters, setChapters] = useState<ChapterGroup[]>([]);
  const [solvedIds, setSolvedIds] = useState<Array<number | string>>([]);
  const [lastActiveId, setLastActiveId] = useState<number | string>('Basics-001');
  const [submissions, setSubmissions] = useState<SubmissionLogEntry[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [chaps, localSolved, lastId, subs] = await Promise.all([
          api.getChapters().catch(() => [] as ChapterGroup[]),
          persistence.getSolvedIds().catch(() => [] as Array<number | string>),
          persistence.getLastActiveProblemId().catch(() => 'Basics-001'),
          persistence.getSubmissions().catch(() => [] as SubmissionLogEntry[]),
        ]);
        const flatLevels = (chaps || []).flatMap((c) => c.levels || []);
        const backendSolved = flatLevels.filter((l) => l.passed).map((l) => l.code_id || l.id);

        
        // When user is logged in, backend is the source of truth for solved status.
        // When not logged in, cross-validate localStorage solved IDs against actual
        // passed submissions to prevent phantom solved entries.
        let resolvedSolved: Array<number | string>;
        if (user) {
          resolvedSolved = backendSolved;
        } else {
          // Only trust localStorage solved IDs that have a matching passed submission
          const passedSubmissionIds = new Set(
            subs.filter((s) => s.passed).map((s) => String(s.problemId))
          );
          const validLocalSolved = localSolved.filter((id) => passedSubmissionIds.has(String(id)));
          resolvedSolved = Array.from(new Set([...backendSolved, ...validLocalSolved]));
        }
        
        setChapters(chaps);
        setSolvedIds(resolvedSolved);
        setLastActiveId(lastId || 'SQL-001');
        setSubmissions(subs);
      } catch (e) {
        console.error('Failed to load dashboard state:', e);
      }
    }
    loadData();

    const handleRefresh = () => loadData();
    window.addEventListener('sqlquest_auth_logout', handleRefresh);
    window.addEventListener('sqlquest_auth_login', handleRefresh);
    window.addEventListener('sqlquest_problem_solved', handleRefresh);
    return () => {
      window.removeEventListener('sqlquest_auth_logout', handleRefresh);
      window.removeEventListener('sqlquest_auth_login', handleRefresh);
      window.removeEventListener('sqlquest_problem_solved', handleRefresh);
    };
  }, [user]);

  const allProblems = useMemo(() => chapters.flatMap((c) => c.levels || []), [chapters]);
  const totalCount = allProblems.length || 250;

  const canonicalSolvedSet = useMemo(() => {
    const set = new Set<string>();
    
    for (const rawId of solvedIds) {
      const codeId = getCanonicalCodeId(rawId, allProblems);
      if (codeId) set.add(codeId);
    }
    // Also include backend-confirmed passed problems
    for (const p of allProblems) {
      if (p.passed && p.code_id) {
        set.add(p.code_id);
      }
    }
    return set;
  }, [solvedIds, allProblems]);

  const solvedCount = canonicalSolvedSet.size;
  const realStreak = useMemo(() => calculateRealStreak(submissions), [submissions]);

  const lastActiveProblem = useMemo(() => {
    if (!allProblems || allProblems.length === 0) return null;
    const active = allProblems.find((p) =>
      (typeof lastActiveId === 'string' && p.code_id && p.code_id.toLowerCase() === lastActiveId.toLowerCase()) ||
      (p.code_id && p.code_id === lastActiveId) ||
      String(p.id) === String(lastActiveId) ||
      String(p.level_number) === String(lastActiveId)
    );
    if (active && !isProblemSolved(active, solvedIds, allProblems)) return active;

    const sql001 = allProblems.find((p) => p.code_id === 'SQL-001');
    if (sql001 && !isProblemSolved(sql001, solvedIds, allProblems)) return sql001;

    const nextUnsolved = allProblems.find((p) => !isProblemSolved(p, solvedIds, allProblems));
    return nextUnsolved || allProblems[0];
  }, [allProblems, lastActiveId, solvedIds]);

  const problemCodeToContinue = useMemo(() => {
    if (!lastActiveProblem) return 'SQL-001';
    const num = lastActiveProblem.level_number || 1;
    const padded = String(num).padStart(3, '0');
    return lastActiveProblem.code_id || (lastActiveProblem.chapter_id <= 2 ? `Basics-${padded}` : `SQL-${padded}`);
  }, [lastActiveProblem]);

  const timelineModules = useMemo(() => {
    return MODULE_DEFINITIONS.map((def) => {
      const chap = chapters.find((c) => c.chapter_id === def.id);
      const levels = chap?.levels || [];
      const solvedInChap = levels.filter((l) => isProblemSolved(l, solvedIds, allProblems)).length;
      return {
        id: def.id,
        title: def.title,
        total: def.total,
        solved: solvedInChap,
      };
    });
  }, [chapters, solvedIds, allProblems]);

  return (
    <div className="min-h-screen bg-[#090909] text-[#F5F5F5] pb-16">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 py-8 space-y-8">
        {/* SECTION 1: The One Visual Hero (Monolithic Journey Conduit) */}
        <JourneyHero
          solvedCount={solvedCount}
          totalCount={totalCount}
          streakDays={realStreak}
          nextProblemId={problemCodeToContinue}
          nextProblemTitle={lastActiveProblem?.title}
          onContinue={() => {
            if (!user) {
              setAuthModalOpen(true);
            } else {
              router.push(`/quest/${problemCodeToContinue}`);
            }
          }}
        />

        {/* SECTION 2: Relational System Catalog Matrix */}
        <RelationalCatalogMatrix
          modules={timelineModules}
          onSelectModule={(modId) => router.push(`/quest?module=${modId}`)}
        />

        {/* SECTION 4: Active Session Execution Stream */}
        <div className="rounded-[6px] border border-[#242424] bg-[#121212] p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-[#FF6B00]" />
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#F5F5F5]">
                Recent Query Execution Stream
              </h2>
            </div>
            <Link
              href="/quest"
              className="font-mono text-xs text-[#888888] hover:text-[#FF6B00] flex items-center gap-1 transition-colors"
            >
              <span>EXPLORE SQL CHALLENGES</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {submissions.length === 0 ? (
            <div className="rounded-[4px] border border-[#1F1F1F] bg-[#0E0E0E] p-8 text-center">
              <p className="font-mono text-xs text-[#777777]">
                No executions recorded in this session.
              </p>
              <button
                onClick={() => {
                  if (!user) {
                    setAuthModalOpen(true);
                  } else {
                    router.push(`/quest/${problemCodeToContinue}`);
                  }
                }}
                className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#1A1A1A] border border-[#2E2E2E] text-xs font-mono text-[#D4D4D4] hover:border-[#FF6B00]/40 transition-colors"
              >
                <span>Initialize Workspace [{problemCodeToContinue}]</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#242424] text-[#777777]">
                    <th className="py-2.5 px-3 font-semibold text-[10px] uppercase">STATUS</th>
                    <th className="py-2.5 px-3 font-semibold text-[10px] uppercase">COORDINATE</th>
                    <th className="py-2.5 px-3 font-semibold text-[10px] uppercase">QUERY TITLE</th>
                    <th className="py-2.5 px-3 font-semibold text-[10px] uppercase text-right">RUNTIME</th>
                    <th className="py-2.5 px-3 font-semibold text-[10px] uppercase text-right">TIMESTAMP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C1C1C]">
                  {submissions.slice(-5).reverse().map((sub, idx) => {
                    const subProblemId = typeof sub.problemId === 'string'
                      ? sub.problemId
                      : `SQL-${String(sub.problemId).padStart(3, '0')}`;
                    const isBasics = subProblemId.startsWith('Basic');
                    return (
                      <tr
                        key={idx}
                        onClick={() => {
                          if (!user) {
                            setAuthModalOpen(true);
                          } else {
                            router.push(`/quest/${subProblemId}`);
                          }
                        }}
                        className="hover:bg-[#161616] cursor-pointer transition-colors duration-[120ms]"
                      >
                        <td className="py-2.5 px-3">
                          <ApertureStatus status={sub.passed ? 'passed' : 'failed'} />
                        </td>
                        <td className={`py-2.5 px-3 font-mono font-bold ${isBasics ? 'text-[#48BB78]' : 'text-[#FF6B00]'}`}>
                          {subProblemId}
                        </td>
                        <td className="py-2.5 px-3 font-sans font-medium text-[#D4D4D4]">
                          {sub.problemTitle || `Problem #${sub.problemId}`}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-[#888888] text-right">
                          {sub.runtimeMs ? `${sub.runtimeMs} ms` : '1.2 ms'}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-[#666666] text-right">
                          {new Date(sub.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
}
