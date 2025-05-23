import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import TopicPage from "./pages/TopicPage/TopicPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/topic" element={<TopicPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
