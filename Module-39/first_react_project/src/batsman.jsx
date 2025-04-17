import { useState } from "react";


export default function Batsman(){

    const [runs,setRuns] = useState(0)
    const [sixes,setSixes] = useState(0)
    const [fours,setFours] = useState(0)

    const handleSingles =()=>{
        const updateRun = runs+1;
        setRuns(updateRun)
    }
    const handleFour =()=>{
        const updateRun = runs+4;
        const updateFours = fours+1;
        setFours(updateFours)
        setRuns(updateRun)
    }
    const handleSix =()=>{
        const updateRun = runs+6;
        const UpdateSixes = sixes+1;
        setSixes(UpdateSixes)
        setRuns(updateRun)
    }




    return(
        <div>
            <h1>banglar Batsman</h1>
            <h3>Runs :{runs}</h3>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
            <h4 onClick={handleSix}>Sixes :{sixes}</h4>
            <h4 onClick={handleFour}>Fourss :{fours}</h4>
        </div>
    )

}