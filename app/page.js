import { Libre_Barcode_128 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
     <h1 className="text-3xl"> CPRG 306: Web Development 2 - Assignments</h1>
     <Link href={"/week-2"}>
     Week 2 </Link>    </main>
  );
}
