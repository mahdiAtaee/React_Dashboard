import "./theme/App.css";
import "./components/Dashboard.css";
import "./components/users/User.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Sidebar />
    </div>
  );
}

export default App;
