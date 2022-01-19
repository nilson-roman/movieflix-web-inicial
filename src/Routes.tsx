import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home/Auth';
import Catalog from 'pages/Catalog';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route path="/" exact>
            {/* <Home /> */}
            <Catalog />
          </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
