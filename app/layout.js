import '@/styles/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Suspense } from 'react';

export const metadata = {
  title: 'Muzaffar Ahmad Bhat',
  description: 'My Personal Portfolio',
  icons: {
    icon: '/assets/images/cv.png'
  }
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <main className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
          <Header />
          <Suspense>
            {children}
          </Suspense>
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout
