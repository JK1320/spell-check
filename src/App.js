import {useState, useEffect} from "react";
import './App.css';


let words = ["come", "get", "give", "go"];


function App() {
const [searchInput, setSearchInput] = useState("");
const [options, setOptions] = useState();


  useEffect(() => {
    if (searchInput !== "") {
      const filteredOptions = words.filter((item) =>
        item.toLowerCase().includes(searchInput.toLowerCase())
      );
      setOptions(filteredOptions);
    } else if (searchInput === "") {
      setOptions("");
    }
  }, [searchInput]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Spell Checker</h1>
      </header>
      <main className="main-div">
        <div>
          <textarea
            className="text1"
            id="textarea"
            type="text"
            value={searchInput}
            placeholder="please type your text here.."
            spellCheck="true"
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <h3>Options:</h3>
          {options && <p className="text2">{options.map(option => `${option},  `)}</p>}  
        </div>
      </main>
    </div>
  );
}

export default App;
