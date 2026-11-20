import Link from "next/link";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../lib/store";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div className="heroCard">
              <div className="eyebrow">دفتر فنی و لوازم التحریر سروش</div>
              <h1>خرید لوازم التحریر و ثبت سفارش، ساده و حرفه‌ای.</h1>
              <p>محصولات نوشت‌افزار، کاغذ و خدمات فنی را آنلاین ببینید، سفارش خود را ثبت کنید و برای دریافت حضوری یا ارسال هماهنگ کنید.</p>
              <div className="heroButtons">
                <Link className="btn primary" href="#products">مشاهده محصولات</Link>
                <Link className="btn" href="/checkout">ثبت سفارش</Link>
              </div>
            </div>
            <div className="heroCard visual">
              <div className="visualInner">
                <div className="eyebrow">سروش • اصفهان</div>
                <h3>برای مدرسه، دانشگاه و کارهای اداری</h3>
                <p>یک فروشگاه آنلاین برای سفارش سریع لوازم التحریر و خدمات دفتر فنی.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionHead"><div><h2>دسته‌بندی‌ها</h2><div className="muted">دسترسی سریع به بخش‌های فروشگاه</div></div></div>
            <div className="grid">
              {categories.map(c => <div className="card category" key={c.name}><div style={{fontSize:35}}>{c.icon}</div><b>{c.name}</b></div>)}
            </div>
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="sectionHead"><div><h2>محصولات منتخب</h2><div className="muted">نمونه محصولات اولیه فروشگاه</div></div><Link href="/checkout" className="btn">ثبت سفارش</Link></div>
            <div className="grid">{products.map(p => <ProductCard key={p.id} product={p} />)}</div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="heroCard" style={{padding:30}}>
              <div className="sectionHead"><div><h2>خدمات دفتر فنی</h2><div className="muted">در کنار فروش لوازم التحریر</div></div></div>
              <div className="grid">
                <div className="card"><div style={{fontSize:35}}>🖨️</div><h3>پرینت</h3><p className="small">چاپ فایل و اسناد با امکان هماهنگی برای تحویل.</p></div>
                <div className="card"><div style={{fontSize:35}}>📄</div><h3>کپی</h3><p className="small">کپی اسناد و برگه‌ها با ثبت سفارش.</p></div>
                <div className="card"><div style={{fontSize:35}}>📚</div><h3>لوازم مدرسه</h3><p className="small">اقلام موردنیاز دانش‌آموزان و استفاده روزمره.</p></div>
                <div className="card"><div style={{fontSize:35}}>📦</div><h3>سفارش و تحویل</h3><p className="small">انتخاب دریافت حضوری یا هماهنگی برای ارسال.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="heroCard" style={{padding:30}}>
              <div className="sectionHead"><div><h2>اطلاعات فروشگاه</h2></div></div>
              <p className="small">📍 اصفهان، خیابان جابر انصاری، کوچه ابونعیم شمالی، کنار مدرسه امامت</p>
              <p className="small">📞 09135858370</p>
              <p className="small">برای سفارش، فرم ثبت سفارش را تکمیل کنید.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="container"><div className="footerGrid"><div><b>دفتر فنی و لوازم التحریر سروش</b><p className="small">فروش و خدمات فنی در اصفهان</p></div><div><b>دسترسی</b><p className="small"><Link href="/login">ورود</Link><br/><Link href="/checkout">ثبت سفارش</Link></p></div><div><b>تماس</b><p className="small">09135858370</p></div></div></div></footer>
    </>
  );
}