import {useState} from "react";

const IncrementDecrement = () =>{
    const [number, setNumber] = useState(0)
    const [addNumber , setAddNumber] = useState(1);
    
    const handleIncrement = () =>{
        let a = number + addNumber
        setNumber(a)
    }

  console.log("number",number, typeof(number))
  console.log("addnum",addNumber, typeof(addNumber))
    // start
    return(
        <>
        <div>
            {/* <form onClick={handleForm}> */}
            <div>
                <span>{number}</span>
            </div>
            <div>
                <button type="button" onClick={()=>setNumber(number + Number(addNumber))}>Increment</button>
                <button type="button" onClick={()=>{setNumber(number - Number(addNumber))}}>Decrement</button>
                <div>
                    <input type="number" name="addNumber" value={addNumber} onChange={(e)=>setAddNumber(e.target.value)}/>
                    {/* <input type="button" value="Set" onClick={handleSetNumber}/> */}
                </div>
            </div>
            {/* </form> */}
        </div>
        </>
    )
}

export default IncrementDecrement 