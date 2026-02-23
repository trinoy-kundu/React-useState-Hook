import React from 'react';
// import Todo from './Components/TodoClass';
// import Todo from './Components/TodoFunction';
import Counter from './Components/Counter';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Counter />
            </div>
        );
    }
}