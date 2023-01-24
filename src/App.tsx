import { Routes, Route } from "react-router-dom";
import Rick from "./Rick/Rick";
import SingleRick from "./Rick/SingleRick";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rick />} />
        <Route path="/Rick/:id" element={<SingleRick />} />
      </Route>
    </Routes>
  );
};

export default App;
