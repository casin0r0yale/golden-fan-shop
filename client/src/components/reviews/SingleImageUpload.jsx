import React from 'react';

class SingleImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    }
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.upload = this.upload.bind(this);
  }

  uploadSingleFile(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  upload(event){
    event.preventDefault()
    console.log(this.state.file);
  }
  render() {
    let imgPreview;
    if(this.state.file) {
      imgPreview = <img src={this.state.file} alt="" />;
    }

    return (
      <div>
        {imgPreview}
        <input type="file" onChange={this.uploadSingleFile}/>
        <button onClick={this.upload}>Upload</button>
      </div>
    )
  }

}

// const SingleImageUpload = (props) => {

//   let imgPreview;
//   const [file, setFile] = useState(null);
//   const uploadSingleFile = (event) => {
//     setFile(URL.createObjectURL(event.target.files[0]))
//     imgPreview = file;
//   }
//   const upload = (event) => {
//     event.preventDefault();
//     console.log(file);
//   }



//   return (
//     <div>
//       {(file !== null) ? <img src={imgPreview} alt="" /> : null}
//       <input type="file" onChange={uploadSingleFile}/>
//       <button onClick={upload}>Upload</button>
//     </div>
//   )
// }

export default SingleImageUpload;