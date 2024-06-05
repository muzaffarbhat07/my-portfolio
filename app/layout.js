// import Nav from '@components/Nav';
// import '@styles/globals.css';
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
          {/* <Nav /> */}
          <Suspense>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
