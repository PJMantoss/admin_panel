import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;