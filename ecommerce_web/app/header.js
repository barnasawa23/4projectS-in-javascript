import Cart from "@/components/Cart";
import Link from "next/link";


export default function Header() {
  return (
    <header>
      <div className="header-content">
        <Link href="/">
          <h1>Mu-Store</h1>
        </Link>
        <h5 className="mid-text">Your one-stop shop for all things Mukaza!</h5>
        <Cart />
      </div>
    </header>
  )
}
