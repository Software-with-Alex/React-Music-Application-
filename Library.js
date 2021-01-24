import React from 'react';
import LibrarySong from './LibrarySong';



const Library = ({songs, setCurrentSong, libraryStatus}) => {




    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (<LibrarySong 
               
                key={song.id}
                id={song.id} 
                songs={songs} 
                setCurrentSong={setCurrentSong}
                 song={song} />))}
            </div>
        </div>
    );
};





export default Library;