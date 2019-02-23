import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleWare()(createStore);

const App = () => {
    return (
        <div>HELLO!</div>
    );
}

export default App;

ReactDOM.render(<Provider store={createStoreWithMiddleware()}>
                    <App />
                </Provider>,
 document.getElementById('root'));
