import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevOps & Cloud Engineer Portfolio',
  description: 'Showcasing expertise in AWS, Terraform, Docker, Kubernetes, and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} scroll-pt-20`}>{children}</body>
    </html>
  )
}

