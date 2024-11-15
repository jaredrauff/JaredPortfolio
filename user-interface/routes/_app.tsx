import { type PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import HeroOne from "../components/heros/HeroOne.tsx";
import HeroTwo from "../components/heros/HeroTwo.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>user-interface</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Header />
        <HeroOne />
        <HeroTwo />
        <Component />
      </body>
    </html>
  );
}
