import React from 'react';
import styles from './style';
import Comments from '../Comments/Comments';
const Avatar = ({data}) => {
    return (
        <div style={styles.section}>
            <img style={styles.avatar} src={data.owner.profile_pic_url} />
            <Comments data={data}  />
        </div>
    );
};

export default Avatar;