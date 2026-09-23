'use client';

import React from 'react';

export type DifficultyLevel = 'easy' | 'medium' | 'hard' | string;

interface TechnicalDifficultyProps {
  difficulty: DifficultyLevel;
  size?: 'sm' | 'md';
}

export function TechnicalDifficulty({ difficulty, size = 'sm' }: TechnicalDifficultyProps) {
  const diff = (difficulty || 'easy').toLowerCase();

  const config = {
    easy: {
      label: 'Easy',
      dot: 'bg-[#FFC857]',
      text: 'text-[#E0E0E0]',
    },
    medium: {
      label: 'Medium',
      dot: 'bg-[#FF6B00]',
      text: 'text-[#E0E0E0]',
    },
    hard: {
      label: 'Hard',
      dot: 'bg-[#E53935]',
      text: 'text-[#E0E0E0]',
    },
  }[diff] || {
    label: difficulty,
    dot: 'bg-[#888888]',
    text: 'text-[#B0B0B0]',
  };

  const sizeClasses = size === 'sm'
    ? 'px-2 py-0.5 text-[10px]'
    : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[4px] border border-[#262626] bg-[#121212] font-mono font-medium tracking-tight ${config.text} ${sizeClasses}`}
      role="status"
    >
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} aria-hidden="true" />
      <span>{config.label}</span>
    </span>
  );
}

interface ApertureStatusProps {
  status: 'passed' | 'failed' | 'unattempted' | 'running';
  label?: string;
  size?: 'sm' | 'md';
}

export function ApertureStatus({ status, label, size = 'sm' }: ApertureStatusProps) {
  const sizeClasses = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1';

  switch (status) {
    case 'passed':
      return (
        <span className={`inline-flex items-center gap-1.5 font-mono font-semibold rounded-[4px] border border-[#2E4A35] bg-[#0E1A12] text-[#48BB78] ${sizeClasses}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#38A169]" aria-hidden="true" />
          <span>{label || 'SOLVED'}</span>
        </span>
      );
    case 'failed':
      return (
        <span className={`inline-flex items-center gap-1.5 font-mono font-semibold rounded-[4px] border border-[#4A2020] bg-[#1A0E0E] text-[#FC8181] ${sizeClasses}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#E53935]" aria-hidden="true" />
          <span>{label || 'FAILED'}</span>
        </span>
      );
    case 'running':
      return (
        <span className={`inline-flex items-center gap-1.5 font-mono font-semibold rounded-[4px] border border-[#4A3018] bg-[#1A120B] text-[#FF9B42] ${sizeClasses} animate-pulse`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B00]" aria-hidden="true" />
          <span>{label || 'EXECUTING'}</span>
        </span>
      );
    default:
      return (
        <span className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-[4px] border border-[#242424] bg-[#121212] text-[#888888] ${sizeClasses}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#444444]" aria-hidden="true" />
          <span>{label || 'UNATTEMPTED'}</span>
        </span>
      );
  }
}

interface EngravedSQLChipProps {
  label: string;
  variant?: 'copper' | 'gold' | 'emerald' | 'crimson' | 'steel' | 'cyan' | 'purple' | 'amber' | 'slate';
}

export function EngravedSQLChip({ label, variant = 'steel' }: EngravedSQLChipProps) {
  // Normalize legacy and new variant tokens
  const normVariant = 
    variant === 'cyan' ? 'copper' :
    variant === 'purple' || variant === 'amber' ? 'gold' :
    variant === 'slate' ? 'steel' : variant;

  const styleMap = {
    copper: 'border-[#3D2214] bg-[#16100B] text-[#FF9B42]',
    gold: 'border-[#3A3215] bg-[#14120A] text-[#F6E05E]',
    emerald: 'border-[#1E3825] bg-[#0C140F] text-[#68D391]',
    crimson: 'border-[#3D1A1A] bg-[#170B0B] text-[#FC8181]',
    steel: 'border-[#262626] bg-[#0E0E0E] text-[#9E9E9E]',
  }[normVariant as 'copper' | 'gold' | 'emerald' | 'crimson' | 'steel'] || 'border-[#262626] bg-[#0E0E0E] text-[#9E9E9E]';

  return (
    <span className={`inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono font-semibold tracking-wider uppercase rounded-[3px] border ${styleMap}`}>
      {label}
    </span>
  );
}

// Backward-compatible export aliases for phased replacement
export const DifficultyBadge = TechnicalDifficulty;
export const StatusPill = ApertureStatus;
export const SQLChip = EngravedSQLChip;
