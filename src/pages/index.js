import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="absolute">
        <img
          src="https://hdc.gov.tt/wp-content/uploads/2022/06/Webpagehotorangebanner.jpg"
          alt="logo"
        />
      </div>
      <Navbar className="sticky top-0" />
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex-col lg:flex items-center">
          <div className="flex-col items-center">
            <div className="text-2xl font-semibold text-center mb-2">
              Search Products Here
            </div>
            <div className="lg:flex">
              <Input size="lg" placeholder="Enter Product Code." />
              <div className="flex ">
                <Button
                  size="lg"
                  className="mx-auto  mt-2 lg:ml-3 lg:mt-0 lg:inline-block"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
