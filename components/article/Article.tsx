import React from "react";
import styles from "./Article.scss";
import type { Article } from "../../generated/graphql";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
  article: Article;
};

export const ArticleCard = ({ article }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}></div>
      <Container>
        <Row>
          <Col>
          <div className={styles.card}>
            <div className={styles.content}>
              <h2>{article.title}</h2>
              <div>{article.body}</div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
