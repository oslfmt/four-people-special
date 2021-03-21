// images
import BusyCityImg from './img/city.jpg';
import NightLifeImg from './img/night_life.jpg';
import SuburbiaImg from './img/suburbia.jpg';
import InterstateImg from './img/interstate.jpg';
import OceanBreezeImg from './img/ocean_breeze.jpg';
import ForestImg from './img/morning_drive.jpg';
import MountainImg from './img/mountain_range.jpg';
import WindyImg from './img/windy.jpg';
import SpecialImg from './img/special.jpg';

// audio
import CruisinInterstate from './audio/cruisinInterstate.ogg';
import NightLife from './audio/nightlife.ogg';
import Suburb from './audio/suburb.ogg';
import MorningHighway from './audio/morningHighway.ogg';
import Interstate from './audio/interstate.ogg';
import City from './audio/city.ogg';
import Mountain from './audio/mountain.ogg';
import Windy from './audio/windy.ogg';
import Surprise from './audio/specialsurprise.mp3';

// songs
import Rap1 from './songs/rap1.mp3';
import Rap2 from './songs/rap2.mp3';
import Chill1 from './songs/chill1.mp3';
import Chill2 from './songs/chill2.mp3';
import classical1 from './songs/classical1.mp3';
import classical2 from './songs/classical2.mp3';
import edm1 from './songs/edm1.mp3';
import edm2 from './songs/edm2.mp3';
import oldies1 from './songs/oldies1.mp3';
import oldies2 from './songs/oldies2.mp3';

const environmentsOne = [
  {
    title: "Busy City",
    img: BusyCityImg,
    audio: City
  },
  {
    title: "Suburbia",
    img: SuburbiaImg,
    audio: Suburb
  },
  {
    title: "Cruisin' Interstate",
    img: InterstateImg,
    audio: Interstate
  }
];

const environmentsTwo = [
  {
    title: "Ocean Breeze",
    img: OceanBreezeImg,
    audio: CruisinInterstate
  },
  {
    title: "Morning Forest",
    img: ForestImg,
    audio: MorningHighway
  },
  {
    title: "Night Life",
    img: NightLifeImg,
    audio: NightLife
  },
];

const environmentsThree = [
  {
    title: "Mountain Range",
    img: MountainImg,
    audio: Mountain
  },
  {
    title: "Windy",
    img: WindyImg,
    audio: Windy
  },
  {
    title: "4-peepol special",
    img: SpecialImg,
    audio: Surprise
  },
];

const tracks = [
  {
    title: 'Hype Street Rap',
    audio: [Rap1, Rap2]
  },
  {
    title: 'EDM',
    audio: [edm1, edm2]
  },
  {
    title: 'Oldies',
    audio: [oldies1, oldies2]
  },
  {
    title: 'Classical',
    audio: [classical1, classical2]
  },
  {
    title: 'Chill',
    audio: [Chill1, Chill2]
  },
]

export {
  environmentsOne,
  environmentsTwo,
  environmentsThree,
  tracks
};