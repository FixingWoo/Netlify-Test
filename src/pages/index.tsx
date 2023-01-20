import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Layout title="Main Page">
        <h1>Hello Gatsby!</h1>
      </Layout>
    </div>
  );
};

export const Head = () => <Seo title="Main" />;

export default IndexPage;
