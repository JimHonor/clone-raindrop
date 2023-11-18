import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { getActiveCollectionId } from "./services/web-storage/local-storage";

export default function App() {
  const activeCollectionId = getActiveCollectionId();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Navigate to={`/my/${activeCollectionId}`} />}
          />
          <Route path="my/:collectionId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
