import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import { Public } from 'components/contexts/routes';
import { ROUTES } from 'constants/urls';

const { app } = ROUTES;

export interface RouteProps {
  children?: React.ReactNode;
  element?: React.ReactElement | null;
  path?: string;
}

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={app.base} element={<Public />}>
        <Route path={app.base} element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
