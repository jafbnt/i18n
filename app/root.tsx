import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";
import { cssBundleHref } from "@remix-run/css-bundle";
import { json, type LinksFunction, type LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useEffect } from "react";

export async function loader({ request }: LoaderArgs) {
  let locale = await i18next.getLocale(request);
  return json({ locale });
}

export let handle = {
  i18n: "common",
};

function useChangeLanguage(locale: string) {
  let { i18n } = useTranslation();
  useEffect(() => {
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      if (storedLocale !== locale) {
        i18n.changeLanguage(storedLocale); 
      }
    } else {
      localStorage.setItem('locale', locale);
    }
  }, [locale, i18n]);
}

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  let { locale } = useLoaderData<typeof loader>();

  let { i18n } = useTranslation();

  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
