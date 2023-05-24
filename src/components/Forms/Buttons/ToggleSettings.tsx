"use client"
// will need
// The option its changing
// The fnction to change it
// The two options to change between
interface Props {
  buttonValue: boolean,
  toggleFunc: () => void,
  leftOption: string,
  rightOption: string,
}

export default function ToggleSettings({ buttonValue, toggleFunc, leftOption, rightOption }: Props) {
  console.log(buttonValue)
  return (
    <>
      <section className='grid grid-cols-3 gap-4 items-center justify-items-center'>
        <span onClick={toggleFunc} className='uppercase text-[rgba(255,23,211,1)] cursor-pointer'>{leftOption}</span>
        <div className='grid grid-cols-2 bg-slate-500 w-10 h-4 rounded-lg'
          onClick={toggleFunc}>
          <span
            className={`${buttonValue ? 'col-start-1' : 'col-start-2'} w-6 h-6 bg-cyan-300 rounded-full -translate-y-1 cursor-pointer`}
          >
          </span>
        </div>
        <span onClick={toggleFunc} className='uppercase text-[rgba(255,23,211,1)] cursor-pointer'>{rightOption}</span>
      </section>
    </>
  )
}