import React, {Component} from 'react';
import logo from './components/logo.svg';
import './App.css';

import 'react-datepicker/dist/react-datepicker.css';
import {TodoApp} from "./components/TodoApp";
import {Login} from "./components/Login";
import moment from "moment";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {isLoggedIn: false};
        this.handleLogginChange = this.handleLogginChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        const LoginView = () => (<Login Login={this.handleLogginChange}/>);

        const TodoAppView = () => (<TodoApp/>);

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/todo" component={TodoAppView}/>
                    </div>
                </div>
            </Router>
        );
    }

    handleLogginChange() {
        this.setState({
            isLoggedIn: true
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
            isLoggedIn: this.state.isLoggedIn,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: '',
            isLoggedIn: ''
        }));
    }

}

export default App;
