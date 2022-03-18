import {
  Box,
  Card,
  CardContent,
  generateUtilityClasses,
  Typography,
} from "@mui/material";
import * as React from "react";

export interface GuessAreaProps {
  guesses: string[];
}

function buildCard(guess: string) {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Typography>{guess}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

const GuessArea: React.VFC<GuessAreaProps> = (props: GuessAreaProps) => {
  return <Box>{props.guesses.map((guess) => buildCard(guess))}</Box>;
};

export default GuessArea;
