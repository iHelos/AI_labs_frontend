'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {cyan500, blueGrey500, blueGrey700, grey400, pinkA200, grey100, grey500, teal500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Navigator from './Router'
import Footer from './Footer'

const muiTheme = getMuiTheme({
    palette: {
        textColor: blueGrey500,
        primary1Color: blueGrey500,
        primary2Color: blueGrey700,
        primary3Color: grey400,
        accent1Color: teal500,
        accent2Color: grey100,
        accent3Color: grey500,
    },
    appBar: {
        height: 50,
    },
});
class TreeExample extends React.Component {
    render(){
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Navigator/>
            </MuiThemeProvider>
        );
    }
}

const content = document.getElementById('root');
ReactDOM.render(<TreeExample/>, content);

const footer = document.getElementById('footer');
ReactDOM.render(<Footer/>, footer);