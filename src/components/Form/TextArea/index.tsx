import { ComponentProps } from 'react'

interface TextAreaProps extends ComponentProps<'textarea'> {}

export function TextArea({ defaultValue, id }: TextAreaProps) {
  return (
    <textarea
      id={id}
      className='min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm'
      defaultValue={defaultValue}
    />
  )
}
