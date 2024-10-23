import React, {useState} from "react";
// useState to update the value of variable

function MyCounter()
{
    const [count, setCountFunction ] = useState(0)

    function IncrementCounter()
    {
        setCountFunction(count+1)
        console.log(count)
        console.log("function is called increment");        
    }

    function DecrementCounter()
    {
        if (count<1)
            alert("Negative numbers are not allowed")
        else
            setCountFunction(count-1)
        console.log(count)
        console.log("function is called decrement");        
    }

    function Multiplier()
    {
        if (count*count>2000)
            alert("Not allowed")
        else
            setCountFunction(count*count)
        console.log(count)
        console.log("function is called multiply");   
    }
    return(
        <div>
            <h2>Counter's current value {count}</h2>
            <div>
                <button onClick={IncrementCounter}>Increment</button>
                <hr/>
                <button onClick={DecrementCounter}>Decrement</button>
                <hr/>
                <button onClick={Multiplier}>Multiply</button>              
            </div>
        </div>
    )
}

export default MyCounter