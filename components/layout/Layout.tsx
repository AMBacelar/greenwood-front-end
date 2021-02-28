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
import classNames from 'classnames'

export interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  image?: string;
  isHomePage?: boolean;
}

const HeaderBar = (props: Props) => {console.log(props.isHomePage);
  if (props.isHomePage) {
    return <Navbar fixed ='top'>{props.children}</Navbar>
    
  }
  return <Navbar>{props.children}</Navbar>
}

export const Layout = (props: Props) => {
  const { title, description, image } = props;
  const hostname = process.env.NEXT_PUBLIC_ORIGIN;
  const router = useRouter();

  const { data, loading, error } = useGetTokensQuery();

  if (loading) {
    console.log('query is loading');
  }
  if (error) {
    console.log('unauthorized:', error);
  }
  if (data) {
    console.log('Layout result is:', data);
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
        <div>
          <header>
            <Navbar className={styles.Navbar}>
              <Container>
                <div className={styles.headerStyles}>
                  <Link passHref href="/">
                    <Navbar.Brand as={'a'}>
                      <img
                        alt="Greenwood branding"
                        className={styles.logo}
                        src="/static/images/logo_navbar.svg"
                      />
                    </Navbar.Brand>
                  </Link>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles['nav-button']}/>
                  <Nav className={styles['nav-right']}>
                    <div className={styles.navCollapsable}>
                    <Nav.Item>
                      <Link passHref href="/">
                        <Nav.Link>The Catalogue</Nav.Link>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link passHref href="/article">
                        <Nav.Link>Blog</Nav.Link>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link passHref href="/">
                        <Nav.Link>The App</Nav.Link>
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link passHref href="/aboutus">
                        <Nav.Link>About Us</Nav.Link>
                      </Link>
                    </Nav.Item>
                    </div>
                    {data?.getTokens.ok ? <Nav.Item>
                      <Link passHref href="/dashboard">
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
        </div>
        {props.children}
        <Footer />
      </div>
    </div>
  );
};
