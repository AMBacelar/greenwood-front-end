// import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import classnames from "classnames";
import styles from './AdminNavBar.module.scss';

type Props = {

  // routes: Array<Object>,
}

export const AdminNavBar = (props: Props) => {

  return <div className={classnames(styles.navbar)}>
    <div>Profile</div>
  </div>
}
