import React from "react";
import styles from "./Articles.module.scss";
import Link from "next/link";
import type { Article } from "../../generated/graphql";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
  article: Article[];
};

export const Articles = ({ article }: Props) => {
  const listOfArticles = article.map((a) => (
    <Col key={a.articleId} className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardInfo}>
          <h2 className={styles.title}>{a.title}</h2>
          <p className={styles.content}>{a.body}</p>
        </div>
        <div className={styles.blogLink}>
          <p className={styles.blog}>Blog #{a.articleId}</p>
          <div className={styles.blogData}>
            <b>READ MORE</b>
            <Link passHref href={a.url}>
              <button className={styles.cta}></button>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  ));
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.pageInfo}>
          <h2>LATEST BLOGS AND STORIES</h2>
          <p>
            Deep dive into the stories of new and established businesses. An
            insight into the journey's they've undertook to get to where they
            are today. Be inspired.
          </p>
        </div>
      </div>
      <Container>
        <Row>{listOfArticles}</Row>
        <div></div>
      </Container>
    </div>
  );
};
