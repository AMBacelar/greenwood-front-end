import React from "react";
import styles from "./Articles.scss";
import Link from "next/link";
import type { Article } from "../../generated/graphql";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
  article: Article[];
};

export const Articles = ({ article }: Props) => {
  const listOfArticles = article.map((a) => (
    <Col>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>{a.title}</h2>
          <p className={styles.content}>{a.body}</p>
          <div className={styles.blogContent}>
            <div className={styles.blog}>Blog #{a.articleId}</div>
            <div className={styles.blogData}>
              <b>READ MORE</b>
              <Link passHref href={a.url}>
                <button className={styles.cta}></button>
              </Link>
            </div>
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
      </Container>
    </div>
  );
};
