import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

const MainApp = ()=> (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
