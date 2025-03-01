'use client'

import { Roboto_Condensed } from "next/font/google";
import "../shared/styles/styles.scss";

import { Provider } from 'react-redux'
import store from "./store/store";

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
    <Provider store={store}>
      <html lang="ru">
        <body className={`${RobotoCondensed.className}`}>
          {children}
        </body>
      </html>
    </Provider>
  );
}
