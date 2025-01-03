import Link from "next/link";
import Footer from "../components/Footer";
import Message from "../components/user/Message";
import UserHeader from "../components/user/UserHeader";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-[#f2f5f7]">
        <UserHeader></UserHeader>
        <div className="lg:w-[1620px] mx-auto font-lora bg-[#f2f5f7]">
          {children}
        </div>
        <Link href={'/driver/Message'} passHref>
          <Message></Message>
        </Link>
        <div className="pt-20">
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
