/** @format */

import { Route, Switch } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import NewMeetUpPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import MiainNavigation from "./components/layouts/MainNavigation";

function App() {
  return (
    <div>
      <MiainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupPage />
        </Route>
        <Route path="/addnew">
          <NewMeetUpPage />
        </Route>
        <Route path="/favs">
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
