import React from 'react'
import Image from './children/image'
import styles from './styles'
import LikeButton from './children/like_button'
import Like from './children/likes/likes'
import Avatar from './children/Avatar/Avatar'
const App = (props) => {
  const { data } = props
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <Avatar data={data} />
        <section style={styles.likes}>
        <Like data={data} />
        <LikeButton />
        </section>
      </div>
    </main>
  )
}

export default App
