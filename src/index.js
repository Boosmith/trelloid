import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
	<BrowserRouter routes={routes}>
		<App/>
	</BrowserRouter>,
	document.getElementById('app')
);


