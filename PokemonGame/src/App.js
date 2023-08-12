import { connect } from "react-redux";
import { exampleActionCreator } from "./store/actions/exampleActions";
import logo from "./logo.svg";
import "./App.css";

const YourComponent = ({ exampleData, dispatchExampleAction }) => {
  return (
    <div>
      <p>{exampleData}</p>
      <button onClick={() => dispatchExampleAction("New Data")}>
        Update Data
      </button>
    </div>
  );
};

function App() {
  const YourComponent = ({ exampleData, dispatchExampleAction }) => {
    return (
      <div>
        <p>{exampleData}</p>
        <button onClick={() => dispatchExampleAction("New Data")}>
          Update Data
        </button>
      </div>
    );
  };
}

export default App;
