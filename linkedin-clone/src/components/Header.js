import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase'
import { Avatar } from '@mui/material'

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const logoutApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className='header'>
            <div className="header__left">
                <img src="images/linkedin.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="Network" />
                <HeaderOptions Icon={WorkIcon} title="Jobs" />
                <HeaderOptions Icon={InsertCommentIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notification" />
                <div onClick={logoutApp}>
                    {/* <img src="/images/pic.jpg" className='headerOption__icon' alt="" /> */}
                    <Avatar src={user?.photoUrl} className='headerOption__icon'>  {user?.email[0]}
                    </Avatar>
                    <HeaderOptions title={user?.displayName} />
                </div>

            </div>
        </div>
    )
}

export default Header
