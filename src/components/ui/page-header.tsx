'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  href?: string;
  close?: () => void;
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    variant?: 'default' | 'ghost' | 'outline';
  };
}

export function PageHeader({ title, action, close, href }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      {href?.trim() ? (
        <Link href={href}>
          <Button variant="ghost" size="sm" onClick={close}>
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
        </Link>
      ) : (
        <Button variant="ghost" size="sm" onClick={close}>
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
      )}

      <h1 className="text-xl font-bold text-gray-900">{title}</h1>

      {action ? (
        <Button
          variant={action.variant || 'ghost'}
          size="sm"
          onClick={action.onClick}
        >
          {action.icon}
          {action.label}
        </Button>
      ) : (
        <div />
      )}
    </div>
  );
}
