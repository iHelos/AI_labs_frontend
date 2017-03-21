import React, { Component } from 'react';
const Dropzone = require('react-dropzone');
const Papa = require('papaparse');
import Perseptron from './perseptron'
// import imageToAscii from 'image-to-ascii'

//var Jimp = window.Jimp;
let parseInput = function(input) {
    input.splice(0,1); //remove header

    let x_train = [];
    let y_train = [];
    let y_train_short = [];
    for (let el of input) {
        let y_elem = new Array(10);
        y_elem.fill(0);
        let ind = el.splice(0,1)[0];
        y_train_short.push(ind);
        y_elem[ind] = 1;
        y_train.push(y_elem);
        let x_format = [];
        for (let x of el) {
            x_format.push(x /= 255);
        }
        x_train.push(x_format);
    }
    //console.log(y_train);
    //console.log(x_train);
    let predictSize = x_train.length * 0.1;
   // let predictSize = 100;
    let x_predict  = x_train.splice(0,predictSize);
    let y_predict = y_train.splice(0,predictSize);
    let y_predict_short =  y_train_short.splice(0,predictSize);
    //console.log(y_predict_short);
    //console.log(x_train)
    let pers = new Perseptron(x_train[0].length);
    pers.fit(x_train, y_train, 10, 0.01);
    let predictionValues = pers.predict(x_predict);
    console.log(predictionValues)

};
class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
            showpictures: []
        }
    }
    onChange = (pictures) => this.setState({ pictures });

    onDrop = function (acceptedFiles) {
        var new_files = [];
        for (var file of acceptedFiles){
            console.log("Started parsing:", file);

            Papa.parse(file, {
                download: false,
                dynamicTyping: true,
                //worker: true,
                //fastmode:true,
                complete: function(results) {
                    console.log("Parsing complete:", results);
                    parseInput(results.data);
                },
                // step: function(results, parser) {
                //    // console.log("Row data:", results.data);
                //    // console.log("Row errors:", results.errors);
                //     let data = results.data;
                //     y_train.push(data.splice(1,1));
                //     x_train.push(data);
                // },
                error: function(err, file){
                    console.log("Parsing err:", err);
                }

            });


        }

        this.setState({
            pictures: acceptedFiles
        });
};


    render() {

        var pictures = this.state.pictures;
        return (
            <div>
                <Dropzone onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
                {this.state.pictures.length > 0 ? <div>
                    <h2>Uploading {this.state.pictures.length} files...</h2>
                    <div>{this.state.showpictures.map((file) => <img src={file} /> )}</div>
                </div> : null}
            </div>
        );
    }
}

export default MyComponent