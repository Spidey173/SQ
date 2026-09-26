'use client';

import React, { useState } from 'react';
import {
  Layers, Database, Server, Cpu, Check, Copy, ArrowRight,
  AlertTriangle, BookOpen, Sparkles, Columns, Grid2X2,
  ExternalLink, Zap
} from 'lucide-react';
import {
  DialectComparison,
  SqlDialectId,
  SQL_DIALECTS,
  SqlDialectMeta
} from '@/lib/dialect-comparisons';

interface DialectComparisonViewProps {
  comparison: DialectComparison;
  activeDialect: SqlDialectId;
  onSelectDialect: (dialect: SqlDialectId) => void;
  onLoadCodeToEditor?: (code: string, dialect: SqlDialectId) => void;
}

export const DialectComparisonView: React.FC<DialectComparisonViewProps> = ({
  comparison,
  activeDialect,
  onSelectDialect,
  onLoadCodeToEditor,
}) => {
  const [viewMode, setViewMode] = useState<'focused' | 'matrix'>('focused');
  const [copiedDialect, setCopiedDialect] = useState<string | null>(null);

  const handleCopy = (code: string, dialectId: string) => {
    navigator.clipboard.writeText(code);
    setCopiedDialect(dialectId);
    setTimeout(() => setCopiedDialect(null), 2000);
  };

  const getDialectIcon = (id: SqlDialectId) => {
    switch (id) {
      case 'sqlite':
        return <Database className="w-3.5 h-3.5 text-cyan-400" />;
      case 'postgres':
        return <Server className="w-3.5 h-3.5 text-blue-400" />;
      case 'mysql':
        return <Cpu className="w-3.5 h-3.5 text-amber-400" />;
      case 'snowflake':
        return <Layers className="w-3.5 h-3.5 text-sky-400" />;
      default:
        return <Database className="w-3.5 h-3.5 text-gray-400" />;
    }
  };

  const dialectsList: SqlDialectId[] = ['sqlite', 'postgres', 'mysql', 'snowflake'];

  return (
    <div className="rounded-2xl border border-[#30363D] bg-gradient-to-b from-[#161B22] to-[#0D1117] p-4 sm:p-5 space-y-5 shadow-xl relative overflow-hidden">
      {/* Top Banner & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#21262D] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Layers className="w-3 h-3" /> INTERVIEW DIALECT MATRIX
            </span>
            <span className="text-[11px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
              {comparison.varianceBadge}
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#E6EDF3] tracking-tight">
            Cross-Engine Syntax & Interview Divergence
          </h4>
          <p className="text-xs text-[#8B949E] max-w-xl leading-relaxed">
            {comparison.varianceSummary}
          </p>
        </div>

        {/* View Mode Toggle (Focused vs 4-Engine Matrix) */}
        <div className="flex items-center gap-1.5 bg-[#0D1117] p-1 rounded-xl border border-[#30363D] self-start sm:self-auto shrink-0">
          <button
            onClick={() => setViewMode('focused')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'focused'
                ? 'bg-[#21262D] text-[#E6EDF3] shadow-sm border border-[#30363D]'
                : 'text-[#8B949E] hover:text-[#E6EDF3]'
            }`}
          >
            <Columns className="w-3.5 h-3.5" />
            <span>Interactive Tabs</span>
          </button>
          <button
            onClick={() => setViewMode('matrix')}
            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
              viewMode === 'matrix'
                ? 'bg-[#21262D] text-[#E6EDF3] shadow-sm border border-[#30363D]'
                : 'text-[#8B949E] hover:text-[#E6EDF3]'
            }`}
          >
            <Grid2X2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Side-by-Side</span>
          </button>
        </div>
      </div>

      {/* 1. INTERACTIVE TABS VIEW */}
      {viewMode === 'focused' && (
        <div className="space-y-4">
          {/* Dialect Selector Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {dialectsList.map((id) => {
              const meta = SQL_DIALECTS[id];
              const isSelected = activeDialect === id;
              return (
                <button
                  key={id}
                  onClick={() => onSelectDialect(id)}
                  className={`p-2.5 rounded-xl border text-left transition-all relative overflow-hidden ${
                    isSelected
                      ? `${meta.badgeBorder} ${meta.badgeBg} shadow-md`
                      : 'border-[#21262D] bg-[#0D1117]/60 hover:bg-[#161B22] text-[#8B949E] hover:text-[#E6EDF3]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {getDialectIcon(id)}
                      <span className={`text-xs font-bold font-mono ${isSelected ? meta.badgeText : 'text-[#E6EDF3]'}`}>
                        {meta.name}
                      </span>
                    </div>
                    {id === 'sqlite' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" title="Sandbox Runtime" />
                    )}
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[10px] font-mono text-[#8B949E]">
                    <span>{meta.version}</span>
                    <span className="uppercase text-[9px] tracking-wider px-1 rounded bg-[#21262D]/60 border border-[#30363D]/40">
                      {meta.badgeLabel.split(' ')[0]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Focused Dialect Detail Card */}
          {(() => {
            const meta = SQL_DIALECTS[activeDialect];
            const queryData = comparison.queries[activeDialect] || comparison.queries.sqlite;
            const isCopied = copiedDialect === activeDialect;

            return (
              <div className="rounded-xl border border-[#30363D] bg-[#0D1117] overflow-hidden shadow-inner">
                {/* Dialect Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-3.5 py-2.5 bg-[#161B22] border-b border-[#21262D] text-xs">
                  <div className="flex items-center gap-2">
                    {getDialectIcon(activeDialect)}
                    <span className="font-mono font-bold text-[#E6EDF3]">
                      {meta.name} ({meta.version})
                    </span>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${meta.badgeBg} ${meta.badgeText} border ${meta.badgeBorder}`}>
                      {meta.badgeLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(queryData.code, activeDialect)}
                      className="px-2.5 py-1 rounded-md border border-[#30363D] bg-[#21262D] text-[#8B949E] hover:text-[#E6EDF3] transition-all flex items-center gap-1 text-[11px] font-mono"
                    >
                      {isCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{isCopied ? 'Copied' : `Copy ${meta.name}`}</span>
                    </button>

                    {onLoadCodeToEditor && (
                      <button
                        onClick={() => onLoadCodeToEditor(queryData.code, activeDialect)}
                        className="px-2.5 py-1 rounded-md bg-[#1F6FEB] hover:bg-[#388BFD] text-white transition-all flex items-center gap-1 text-[11px] font-semibold shadow-sm"
                      >
                        <ArrowRight className="w-3 h-3" />
                        <span>Load to Editor</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Dialect Code Box */}
                <pre className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-[#E6EDF3] leading-relaxed overflow-x-auto whitespace-pre selection:bg-[#58A6FF]/20">
                  {queryData.code}
                </pre>

                {/* Engine-Specific Notes */}
                <div className="p-3.5 bg-[#161B22]/60 border-t border-[#21262D] text-xs text-[#8B949E] flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-[#58A6FF] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-[#E6EDF3] font-medium leading-relaxed">
                      {queryData.notes}
                    </p>
                    <p className="text-[11px] text-[#8B949E]">
                      💡 <strong className="text-[#E6EDF3]">{meta.name} Context:</strong> {meta.interviewContext}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* 2. SIDE-BY-SIDE MATRIX VIEW */}
      {viewMode === 'matrix' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {dialectsList.map((id) => {
            const meta = SQL_DIALECTS[id];
            const q = comparison.queries[id] || comparison.queries.sqlite;
            const isCopied = copiedDialect === id;

            return (
              <div
                key={id}
                className="rounded-xl border border-[#30363D] bg-[#0D1117] flex flex-col justify-between overflow-hidden shadow-inner hover:border-[#58A6FF]/40 transition-all"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#161B22] border-b border-[#21262D] text-xs">
                    <div className="flex items-center gap-2">
                      {getDialectIcon(id)}
                      <span className="font-mono font-bold text-[#E6EDF3]">
                        {meta.name}
                      </span>
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${meta.badgeBg} ${meta.badgeText} border ${meta.badgeBorder}`}>
                        {meta.badgeLabel.split(' ')[0]}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleCopy(q.code, id)}
                        className="px-2 py-0.5 rounded border border-[#30363D] bg-[#21262D] text-[#8B949E] hover:text-[#E6EDF3] text-[10px] font-mono flex items-center gap-1"
                      >
                        {isCopied ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                        <span>{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>
                      {onLoadCodeToEditor && (
                        <button
                          onClick={() => onLoadCodeToEditor(q.code, id)}
                          className="px-2 py-0.5 rounded bg-[#1F6FEB]/80 hover:bg-[#1F6FEB] text-white text-[10px] font-medium flex items-center gap-1"
                          title="Load into Monaco SQL Editor"
                        >
                          <ArrowRight className="w-2.5 h-2.5" />
                          <span>Load</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Code Snippet */}
                  <pre className="p-3 font-mono text-[11px] sm:text-xs text-[#E6EDF3] leading-relaxed overflow-x-auto whitespace-pre">
                    {q.code}
                  </pre>
                </div>

                {/* Footer Note */}
                <div className="p-2.5 bg-[#161B22]/70 border-t border-[#21262D] text-[11px] text-[#8B949E] leading-relaxed">
                  {q.notes}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 3. FUNCTION COMPARISON TABLE (If available) */}
      {comparison.comparisonTable && comparison.comparisonTable.length > 0 && (
        <div className="space-y-2">
          <span className="text-[11px] font-mono font-bold text-[#8B949E] uppercase tracking-wider block">
            📊 Function & Syntax Comparison Table
          </span>
          <div className="rounded-xl border border-[#30363D] bg-[#0D1117] overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-[#21262D] bg-[#161B22] text-[#8B949E] text-[11px]">
                  <th className="p-2.5">Construct</th>
                  <th className="p-2.5 text-cyan-400">SQLite (Sandbox)</th>
                  <th className="p-2.5 text-blue-400">PostgreSQL 16</th>
                  <th className="p-2.5 text-amber-400">MySQL 8.0+</th>
                  <th className="p-2.5 text-sky-400">Snowflake</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#21262D] text-[#E6EDF3]">
                {comparison.comparisonTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#161B22]/50 transition-colors">
                    <td className="p-2.5 font-semibold text-[#FF7B72]">{row.construct}</td>
                    <td className="p-2.5 text-cyan-300 font-mono text-[11px]">{row.sqlite}</td>
                    <td className="p-2.5 text-blue-300 font-mono text-[11px]">{row.postgres}</td>
                    <td className="p-2.5 text-amber-300 font-mono text-[11px]">{row.mysql}</td>
                    <td className="p-2.5 text-sky-300 font-mono text-[11px]">{row.snowflake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. WHY INTERVIEWERS ASK THIS & COMMON PITFALLS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
        {/* Why Interviewers Ask */}
        <div className="p-4 rounded-xl border border-[#238636]/30 bg-gradient-to-br from-[#238636]/15 via-[#161B22] to-[#161B22] space-y-2 text-xs">
          <span className="font-mono text-[11px] font-bold uppercase text-[#3FB950] tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#3FB950]" /> Why Interviewers Ask This
          </span>
          <p className="text-[#E6EDF3] leading-relaxed">
            {comparison.whyInterviewersAsk}
          </p>
        </div>

        {/* Common Traps to Avoid */}
        <div className="p-4 rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-[#161B22] to-[#161B22] space-y-2 text-xs">
          <span className="font-mono text-[11px] font-bold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" /> Dialect Traps in Live Coding
          </span>
          <div className="space-y-1.5 text-[#E6EDF3] leading-relaxed">
            {comparison.pitfallsToAvoid.map((pitfall, i) => (
              <p key={i} className="text-[#E6EDF3]">
                {pitfall}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
