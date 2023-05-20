import SettingsButton from "./Buttons/SettingsButton"
import AddNewButton from "./Buttons/AddNewButton"

export default function Footer() {
  return (
    <footer className="flex justify-between items-center p-3 bg-zinc-900">
      <AddNewButton />
      <SettingsButton />
    </footer>
  )
}