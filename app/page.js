import { getIp } from "@/lib/fetchapi";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {getIp()}
   </div>
  );
}
