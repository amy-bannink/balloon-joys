import React, {Component} from 'react';
import axios from 'axios';

class Profile2 extends Component {
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
//2.moet dit naar mijn backend of een andere database?
        axios.post('', fd, {
            onUploadProgress: progressEvent => {
                console.log('Upload progress:' + Math.round(progressEvent.loaded / progressEvent.total* 100) + '%')
            }
        })
            .then(res => {
                console.log(res);
            });
    }
    render() {
        return (
            <div className={'profile-image-upload'}>
                <input style= {{display: 'none'}}
                       type={"file"}
                       onChange={this.fileSelectedHandler}
                ref={fileInput => this.fileInput = fileInput}/>
                <button onClick={() => this.fileInput.click()}>Pick File</button>
                <button onClick={this.fileUploadHandler}>Upload</button>
{/*3.Display image*/}
            </div>
        );
    }
}

export default Profile2;