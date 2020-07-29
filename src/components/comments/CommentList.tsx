import React, {useState, useEffect} from 'react'
import './comment-list.scss';
import { db } from '../../firebase';
import SingleComment from './SingleComment';
import Pager from '../pager/Pager';

const CommentList: React.FunctionComponent<any> = () => {

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const expectedWidth = Math.floor(window.innerWidth / 500);
    console.log(window.innerWidth, expectedWidth);
    const perPage = expectedWidth > 3 ? 3 : expectedWidth;

    const getComments = async () => {
        try {
            setLoading(true);

           /*  
           db.collection("comments").add({ name: 'text'})
            db.collection("comments").doc('id').delete()
            db.collection("comments").doc('id').set({name:'UpdatedName'}) 
            */

            db.collection('comments').onSnapshot((querySnapshot) => {
                const fbComents:any = [];
                querySnapshot.forEach(comment => {
                    fbComents.push({...comment.data()});
                });
                console.log(fbComents);
                setComments(fbComents);
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
        <div className="comment-list">
            {loading && ' loading...'}
            <div className="comments">
                {
                    comments.length > 0 && comments.slice((page - 1) * perPage, (page - 1) * perPage + perPage).map((comment, index) => {
                        return <SingleComment comment={comment} key={index} />
                    })
                }
            </div>
            <div className="pager"> 
                <Pager page={page} perPage={perPage} size={comments.length} onPageChange={setPage} />
            </div>
        </div>
    );
};

export default CommentList;

