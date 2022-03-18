import { PlayCircle, Stop } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import * as React from "react";
import secondsPerGuess from "../data/secondsPerGuess";
import { Song } from "../data/Song";

export interface MusicPlayerProps {
  guessesUsed: number;
  song: Song;
}

const MusicPlayer: React.VFC<MusicPlayerProps> = (props: MusicPlayerProps) => {
  const [playing, setPlaying] = React.useState(false);
  const [audio] = React.useState(
    typeof Audio !== "undefined"
      ? new Audio("./" + props.song.fileName)
      : undefined
  );

  const handlePlay = () => {
    if (!playing) {
      setPlaying(true);
      if (audio != null) {
        audio.play();
      }
    }
  };

  const handleStop = () => {
    if (playing) {
      setPlaying(false);
      if (audio != null) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(
      handleStop,
      secondsPerGuess[props.guessesUsed] * 1000
    );
    return () => clearTimeout(timer);
  }, [handlePlay]);

  return (
    <>
      {!playing && (
        <IconButton onClick={handlePlay}>
          <PlayCircle />
        </IconButton>
      )}
      {playing && (
        <IconButton onClick={handleStop}>
          <Stop />
        </IconButton>
      )}
    </>
  );
};

export default MusicPlayer;
