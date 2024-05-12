import logo from './logo.svg';
import './App.css';
import Navbar from '/workspaces/kursach/my-app/src/components/navbar/navbar.js'
import slide from '/workspaces/kursach/my-app/src/components/img/Frame 1.png'


function App() {
  return (
    <div>
      < Navbar />
      <div>
        <div><img src={slide}></img></div>
      </div>
    </div>
    
  );
}

export default App;
