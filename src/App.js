'use strict';

import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import ModelTree from './tree/app'
import converter from './data/dataConvertation'
import clean from './data/modelCleaner'
import model from './utils/model'
import const_data from './tempdata/data'
import {HotKeys} from 'react-hotkeys';

const map = {
    'save': ['ctrl+s']
};

class Main extends React.Component{
    findModelById(id) {
        let data = localStorage.models;
        if (data) {
            data = JSON.parse(data)[id];
        }
        return data
    }
    constructor(props) {
        super(props);
        this.state = {data: {}};
    }
    componentWillMount(){
        // this.setState({
        //     data: this.findModelById(this.props.params.modelId)
        // })
    }

  render(){
    // let data = localStorage.getItem('model');
    // if (data == null) {
    //     let retrievedObject = const_data;
    //     //data = JSON.parse(retrievedObject);
    //     data = converter(retrievedObject);
    //     localStorage.setItem('model', JSON.stringify(data));
    // } else {
    //     data = JSON.parse(data);
    // }

      let data=this.findModelById(this.props.params.modelId);
    return (
    <HotKeys keyMap={map}>
        <div>
            {data ?
                <ModelTree data={data} onDataSave={onDataSave} />
                :<div style={{padding:10, fontSize:24}}>Модель не найдена</div>
            }
        </div>
    </HotKeys>
    )
  }
}

function onDataSave(data){
    //let copy_model=JSON.parse(JSON.stringify(model));        //чтобы не повлиять на текущее отображение пользователя
    clean(data);
    //localStorage.setItem('model', JSON.stringify(model));
    model.saveModel(data.id, data)
}

export default Main;