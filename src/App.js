import './App.css';
import CityCarousel from './components/carousel/carousel';
import ExpertInformation from './components/expert-information/expert-information';
import Navbar from './components/navbar/navbar';
import Topbar from './components/top-bar/top-bar';
import TourFilter from './components/tour-filters/tour-filter';
import TourOptionInformation from './components/tour-option-information/tour-option-information';
import { useEffect } from 'react';
import StatisticCards from './components/statistic-cards/statistic-cards';

function App() {

  useEffect(() => {
    document.title = "Sneety Agency"
 }, []);

  return (
      <div className="App">
        <Topbar />
        <Navbar />
        <TourFilter />
        <StatisticCards />
        <ExpertInformation />
        <TourOptionInformation />
        <CityCarousel />
      </div>
  );
}

export default App;
