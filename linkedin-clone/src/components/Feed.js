import React, { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WorkIcon from '@mui/icons-material/Work';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
const Feed = () => {
    const user = useSelector(selectUser)
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState("")

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })
    }, [])
    const sendPost = (e) => {
        e.preventDefault()
        // setPosts(...posts)
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
        document.activeElement.blur();
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Post</button>
                    </form>

                </div>
                <div className="feed__inputOptions">
                    <InputOption title='Photo' Icon={ImageIcon} color='#70b5f9' />
                    <InputOption title='Video' Icon={YouTubeIcon} color='#5F9B41' />
                    <InputOption title='Job' Icon={WorkIcon} color='#A872E8' />
                    <InputOption title='Write article' Icon={NewspaperOutlinedIcon} color='#E16745' />
                </div>
            </div>
            <FlipMove>
                {
                    posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    ))

                }

            </FlipMove>

        </div>
    )
}

export default Feed
