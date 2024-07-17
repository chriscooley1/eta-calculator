import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [distance, setDistance] = useState<number | undefined>(undefined);
    const [speed, setSpeed] = useState<number | undefined>(undefined);
    const [eta, setEta] = useState<string>();

    return (
        <>
            <form>
                <div>
                    <label htmlFor="distance">Distance</label>
                    <input
                        type="number"
                        id="distance"
                        value={distance !== undefined ? distance : ""}
                        placeholder="Enter distance here"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setDistance(Number(event.target.value))}/>
                </div>
                <div>
                    <label htmlFor="speed">Speed</label>
                    <input
                        type="number"
                        id="speed"
                        value={speed !== undefined ? speed : ""}
                        placeholder="Enter speed here"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                            setSpeed(Number(event.target.value))}/>
                </div>
                <div>
                    <label htmlFor="eta">Eta</label>
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
