import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={props.photoUrl}>{props.description[0]}</Avatar>
                <div className="post__info">
                    <h2>
                        {props.name
                        }
                    </h2>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
            <div className="post__body">
                <p>
                    {props.message}
                </p>
            </div>
            <div className="post__buttons">
                <InputOption title='Like' Icon={ThumbUpAltOutlinedIcon} />
                <InputOption title='Comment' Icon={CommentOutlinedIcon} />
                <InputOption title='Share' Icon={ShareOutlinedIcon} />
                <InputOption title='Send' Icon={SendOutlinedIcon} />
            </div>

        </div>
    )
})

export default Post