import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';

function App() {
  return (
    <div>
      <TopBar />
      <div className='container'>
        <Sidebar />
        <div className='others'>Other Pages</div>
      </div>
    </div>
  );
}

export default App;