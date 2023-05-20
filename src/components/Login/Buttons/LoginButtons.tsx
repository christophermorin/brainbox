import SignInButton from "./SignInButton"

export default function LoginButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-sm">
      <SignInButton provider={"github"} />
      <SignInButton provider={"google"} />
      <SignInButton provider={"discord"} />
      <SignInButton provider={"twitter"} />
    </div>
  )
}