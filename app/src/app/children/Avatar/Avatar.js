import React from 'react';
import styles from './style';
import Comments from '../Comments/Comments';
const Avatar = ({data}) => {
    return (
        <div style={styles.section}>
            <div style={styles.avatar_bio}>
            <img style={styles.avatar} src={data.owner.profile_pic_url} />
            <div style={styles.avatar_meta}>
                <strong><span>{data.owner.full_name}</span></strong>
                <span style={styles.avatar_location}>{data.location.name}</span>
            </div>
            </div>
            <Comments data={data}  />
        </div>
    );
};

export default Avatar;