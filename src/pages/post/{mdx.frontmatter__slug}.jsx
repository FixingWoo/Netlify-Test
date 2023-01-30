import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import "../../styles/post.scss";

export default function Post({ data, children }) {
  return (
    <Layout>
      <div className="post-wrapper">{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        title
        category
        date
        slug
      }
    }
  }
`;

export const Head = () => <Seo title="Article" />;
