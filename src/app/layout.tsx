import { Roboto_Condensed } from "next/font/google";
import "../shared/styles.scss";

const RobotoCondensed = Roboto_Condensed({
  weight: ['100', '200', '300', '400', '600', '700'],
  subsets: ["cyrillic"],
  display: "swap",
  style: ['normal'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${RobotoCondensed.className}`}>
        {children}
      </body>
    </html>
  );
}
