'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const router = useRouter();
  const sizeClasses = {
    sm: {
      container: 'w-8 h-8',
      text: 'text-xl',
      logo: 'text-2xl',
    },
    md: {
      container: 'w-12 h-12',
      text: 'text-3xl',
      logo: 'text-4xl',
    },
    lg: {
      container: 'w-16 h-16',
      text: 'text-4xl',
      logo: 'text-5xl',
    },
  };

  return (
    <div
      className={`relative ${className}`}
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push('/'); // redirect to login page
            },
          },
        })
      }
    >
      <h1
        className={`font-bold bg-primary bg-clip-text text-transparent ${sizeClasses[size].logo}`}
      >
        Overload
      </h1>
      <div className="absolute -top-1 -right-1">
        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
      </div>
    </div>
  );
};
