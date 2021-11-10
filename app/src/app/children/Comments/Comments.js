import React from 'react';
import styles from '../Comments/styles';
import UnlikedIcon from '../like_button/children/unliked_icon';
const Comments = ({data}) => {
    return (
        <section>
        <div style={styles.commentBox}>
          {data.edge_media_to_comment.edges.map((data)=>{
              return (<li style={styles.comments} key={data.node.id}>
                        <strong>{data.node.owner.username}</strong>
                        &nbsp; {data.node.text}
                        &nbsp;
                        <Link to="#" style={styles.anchor}>
                          <UnlikedIcon />
                        </Link>
                      </li>)
          })}
        </div>
        </section>
    );
};

export default Comments;