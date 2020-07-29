import React from 'react'
import './single-comment.scss';

const SingleComment: React.FunctionComponent<any> = ({ comment }) => {

    return (
        <div className="comment-card">
            <div className="avatar">
                <img src={`https://ui-avatars.com/api/?name=${comment.name}&bold=true&background=0D8ABC&color=fff&rounded=true&size=80`} alt={comment.name} />
            </div>
            <div className="container">
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

