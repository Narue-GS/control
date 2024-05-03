'use client'

import { IModule } from "@/app/(backend)/api/(modules)/services";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({username, modules}:{username:string, modules:IModule[] | undefined}) {
  const pathname = usePathname()

  return(
    <section className="w-[25vw] h-screen border-r p-6 flex flex-col gap-12">
      <div className="w-full flex items-center font-bold bg-[url('../../public/chip.svg')] bg- md:bg-close text-white p-6 text-4xl h-140px px bg-blue-500 rounded-lg outline-none">
        Bem vinde <br />
        User!
      </div>
      <div className="flex flex-col gap-3">
        {modules?.map((i) => (
          <Link href={"/dashboard/" + i.name} key={i.id} className={`font-bold ${pathname == "/dashboard/" + i.name ? "bg-pink-800 shadow-lg" : "hover:bg-pink-500 bg-pink-600"}  h w-[80%] text-white p-2 rounded-lg transition`}>{i.fantasy_name}</Link>
        ))}
      </div>
    </section>
  )
} 