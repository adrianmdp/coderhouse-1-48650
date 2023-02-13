import { useEffect, useState } from "react";
import { Popular, TopRated } from "./Pages";
import { api } from "./utils";

function App() {
  const [showPopular, setShowPopular] = useState(true);
  const [showTopRated, setShowTopRated] = useState(true);
  const [showDark, setShowDark] = useState(true);

  const [test1, setTest1] = useState();
  const [test2, setTest2] = useState();

  const dato1 = "Hola mundo";
  const dato2 = 0;
  const dato3 = 2;

  const [popular, setPopular] = useState();
  const [topRated, setTopRated] = useState();

  useEffect(() => {
    api.get("/movie/top_rated").then((response) => setTopRated(response.data));
    api.get("/movie/popular").then((response) => setPopular(response.data));
  }, []);

  return (
    <div className={`theme-${showDark ? "dark" : "light"}`}>
      <div>{showPopular && <Popular items={popular} />}</div>

      <div>{showTopRated && <TopRated items={topRated} />}</div>
      <button onClick={() => setShowDark(!showDark)}>Cambiar tema</button>
      <button onClick={() => setShowPopular(!showPopular)}>
        Switch Popular
      </button>
      <button
        onClick={() => setShowTopRated(!showTopRated)}
        className={`btn btn-${test1 || test2}`}
      >
        Switch TopRated
      </button>
    </div>
  );
}

export default App;
