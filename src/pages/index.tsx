import Article from "@/components/Article";
import Article2 from "@/components/Article2";
import Article3 from "@/components/Article3";
import BeforeFooter from "@/components/BeforeFooter";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import ProductBody from "@/components/ProductBody";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Breadcrumb/>
      <ProductBody/>
      <Article/>
      <Article2/>
      <Article3/>
      <BeforeFooter/>
      <Footer/>
    </div>
  );
}
