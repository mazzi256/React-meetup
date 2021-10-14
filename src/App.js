/** @format */

import { Route, Switch } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import NewMeetUpPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layouts/layout";

function App() {
  return (
    <Layout>
      
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
      </Layout>
  );
}

export default App;
