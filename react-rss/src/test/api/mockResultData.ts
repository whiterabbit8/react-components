export const mockResultData = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character?page=2',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
      },
      location: {
        name: 'Citadel of Ricks',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
        name: 'unknown',
      },
      location: {
        name: 'Citadel of Ricks',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: {
        name: 'Earth (Replacement Dimension)',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    },
  ],
};

export const mockEmptyResultData = {
  error: "There's nothing here",
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [
    {
      id: 0,
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: {
        name: '',
      },
      location: {
        name: '',
      },
      image: '',
    },
  ],
};
