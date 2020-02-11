import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import { Container, Image, Menu } from "semantic-ui-react";

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
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
        type="image/x-icon"
      />
    </Head>
    <header>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={"a"} header>
            <Image
              size="mini"
              src="/logo.png"
              style={{ marginRight: "1.5em" }}
            />
            Project Name
          </Menu.Item>
          <Menu.Item as="a" position="right">
            About Us
          </Menu.Item>
          <Menu.Item as="a">The Catalogue</Menu.Item>
          <Menu.Item as="a">Blog</Menu.Item>
          <Menu.Item as="a">The App</Menu.Item>
          <Menu.Item as="a">Sign In</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Container>
      </Menu>
      <nav>
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
      </nav>
    </header>
    {children}
    <div className={styles["meta-tags"]}>hello world</div>
    <footer>&copy; 2020 AMBacelar</footer>
  </div>
);

export default Layout;
