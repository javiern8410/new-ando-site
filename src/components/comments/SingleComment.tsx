import React from 'react'
import './single-comment.scss';
import Avatar from '../avatar/Avatar'

const SingleComment: React.FunctionComponent<any> = ({ comment }) => {

    return (
        <div className="comment-card" data-aos="flip-left">
            <div className="container">
                <div>
                    <i className="fa fa-quote-left fa-lg" aria-hidden="true"></i>
                </div>
                <p>
                     {comment.comment}
                </p>
                <div style={{textAlign: 'right'}}>
                    <i className="fa fa-quote-right fa-lg" aria-hidden="true"></i>
                </div>
            </div>                
            <div className="user-info">
                <div>
                    <Avatar name={comment.name} />
                </div>
                <div>
                    <div className="username">
                        {comment.name}
                    </div>
                    <div className="email">
                        {comment.email}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleComment;

