import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
  <div>
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={80} height={80} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/people">
        <a>People Listings</a>
      </Link>
    </nav>
  </div>
);

export default Navbar;
