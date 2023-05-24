"use client"

interface Props {
  leftOption: string,
  rightOption: string,
}

export default function WorkingOnItButton({ leftOption, rightOption }: Props) {
  return (
    <section className='grid grid-cols-3 gap-4 items-center justify-items-center opacity-60'>
      <span className='uppercase text-slate-500'>{leftOption}</span>
      <div className='grid grid-cols-2 bg-slate-500 w-10 h-4 rounded-lg'>
        <span
          className={`w-6 h-6 bg-slate-400 rounded-full -translate-y-1`}
        >
        </span>
      </div>
      <span className='uppercase text-slate-500'>{rightOption}</span>
    </section>
  )
}