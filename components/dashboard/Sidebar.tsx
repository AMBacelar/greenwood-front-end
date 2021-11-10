// import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import classnames from "classnames";
import styles from './Sidebar.module.scss';

export enum validStates {
  profile = 'profile',
  business = 'business',
  businesses = 'businesses',
}

type Props = {
  toggleSidenav: (t: boolean) => void,
  sidenavOpen: boolean,
  currentState: validStates,
  onChangeState: (newState: validStates) => void
}

const handleOnClick = (event: any, targetState: validStates, currentState: validStates, onChangeState: (newState: validStates) => void) => {
  event.preventDefault();
  currentState === targetState ? null : onChangeState(targetState)
}

export const Sidebar = ({ toggleSidenav, sidenavOpen, currentState, onChangeState }: Props) => {

  return <div className={classnames(styles.sidebar, sidenavOpen && styles.open)}>
    <span>blah</span>
    <button onClick={() => toggleSidenav(!sidenavOpen)}>click me</button>
    <br />
    <a onClick={(e) => handleOnClick(e, validStates.profile, currentState, onChangeState)}>Profile</a>
    <br />
    <a onClick={(e) => handleOnClick(e, validStates.businesses, currentState, onChangeState)}>Businesses</a>
  </div >
}
