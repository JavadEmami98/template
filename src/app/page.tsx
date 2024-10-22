import Image from "next/image";
import Divar from "../../components/cart/Divar";
import Cart1 from "../../components/cart/Cart1";
import Cart2 from "../../components/cart/Cart2";
import Cart3 from "../../components/cart/Cart3";
import Cart4 from "../../components/cart/Cart4";
import Cart5 from "../../components/cart/Cart5";
import Product1 from "../../components/product/Product1";
import Product2 from "../../components/product/Product2";
import Product3 from "../../components/product/Product3";
import Cart6 from "../../components/cart/Cart6";
import Product4 from "../../components/product/Product4";
import Cart7 from "../../components/cart/Cart7";
import Cart8 from "../../components/cart/Cart8";
import Cart9 from "../../components/cart/Cart9";
import Product5 from "../../components/product/Product5";
import Product6 from "../../components/product/Product6";
import Product7 from "../../components/product/Product7";
import Product8 from "../../components/product/Product8";
import Cart10 from "../../components/cart/Cart10";
import Cart11 from "../../components/cart/Cart11";

interface CartItem {
  title: string;
  image: string;
  description: string;
}

const items: CartItem[] = [
  {
    title: "Product 1",
    image: "/images/cart1.jpg",
    description: "This is the description for product 1",
  },
  {
    title: "Product 2",
    image: "/images/cart1.jpg",
    description: "This is the description for product 2",
  },
  {
    title: "Product 3",
    image: "/images/cart1.jpg",
    description: "This is the description for product 3",
  },
];

interface DivarItem {
  title: string;
  condition: string;
  price: string;
  agency: string;
  imageUrl: string;
}

const divaritems: DivarItem[] = [
  {
    title: 'باغ ویلا اجاره ای با استخر آب گرم در شاهنامه 67',
    condition: 'کارکرده',
    price: '۲,۲۵۰,۰۰۰,۰۰۰ تومان',
    agency: 'آژانس املاک الیزه در الهیه',
    imageUrl: '/images/divar.jpg',
  },
  {
    title: 'باغ ویلا اجاره ای با استخر آب گرم در شاهنامه 67',
    condition: 'کارکرده',
    price: '۲,۲۵۰,۰۰۰,۰۰۰ تومان',
    agency: 'آژانس املاک الیزه در الهیه',
    imageUrl: '/images/divar.jpg',
  },
  {
    title: 'باغ ویلا اجاره ای با استخر آب گرم در شاهنامه 67',
    condition: 'کارکرده',
    price: '۲,۲۵۰,۰۰۰,۰۰۰ تومان',
    agency: 'آژانس املاک الیزه در الهیه',
    imageUrl: '/images/divar.jpg',
  },
];
interface Productitem {
  title: string;
  description: string;
  price: string;
  image: string;
}
interface CartItem2 {
  title: string;
  image: string;
  description:string;
}

interface CartItem5 {
  title: string;
  image: string;
  subtitle:string;
}

const Cart2items: CartItem2[] = [
  {
    title: "Product X",
    description:"برنامه سفر 3 روزه به اردبیل",
    image: "/images/asb.jpg",
  },
  {
    title: "Product Y",
    description:"برنامه سفر 3 روزه به اردبیل",
    image: "/images/asb.jpg",
  },
  {
    title: "Product Z",
    description:"برنامه سفر 3 روزه به اردبیل",
    image: "/images/asb.jpg",
  },
];
const Cart4items: CartItem2[] = [
  {
    title: "Product X",
    description:"برنامه سفر 3 روزه به اردبیل",
    image: "/images/est.jpg",
  },
  {
    title: "Product Y",
    description:"برنامه سفر 3 روزه به اردبیل",
    image: "/images/est.jpg",
  },
  {
    title: "Product Z",
    description:"برنامه سفر 3 روزه به اردبیل",
    image: "/images/est.jpg",
  },
];
const Productitems: Productitem[] = [
  {
    title: "Product X",
    description:"برنامه سفر 3 روزه به اردبیل",
    price:"2500000",
    image: "/images/est.jpg",
  },
  {
    title: "Product Y",
    description:"برنامه سفر 3 روزه به اردبیل",
    price:"2500000",
    image: "/images/est.jpg",
  },
  {
    title: "Product Z",
    description:"برنامه سفر 3 روزه به اردبیل",
    price:"2500000",
    image: "/images/est.jpg",
  },
];
const Cart5items: CartItem5[] = [
  {
    title: "محصولات",
    subtitle:"برنامه سفر 3 روزه به اردبیل",
    image: "/images/digi.webp",
  },
  {
    title: "محصولات ",
    subtitle:"برنامه سفر 3 روزه به اردبیل",
    image: "/images/digi.webp",
  },
  {
    title: "محصولات",
    subtitle:"برنامه سفر 3 روزه به اردبیل",
    image: "/images/digi.webp",
  },
];

interface Product3item {
  id: string;     
  price: number;  
  title: string;  
  image: string;
  discountPercentage: number; 
  oldPrice: number;
}


const Product3items: Product3item[] = [
  {
    id: "1",
    price: 3500000,
    title:"بازی فکری بردباکس مدل هارو ایچیبان",
    image: "/images/digi2.webp",
    oldPrice: 2000000,
    discountPercentage: 21,
  },
  {
    id: "2",
    price: 3000000,
    title:"بازی فکری بردباکس مدل هارو ایچیبان",
    image: "/images/digi2.webp",
    oldPrice: 2000000,
    discountPercentage: 15,
  },
  {
    id: "2",
    price: 3000000,
    title:"بازی فکری بردباکس مدل هارو ایچیبان",
    image: "/images/digi2.webp",
    oldPrice: 2000000,
    discountPercentage: 15,
  },
];

const cart6Items = [
  {
    image: "images/tesla.jpg",
    description: "ایلان ماسک از Cybercab تسلا رونمایی کرد؛ حذف فرمان و پدال از خودرو",
    avatarImage: "/static/images/avatar/1.jpg",
    author: "کریم حسینی",
    time: "۲۰ مهر ۱۴۰۳"
  },
  {
    image: "images/tesla.jpg",
    description: "۲۰ فیلم برتر پاییز ۲۰۲۴ که انتظار دیدنشان را کشیدیم",
    avatarImage: "/static/images/avatar/2.jpg",
    author: "مهدی رضایی",
    time: "۲۲ مهر ۱۴۰۳"
  },
];

interface Product4CartProps {
  image: string;        
  description: string;  
  price: string;          
}

const Product4item : Product4CartProps[] = [
  {
    image: "images/ip.webp", 
    description: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
    price: "1,000,000", 
  },
  {
    image: "images/ip.webp",  
    description: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
    price: "2,000,000", 
  },
  {
    image: "images/ip.webp",  
    description: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
    price: "3,000,000",
  },
 
];

interface ItemData {
  imgSrc: string;
  title: string;
  date: string;
}

const Cart7items: ItemData[] = [
  {
    imgSrc: "/images/blog.jpg",
    title: "ییلاق اوپرت",
    date: "12 اردیبهشت 1402",
  },
  {
    imgSrc: "/images/blog.jpg",
    title: "Another Destination",
    date: "15 مهر 1403",
  },
  {
    imgSrc: "/images/blog.jpg",
    title: "Another Destination",
    date: "15 مهر 1403",
  },
];

const product7 = [
  {
    id: 1,
    image: "/images/cream.jpg",
    oldprice: "20000",
    price: "150000",
    offer: "25%",
    description: "خامه صبحانه 200 گرمی رامک",
  },
  {
    id: 2,
    image: "/images/cream.jpg",
    oldprice: "100000",
    price: "8000",
    offer: "20%",
    description: "خامه صبحانه 200 گرمی رامک",
  },
];





export default function Home() {
  return (
   <div>
    <div className="flex justify-center items-center gap-6">
    {divaritems.map((item, index) => (
        <Divar
          key={index}
          title={item.title}
          condition={item.condition}
          price={item.price}
          agency={item.agency}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
    <div className="flex justify-center items-center gap-6">
    {items.map((item, index) => (
        <Cart1
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
     <div className="flex justify-center items-center gap-6">
     {Cart2items.map((item, index) => (
        <Cart2
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
    <div className="flex justify-center items-center gap-6">
      <Cart3/>
    </div>
    <div className="flex justify-center items-center gap-6">
    {Cart4items.map((item, index) => (
        <Cart4
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
    <div className="flex justify-center items-center gap-6">
    {Cart5items.map((item, index) => (
        <Cart5
          key={index}
          title={item.title}
          image={item.image}
          subtitle={item.subtitle}
        />
      ))}
    </div>
    <h1 className="font-bold text-3xl text-center my-4">Products</h1>
    <div className="flex justify-center items-center gap-6">
    {Productitems.map((item, index) => (
        <Product1
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
    <div className="flex justify-center my-8 items-center gap-6">
    {Productitems.map((item, index) => (
        <Product2
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
    <div className="flex justify-center my-8 items-center gap-6">
    {Product3items.map((item, index) => (
       <Product3
       key={index}
       title={item.title}
       image={item.image}
       oldPrice={item.oldPrice}
       price={item.price}
       discountPercentage={item.discountPercentage}
     />
      ))}
    </div>
    <div className="flex justify-center my-8 items-center gap-6">
    {cart6Items.map((item, index) => (
        <Cart6
          key={index}
          image={item.image}
          description={item.description}
          avatarImage={item.avatarImage}
          author={item.author}
          time={item.time}
        />
      ))}
      </div>
    <div className="flex justify-center my-8 items-center gap-6">
    {Cart7items.map((item, index) => (
        <Cart7
          key={index}
          imgSrc={item.imgSrc}
          title={item.title}
          date={item.date}
        />
      ))}
      </div>
    <div className="flex justify-center my-8 items-center gap-6">
    {Product4item.map((product, index) => (
        <Product4
          key={index}
          image={product.image}
          description={product.description}
          price={product.price}
        />
      ))}
      </div>
      <div>
        <Cart8
          image={"/images/iran.jpg"}
          title="بازگشایی سفارت ایران در عربستان"
          date=" پریوش سارانی / 06 خرداد 1402"
          description="سخنگوی وزارت امور خارجه: 
          در تکمیل روند اجرای توافقات دوجانبه میان ایران و عربستان برای از سرگیری روابط
          ، سفارت ایران در ریاض، سرکنسولگری ایران در جده 
          و نمایندکی دائم ایران نزد سازمان همکاری اسلامی طی روزهای سه..."
        />
      </div>
      <div>
        <Cart9
          image={"/images/jangal.jpg"}
          title="بازگشایی سفارت ایران در عربستان"
          date=" پریوش سارانی / 06 خرداد 1402"
          description="سخنگوی وزارت امور خارجه: 
          در تکمیل روند اجرای توافقات دوجانبه میان ایران و عربستان برای از سرگیری روابط
          ، سفارت ایران در ریاض، سرکنسولگری ایران در جده 
          و نمایندکی دائم ایران نزد سازمان همکاری اسلامی طی روزهای سه..."
        />
      </div>
      <div className="flex justify-center my-8 items-center gap-6">
      <Product5
        imageUrl="/images/havij.jpg"
        title="هویج 1 کیلوگرم ± 50 گرم"
        storeName="سرای میوه شعبه آزادشهر"
        remainingItems={4}
        rating={4.3}
        currentPrice={15700}
        oldPrice={20700}
        discountPercentage={25}
        peyk={10000}
      />
      </div>
      <div className="flex justify-center my-8 items-center gap-6">
      <Product6 
        title="کباب لقمه سلمان" 
        offer={20} 
        users="(30,362)" 
        topping="نوشیدنی شرکتی، نوشیدنی، ساندویچ" 
        peyk={12000} 
        rate={4.1}
      />
      </div>
      <div className="flex justify-center my-8 items-center gap-6">
      {product7.map((product) => (
        <Product7
          key={product.id}
          image={product.image}
          oldprice={product.oldprice}
          price={product.price}
          offer={product.offer}
          description={product.description}
        />
      ))}
      </div>
      <div className="flex justify-center my-8 items-center gap-6 h-80 bg-slate-700">
        <Product8
        price={"10000"}
        oldPrice={"15000"}
        image={"/images/chepof.jpg"}
        discount={15}
        />
      </div>
      <div className="flex justify-center my-8 items-center gap-6">
        <Cart10
        image={"/images/labaniat.png"}
        title={"لبنیات"}
        />
      </div>
      <div className="flex justify-center my-8 items-center gap-6">
        <Cart11
        address={"  افق کوروش معلم33"}
        />
      </div>
   </div>
  );
}
