import React from 'react'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import LoginPages from './AllComponent/LoginPages';
import ErrorPages from './AllComponent/ErrorPages';
import Account from './components/Account';
import About from './components/About';
import Contact from './pages/Contact';
import Signup from './AllComponent/Signup';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "account", Component: Account },
      // { path: "cart", Component: Cart },
      // { path: "shop", Component: Shop },
      { path: "signup", Component: Signup },
      { path: "login", Component: LoginPages },
      {path: "*", Component: ErrorPages}
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
