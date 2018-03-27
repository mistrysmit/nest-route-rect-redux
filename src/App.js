import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
/* import Search from './Component/Controller/Search'
import SearchResult from './Component/Controller/SearchResult'
import Menu from './Component/UI/Menu'
import RouteComp from './Component/UI/RouterCom' */
import { Home,About } from "./Component/UI/home";
import { BrowserRouter as Router, Switch, Route, NavLink, hashHistory} from 'react-router-dom';
import SearchResult from "./Component/Controller/SearchResult";
class App extends Component {
  render() {
    return (
      <div>      
        <Router history={hashHistory}>
          <div style={{ width: 1000, margin: '0 auto' }}>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
            </ul>
            <hr />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
            </Switch>
          </div>
        </Router>

      </div> 
     
    );
  }
}

export default App;
