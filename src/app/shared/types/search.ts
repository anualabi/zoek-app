export interface ISuggestions {
  searchterm: string;
  nrResults: number;
}

export interface ISearch {
  search: string;
  suggestions: ISuggestions[];
}
