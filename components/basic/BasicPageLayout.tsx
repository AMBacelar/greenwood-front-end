import { ReactNode } from 'react';
import styles from './BasicPageLayout.module.scss';

export interface Props {
  children: ReactNode;
}

const BasicPageLayout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};

export default BasicPageLayout;