import { FC } from "react";
import useSearchName from "../../hooks/useSearchName";
import '../Search/searchbar.css'

export const SearchBar: FC = () => {
  const [query, setQuery] = useSearchName()

  return (
      <> 
        <input className="searchbar_input" type='text' maxLength={20} onChange={e => setQuery(e.target.value)} placeholder="Enter a name"/>
        <div className="search_bar_query">{query.length === 1 && 'At least 2 chars requieres'}</div>
      </>

  )
};
