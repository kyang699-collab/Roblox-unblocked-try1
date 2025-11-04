import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        now<span style={{ color: "#fff" }}>.</span>gg
      </div>
      <div className="navbar-links">
        <Link href="/">Home</Link>
        <Link href="/games">Games</Link>
        <Link href="#">Features</Link>
        <Link href="#">Sign In</Link>
      </div>
    </nav>
  );
}
