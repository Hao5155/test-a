import { getIp } from "@/lib/fetchapi";
import Image from "next/image";

export default async function Home() {
  const ipList = await getIp()
  return (
    <div>
      {JSON.stringify(ipList)}
   </div>
  );
}
