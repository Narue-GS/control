import Image from "next/image";

export default function Page() {
  return(
    <>
      <Image layout="fill" objectFit="cover" className=" md:bg-blue-500"  src={"/chip.svg"} alt=""/>
      <section className="w-screen h-screen backdrop-brightness-75 md:backdrop-brightness-100 flex justify-center">
        <div className="bg-white h-fit w-[25vw] min-w-[300px] rounded-lg outline p-4 mt-10 flex flex-col justify-between gap-2">
          <div className="flex flex-col gap-4">
            <h1 className="border-b text-center text-xl p-4 pt-0 mb-4">
              Login
            </h1>  
            <input className="rounded-lg w-full" placeholder="email ou login" type="text" />
            <input className="rounded-lg w-full" placeholder="senha" type="text" />
            <button className="bg-pink-600 rounded-lg p-2 mt-2 text-white font-bold hover:bg-pink-500 transition">entrar</button>
          </div>
          <div className="text-center border-t  pt-2">
            <span className="text-gray-500">login with</span>
            <div className="flex flex-col md:flex-row gap-3 mt-2">
              <button className="flex-1 h-fit flex hover:shadow justify-between text-center border rounded-lg md:rounded-full px-2 py-1">
                Google
                <Image width={20} height={20} src="/google.svg" alt="" />
              </button>
              <button className="flex-1 h-fit flex hover:shadow justify-between text-center border rounded-lg md:rounded-full px-2 py-1">
                Github
                <Image width={20} height={20} src="/github.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}