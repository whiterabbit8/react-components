export interface Character {
  id: number;
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
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
