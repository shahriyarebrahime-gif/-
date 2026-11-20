import Link from "next/link";

export default function Header() {
  return (
    <header className="nav">
      <div className="container navin">
        <Link href="/" className="brand">سروش <span>•</span> فروشگاه</Link>
        <nav className="links">
          <Link href="/">خانه</Link>
          <Link href="/#products">محصولات</Link>
          <Link href="/#services">خدمات</Link>
          <Link href="/#contact">تماس با ما</Link>
        </nav>
        <div className="actions">
          <Link className="btn" href="/login">ورود</Link>
          <Link className="btn primary" href="/checkout">ثبت سفارش</Link>
        </div>
      </div>
    </header>
  );
}