import './globals.css'

export const metadata = {
  title: 'Next Assessoria',
  description: 'Loja NEXT - Loja Glock Oficial',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-100">{children}</body>
    </html>
  )
}
