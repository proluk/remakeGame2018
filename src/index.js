import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store';
import { MemoryRouter  as Router} from 'react-router-dom'
import Root from './components/Root'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router key={'router'} basename={process.env.PUBLIC_URL}> 
        <Root store={store} />
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
