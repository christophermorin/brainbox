export default function Waves() {
  return (
    <div className="flex flex-col justify-end w-full">
      <svg className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(110,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,110,255,0.5)" className="hover:fill-orange-500 transition ease-in-out duration-1000" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,110,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0,0,0,1)" />
        </g>
      </svg>
    </div>
  )
}