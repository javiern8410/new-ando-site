import React, {useState} from 'react'
import './comment-form.scss';
import { db } from '../../firebase'

const CommentForm: React.FunctionComponent<any> = () => {

    const initialComment = {
        name : '',
        email : '',
        comment: ''
    }

    const [comment, setComment] = useState(initialComment);
    const [loading, setLoading] = useState(false);

    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setComment({...comment, [name]: value});
    };

    const addComment = async (e:any) => {
        e.preventDefault();

        try {
            setLoading(true);
            await db.collection('comments').doc().set(comment);
            setLoading(false);
            setComment(initialComment);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    };

    return (
        <div className="comment-form">
            <h3>
                Deje su comentario
            </h3>
            <div>
                <input type="text" name="name" value={comment.name} className="form-control" id="inlineFormInput" placeholder="Nombre" onChange={handleChange} />
            </div>
            <div>
                <input type="text" name="email" value={comment.email} className="form-control" placeholder="Email"  onChange={handleChange} />
            </div>
            <div>
                <textarea name="comment" value={comment.comment} className="form-control" rows={3} placeholder="Commentario" onChange={handleChange}></textarea>
            </div>
            <div>
                <button 
                    className="btn btn-primary btn-block" 
                    onClick={addComment}
                    disabled={!comment.name || !comment.email || !comment.comment}
                >
                    {loading && <i className="fa fa-circle-o-notch fa-spin"></i>}
                    {loading ? 'Enviando' : 'Enviar'}
                </button>

            </div>
        </div>
    );
};

export default CommentForm;

