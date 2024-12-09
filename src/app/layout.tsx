import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Snack from "@/components/Snack";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
 
import { ourFileRouter } from "@/app/api/uploadthing/core";


const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={exo.className}>
        <Snack>
          <NextIntlClientProvider messages={messages}>
            <NextSSRPlugin  routerConfig={extractRouterConfig(ourFileRouter)}/>
            {children}
          </NextIntlClientProvider>
        </Snack>
      </body>
    </html>
  );
}
