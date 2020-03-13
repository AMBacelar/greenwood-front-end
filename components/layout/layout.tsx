import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
      <Navbar sticky="top">
        <Navbar.Brand as={"a"} header>
          Project Name
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link as="a">The Catalogue</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="a">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="a">The App</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="a">Sign In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as="a">Sign Up</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Link href="/">
        <a>Home</a>
      </Link>
      <span>/</span>
      <Link href="/a">
        <a>a</a>
      </Link>
      <span>/</span>
      <Link href="/b">
        <a>b</a>
      </Link>
    </header>
    {children}
    <div className={styles["meta-tags"]}>hello world</div>
    <footer>&copy; 2020 AMBacelar</footer>
  </div>
);

export default Layout;
