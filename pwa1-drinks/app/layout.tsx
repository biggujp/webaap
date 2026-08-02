import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PWA 1 Drink Service System',
  description: 'ระบบสั่งเครื่องดื่ม การประปาส่วนภูมิภาคเขต 1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-[#f0f8ff] min-h-screen text-gray-800 flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}