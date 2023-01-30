import React, { useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";

const Head = styled(motion.header)`
  position: fixed;
  top: 0;
  z-index: 9999;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: rgba(255, 255, 255, 1);
  border-bottom: none;
`;

const Logo = styled.span`
  width: 100px;

  img,
  span {
    width: 100%;
    height: 100%;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    a,
    span {
      color: #333;
      font-weight: 700;
      padding: 0 28px;
    }

    a {
      text-decoration: none;
    }
  }
`;

export default function Header() {
  const animation = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    function getScroll() {
      if (scrollY.get() > 0) {
        animation.start("scroll");
      } else {
        animation.start("top");
      }
    }
    scrollY.on("change", getScroll);
  });

  const headerVariants = {
    top: {
      borderBottom: "none",
    },
    scroll: {
      borderBottom: "1px solid #eee",
    },
  };

  return (
    <Head variants={headerVariants} animate={animation}>
      <Logo>
        <Link to="/">
          {/* <img src={logo} alt="메인 로고" /> */}
          <span>TODO - 로고</span>
        </Link>
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Nav>
      <div>TODO - Theme, Search, ...</div>
    </Head>
  );
}
