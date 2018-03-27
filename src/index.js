import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import storeFactory from './store'
import { Provider } from 'react-redux';
import initialState from './reducer/initState.json';

const store = storeFactory;


store.subscribe(()=>
    {
    console.log("My subscribe method called");
    }
)


window.store=store;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
