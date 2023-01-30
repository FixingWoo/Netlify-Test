import * as React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div>
        <Layout title="Home Page">
          <h1>메인 화면</h1>
        </Layout>
      </div>
    </>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
