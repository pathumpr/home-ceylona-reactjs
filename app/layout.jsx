import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Home Ceylona - Home',
  description: 'A Real State Company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          {children}
        </div>
      </body>
    </html>
  )
}
