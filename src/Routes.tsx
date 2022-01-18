import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from 'components/Navbar';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
          <Route path="/" exact>
            <h1>MovieFlix</h1>
          </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
