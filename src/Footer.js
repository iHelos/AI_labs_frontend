'use strict';

import React from 'react';
import { cyan500 } from 'material-ui/styles/colors';
import Grid from "muicss/lib/react/container";

import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

export default class Footer extends React.Component {
    render(){
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs="12" md="12" lg="6" xl="6">
                            <div className="mui--text-headline">Лабораторные работы по курсу:</div>
                            <div className="mui--text-body1">Проектирование интеллектуальных систем</div>
                            <a href="https://github.com/iHelos/AI_labs_frontend" style={{color:'#bcaaa4', textDecoration: 'none'}}>Фронтенд</a>
                        </Col>
                        <Col xs="12" md="12" lg="6" xl="6">
                            <div className="mui--text-headline">Разработали</div>
                            <Col style={{flexDirection:'row'}}>
                                <a style={{ color:'white', textDecoration: 'none'}}>Преподаватель: </a>
                                <a style={{color:'#bcaaa4', textDecoration: 'none'}}>Декан Факультета информатики и систем управления, к.т.н., доцент.</a>
                                <a style={{color:'#bcaaa4', textDecoration: 'none'}}><br/>Филиппович А.Ю.</a>
                            </Col>
                            <Col style={{flexDirection:'row'}}>
                                <a style={{ color:'white', textDecoration: 'none'}}>Веб-приложение: </a>
                                <a style={{color:'#bcaaa4', textDecoration: 'none'}}>Ермаков О.Ю. и Паничкина А.А.</a>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
    styles={
        footers: {
            height: '100px',
            paddingTop: 35,
            backgroundColor: 'red'
        }
    }
}
