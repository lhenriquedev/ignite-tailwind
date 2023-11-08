'use client'

import * as RdxSelect from '@radix-ui/react-select'

import { Check } from 'lucide-react'

interface SelectItemProps extends RdxSelect.SelectItemProps {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <RdxSelect.Item
      className='flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50'
      {...props}>
      <RdxSelect.ItemText className='text-black'>{text}</RdxSelect.ItemText>
      <RdxSelect.ItemIndicator>
        <Check className='h-4 w-4 text-violet-500' />
      </RdxSelect.ItemIndicator>
    </RdxSelect.Item>
  )
}
