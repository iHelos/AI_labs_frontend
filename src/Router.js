'use strict';

import React from 'react';
import {cyan500, blueGrey500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

import Home from './containers/Home'
import NotFound from './containers/NotFound'
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Grid from "muicss/lib/react/container";

import LR1 from "./containers/LR1"

class RouterComponent extends React.Component{

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
                    <Route path='LR1' component={LR1} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
      }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});
    render() {
        return (
                <div>
                    <AppBar
                        title={<Link  activeClassName='active'  style={{color:'white', textDecoration: 'none'}} to='/'>КСАМ 2.0</Link>}
                        onLeftIconButtonTouchTap={this.handleToggle}
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


                        <MenuItem
                            onTouchTap={this.handleClose}
                            containerElement={<Link  activeClassName='active' to='/LR1'/>}
                        >
                            ЛР1 (NN-1: Персептрон)
                        </MenuItem>
                        <MenuItem
                            disabled = {true}
                            onTouchTap={this.handleClose}
                            containerElement={<Link  activeClassName='active' to='/LR2'/>}
                        >
                            ЛР2
                        </MenuItem>
                        <MenuItem
                            disabled = {true}
                            onTouchTap={this.handleClose}
                            containerElement={<Link  activeClassName='active' to='/LR3'/>}
                        >
                            ЛР3
                        </MenuItem>
                        <MenuItem
                            disabled = {true}
                            onTouchTap={this.handleClose}
                            containerElement={<Link  activeClassName='active' to='/LR4'/>}
                        >
                            ЛР4
                        </MenuItem>
                        <MenuItem
                            disabled = {true}
                            onTouchTap={this.handleClose}
                            containerElement={<Link  activeClassName='disabled' to='/LR5'/>}
                        >
                            ЛР5
                        </MenuItem>
                        <MenuItem
                            disabled = {true}
                            onTouchTap={this.handleClose}
                            containerElement={<Link  activeClassName='active' to='/LR6'/>}
                        >
                            ЛР6
                        </MenuItem>
                        <MenuItem
                            disabled = {true}
                            onTouchTap={this.handleClose}
                            containerElement={<Link  activeClassName='active' to='/LR7'/>}
                        >
                            ЛР7
                        </MenuItem>
                        <MenuItem
                            disabled = {true}
                            onTouchTap={this.handleClose}
                            containerElement={<Link  activeClassName='active' to='/LR8'/>}
                        >
                            ЛР8
                        </MenuItem>

                    </Drawer>

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