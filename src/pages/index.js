import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "./Navbar.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
       
      <div className=" flex flex-col justify-center items-center h-screen space-y-4">
        <div className="text-2xl ">
        कृपया प्रोडक कोड हालेर सर्च दब्नुहोस् ।
        </div>
        <div className="flex w-3/4 px-40 h-10 items-center rounded-l-lg  ">
          <Input style={{ marginRight: '20px' }} />
          <Button> Search </Button> 
        </div>
      </div>
    </div>
  );
}
