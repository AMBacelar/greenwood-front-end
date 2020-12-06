import React from 'react';
import {Layout} from '../../components/layout/Layout';
import { NextPage, GetServerSideProps } from 'next';
import { Article } from 'generated/graphql';
import { ArticleCard } from 'components/article/Article';

const atricles = [
  {
    author: {
      thumbnail: '/johns-bakery-thumb.jpeg',
      displayName: 'John Jacob',
      userId: 'asdfghjkiuyt'
    },
    body: `Nisi ea elit commodo ad voluptate ea consectetur reprehenderit minim eiusmod in reprehenderit ex. Et laboris nulla laborum aute laborum nostrud ut aute nostrud cupidatat eiusmod. Cupidatat ex est ullamco id ut duis laborum consequat cupidatat laboris reprehenderit commodo nisi. Quis ea enim eiusmod qui sunt ad incididunt commodo et elit culpa eiusmod excepteur nisi. Veniam nostrud nostrud tempor et voluptate occaecat magna proident dolore eu irure consectetur enim. Occaecat incididunt duis incididunt reprehenderit aliqua elit commodo. Est adipisicing cupidatat est laboris enim.

Quis magna est occaecat tempor minim ut voluptate adipisicing Lorem Lorem ullamco laboris. Enim proident adipisicing id culpa ad mollit aute reprehenderit enim fugiat nulla incididunt. Ullamco ad minim dolore veniam laborum dolore cillum mollit et laborum quis. Exercitation est velit non anim esse voluptate id aliquip est consectetur. Dolor ex nulla duis ullamco deserunt. Qui esse reprehenderit culpa excepteur eu in incididunt ex nisi eu laboris nostrud sit cillum. Dolore officia qui cillum irure nisi voluptate Lorem aliqua commodo ex.`,
    categories: [
      {
        key: 'london',
        value: 'London'
      },
      {
        key: 'retail',
        value: 'Retail'
      }
    ],
    dateCreated: 3456789876543,
    articleId: 1234567890,
    title: 'The new Supermarket on the block of Tottenham has the people going crazy',
    url: '/1234567890',    
  }
]

type Props = {
  article: Article
}

const Page: NextPage<Props, any> = (props) => {
  console.log(props)
  return (
    <Layout
      title={'The Greenwood Network'}
      description={'Black Owned Businesses all in one palce'}
    >
      <ArticleCard article={props.article}/>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Pass data to the page via props
  console.log('Article ID is:', context.query.id);
  // Fetch Data here and pass it down.
  return {
    props: {
      article: atricles[0],
    },
  };
};

export default Page;
