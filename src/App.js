import React,{useState,useEffect} from 'react';
import './App.css';
// import Bitcoin from './components/card/btc.component';
// import Etherium from './components/card/eth.component';

function App() {
  //let arr=[];
  let [data,setData]=useState();
  let obj={};
  obj=(data);
  
  // function putDataIntoArray(){
  //   arr.push(data);
  // }
  console.log(obj);
  
  //console.log(arr);
  // let [btc,setBtc]=useState({
  //   Symbol:"",
  //   bid_price:0.0,
  //   ask_price:0.0
  // });
  // let [eth,setEth]=useState({
  //   Symbol:"",
  //   bid_price:0.0,
  //   ask_price:0.0
  // });
  
  // let btc={};
  // let eth={};
  // for (let property in data) {
  //   if(data.s==='BTCUSDT'){
      

  //     btc={...data};
  //   }
  //   else{
  //      eth={...data};
      

  //   }
    //console.log(btc);
  
  //let [alldata,setAllData]=useState([]);
  // let arr=[];
  // arr.push(data);
  // console.log(arr);
  useEffect(()=>{
   let ws=new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@bookTicker/ethusdt@bookTicker')
    ws.onmessage=(event)=>{
      let json=JSON.parse(event.data);
      //console.log(json);
      setData(json);
    }
  },[])
  
  //console.log((data));
  

  //console.log(btc,eth);
  
      

  //   })
  // }


   

   

  
// useEffect(()=>{
//   setAllData(data)
// },[data])
  
  // console.log(alldata);

  
  return (
    <>
    <div className="App">
      {/* <Bitcoin btc={btc}/>
      <Etherium eth={eth}/> */}
      
      {/* {arr.map(coin=>{
        return (<Card
        symbol={coin.s} 
        bid-price={coin.b}
        ask-price={coin.a}/>
        )
      })} */}
     
    
 
   </div>
   </>
    
  );
}

export default App;
