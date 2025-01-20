import Modal from "./component/Modal";
import "./App.css";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App" onClick={() => setVisible(false)}>
      <h1>User Details Modal</h1>
      <button onClick={(e) => {e.stopPropagation(); setVisible(true);}}>Open Form</button>
      <Modal visible={visible} />
    </div>
  );
}

export default App;
