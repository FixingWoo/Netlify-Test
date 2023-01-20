import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

export default function BlogPost({ data, children }) {
  return (
    <Layout>
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query BlogDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        title
        category
        date
        author
        slug
      }
    }
  }
`;

export const Head = () => <Seo title="Article" />;
