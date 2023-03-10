import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function About() {
  return <Layout title="About"></Layout>;
}

export const Head = () => <Seo title="About" />;
