import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense } from "react";
import Home from "./pages/Home";
import PostsDetails from "./pages/PostsDetails";

// const postsList = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostsDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;