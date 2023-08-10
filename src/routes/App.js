import '../styles/App.css';

// ReactRouter Imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Styles
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Layouts
import RootLayout from '../layouts/RootLayouts';

// Pages
import Home from '../pages/Home';
import Countries from '../pages/Countries';
import Leagues from '../pages/Leagues';
import Teams from '../pages/Teams';
import NoPage from '../pages/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index="home" element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="leagues" element={<Leagues />} />
          <Route path="teams" element={<Teams />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
