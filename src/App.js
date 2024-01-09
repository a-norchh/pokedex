import React from "react";
import MyPokedex from "./components/MyPokedex";
import { PokedexProvider } from "./context/PokedexContext";

const App = () => {
  return (
    <PokedexProvider>
      <MyPokedex />
    </PokedexProvider>
  );
};

export default App;
