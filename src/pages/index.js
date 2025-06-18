import React, { useEffect } from "react";
import Layout from "@theme/Layout";

export default function Home() {
  useEffect(() => {
    window.location.replace("/client/getting-started");
  }, []);

  return <Layout />;
}
