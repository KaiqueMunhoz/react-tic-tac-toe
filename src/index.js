import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Components
import Game from './components/Game';

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
