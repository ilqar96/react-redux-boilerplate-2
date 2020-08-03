import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPost} from '../actions';

class Listitem extends Component {
    componentDidMount() {
        this.props.fetchPost();
    }

    render() {
        const {posts} = this.props;
        return (
            <div className="row">
                <div className="col-8 offset-2">
                    <div className="list-group mt-3">
                        {posts.length > 0 &&
                        posts.map((post)=>(
                            <div key={post.id} className="list-group-item list-group-item-action mb-2">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{post.title}</h5>
                                    {/*<small>3 days ago</small>*/}
                                </div>
                                <p className="mb-1">{post.body}</p>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

const mapDispatchToProps = () => {
    return {
        fetchPost
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(Listitem);
