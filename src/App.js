
import './App.css';
import Web from './components/Development/web';
import Mainpage from './components/Mainpage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import AppDev from './components/Development/App';
import Blockchain from './components/Development/Blockchain';
import Software from './components/Development/Software';
import MLM from './components/Development/MLM';



function App() {
  return (
    <div className="App">
      {/* <Web /> */}
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Mainpage />} ></Route>
          <Route path='/Web' element={<Web />}></Route>
          <Route path='/App' element={<AppDev />}></Route>
          <Route path='/Blockchain' element={<Blockchain />}></Route >
          <Route path='/Software' element={<Software />}></Route>
          <Route path='/MLM' element={<MLM />}></Route>
        </Routes>

      </BrowserRouter >

    </div>
  );
}

export default App;
