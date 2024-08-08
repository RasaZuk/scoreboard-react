import { useState } from "react";

export function PointsB() {
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
        <div className="b_komanda">
            <h1>B komanda</h1>
            <div className="final1">{count}</div>
            <button className="button" onClick={updateCount1}>+1</button>
            <button className="button" onClick={updateCount2}>+2</button>
            <button className="button" onClick={updateCount3}>+3</button>
        </div>
    );
}