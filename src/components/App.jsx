/* eslint-disable linebreak-style */
import react from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './navbar/Navbar';
import Books from './books/Books';
import Categories from './categories/Categories';

class App extends react.PureComponent {
  render() {
    return (
      <Router>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Books />
          </Route>
          <Route path="/category">
            <Categories />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
