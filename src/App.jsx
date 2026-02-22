import React from 'react';
// import Todo from './Components/TodoClass';
import Todo from './Components/TodoFunction';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Todo />
            </div>
        );
    }
}