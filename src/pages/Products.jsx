import { m } from "framer-motion";
import { StaggeredAnimation, Opacity } from "../components/AnimateComponent";
import { products } from "../data/Products";
import Product from "../components/Product";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <>
      <section id="header">
        <StaggeredAnimation>
          <div
            id={`header-products`}
            className="flex items-center flex-col mb-16 col-span-10"
          >
            <m.div
              variants={Opacity}
              className="w-14 h-1 bg-gradient-to-bl from-mainBlue-700 to-darkerBlue-400 mb-4"
            />
            <m.h1
              variants={Opacity}
              className="text-2xl lg:text-3xl font-bold text-left text-primaryText"
            >
              Produk Kami
            </m.h1>
            <m.p
              variants={Opacity}
              className="my-3 text-sm sm:text-base text-center text-secondaryText max-w-3xl"
            >
              Kumpulan produk-produk yang telah kami buat
            </m.p>
          </div>
        </StaggeredAnimation>
      </section>
      <section id="product-list" className="px-20 mb-20">
        <StaggeredAnimation>
          {products.map((product, index) => (
            <Product
              key={index}
              background={product.background}
              backgroundImage={product.backgroundImage}
              image={product.image}
              title={product.title}
              description={product.description}
            />
          ))}
        </StaggeredAnimation>
      </section>
      <Footer />
    </>
  );
}
