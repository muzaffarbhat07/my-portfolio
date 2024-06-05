// import '@styles/globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Suspense } from 'react';

export const metadata = {
  title: 'Muzaffar',
  description: 'My Personal Portfolio',
  icons: {
    icon: '/assets/images/cv.png'
  }
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <main>
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
