import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header/Header';
import BasicTable from './components/Table/BasicTable';

function App() {
  return (
    <>
      <ChakraProvider>
        <Header />
        <BasicTable />
      </ChakraProvider>
    </>
  );
}

export default App;
