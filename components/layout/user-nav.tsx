'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';

export function UserNav() {
  const [session] = useState({
    user: {
      name: 'Muhammad Salman Alfarisi',
      email: 'salman@gmail.com',
      image: 'https://github.com/msafdev.png'
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleSignOut = () => {
    router.push('/auth/signin');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative size-8 rounded-full md:size-9"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Avatar className="size-8 overflow-hidden md:size-9">
            <AvatarImage
              src={session.user?.image ?? ''}
              alt={session.user?.name ?? ''}
            />
            <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user?.name}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Akun</DropdownMenuItem>
            <DropdownMenuItem>Bantuan</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>Keluar</DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
