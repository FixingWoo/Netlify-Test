import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const ArticleWarpper = styled.div``;

const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  box-shadow: 0 0 0.4rem rgb(0 0 0 / 20%);
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;

  h2 {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 5px;
  }

  time {
    font-size: 0.8rem;
  }
`;

export default function Post({ data }: PageProps<Queries.PostArticleQuery>) {
  return (
    <Layout title="Post">
      <ArticleWarpper>
        {data.allMdx.nodes.map((node, index) => (
          <StyledLink to={`/post/${node.frontmatter?.slug}`} key={index}>
            <h2>{node.frontmatter?.title}</h2>
            <p>{node.frontmatter?.summary}</p>
            <time>{node.frontmatter?.date}</time>
          </StyledLink>
        ))}
      </ArticleWarpper>
    </Layout>
  );
}

export const query = graphql`
  query PostArticle {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          summary
          date(formatString: "YYYY.MM.DD")
          slug
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Post" />;
