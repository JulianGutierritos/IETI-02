import React, {Component} from 'react';
import logo from './logo.svg';
import './components/TodoApp.css';
import {TodoApp} from './components/TodoApp';
import {Login} from './Login';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export class App extends Component {
	constructor(props) {
        super(props);
        if (localStorage.isLoggedIn === "true"){
            this.state = { isLoggedIn : true };
        }
        else{
            this.state = { isLoggedIn : false };
        }
		this.handleChangeIsLoggedIn = this.handleChangeIsLoggedIn.bind(this);
		localStorage.setItem('user', 'julian@mail.com');
		localStorage.setItem('passwd', '1234');
		this.TodoAppView = () => (<TodoApp/>);
		this.LoginView = () => (<Login handleChangeIsLoggedIn = {this.handleChangeIsLoggedIn}/>);
    }
	
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>


                    <br/>
                    <br/>

                    <div>
                        {this.state.isLoggedIn ?
                        <div><Link to="/todo"></Link><Route exact path="/" component={this.TodoAppView}/></div> :
                        <div><Link to="/"></Link><Route exact path="/" component={this.LoginView}/></div>}
                    </div>
                </div>
            </Router>
		);
	}
	handleChangeIsLoggedIn(e){
        this.setState({ 
			isLoggedIn  : true
        }); 
	}
}



