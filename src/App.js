import './App.css';
import ExpertInformation from './components/expert-information/expert-information';
import Navbar from './components/navbar/navbar';
import Topbar from './components/top-bar/top-bar';
import TourFilter from './components/tour-filters/tour-filter';

function App() {
  return (
      <div className="App">
        <Topbar />
        <Navbar />
        <TourFilter />
        <ExpertInformation />
      </div>
  );
}

export default App;
