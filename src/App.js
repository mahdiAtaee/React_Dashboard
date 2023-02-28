import "./theme/App.css";
import "./components/Dashboard.css";
import "./components/users/User.css";
import Dashboard from "./components/Dashboard";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Modal />
    </div>
  );
}

export default App;
