'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Users,
  Calendar,
  Twitter,
  Layers,
  LogOut,
  Menu,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import GoogleColorsBar from '@/components/shared/google-colors-bar';
import { useAuth } from '@/contexts/auth-context';
import Image from 'next/image';
import { LOGO } from '@/config/common';
import { navItems } from '@/config/admin';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width',
      collapsed ? '70px' : '250px'
    );
  }, [collapsed]);

  return (
    <>
      <Button
        variant="default"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 z-40 h-full bg-white border-r border-gray-200 transition-all duration-300',
          collapsed ? 'w-[70px]' : 'w-[250px]',
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
          className
        )}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center px-4">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={LOGO}
                  alt={user?.name || 'GDSC logo'}
                  fill
                  className="object-cover"
                  sizes="32px"
                  priority
                />
              </div>
              {!collapsed && (
                <span className="font-semibold text-lg font-geist-sans">
                  {user?.name}
                </span>
              )}
            </div>
          </div>

          <div className={cn('p-1', collapsed ? '' : 'px-3')}>
            <GoogleColorsBar />
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-3 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 rounded-md transition-colors',
                    isActive ? 'bg-gray-100' : 'hover:bg-gray-50',
                    collapsed ? 'justify-center' : ''
                  )}
                >
                  <item.icon className={cn('h-5 w-5', item.color)} />
                  {!collapsed && (
                    <span
                      className={cn(
                        'ml-3 text-sm font-medium font-geist-sans',
                        isActive ? 'text-gray-900' : 'text-gray-600'
                      )}
                    >
                      {item.name}
                    </span>
                  )}
                  {isActive && !collapsed && (
                    <div className="ml-auto w-1.5 h-5 rounded-full bg-gdg-blue" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Collapse Button */}
          <div className="border-t p-4">
            <div className="flex items-center justify-between">
              {!collapsed && (
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col">
                    <Button asChild variant={'ghost'} size={'lg'}>
                      <Link
                        href="/logout"
                        className="flex items-center text-lg text-gray-500 hover:text-red-500 font-geist-sans"
                      >
                        <LogOut className="h-3 w-3 mr-1" />
                        Log out
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCollapsed(!collapsed)}
                className={cn(
                  'h-8 w-8 rounded-full',
                  collapsed ? 'mx-auto' : ''
                )}
              >
                {collapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
