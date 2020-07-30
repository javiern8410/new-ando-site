import React from 'react';
import './avatar.scss';

const Avatar: React.FunctionComponent<any> = ({ name }) => {
    const getName = () => {
        return name
            .split(' ')
            .map( (item:any) => item.charAt(0) )
            .slice(0,2)
            .join('');
    }

    return (
            <div className='avatar'>
                <span>
                    {getName()}
                </span>
            </div>
    );
};

export default Avatar;
