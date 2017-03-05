'use strict';

import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import RaisedButton from 'material-ui/RaisedButton';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

class Main extends React.Component{

    render(){

        return (
            <div style={{margin: '0 auto'}}>
                <div style={{margin:20, textAlign: 'center'}}>
                    <div className="mui--text-display1" style={{textAlign:'center', color: '#90a4ae'}}>Комплекс инструментальных средств анализа моделей доступа к базам данных</div>
                    {/*<img src="https://s-media-cache-ak0.pinimg.com/736x/6a/54/96/6a5496224ebb590cf6398f8349efd7d4.jpg" />*/}
                    <RaisedButton
                        label="Создать модель"
                        primary={true}
                        style={{margin:20, textAlign: 'center'}}
                        containerElement={<Link  activeClassName='active' to='/models'/>}
                    />
                </div>
                <Row>
                    <Col xs="12" md="12" lg="4" xl="4">
                        <div className="mui--text-headline mui--text-black">Ввод данных модели</div>
                        <div className="mui--text-body1 mui--text-black">Описание схемы базы данных и наполнения базы данных, запросов и транзакций РСОД, топологии и характеристик узлов, параметров сетей, распределения таблиц (с учетом тиражирования) и транзакций по узлам РСОД, интенсивностей обращений рабочих станций к транзакциям</div>
                    </Col>
                    <Col xs="12" md="12" lg="4" xl="4">
                        <div className="mui--text-headline mui--text-black">Моделирование</div>
                        <div className="mui--text-body1 mui--text-black">Оценка времени выполнения запросов в распределенной системе обработки данных на базе концептулального и технического проектов с учетом варьируемых переменных</div>
                    </Col>
                    <Col xs="12" md="12" lg="4" xl="4">
                        <div className="mui--text-headline mui--text-black">Анализ результатов</div>
                        <div className="mui--text-body1 mui--text-black">Решение прямой и обратной задачи проектирования исследованной системы: поиск узких мест, оценка влияния отдельных запросов на быстродействие системы в целом, поиск локального оптимума с учетом заданных ограничений</div>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Main;