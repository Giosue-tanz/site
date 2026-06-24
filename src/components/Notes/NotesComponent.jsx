import React from 'react';
import './Notes.css';
import VideoClip from '../../assets/carlos.mp4';
import NotesPoster from '../../assets/notes.jpg';
import NotesList from '../Noteslist/NotesList';

const NotesComponent = () => {
    return (
        <div className='notes-section'>
            <div className="notes-video-wrapper">
                <video
                    src={VideoClip}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster={NotesPoster}
                    className="notes-video"
                />
                <h1 className='title-notes'>
                    Notes
                </h1>
                <div className="title-line-n"></div>
            </div>
            <NotesList />
        </div>
    );
}

export default NotesComponent;

