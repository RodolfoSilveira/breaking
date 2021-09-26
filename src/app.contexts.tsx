import GlobalStyles from 'styles/global';
import { WithChildren } from 'interfaces/children';

export const AppContexts = ({ children }: WithChildren) => (
  <>
    <GlobalStyles />
    {children}
  </>
);
