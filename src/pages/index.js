import React, { useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home() {
  const context = useDocusaurusContext();

  useEffect(() => {
    if (context.siteConfig.customFields.NODE_ENV != "development") {
      window.location.replace("https://real-pet.konstinople.dev");
    }
  }, []);

  return <Layout />;
}
