const STATUSES = {
  bleeding: {
    name: 'Hemorrhage',
    description: `The Survivor bleeds in great quantity, making them easier to track.`,
  },
  bloodLust: {
    name: 'Bloodlust',
    description:
      `Activates on a Killer after being in a chase for a certain amount of time. Bloodlust ` +
      `increases the Killer movement Speed.`,
  },
  broken: {
    name: 'Broken',
    description: `The Survivor is heavily damaged and cannot be healed past the injured health state.`,
  },
  cleansing: {
    name: 'Cursed',
    description:
      `The Survivor suffers a secret penalty related to a Hex Totem, cleansing the Hex Totem ` +
      `releases the curse.`,
  },
  deepWound: {
    name: 'Deep Wound',
    description:
      `The Survivor is heavily damaged and is gradually getting closer to the dying state. If ` +
      `the Survivor takes any damage while afflicted by Deep Wound, or if the Deep Wound timer ` +
      `ends, The Survivor is immediately put into the dying state. The Deep Wound timer stops ` +
      `temporarily any time the Survivor is mending or running.`,
  },
  endurance: {
    name: 'Endurance',
    description:
      `The Survivor is hardened, and can resist a hit that would put them into the dying state. ` +
      `Once the Survivor resists a hit, this status effect is lost and it is replaced by the ` +
      `Deep Wound status effect.`,
  },
  exhausted: {
    name: 'Exhausted',
    description:
      `The Survivor cannot use movement speed abilities. The Survivor recovers from the ` +
      `Exhausted status effect after some time.`,
  },
  exposed: {
    name: 'Exposed',
    description:
      `The Survivor is in peril, they can be put into the dying state with a single basic ` +
      `attack, even if they are healthy.`,
  },
  hindered: {
    name: 'Hindered',
    description: `The character base Movement speed is decreased.`,
  },
  incapacitated: {
    name: 'Incapacitated',
    description:
      `The Survivor is unable to complete most basic actions. This include healing and mending ` +
      `themselves and other Survivors, repairing and sabotaging generators, cleansing Totems, ` +
      `searching chests, and using, picking up, and dropping items.`,
  },
  madness: {
    name: 'Madness',
    description: `The Survivor suffers various mental afflictions such as hallucinations.`,
  },
  mangled: {
    name: 'Mangled',
    description:
      `The Survivor is heavily injured and requires more time to be fully healed, at which time ` +
      `this status effect is removed.`,
  },
  oblivious: {
    name: 'Oblivious',
    description:
      `The Survivor is oblivious to the imminent danger of a nearby Killer. They do not hear The ` +
      `Killer's Terror Radius and they are not considered as being within the Terror Radius for ` +
      `power or perk effects.`,
  },
  speed: {
    name: 'Haste',
    description: `The character base Movement Speed is increased.`,
  },
  undetectable: {
    name: 'Undetectable',
    description:
      `The Killer enters a stealth-like mode which surpresses their Red Stain and Terror Radius, ` +
      `and blocks all Survivor aura-reading abilities.`,
  },
  vision: {
    name: 'Blindness',
    description: `Character's aura detection is impaired.`,
  },
};

const CHARACTERS = {
  aceVisconti: 'Ace Visconti',
  adamFrancis: 'Adam Francis',
  ashWilliams: 'Ash Williams',
  blight: 'Blight',
  cannibal: 'Cannibal',
  cherylMason: 'Cheryl Mason',
  claudetteMorel: 'Claudette Morel',
  clown: 'Clown',
  davidKing: 'David King',
  davidTapp: 'David Tapp',
  deathslinger: 'Deathslinger',
  demogorgon: 'Demogorgon',
  doctor: 'Doctor',
  dwightFairfield: 'Dwight Fairfield',
  elodieRakoto: 'Élodie Rakoto',
  executioner: 'Executioner',
  felixRichter: 'Felix Richter',
  fengMin: 'Feng Min',
  ghostFace: 'Ghost Face',
  hag: 'Hag',
  hillbilly: 'Hillbilly',
  huntress: 'Huntress',
  jakePark: 'Jake Park',
  janeRomero: 'Jane Romero',
  jeffreyJohansen: 'Jeffrey Johansen',
  kateDenson: 'Kate Denson',
  laurieStrode: 'Laurie Strode',
  legion: 'Legion',
  megThomas: 'Meg Thomas',
  nancyWheeler: 'Nancy Wheeler',
  neaKarlsson: 'Nea Karlsson',
  nightmare: 'Nightmare',
  nurse: 'Nurse',
  oni: 'Oni',
  pig: 'Pig',
  plague: 'Plague',
  quentinSmith: 'Quentin Smith',
  shape: 'Shape',
  spirit: 'Spirit',
  steveHarrington: 'Steve Harrington',
  trapper: 'Trapper',
  trickster: 'Trickster',
  twins: 'Twins',
  williamOverbeck: 'William Overbeck',
  wraith: 'Wraith',
  yuiKimura: 'Yui Kimura',
  'yun-jinLee': 'Yun-Jin Lee',
  zarinaKassir: 'Zarina Kassir',
};

export { CHARACTERS, STATUSES };
