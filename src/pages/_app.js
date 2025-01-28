import "@/styles/globals.css";
import { ReactLenis, useLenis } from 'lenis/react'


export default function App({ Component, pageProps }) {
  return (
    <ReactLenis root>
      <Component {...pageProps} />
    </ReactLenis>);
}
