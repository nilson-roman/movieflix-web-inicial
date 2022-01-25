import { Router, Switch, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "pages/Home/Auth";
import Catalog from "pages/Catalog";
import MovieDetails from "pages/MovieDetails";
import PrivateRoute from "components/PrivateRoute";
import history from "util/history";

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <PrivateRoute path="/movies" exact={true}>
          <Catalog />
        </PrivateRoute>
        <PrivateRoute path="/movies/:movieId" exact={false}>
          <MovieDetails />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
