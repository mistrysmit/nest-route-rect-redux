import React from 'react';


import Search from '../Controller/Search'
import SearchResult from '../Controller/SearchResult'
import Menu from './Menu'
import RouteComp from './RouterCom'
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';



export const Home = ()=> 
 (<div>
        <h1>
            HOME
        </h1>
       <RouteComp> 
            <Menu>
                <Search userorrepo='users' ></Search>
            </Menu>
            <Switch>
            <Route exact path='/' component={() => <SearchResult userorrepo='users' />} />
            <Route exact path='/Repo' component={() => <SearchResult userorrepo='repositories' />} />
                </Switch>
         </RouteComp> 
   </div> )

export const About=()=>  (
        <h1>
            About
    </h1>
    )
