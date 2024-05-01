import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from './ui/fonts';


export default function Page() {
  return (
    <>
      <main className="flex bg-[url('../../public/chip.svg')] bg-center bg-cover bg-blue-500 md:bg-opacity-0 md:bg-none  min-h-screen flex-col p-6">
        <div className="flex justify-center bg-transparent md:bg-[url('../../public/chip.svg')] text-white bg-center bg-cover h-40 shrink-0 items-center rounded-lg md:bg-blue-500 md:h-52 overflow-hidden">
          <span className={`${lusitana.className} underline decoration-pink-600 shadow  tracking-widest font-bold text-4xl md:text-6xl`}>
            <span className='text-transparent'>a</span>
            CONTROL
            <span className='text-transparent'>a</span>
          </span>
        </div>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10  md:w-1/2 md:px-20">
            <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              Uma ferramenta <span className='text-pink-600 italic font-bold'>poderosa</span> para controlar o seu dia a dia agitado
            
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-6 md:w-3/5 md:px-28 md:py-12">
            <Image
              src="/hero-desktop.png"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
              src="/hero-mobile.png"
              width={560}
              height={620}
              className="block md:hidden"
              alt="Screenshot of the dashboard project showing mobile version"
            />
          </div>
        </div>
      </main>
    </>
  );
}
