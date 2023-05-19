import SettingsButton from "./SettingsButton"
import AddNewButton from "./AddNewButton"

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-3 bg-zinc-900">
      <AddNewButton />
      <SettingsButton />
    </footer>
  )
}