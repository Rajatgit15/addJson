

import React, { Component } from 'react';
import {connect} from 'react-redux'


class PostForm extends Component {

handleSubmit=(e)=>{
e.preventDefault()
let title = this.getTitle.value
let message = this.getMessage.value

const data= {
    id: new Date(),
    title,
    message,
    edit: false
}

this.props.dispatch({
    type:'ADD_POST',
    data
   
})
this.getTitle.value=""
this.getMessage.value=""
}

    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit = {this.handleSubmit}>
                    <input required type ="text" placeholder = "Enter post title" ref ={(input)=>this.getTitle= input}/><br/><br/>
                    <textarea required row="5" cols ="28" placeholder="Enter post" ref = {(input)=>this.getMessage= input}/><br/><br/>
                    <button>post</button>
                </form>
                
            </div>
        );
    }
}

export default connect()(PostForm);