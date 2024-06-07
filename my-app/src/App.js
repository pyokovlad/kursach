import logo from './logo.svg';
import './App.css';
import Navbar from '/workspaces/kursach/my-app/src/components/navbar/navbar.js'
import FusionPC from '/workspaces/kursach/my-app/src/components/fusionpc/fusionpc.js'
import Advantages from '/workspaces/kursach/my-app/src/components/advantages/advantages.js'
import Details from '/workspaces/kursach/my-app/src/components/details/details.js'

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
      <div class="advantagess">
        <div id="advantage">
            < Advantages />
        </div>
      </div>
      <div class="detailsss">
        <div id="pc">
          < Details />
          </div>
      </div>
    </div>
  );
}

export default App;
