import * as React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { Autocomplete, Button, Container, TextField } from "@mui/material";
import sampleSongs from "../data/sampleSongs";
import { Song } from "../data/Song";
import MusicPlayer from "../components/MusicPlayer";

const trackNumber = Math.floor(Math.random() * sampleSongs.length);

const Home: NextPage = () => {
  const answer = sampleSongs[trackNumber];
  const [guess, setGuess] = React.useState<Song | null>(null);
  const [guessesUsed, setGuessesUsed] = React.useState(0);

  const handleSubmit = () => {
    if (guess == answer) {
      alert('Correct it was "' + answer.title + '" by ' + answer.artist);
    } else {
      setGuessesUsed(guessesUsed + 1);
    }
  };

  const handleSkip = () => {
    setGuessesUsed(guessesUsed + 1);
  };

  return (
    <Container>
      <Typography variant="h1" component="div" gutterBottom>
        Beardle
      </Typography>
      <MusicPlayer song={answer} guessesUsed={guessesUsed} />
      <Autocomplete
        disablePortal
        id="guess-box"
        options={sampleSongs}
        onChange={(event, value) => setGuess(value)}
        getOptionLabel={(song) => song.artist + " - " + song.title}
        sx={{ width: 800 }}
        renderInput={(params) => <TextField {...params} label="Guess" />}
      />
      <Button variant="outlined" onClick={handleSkip}>
        Skip
      </Button>
      <Button
        variant="contained"
        disabled={guess == null}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Home;
