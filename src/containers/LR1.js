import React, { Component } from 'react';
import UploadPreview from 'material-ui-upload/UploadPreview';
// import imageToAscii from 'image-to-ascii'
class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            pictures: []
        }
    }
    onChange = (pictures) => this.setState({ pictures });
// The path can be either a local path or an url

    render() {
        var pictures = this.state.pictures;
        for (var property in pictures) {
            window.Jimp.read(pictures[property], function (err, image) {
                console.log(image);
                console.log(image.getPixelColor(0, 0));
                console.log(image.getPixelColor(1, 1));
            });
        }
        return (
            <UploadPreview
                title="Picture"
                label="Add"
                initialItems={this.state.pictures}
                onChange={this.onChange}
            />
        );
    }
}

export default MyComponent