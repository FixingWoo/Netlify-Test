import React from "react";
import styled from "styled-components";
import Header from "./Header";

interface Ilayout {
  children?: any;
  title: string;
}

const Section = styled.section`
  padding-top: 80px;
  width: 82vw;
  margin: 0 auto;
`;

export default function Layout({ children, title }: Ilayout) {
  return (
    <div>
      <Header />
      <main>
        <Section>{children}</Section>
      </main>
    </div>
  );
}
