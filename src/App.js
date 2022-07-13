import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';

function App() {
  return (
    <div>
      <TopBar />
      <div className='container'>
        <Sidebar />
      </div>
      <div className='others'>Other</div>
    </div>
  );
}

export default App;