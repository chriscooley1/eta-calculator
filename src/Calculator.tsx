import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [distance, setDistance] = useState<number>();
    const [speed, setSpeed] = useState<number>();
    const [eta, setEta] = useState<string>();

    return (
        <>
            <form>
                <div>
                    <label htmlFor="...">distance</label>
                    <input
                        type="number"
                        id="distance"
                        value={distance}
                        placeholder="Enter distance here"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setDistance(parseFloat(event.target.value))}/>
                </div>
                <div>
                    <label htmlFor="...">speed</label>
                    <input
                        type="number"
                        id="speed"
                        value={speed}
                        placeholder="Enter speed here"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setSpeed(parseFloat(event.target.value))}/>
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
