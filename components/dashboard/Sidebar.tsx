// import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import classnames from "classnames";
import styles from './Sidebar.scss';

type Props = {
  toggleSidenav: (t:boolean)=>void,
  sidenavOpen: boolean,
  // routes: Array<Object>,
}

export const Sidebar = ({toggleSidenav, sidenavOpen}: Props) => {

  return <div className={classnames(styles.sidebar, sidenavOpen && styles.open)}>
    <span>blah</span>
    <button onClick={()=>toggleSidenav(!sidenavOpen)}>click me</button>
    <div>Profile</div>
    <div>Business</div>
  </div>
}
