import React from 'react';
import './Notes.css';
import VideoClip from '../../assets/video1.mp4'; 

const NotesComponent = () => {
    return (
        <div className='notes-section'>
            <video src={VideoClip} autoPlay loop muted />
            <h1 className='title-notes'>Notes</h1>
            <div className="title-line-n"></div>
        </div>
    );
}

export default NotesComponent;

