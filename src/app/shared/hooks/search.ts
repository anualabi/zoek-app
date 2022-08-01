import axios from 'axios';
import { useQuery } from 'react-query';
import { ISearch } from '../types/search';

const queryUrl = 'http://localhost:3000/search';

export const getSearchResult = async (query: string): Promise<ISearch> => {
  const { data } = await axios.get(`${queryUrl}?q=${query}`);
  return data as ISearch;
};

export function useSearchQuery(searchTerm: string) {
  return useQuery<ISearch, Error>(['search', { searchTerm }], () => getSearchResult(searchTerm), {
    enabled: Boolean(searchTerm.length > 1),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  });
}
