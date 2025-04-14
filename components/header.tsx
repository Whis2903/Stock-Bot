import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { Session } from '@/lib/types'

async function UserOrLogin() {
  return (
    <>
      <Link href="https://example.com" rel="nofollow">
        {/* Updated logo to Genie logo */}
        <Image
          src="/genie-logo.png"
          alt="Genie Logo"
          width={100}
          height={30}
        />
      </Link>

      <div className="flex items-center font-semibold">
        <IconSeparator className="size-6 text-muted-foreground/50" />
        {/* Changed "StockBot" to "Home" and linked it to another website */}
        <a
          href="https://another-website.com"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Home
        </a>
        <IconSeparator className="size-6 text-muted-foreground/50" />
        <a
          href="/new"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'ghost' }))}
          style={{ borderRadius: 0, color: '#F55036', padding: '4px' }}
        >
          <span className="flex">Start New Chat</span>
        </a>
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      {/* Left Section: Genie Text */}
      <div className="flex items-center">
        <Link href="https://another-website.com" rel="noopener noreferrer">
          <span className="text-2xl font-bold text-purple-500">Genie</span>
        </Link>
      </div>

      {/* Right Section: Start New Chat */}
      <div className="flex items-center space-x-4">
        <Link
          href="/new"
          className="text-sm font-medium text-gray-300 hover:text-purple-400"
        >
          Start New Chat
        </Link>
      </div>
    </header>
  )
}