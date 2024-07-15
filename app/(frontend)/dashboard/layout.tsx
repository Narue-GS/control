import '@/app/ui/global.css';

import { inter } from '@/app/ui/fonts';
import Sidebar from './components/sidebar';
import { READ } from '@/app/(backend)/api/(modules)/services';


export const dynamic = "force-dynamic"

export default async function RootLayout({children,}:{children: React.ReactNode;}) {
  const modules = await READ()
  const currentUser = "admin"
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased `}>
        <section className='flex'>
          <Sidebar username={currentUser} modules={modules}/>
          {children}
        </section>
      </body>
    </html>
  );
}
