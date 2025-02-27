import { LogIn, SquareUserRound } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <header>
        Шапка
        <Link href="registration"><LogIn /></Link>
        <Link href="account"><SquareUserRound /></Link>
      </header>
    </div>
  );
}

export default Home