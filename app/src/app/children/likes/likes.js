import React from 'react';

const Likes = (props) => {
    const {data} = props
    return (
        <div>
            <strong>{data.edge_media_preview_like.count} likes</strong>
        </div>
    );
};

export default Likes;