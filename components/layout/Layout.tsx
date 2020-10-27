import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import styles from './Layout.scss';
import Footer from './Footer';
import imageUrl from 'utils/imageUrl';
import { useGetTokensQuery } from 'generated/graphql';

export interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  image?: string;
}

export const Layout = (props: Props) => {
  const { title, description, image } = props;
  const hostname = process.env.ORIGIN;
  const router = useRouter();

  const {data, loading, error} = useGetTokensQuery();

  if(loading) {
    console.log('query is loading');
  }
  if(error) {
    console.log('i messed up', error);
  }
  if (data) {
    console.log(data);
  }

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${hostname}${router.asPath}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${hostname}${router.asPath}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="/static/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <div className={styles.base}>
        <header>
          <Navbar fixed="top">
            <Container>
              <div className={styles.headerStyles}>
                <Link passHref href="/">
                  <Navbar.Brand as={'a'}>
                    <img
                      alt="Greenwood branding"
                      className={styles.logo}
                      src={imageUrl('/logo_white.png')}
                    />
                  </Navbar.Brand>
                </Link>
                <Nav className={styles['nav-right']}>
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
                    <Link passHref href="/">
                      <Nav.Link>The App</Nav.Link>
                    </Link>
                  </Nav.Item>
                  {data?.getTokens.ok ? <Nav.Item>
                    <Link passHref href="/">
                      <Nav.Link>Profile</Nav.Link>
                    </Link>
                  </Nav.Item> : <Nav.Item>
                    <Link passHref href="/api/auth/google">
                      <Nav.Link>Sign In</Nav.Link>
                    </Link>
                  </Nav.Item>}
                </Nav>
              </div>
            </Container>
          </Navbar>
        </header>
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

