'use strict';

import React from 'react';
import {cyan500, blueGrey500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Result from './containers/result/Result'
import App from './App'
import Home from './containers/Home'
import Login from './containers/Login'
import Logout from './containers/Logout'
import Models from './containers/Models'
import NotFound from './containers/NotFound'
import auth from './utils/auth'
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Grid from "muicss/lib/react/container";
import Docs from './containers/Documentations'
import PasswordChange from './containers/PasswordChange'
class RouterComponent extends React.Component{
    checkLogin(nextState, replace) {
    if (!auth.isAuth()) {
       // replace('/login')
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home} />
                    {/*<Route path='/models' component={Models} onEnter={this.checkLogin}/>*/}
                    {/*<Route path='/model/:modelId' component={App} onEnter={this.checkLogin}/>*/}
                    {/*<Route path='/result' component={Result} onEnter={this.checkLogin}/>*/}
                    {/*<Route path='/login' component={Login} />*/}
                    {/*<Route path='/docs' component={Docs} />*/}
                    {/*<Route path='/passwordchange' component={PasswordChange} />*/}
                    <Route path='LR1' component={NotFound} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
      }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false, openLogout:false};
    }
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});
    handleOpenLogout = () => this.setState({openLogout:true});
    handleCancelLogout = () =>  this.setState({openLogout:false});
    handleConfirmLogout = () => {
        auth.logout(function(){});
        this.setState({openLogout:false});
        this.props.router.replace('/');
        this.handleClose()
    };
    render() {
        return (
                <div>
                    <AppBar
                        title={<Link  activeClassName='active'  style={{color:'white', textDecoration: 'none'}} to='/'>КСАМ 2.0</Link>}
                        onLeftIconButtonTouchTap={this.handleToggle}
                        iconElementRight={<div>{auth.isAuth() ? auth.getLogin() : 'Гость'}</div>}
                        iconStyleRight={{color: 'white', fontSize: 18, margin: 'auto 0'}}
                        style={{paddingHorizontal:15}}
                    />
                    <Drawer
                        docked={false}
                        width={256}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <AppBar
                            title='КСАМ 2.0'
                            iconElementLeft={<IconButton><ArrowLeft /></IconButton>}
                            style={{cursor: 'pointer'}}
                            onClick={this.handleClose}
                        />

                        {auth.isAuth() ?
                                <div>
                                    <MenuItem
                                        onTouchTap={this.handleClose}
                                        containerElement={<Link  activeClassName='active' to='/models'/>}
                                    >
                                        Модели
                                    </MenuItem>
                                    <MenuItem
                                        onTouchTap={this.handleClose}
                                        containerElement={<Link  activeClassName='active' to='/result'/>}
                                    >
                                        Результаты вычислений
                                    </MenuItem>

                                    <MenuItem
                                        onTouchTap={this.handleClose}
                                        containerElement={<Link  activeClassName='active' to='/passwordchange'/>}
                                        >
                                        Сменить пароль
                                    </MenuItem>
                                    <MenuItem
                                        onTouchTap={this.handleOpenLogout}
                                    >
                                        Выйти
                                    </MenuItem>
                                </div>
                                :<MenuItem
                                    onTouchTap={this.handleClose}
                                    containerElement={<Link  activeClassName='active' to='/login'/>}
                                    >
                                    Войти
                                </MenuItem>

                        }
                        <MenuItem
                            onTouchTap={this.handleClose}
                            containerElement={<Link  activeClassName='active' to='/docs'/>}
                        >
                            Документация
                        </MenuItem>
                    </Drawer>
                    <Logout
                        openModal={this.state.openLogout}
                        onConfirm={this.handleConfirmLogout}
                        onCancel={this.handleCancelLogout}
                    />
                    <Grid style={{paddingTop:20}}>
                        {this.props.children}
                    </Grid>
                </div>
        )
    }
    styles={
        container: {
            minHeight: '100%',
            boxSizing: 'border-box',
            marginBottom: '-100px',
            paddingBottom: '100px'
        },
        footer: {
            height: '100px',
            backgroundColor: '#eee',
            paddingTop: 35,
            //bottom:0
        },
        body: {
            //backgroundColor: '#eeeeee',
            height: '100%',
            //minHeight: 900
        }
    }
}
export default RouterComponent;