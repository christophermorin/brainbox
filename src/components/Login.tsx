import LoginButtons from "./LoginButtons"
import Waves from "./Waves"

export default function Login() {
  return (
    <div className="grid h-full">
      <Waves />
      <div className="flex flex-col justify-end">
        <div className=" bg-slate-300 p-4">
          <LoginButtons />
        </div>
      </div>
    </div>
  )
}