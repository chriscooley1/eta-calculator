import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [distance, setDistance] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [eta, setEta] = useState("");

    return (
        <>
            <form>
                <div>
                    <label htmlFor="...">distance</label>
                    <input
                        type="text"
                        id="distance"
                        value={distance}
                        placeholder="Enter distance here"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setDistance(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="...">speed</label>
                    <input
                        type="text"
                        id="speed"
                        value={speed}
                        placeholder="Enter speed here"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setSpeed(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="...">eta</label>
                    <input
                        type="text"
                        id="eta"
                        value={eta}
                        placeholder="Enter eta here"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setEta(event.target.value)}/>
                </div>
            </form>
        </>
        
    );
};

export default Calculator;
