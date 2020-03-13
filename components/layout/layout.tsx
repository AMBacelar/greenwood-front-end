import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import styles from "./layout.scss";

export interface LayoutProps {
  title?: string;
}

const Layout: React.SFC<LayoutProps> = ({
  children,
  title = "Nextjs Typescript Boilerplate"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
        type="image/x-icon"
      />
    </Head>
    <header>
      <Navbar expand="lg" sticky="top">
        <Container>
          <Link passHref href="/">
            <Navbar.Brand as={"a"} header>
              Project Name
            </Navbar.Brand>
          </Link>
          <Nav className={styles["nav-right"]}>
            <Nav.Item>
              <Link passHref href="/">
                <Nav.Link>The Catalogue</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link passHref href="/a">
                <Nav.Link>Blog</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link passHref href="/b">
                <Nav.Link>The App</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link passHref href="/">
                <Nav.Link>Sign In</Nav.Link>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link passHref href="/">
                <Nav.Link>Sign Up</Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </header>
    {children}
    <footer>&copy; 2020 AMBacelar</footer>
  </div>
);

export default Layout;
