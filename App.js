import React, {useState} from 'react';
import Player from './components/Player';
import Song from './components/Song';
import "./styles/app.scss";
import data from './util';
import Library from './components/Library';
import Nav from './components/Nav';


function App() {
  const [songs,setSongs] = useState(data());
  

  const [currentSong, setCurrentSong] = useState(songs[0]);

const [isPlaying, setIsPlaying] = useState(false);
const [libraryStatus, setLibraryStatus] = useState(false)

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}  />
      <Song currentSong={currentSong} />
      <Player 
      setCurrentSong={setCurrentSong}
      songs={songs}
      isPlaying={isPlaying} 
      setIsPlaying={setIsPlaying} 
      currentSong={currentSong} />
      <Library 
       libraryStatus={libraryStatus}
      songs={songs} 
      setCurrentSong={setCurrentSong}/>
      
    </div>
  );
}

export default App;
