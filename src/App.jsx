import { Route, Routes} from "react-router-dom";
import Detail from "./component/Detail";
import Home from "./component/Home";

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
