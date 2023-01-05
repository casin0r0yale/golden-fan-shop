import React from 'react';
var cl = new cloudinary.Cloudinary({cloud_name: "dohu1qlnn", secure: true});

class ImageUpload extends React.Component {
  fileObj = [];
  fileArray = [];
  constructor(props) {
    super(props);
    this.state = {
      file: [null],
      uploaded: false
    }
    this.uploadMulitpleFiles = this.uploadMulitpleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  uploadMulitpleFiles(files) {
    const formData = new FormData();
    // this.fileObj.push(event.target.files);
    // for (var i = 0; i < this.fileObj[0].length; i++) {
    //   this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    // }
    // this.setState({
    //   file: this.fileArray
    // })
  }

  uploadFiles(event){
    event.preventDefault()
    var images = this.state.file
    this.props.handleImages(images);
    this.setState({uploaded: true});
  }

  render() {
    return (
      <div className="image-upload-buttons" data-testid="image-upload-buttons">
        <div className="review-images">
          {(this.fileArray || []).map(url => (
              <img key={url} className="review-image-thumbnail" src={url} alt="..." />
          ))}
        </div>
        {(this.fileArray.length < 5) ? <input type="file" onChange={(event) => {
          this.uploadMulitpleFiles(event.target.files)
        }} multiple/> : null}
        <br></br>
        <button className="upload-button"type="button" onClick={this.uploadFiles}>{(this.state.uploaded) ? "Uploaded" : "Upload" }</button>
      </div>
    )
  }

}

export default ImageUpload;