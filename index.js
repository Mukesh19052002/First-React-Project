import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Counter from './counter';
import 'bootstrap/dist/css/bootstrap.css';

const element = <h1>Hello World</h1>;
ReactDOM.render(<Counter />, document.getElementById('root'));
