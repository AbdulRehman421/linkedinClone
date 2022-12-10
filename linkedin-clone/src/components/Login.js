import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase'
import './Login.css'
import { login } from '../features/userSlice'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const dispatch = useDispatch()
    const register = () => {
        if (!name) {
            alert("Please enter Full Name")
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: url,
            })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: url,

                    }))
                })

        }).catch(err => alert(err))
    }
    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))

            })
            .catch(err => alert(err))
    }
    return (
        <div className="login">
            <img src="/images/linkedin.svg" alt="" />
            <form>
                <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required for new users)" />
                <input type='text' value={url} onChange={e => setUrl(e.target.value)} placeholder="Profile pic URL (optional)" />
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type='submit' onClick={loginToApp}>
                    Sign In
                </button>
            </form>
            <p>
                Not a member ? {' '}
                <span className='login__register' onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login