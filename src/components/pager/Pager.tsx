import React from 'react'
import './pager.scss';

export interface PagerProps {
    page: number;
    size: number;
    perPage: number;
	onPageChange: Function;
}

const SingleComment: React.FunctionComponent<PagerProps> = ({ page, perPage, size, onPageChange }) => {

    const setMaxPage = (Math.ceil(size / perPage));

    return (
        <div className="pager">
            {
                Array(setMaxPage)
                    .fill(0)
                    .map((x, i) => (
                        <span
                            key={i}
                            onClick={() => onPageChange(i + 1)}
                        >
                            <i className={`fa fa-circle fa-lg pager-icon ${i === (page-1) && 'active'}`}></i>
                        </span>
                    ))
            }
        </div>
    );
};

export default SingleComment;

