import SignInButton from "./SignInButtont"

export default function LoginButtons() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SignInButton provider={"github"} />
      <SignInButton provider={"google"} />
      <SignInButton provider={"discord"} />
      <SignInButton provider={"twitter"} />
    </div>
  )
}