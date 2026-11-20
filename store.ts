export const ADMIN_EMAIL = "Shahriyarebrahime@gmail.com";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  icon: string;
  description: string;
};

export const products: Product[] = [
  { id: 1, name: "دفتر 100 برگ", category: "دفتر و کاغذ", price: 85000, icon: "📓", description: "مناسب مدرسه، دانشگاه و استفاده روزمره" },
  { id: 2, name: "خودکار آبی", category: "نوشت افزار", price: 25000, icon: "🖊️", description: "روان‌نویس با کیفیت برای استفاده روزانه" },
  { id: 3, name: "مداد مشکی", category: "نوشت افزار", price: 18000, icon: "✏️", description: "مداد استاندارد مناسب طراحی و نوشتن" },
  { id: 4, name: "پوشه دکمه‌دار", category: "بایگانی", price: 35000, icon: "📁", description: "برای نگهداری مرتب مدارک و برگه‌ها" },
  { id: 5, name: "پرینت A4 سیاه‌وسفید", category: "خدمات فنی", price: 5000, icon: "🖨️", description: "چاپ با کیفیت روی کاغذ A4" },
  { id: 6, name: "کپی A4", category: "خدمات فنی", price: 5000, icon: "📄", description: "کپی سریع و باکیفیت" },
  { id: 7, name: "ماژیک هایلایت", category: "نوشت افزار", price: 45000, icon: "🖍️", description: "مناسب مطالعه و علامت‌گذاری" },
  { id: 8, name: "زونکن اداری", category: "بایگانی", price: 120000, icon: "🗂️", description: "زونکن مقاوم برای اسناد و بایگانی" }
];

export const categories = [
  { name: "نوشت افزار", icon: "✏️" },
  { name: "دفتر و کاغذ", icon: "📓" },
  { name: "بایگانی", icon: "📁" },
  { name: "خدمات فنی", icon: "🖨️" }
];

export function toman(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value) + " تومان";
}