import { Metadata } from 'next';
import './globals.css';

export const metadata = {
  title: 'Giovani Fouz blog about web development.',
  description:
    'Giovani Fouz. I write what i have been learning as a kind of record for the future.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
