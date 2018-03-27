
import React, { Component } from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import SearchResult from '../Controller/SearchResult';
const RouteComp = (props) => <div>
    <Router>
        <div>
            {props.children}
        </div>
    </Router>
</div>;


export default RouteComp;

