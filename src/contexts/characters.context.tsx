import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from 'react';
import { WithChildren } from 'interfaces/children';
import { CharactersType } from 'interfaces/characters';
import { MutatorCallback } from 'swr/dist/types';
import { useFetch } from 'hooks';
import { CHARACTERS } from 'constants/endpoints';

type CharactersState = {
  characters: CharactersType[];
};

type CharactersActions = {
  type: 'setCharacters';
  characters: CharactersType[];
};

const charactersReducer = (
  state: CharactersState,
  action: CharactersActions,
) => {
  switch (action.type) {
    case 'setCharacters':
      return {
        ...state,
        characters: action.characters,
      };
    default:
      return state;
  }
};
type CharactersDispatch = Dispatch<CharactersActions>;
type CharactersProviderProps = WithChildren;
type Mutator = (
  data?:
    | CharactersType[]
    | Promise<CharactersType[] | undefined>
    | MutatorCallback<CharactersType[] | undefined>
    | undefined,
  shouldRevalidate?: boolean | undefined,
) => Promise<CharactersType[] | undefined>;

const CharactersContext = createContext<
  | {
    state: CharactersState;
    dispatch: CharactersDispatch;
    updateCharacters: Mutator;
    data: CharactersType[] | undefined;
  }
  | undefined
>(undefined);

const initialState: CharactersState = {
  characters: [],
};

const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const isFirstRender = useRef(true);
  const [state, dispatch] = useReducer(charactersReducer, initialState);
  const { data: characters, mutate: updateCharacters } = useFetch<
  CharactersType[] | undefined
  >(CHARACTERS);

  useEffect(() => {
    if (characters && isFirstRender.current) {
      dispatch({ type: 'setCharacters', characters });
      isFirstRender.current = false;
    }
  }, [characters]);

  return (
    <CharactersContext.Provider
      value={{ state, dispatch, updateCharacters, data: characters }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

const useCharacters = () => useContext(CharactersContext);

export { CharactersProvider, useCharacters }
