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
                            <div className="mui--text-headline">КСАМ</div>
                            <div className="mui--text-body1">Комплекс инструментальных средств анализа моделей доступа к базам данных</div>
                        </Col>
                        <Col xs="12" md="12" lg="6" xl="6">
                            <div className="mui--text-headline">Разработали</div>
                            <Col style={{flexDirection:'row'}}>
                                <a style={{ color:'white', textDecoration: 'none'}}>Концепция: </a>
                                <a style={{color:'#bcaaa4', textDecoration: 'none'}}>д.т.н, проф. Григорьев Ю.А.</a>
                            </Col>
                            <Col style={{flexDirection:'row'}}>
                                <a style={{ color:'white', textDecoration: 'none'}}>Математическая модель: </a>
                                <a style={{color:'#bcaaa4', textDecoration: 'none'}}>к.т.н. Ермаков Е.Ю.</a>
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
