import { useSearchParams } from "react-router-dom";
import { Character } from "../../utilities/types"
import { useEffect, useState } from "react";
import { baseUrl } from "../../utilities/api";

export default function Details(): JSX.Element {
  const [character, setCharacter] = useState<Character>()
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    const getCharacter = async () => {
      const id = searchParams.get('id');
      const response = await fetch(`${baseUrl}${id}`, { method: 'GET' });
      const data = await response.json();
      setCharacter(data);
    }
    if (searchParams.get('id')) {
      getCharacter()
    }
  }, [searchParams]);

  return (
    <div className="details">
      {searchParams.get('id') && <>
        <h1>{character?.name}</h1>
        <button onClick={() => setSearchParams({ page: `${searchParams.get('page')}`})}>Close</button>
      </>}
    </div>
  )
}