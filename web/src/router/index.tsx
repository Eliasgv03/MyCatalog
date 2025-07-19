import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import CatalogEditorPage from '../pages/CatalogEditorPage';
import CatalogViewPage from '../pages/CatalogViewPage';
import SettingsPage from '../pages/SettingsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'catalog/edit/:catalogId', element: <CatalogEditorPage /> },
      { path: 'catalog/:catalogId', element: <CatalogViewPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);

export default router;
