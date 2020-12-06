import React from 'react'
import styles from './Article.scss';
import type { Article } from '../../generated/graphql'

type Props = {
  article: Article
}

export const ArticleCard = ({ article }: Props) => {
  return (
    <div className={styles.wrapper}>
      <h2>{article.title}</h2>
      <div>{article.body}</div>
    </div>
  )
}
