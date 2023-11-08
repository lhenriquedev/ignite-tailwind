'use client'

import * as RdxSelect from '@radix-ui/react-select'

import { Check, ChevronDown } from 'lucide-react'

import { ReactNode } from 'react'

interface SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder }: SelectProps) {
  return (
    <RdxSelect.Root>
      <RdxSelect.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600'>
        <RdxSelect.Value
          className='text-black'
          placeholder={placeholder}
        />
        <RdxSelect.Icon>
          <ChevronDown className='h-5 w-5 text-zinc-500' />
        </RdxSelect.Icon>
      </RdxSelect.Trigger>

      <RdxSelect.Portal>
        <RdxSelect.Content
          side='bottom'
          position='popper'
          sideOffset={8}
          className='z-10 overflow-hidden rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width]'>
          <RdxSelect.Viewport>{children}</RdxSelect.Viewport>
        </RdxSelect.Content>
      </RdxSelect.Portal>
    </RdxSelect.Root>
  )
}
