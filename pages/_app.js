import Layout from "@/components/Layout.jsx";
import "../styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
  
}
