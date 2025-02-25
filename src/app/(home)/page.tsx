import { LogIn } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <header>
        Шапка
        <Link href="registration"><LogIn /></Link>
      </header>
    </div>
  );
}

export default Home