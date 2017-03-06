import React, { Component } from 'react';
import UploadPreview from 'material-ui-upload/UploadPreview';
var Dropzone = require('react-dropzone');
// import imageToAscii from 'image-to-ascii'

var Jimp = window.Jimp;
class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
            showpictures: []
        }
    }
    onChange = (pictures) => this.setState({ pictures });
// The path can be either a local path or an url

    onDrop= function (acceptedFiles) {
        var new_files = [];
        for (var file of acceptedFiles){
            let img = file.preview;
            Jimp.read(img, function (err, image) {
                let w = image.bitmap.width; // the width of the image
                let h = image.bitmap.height; // the height of the image

                let width = image.bitmap.width; // the height of the image
                let height = image.bitmap.height; // the height of the image

                let k = 1;
                for(let i = 1; height<250; i++){
                    height=h*i;
                    width=w*i;
                    k = i;
                }

                let new_img = new Jimp(width,height, 0xFFFFFFFF, function (err, new_img){
                    let i_max = image.bitmap.width;
                    let j_max = image.bitmap.height;
                    console.log("NEW_WIDTH:" + width);
                    console.log("NEW_HEIGHT:" + height);
                    console.log("k:" + k);
                    for(let i=0; i<i_max; i++){
                        for (let j=0; j<j_max; j++){
                            let col = image.getPixelColor(i, j);
                            console.log(col);
                                let i_delt = i*k;
                                let j_delt = j*k;
                                    for(let ind = i_delt; ind < i_delt+k && ind<height-1; ind++) {
                                        for (let jind = j_delt; jind < j_delt+k && jind<width-1; jind++) {
                                            console.log("x:" + ind + " y:"+jind + " col:" + col);
                                            new_img.setPixelColor(col, ind, jind);
                                        }
                                    }

                            }
                        }
                    new_img.getBase64( Jimp.MIME_PNG, (err, data) =>{
                        let arr = this.state.showpictures;
                        arr.push(data);
                        this.setState({showpictures:arr})
                    });
                }.bind(this));
            }.bind(this));
        }

        this.setState({
            pictures: acceptedFiles
        });
};


    render() {
        var pictures = this.state.pictures;
        for (var pic of pictures) {
            window.Jimp.read(pic.preview, function (err, image) {
                console.log(image);
                console.log(image.getPixelColor(0, 0));
                console.log(image.getPixelColor(1, 1));
            });
        }
        return (
            <div>
                <Dropzone onDrop={this.onDrop.bind(this)}>
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