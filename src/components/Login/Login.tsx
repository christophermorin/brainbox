import LoginButtons from "./LoginButtons"
import Waves from "../Waves/Waves"

export default function Login() {
  return (
    <div className="grid h-full">
      <Waves />
      <div className="flex flex-col justify-end">
        {/* <Waves /> */}
        <div className="p-4 mb-4">
          <LoginButtons />
        </div>
      </div>
    </div>
  )
}