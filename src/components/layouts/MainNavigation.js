/** @format */

import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> REACT MEETUPS</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="addnew">Add New</Link>
          </li>
          <li>
            <Link to="favs">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
