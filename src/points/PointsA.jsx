import { useState } from "react";

export function PointsA() {
    const [count, setCount] = useState(0);

    function updateCount1() {
        setCount(count + 1);
    }

     function updateCount2() {
        setCount(count + 2);
    }

    function updateCount3() {
        setCount(count + 3);
    }

    return (
        <div className="a_komanda">
            <h1>A komanda</h1>
            <div className="final1">{count}</div>
            <button className="button" onClick={updateCount1}>+1</button>
            <button className="button" onClick={updateCount2}>+2</button>
            <button className="button" onClick={updateCount3}>+3</button>
        </div>
    );
}


            

            