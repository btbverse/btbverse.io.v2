import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { BlogBackground } from "./components/Background/BlogBackground";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
    <BlogBackground />
  </ChakraProvider>
);
