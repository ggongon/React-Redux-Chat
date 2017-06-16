import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import ReduxPromise from 'redux-promise';

import requireAuth from './components/HOC/requireAuthentication';
import Chat from './components/chat';
import Login from './components/login';
import reducers from './reducers';
import css from '../sass/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(reducers);

window.store=store;
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Link to="/">Login</Link> | <Link to="/chat">Chat</Link>

				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/chat" component={requireAuth(Chat)} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
, document.getElementById("root"));