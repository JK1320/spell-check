import {useState, useEffect} from "react";
import './App.css';
// import $Spelling from "jquery";

let words = ["come", "get", "give", "go"];
//   {
//     id: 0,
//     word: "come",
//   },
//   {
//     id: 1,
//     word: "get",
//   },
//   {
//     id: 2,
//     word: "give",
//   },
//   {
//     id: 3,
//     word: "go",
//   },
// ];

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



  // function checkSpell() {
  //   $Spelling.SpellCheckInWindow("textarea");
  // }

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
          {/* <button value="CHECK SPELLING" onClick={checkSpell()}>
            Check
          </button> */}
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
