import { useState , useEffect} from 'react';
import './App.css';
import Square from './components/square';
import GameInfo from './components/GameInfo';
function App() {
    const [turn, setturn]=useState(true);
    const [xCount, setXCount]=useState(0);
    const [yCount, setYCount]=useState(0);
     const[arrValue, setarrValue]=useState(new Array(10).fill(5));
     const[isFirstRender,setIsFirstRender]=useState(true);

     const calculateWinner=(xCount,yCount)=>{
      console.log("xcount"+xCount);
      console.log("ycount"+yCount);
      return ((xCount+yCount)===49?((xCount>yCount)?"X":"Y"):false);
             }
     const winner = calculateWinner(xCount,yCount);
     let status;
     if (winner) {
       status = 'Winner: ' + winner;
     } else {
       status = 'Next player: ' + (turn? 'X' : 'Y');
     }

     const handleClick=(index1)=>{
      if(winner)
        return;
      if (isFirstRender) {
        setIsFirstRender(false); // Disable "Click Me" after the first interaction
    }
     
      const currentTurn=(turn)?"X":"Y";
      console.log("currentTurn........"+currentTurn);
       // Store the current turn before updating it
      let prevArray=[...arrValue];
      let indexValue=prevArray[index1];
      prevArray[index1]=0;
      console.log("...indexValue..."+indexValue);
      if(indexValue===0)
         {
        //  setarrValue([...prevArray]);
        setturn(!turn);
          return;
         }else{
          index1 =index1 -1;
      while(indexValue>0){
        console.log("....inside while....."+index1);
        index1 = (index1 === -1) ? 9 : index1; 
        prevArray[index1]+=1;
        index1--;
        indexValue--;
      }
      if (index1 <0) {
        if(prevArray[9]!==0){
          setarrValue([...prevArray]);
          setturn(!turn);
          return;
        }
        let valueToAdd = prevArray[8];  
        prevArray[8] = 0;               
        setXCount((preCount) => preCount + (currentTurn === "X" ? valueToAdd : 0));
        setYCount((preCount) => preCount + (currentTurn === "Y" ? valueToAdd : 0));
    } else {
      
        if(prevArray[index1]!==0){
          setarrValue([...prevArray]);
         setturn(!turn);
         return;
        }
         let p= (index1-1>=0)?index1-1:9;
        let valueToAdd =prevArray[p];  
        prevArray[p] = 0;               
        setXCount((preCount) => preCount + (currentTurn === "X" ? valueToAdd : 0));
        setYCount((preCount) => preCount + (currentTurn === "Y" ? valueToAdd : 0));
    }
    
    } 
     setarrValue([...prevArray]);
     setturn(!turn);
     return;
  
        }
   
  return (
    <div className="div1">
            <h1 className="header">GO-CHALA GAME</h1>
           <GameInfo/>
            <br />
          

            {winner ? (
              <>
                <div className="box">
                    <h2><b>Winner: {winner}</b></h2>
                   
                </div>
                 <br />
                 <br />
                </>
            ) : (
                <>
                   
                    <div className="box"> 
                    <h2><b>Next player: {turn ? 'X' : 'Y'}</b></h2>
                    <div className="Container">
    {[0, 1, 2, 3,4,9,8,7,6,5].map((i) => (
      <Square 
        key={i} 
        value={isFirstRender ? "Click Me" : arrValue[i]} 
        handleClick={() => handleClick(i)} 
        className={`square square-${i}`} // Unique class for positioning
      />
    ))}
  </div>

    </div>
                </>
            )}

            <br />
            <h2>X Count: {xCount} | Y Count: {yCount}</h2>
            <br />
            <br />
        </div>
  )
}

export default App
