import React, {Component} from 'react';
import {addPost} from '../actions';
import {connect} from "react-redux";

class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:'',
        }
    }

    onChange = e =>{
        this.setState({  [e.target.name]:e.target.value  })
    }

    onSubmit = e =>{
        e.preventDefault();

        let post = {
            title:this.state.title,
            body:this.state.body
        }

        this.props.addPost(post);
    }

    render() {
        return (
            <div className='row'>
                <div className="col-8 offset-2">
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input onChange={this.onChange} value={this.state.title} name='title' type="text" className="form-control" id="title" aria-describedby="title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <textarea onChange={this.onChange} className="form-control"  name="body" id="body" cols="15" rows="5" value={this.state.body} />
                        </div>
                        <button type="submit" name='submit' className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = () => {
    return {
        addPost
    };
};

export default connect(
    null,
    mapDispatchToProps(),
)(AddPost);
