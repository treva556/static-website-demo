import React from 'react';
import './App.css';
import Header from './components/Header';
import Card1 from './components/Card';
import Card2 from './components/Card2';
import Footer from './components/Footer';


function App() {
  return (
    <div className=' bg-[#FEA4B9] '  >
      <Header/>
      <div className=' bg-[#FEA4B9]  flex justify-between gap-x-6 py-5 content-center	grid grid-flow-row-dense grid-cols-3 grid-rows-3'>   

<Card2/>
<Card2/>
<Card2/>
<Card2/>
<Card2/>
<Card2/>
<Card2/>
<Card2/>


</div>
<Footer/>

    </div>
  );
}

export default App;
