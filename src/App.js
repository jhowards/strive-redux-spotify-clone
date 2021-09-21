import "./App.css";
import Sidebar from "./Components/Sidebar";
import PlayBar from "./Components/PlayBar";
import Homepage from "./Components/Homepage";
import AlbumPage from "./Components/AlbumPage";
import ArtistPage from "./Components/ArtistPage";
import SearchPage from "./Components/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App container-fluid flexbody px-0">
      <Router>
        <Sidebar />
        <PlayBar />
        <Route path="/" exact component={Homepage} />
        <Route path="/album/:id" exact component={AlbumPage} />
        <Route path="/artist/:id" exact component={ArtistPage} />
        <Route path="/search" exact component={SearchPage} />
      </Router>
    </div>
  );
}

export default App;
