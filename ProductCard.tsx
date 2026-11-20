import Link from "next/link";
import { Product, toman } from "../lib/store";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card">
      <div className="productIcon">{product.icon}</div>
      <div className="small">{product.category}</div>
      <h3>{product.name}</h3>
      <p className="small">{product.description}</p>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,marginTop:14}}>
        <span className="price">{toman(product.price)}</span>
        <Link className="btn primary" href={`/checkout?product=${product.id}`}>سفارش</Link>
      </div>
    </article>
  );
}