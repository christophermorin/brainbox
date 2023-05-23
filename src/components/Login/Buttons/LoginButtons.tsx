import SignInButton from "./SignInButton"
import GuestButton from "./GuestButton"


export default function LoginButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-sm py-4">
      <GuestButton />
      <SignInButton provider={"github"} />
      <SignInButton provider={"google"} />
      <SignInButton provider={"discord"} />
      <SignInButton provider={"spotify"} />
    </div>
  )
}