/** @format */

import MiainNavigation from "./MainNavigation";
import classes from './layout.module.css'

function Layout(props) {
  return (
    <div>
      <MiainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
