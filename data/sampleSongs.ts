import { Song } from "./Song";

const sampleSongs: Song[] = [
  {
    fileName: "why.mp3",
    artist: "Moby",
    title: "Why Does My Heart Feel So Bad",
  },
  { fileName: "lost.mp3", artist: "Beck", title: "Lost Cause" },
  { fileName: "nude.mp3", artist: "Radiohead", title: "Nude" },
  {
    fileName: "lights.mp3",
    artist: "Journey",
    title: "Lights",
  },
  {
    fileName: "ride.mp3",
    artist: "Bachman-Turner Overdrive",
    title: "You Ain't Seen Nothing Yet",
  },
  {
    fileName: "honey.mp3",
    artist: "Father John Misty",
    title: "I Love You, Honeybear",
  },
  {
    fileName: "losing.mp3",
    artist: "R.E.M.",
    title: "Losing My Religon",
  },
  {
    fileName: "down.mp3",
    artist: "John Mellencamp",
    title: "Crumblin' Down",
  },
  {
    fileName: "rich.mp3",
    artist: "Daryl Hall & John Oates",
    title: "Rich Girl",
  },
  {
    fileName: "laz.mp3",
    artist: "David Bowie",
    title: "Lazarus",
  },
  {
    fileName: "dimples.mp3",
    artist: "John Leee Hooker",
    title: "Dimples",
  },
  {
    fileName: "world.mp3",
    artist: "Weezer",
    title: "The World Has Turned And Left Me Here",
  },
  {
    fileName: "dreams.mp3",
    artist: "The Cranberries",
    title: "Dreams",
  },
  {
    fileName: "jones.mp3",
    artist: "Counting Crows",
    title: "Mr. Jones",
  },
  {
    fileName: "done.mp3",
    artist: "Barenaked Ladies",
    title: "It's All Been Done",
  },
  {
    fileName: "twin.mp3",
    artist: "Angelo Badalamenti",
    title: "Twin Peaks Theme",
  },
  {
    fileName: "waiting.mp3",
    artist: "Zero 7",
    title: "In The Waiting Line",
  },
  {
    fileName: "love.mp3",
    artist: "Mineral",
    title: "Love Letter Typewriter",
  },
  {
    fileName: "ele.mp3",
    artist: "MGMT",
    title: "Electric Feel",
  },
  {
    fileName: "pity.mp3",
    artist: "George Harrison",
    title: "Isn't It A Pity",
  },
  {
    fileName: "sing.mp3",
    artist: "Jon Hopkins",
    title: "Singularity",
  },
  {
    fileName: "ohio.mp3",
    artist: "Hawthorne Heights",
    title: "Ohio Is For Lovers",
  },
  {
    fileName: "weather.mp3",
    artist: "Fishmans",
    title: "Weather Report",
  },
  {
    fileName: "shake.mp3",
    artist: "Taylor Swift",
    title: "Shake It Off",
  },
  {
    fileName: "man.mp3",
    artist: "Michael Jackson",
    title: "Man In The Mirror",
  },
  {
    fileName: "wake.mp3",
    artist: "Arcade Fire",
    title: "Funeral",
  },
  {
    fileName: "fire.mp3",
    artist: "Bloodhound Gang",
    title: "Fire Water Burn",
  },

  {
    fileName: "she.mp3",
    artist: "Sugarcult",
    title: "She's the Blade",
  },

  {
    fileName: "spanish.mp3",
    artist: "Slowdive",
    title: "Spanish Air",
  },

  {
    fileName: "heli.mp3",
    artist: "Bloc Party",
    title: "Helicopter",
  },

  {
    fileName: "earth.mp3",
    artist: "The Penguins",
    title: "Earth Angel",
  },

  {
    fileName: "entre.mp3",
    artist: "paco De Lucia",
    title: "Entre Dos Aguas",
  },

  {
    fileName: "num.mp3",
    artist: "DJ Shadow",
    title: "The Number Song",
  },

  {
    fileName: "its.mp3",
    artist: "Talk Talk",
    title: "It's My Life",
  },

  {
    fileName: "mud.mp3",
    artist: "Primus",
    title: "My Name is Mud",
  },

  {
    fileName: "you.mp3",
    artist: "Amy Winehouse",
    title: "You Know I'm No Good",
  },
  {
    fileName: "gen.mp3",
    artist: "Justice",
    title: "Genesis",
  },
  {
    fileName: "send.mp3",
    artist: "Rusted Root",
    title: "Send Me On My Way",
  },
  {
    fileName: "get.mp3",
    artist: "The Cyrus Erie",
    title: "Get The Message",
  },
  {
    fileName: "lev.mp3",
    artist: "Beach House",
    title: "Levitation",
  },
  {
    fileName: "from.mp3",
    artist: "ISIS",
    title: "Oceanic",
  },
  {
    fileName: "sub.mp3",
    artist: "Tiesto",
    title: "Suburban Train",
  },
  {
    fileName: "lean.mp3",
    artist: "Major Lazer",
    title: "Lean On (feat MO and DJ Snake)",
  },
  {
    fileName: "one.mp3",
    artist: "Swedish House Mafia",
    title: "One",
  },
  {
    fileName: "curse.mp3",
    artist: "Killswitch Engaged",
    title: "My Curse",
  },
  {
    fileName: "heart.mp3",
    artist: "Jose Gonzalez",
    title: "heartbeats",
  },
  {
    fileName: "oye.mp3",
    artist: "Santana",
    title: "Oye Como Va",
  },
  {
    fileName: "super.mp3",
    artist: "Five For Fighting",
    title: "Superman (It's Not Easy)",
  },
  {
    fileName: "ban.mp3",
    artist: "Animal Collective",
    title: "Banshee Beat",
  },
  {
    fileName: "scotty.mp3",
    artist: "Lustra",
    title: "Scotty Doesn't Know",
  },
  {
    fileName: "alien.mp3",
    artist: "Grouper",
    title: "Alien Observer",
  },
  {
    fileName: "gloria.mp3",
    artist: "Patti Smith",
    title: "Gloria",
  },
  {
    fileName: "love2.mp3",
    artist: "Pat Benatar",
    title: "Love Is A Battlefield",
  },
  {
    fileName: "cant.mp3",
    artist: "Bonnie Raitt",
    title: "I Can't Make You Love Me",
  },
  {
    fileName: "next.mp3",
    artist: "Alvvays",
    title: "Next Of Kin",
  },
  {
    fileName: "anna.mp3",
    artist: "WALK THE MOON",
    title: "Anna Sun",
  },
  {
    fileName: "walk.mp3",
    artist: "Smash Mouth",
    title: "Walkin' on the Sun",
  },
  {
    fileName: "crazy.mp3",
    artist: "The Marcels",
    title: "Crazy Bells",
  },
  {
    fileName: "if.mp3",
    artist: "Alicia Keys",
    title: "If I Ain't Got You",
  },
  {
    fileName: "when.mp3",
    artist: "My Bloody Valentine",
    title: "When You Sleep",
  },
  {
    fileName: "dance.mp3",
    artist: "Garth Brooks",
    title: "The Dance",
  },
  {
    fileName: "young.mp3",
    artist: "Peter Bjorn and John",
    title: "Young Folks",
  },
  {
    fileName: "time.mp3",
    artist: "Nick Drake",
    title: "Time Has Told Me",
  },
  {
    fileName: "angry.mp3",
    artist: "Tim McGraw",
    title: "Angry All The Time",
  },
  {
    fileName: "sound.mp3",
    artist: "Alabama Shakes",
    title: "Sound & Color",
  },
  {
    fileName: "fists.mp3",
    artist: "Kamasi Washington",
    title: "Fists Of Fury",
  },
  {
    fileName: "race.mp3",
    artist: "The Flaming Lips",
    title: "Race For The Prize",
  },
  {
    fileName: "arab.mp3",
    artist: "Debussy",
    title: "Arabesque No. 1",
  },
  {
    fileName: "stranger.mp3",
    artist: "Foo Fighters",
    title: "Stranger Things Have Happened",
  },
  {
    fileName: "run.mp3",
    artist: "Kate Bush",
    title: "Running Up That Hill (A Deal With God)",
  },
  {
    fileName: "life.mp3",
    artist: "Nas",
    title: "Life's A Bitch (Feat. AZ)",
  },
  {
    fileName: "glass.mp3",
    artist: "Phillip Glass Ensemble",
    title: "Glassworks",
  },
  {
    fileName: "heaven.mp3",
    artist: "Cocteau Twins",
    title: "Heaven or Las Vegas",
  },
  {
    fileName: "me.mp3",
    artist: "Oliver Tree",
    title: "Me, Myself & I",
  },
];

export default sampleSongs;
