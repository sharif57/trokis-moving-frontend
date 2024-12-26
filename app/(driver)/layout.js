import DriverHeader from "../components/Deriver/DriverHeader";
import Footer from "../components/Footer";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f2f5f7]">
        <DriverHeader></DriverHeader>
        <div className="lg:w-[1620px] mx-auto font-lora">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
