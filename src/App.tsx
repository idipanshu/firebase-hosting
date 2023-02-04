import { getLaunches } from "./utils/getLaunches";

function App() {
  const { launches } = getLaunches();

  console.log(launches);

  return (
    <div className="App">
      <h1>It works!</h1>
    </div>
  );
}

export default App;
