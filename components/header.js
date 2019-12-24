import Link from "next/link";

export default function Header() {
  return (
    <header>
      <section className="w-full flex justify-end items-center h-12 bg-primary px-8">
        <div>
          <a href="" className="mr-4">
            <i className="fab text-white text-3xl fa-facebook"></i>
          </a>
          <a href="" className="mr-4">
            <i className="fab text-white text-3xl fa-twitter"></i>
          </a>
          <a href="" className="mr-4">
            <i className="fab text-white text-3xl fa-instagram"></i>
          </a>
          <a href="" className="mr-4">
            <i className="fab text-white text-3xl fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fab text-white text-3xl fa-youtube"></i>
          </a>
        </div>
      </section>
      <nav className="w-full flex justify-between items-center px-8 h-20">
        <Link href="/">
          <img src="/logo.png" alt="logo" className="w-56 cursor-pointer" />
        </Link>
        <Link href="/profile">
          <a className="border-b border-black">Sobre mi</a>
        </Link>
      </nav>
    </header>
  );
}
