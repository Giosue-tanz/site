import React, { useEffect, useRef } from 'react';
import './Notes.css';
const VideoClip = '/video/carlos.mp4';
import NotesList from '../Noteslist/NotesList';

const NotesComponent = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.log("Video play error:", e));
        }
    }, []);
    return (
        <div className='notes-section'>
            <div className="notes-video-wrapper">
                <video
                    ref={videoRef}
                    src={VideoClip}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
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

