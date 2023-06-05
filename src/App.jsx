import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Tweets from "./pages/Tweets/Tweets";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />

        <Route path="*" element={<div>Not Found 404</div>} />
      </Route>
    </Routes>
  );
}
