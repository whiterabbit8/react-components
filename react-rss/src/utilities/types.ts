export interface Character {
  id: number;
  name: string;
  gender: string;
  species: string;
  type?: string;
  status: string;
  image: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

export interface Info {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
}

export interface ResultData {
  error?: string;
  info: Info;
  results: Character[];
}
