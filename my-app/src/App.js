import logo from './logo.svg';
import './App.css';
import Navbar from '/workspaces/kursach/my-app/src/components/navbar/navbar.js'
import FusionPC from '/workspaces/kursach/my-app/src/components/fusionpc/fusionpc.js'


function App() {
  return (
    <div>
      <div class='main'>
        <div id="navbar">
          < Navbar />
        </div>
        <div id="fusionpc">
          < FusionPC />
        </div>
      </div>

      <div class="advantage">
        
      </div>
    </div>
  );
}

export default App;
