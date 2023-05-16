import LoginButtons from "./LoginButtons"
import Waves from "../Waves/Waves"

export default function Login() {
  return (
    <div className="grid h-full">
      <div className="flex justify-center items-center">
        <p className="uppercase">
          Sign In Below!
        </p>
      </div>
      <Waves />
      <div className="flex flex-col justify-end">
        <div className="p-4 mb-4">
          <LoginButtons />
        </div>
      </div>
    </div>
  )
}