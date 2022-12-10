import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import CircleIcon from '@mui/icons-material/Circle';
const Widgets = () => {
    const newsArticle = (heading, subtitles) =>
        <div className="widgets__article">
            <div className="widgets__left">
                <CircleIcon></CircleIcon>
            </div>
            <div className="widgets__right">
                <h4>
                    {heading}
                </h4>
                <p>
                    {subtitles}
                </p>
            </div>
        </div>

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>
                    Linkedin News
                </h2>
                <InfoIcon />
            </div>
            {newsArticle('10 Big Ideas that will shape 2023', 'Top news • 21,994 readers')}
            {newsArticle('PepsiCo laying off hundreds', '2d ago • 36,805 readers')}
            {newsArticle('UPI dominates digital payments', '3d ago • 36,85 readers')}
            {newsArticle('More Indian students head to Australia', '1d ago • 426 readers')}


        </div>
    )
}

export default Widgets