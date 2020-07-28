import React, {useState, useEffect} from 'react'
import './comment-form.scss';
import { db } from '../../firebase'

const CommentList: React.FunctionComponent<any> = () => {

    const [comments, setComments] = useState([{name: '', email: '', comment: ''}]);
    const [loading, setLoading] = useState(false);


    const getComments = async () => {
        try {
            setLoading(true);
            db.collection('comments').onSnapshot((querySnapshot) => {
                const fbComents:any = [];
                querySnapshot.forEach(comment => {
                    fbComents.push({...comment.data()});
                });
                setComments(fbComents);
                console.log(fbComents);
            })
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <div className="comment-form">
            <div>
                <h2>What People Say</h2> 
                {loading && ' loading...'}
                <ul>
                {comments.length > 0 && comments.map((comment, index) => (
                    <li key={index}>{comment.name} - {comment.email}</li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default CommentList;

