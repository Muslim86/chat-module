import React from 'react';

import style from './ArrowToBottom.module.css';

type ArrowToBottomProps = {
  id: string;
};

const ArrowToBottom: React.FC<ArrowToBottomProps> = (props) => {
    const { id } = props;

    return (
        <a href={`#${id}`} className={style.component}>
            <img
                src="https://cdn-icons.flaticon.com/png/512/3889/premium/3889508.png?token=exp=1647713742~hmac=b27f8c49618c32c5c6bb5982d4055d79"
                alt=""/>
        </a>
    );
};

export default ArrowToBottom;