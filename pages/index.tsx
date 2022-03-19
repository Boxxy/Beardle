import * as React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { Autocomplete, Button, Container, TextField } from "@mui/material";
import sampleSongs from "../data/sampleSongs";
import { Song } from "../data/Song";
import MusicPlayer from "../components/MusicPlayer";
import GuessArea from "../components/GuessArea";

const trackNumber = Math.floor(Math.random() * sampleSongs.length);

const Home: NextPage = () => {
  const answer = sampleSongs[trackNumber];
  const [guess, setGuess] = React.useState<Song | null>(null);
  const [guesses, setGuesses] = React.useState(["", "", "", "", "", ""]);
  const [guessesUsed, setGuessesUsed] = React.useState(0);

  function handleLoss() {
    alert('Oof it was "' + answer.title + '" by ' + answer.artist);
  }

  const handleSubmit = () => {
    if (guess == answer) {
      alert('Correct it was "' + answer.title + '" by ' + answer.artist);
    } else if (guess != null) {
      const newGuesses = [...guesses];
      newGuesses[guessesUsed] = guess.artist + " - " + guess.title;
      setGuesses(newGuesses);
      setGuessesUsed(guessesUsed + 1);
      if (guessesUsed > 5) {
        handleLoss();
      }
    }
  };

  const handleSkip = () => {
    const newGuesses = [...guesses];
    newGuesses[guessesUsed] = "SKIPPED";
    setGuesses(newGuesses);
    setGuessesUsed(guessesUsed + 1);
    if (guessesUsed > 5) {
      handleLoss();
    }
  };

  return (
    <Container>
      <Typography variant="h1" component="div" gutterBottom>
        Beardle
      </Typography>
      <GuessArea guesses={guesses} />
      <MusicPlayer song={answer} guessesUsed={guessesUsed} />
      <Autocomplete
        disablePortal
        id="guess-box"
        options={sampleSongs.sort((a: Song, b: Song) => {
          if (a.artist < b.artist) {
            return -1;
          }
          if (a.artist > b.artist) {
            return 1;
          }
          return 0;
        })}
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
