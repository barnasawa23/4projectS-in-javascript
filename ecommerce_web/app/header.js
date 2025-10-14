import Cart from "@/components/Cart";
import logo from "./favicon.ico"
import Link from "next/link";
import Image from "next/image";


export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Link href="/">
          <Image src={logo} alt="Mu-Store Logo" width="30" height="30" />
          <h1>Mu-Store</h1>
        </Link>
        <h5 className="mid-text">Your one-stop shop for all things Mukaza!</h5>
        <Cart />
      </div>
    </header>
  )
}
