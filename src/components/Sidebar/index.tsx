'use client'

import * as Collapsible from '@radix-ui/react-collapsible'

import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  Home,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { InputControl, InputPrefix, InputRoot } from '../Input'

import { Logo } from '@/components/Sidebar/Logo'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <Collapsible.Root className='border-b border-zinc-200 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:data-[state=closed]:h-screen flex flex-col gap-6 p-4 fixed left-0 top-0 right-0 z-10 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:relative lg:data-[state=closed]:bottom-0'>
      <div className='flex items-center justify-between'>
        <Logo />
        <Collapsible.Trigger
          className='lg:hidden'
          asChild>
          <button>
            <Menu className='h-6 w-6' />
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className='flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex'>
        <InputRoot>
          <InputPrefix>
            <Search className='w-5 h-5 text-zinc-500' />
          </InputPrefix>
          <InputControl placeholder='Search' />
        </InputRoot>

        <nav className='space-y-0.5'>
          <NavItem
            title='Home'
            icon={Home}
          />
          <NavItem
            title='Dashboard'
            icon={BarChart}
          />
          <NavItem
            title='Projects'
            icon={SquareStack}
          />
          <NavItem
            title='Tasks'
            icon={CheckSquare}
          />
          <NavItem
            title='Reporting'
            icon={Flag}
          />
          <NavItem
            title='Users'
            icon={Users}
          />
        </nav>

        <div className='mt-auto flex flex-col gap-6'>
          <nav className='space-y-0.5'>
            <NavItem
              title='Support'
              icon={LifeBuoy}
            />
            <NavItem
              title='Settings'
              icon={Cog}
            />
          </nav>

          <UsedSpaceWidget />
          <div className='h-px bg-zinc-200' />
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
