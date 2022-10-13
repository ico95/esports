import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header/Header";
import View from "./components/Views/View";
import { ViewProvider } from "./components/contexts/viewContext";

function App() {
  return (
    <>
      <ChakraProvider>
        <ViewProvider>
          <Header />
          <View />
        </ViewProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
