import EmailInput from "@/components/EmailInput";
import Link from "next/link";


export default function Footer() {
  return (
    <footer>
      <div className="email-container">
        <h5>Get a sneak peak at new additions to the store, special offers, and so much more.</h5>
        <EmailInput />
      </div>

      <div className="links-container">
        <div>
          <h3>Useful Links</h3>
          <Link href="/">Mu-store</Link>
          <Link href="/roadmap">Roadmap</Link>
        </div>
        <div>
          <h3>Store</h3>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
        </div>
        <div>
          <h3>Support</h3>
          <Link href="/">FAQs</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="socials-">
      </div>
    </footer>
  )
}
