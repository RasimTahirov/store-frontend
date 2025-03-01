import { LogIn } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <header>
      <div>LOGO</div>
      <div>
        <Link href='account'><LogIn /></Link>
      </div>
    </header>
  )
}

export default Header