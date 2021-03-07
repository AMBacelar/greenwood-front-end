import React from 'react';
import {Layout} from '../../components/layout/Layout';
import { NextPage, GetServerSideProps } from 'next';
import { Article } from 'generated/graphql';
import MailingListBanner from 'components/mailingListBanner/MailingListBanner';
import { Articles } from 'components/article/Articles';

const atricles = [
  {
    author: {
      displayImage: '/johns-bakery-thumb.jpeg',
      displayName: 'John Jacob',
      userId: 'user1'
    },
    body: `How many black owned supermarkets have you seen at the end of your road? Not many? Well say hello to Shade's Hypermarket! A brand new supermarket chain bringing you fresh delicious groceries for a family affordable price. CEO and founder, Shade Okumaya has spent the last 3 years researching, planning and developing her new business.

    "There were a lot of sleepless nights. I had to build everything from scratch. I've always taken a keen interest in the food industry market, and realised there weren't many black owned markets in my city. Seeing this gap in the market gave be the push to pursue".

    Shade's Hypermarket is based in Tottenham Hale, right in the heart of the borough. With a fresh produce from local farms, which essentially keeps the money circulating within the community. She took the first step forward after realising the lack of black owned supermarkets in the area she has grown up in since her and her 3 siblings were kids.`,
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
    articleImage: '/static/images/adobestock281020160.jpeg',
    dateCreated: 3456789876543,
    articleId: 1,
    title: 'The new Supermarket on the block of Tottenham has the people going crazy',
    url: 'article/3',    
  },
  {
    author: {
      displayImage: '/johns-bakery-thumb.jpeg',
      displayName: 'Paul Pinker',
      userId: 'user2'
    },
    body: `Hello ea elit commodo ad voluptate ea consectetur reprehenderit minim eiusmod in reprehenderit ex. Et laboris nulla laborum aute laborum nostrud ut aute nostrud cupidatat eiusmod. Cupidatat ex est ullamco id ut duis laborum consequat cupidatat laboris reprehenderit commodo nisi. Quis ea enim eiusmod qui sunt ad incididunt commodo et elit culpa eiusmod excepteur nisi. Veniam nostrud nostrud tempor et voluptate occaecat magna proident dolore eu irure consectetur enim. Occaecat incididunt duis incididunt reprehenderit aliqua elit commodo. Est adipisicing cupidatat est laboris enim.

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
    articleImage: '/static/images/adobestock231500081.jpeg',
    dateCreated: 3456789876543,
    articleId: 2,
    title: 'Mr wave and trim',
    url: 'article/2',    
  },
  {
    author: {
      displayImage: '/johns-bakery-thumb.jpeg',
      displayName: 'Paul Pinker',
      userId: 'user2'
    },
    body: `Hello ea elit commodo ad voluptate ea consectetur reprehenderit minim eiusmod in reprehenderit ex. Et laboris nulla laborum aute laborum nostrud ut aute nostrud cupidatat eiusmod. Cupidatat ex est ullamco id ut duis laborum consequat cupidatat laboris reprehenderit commodo nisi. Quis ea enim eiusmod qui sunt ad incididunt commodo et elit culpa eiusmod excepteur nisi. Veniam nostrud nostrud tempor et voluptate occaecat magna proident dolore eu irure consectetur enim. Occaecat incididunt duis incididunt reprehenderit aliqua elit commodo. Est adipisicing cupidatat est laboris enim.

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
    articleImage: '/static/images/AdobeStock_260736334.jpeg',
    dateCreated: 3456789876543,
    articleId: 3,
    title: 'cereal for lunch & dinner',
    url: 'article/3',    
  }
]

type Props = {
  article: Article
}

const Page: NextPage<Props, any> = (props) => {
  return (
    <Layout
      title={'The Greenwood Network'}
      description={'Black Owned Businesses all in one place'}
    >
      <Articles article={props.article}/>
      <MailingListBanner/>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Pass data to the page via props
  console.log('Article ID is:', context.query.id);
  // Fetch Data here and pass it down.
  return {
    props: {
      article: atricles,
    },
  };
};

export default Page;
