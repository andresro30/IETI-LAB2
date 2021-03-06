import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'


export class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {email: '', password: ''};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form onSubmit={this.handleSubmit} className="form" >
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email" >Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus 
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleEmailChange(e){
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.email+" "+this.state.password);
        if(this.state.email != 'andresrochag15@hotmail.com' || this.state.password !='123'){
            alert("El usuario o la contraseña es incorrecta");
            return;
        }
        else{
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('isLoggedIn', true);
        }
    }
}