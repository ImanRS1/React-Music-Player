import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  song,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
