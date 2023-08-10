import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GetUserInput from './components/GetUserInput';
import ShowResult from './components/ShowResult';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<GetUserInput/>} />
          <Route path="/result/:userQuery/:tableName" element={<ShowResult/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
