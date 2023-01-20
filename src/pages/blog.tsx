import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog({ data }: PageProps<Queries.BlogArticleQuery>) {
  return (
    <Layout title="Blog">
      <section>
        {data.allMdx.nodes.map((node, index) => (
          <article key={index}>
            <Link to={`/blog/${node.frontmatter?.slug}`}>
              <h3>{node.frontmatter?.title}</h3>
              <h5>
                {node.frontmatter?.author} in {node.frontmatter?.category}
              </h5>
              <time>{node.frontmatter?.date}</time>
              <hr />
              <p>{node.excerpt}</p>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogArticle {
    allMdx {
      nodes {
        excerpt(pruneLength: 30)
        frontmatter {
          slug
          title
          category
          date(formatString: "YYYY.MM.DD")
          author
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
