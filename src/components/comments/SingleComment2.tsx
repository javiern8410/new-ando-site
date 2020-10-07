import React from 'react'
import './single-comment.scss';
import Avatar from '../avatar/Avatar'

const SingleComment: React.FunctionComponent<any> = ({ comment }) => {

    return (
        <div className="comment-card">
            <div className="avatar-container">
                <Avatar name={comment.name} />
            </div>
            <div className="container">
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <p>
                     {comment.comment}
                </p>
            </div>                
            <div className="user-info">
                <h5>
                    {comment.name}
                </h5>
                <div className="email">
                    {comment.email}
                </div>
            </div>
        </div>
    );
};

export default SingleComment;

