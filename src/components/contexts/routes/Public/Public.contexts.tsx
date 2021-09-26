import { CharactersProvider } from 'contexts';
import { WithChildren } from 'interfaces/children';

export const PublicContexts = ({ children }: WithChildren) => <CharactersProvider>{children}</CharactersProvider>;
