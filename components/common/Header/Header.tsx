import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 h-24 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
