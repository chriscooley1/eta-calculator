import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [distance, setDistance] = useState<number | string>("");
    const [speed, setSpeed] = useState<number | string>("");
    const [eta, setEta] = useState<string>("");

    const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newDistance = event.target.value;
        if (newDistance === "") {
            setDistance("");
        } else {
            setDistance(Number(newDistance));
        }
    };
    const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newSpeed = event.target.value;
        if (newSpeed === "") {
            setSpeed("");
        } else {
            setSpeed(Number(newSpeed));
        }
    };

    const calculateEta = (): void => {
        if (typeof distance === "number" && typeof speed === "number" && speed > 0) {
            const time = distance / speed;
            const hours = Math.floor(time);
            const minutes = Math.floor((time - hours) * 60);
            setEta(`${hours}h ${minutes}m`);
        } else {
            setEta("Invalid input");
        }
    };

    return (
        <>
            <form onSubmit={(e) => {e.preventDefault(); calculateEta();}}>
                <div>
                    <label htmlFor="distance">Distance</label>
                    <input
                        type="number"
                        id="distance"
                        value={distance !== undefined ? distance : ""}
                        placeholder="Enter distance here"
                        onChange={handleDistanceChange}
                    />
                </div>
                <div>
                    <label htmlFor="speed">Speed</label>
                    <input
                        type="number"
                        id="speed"
                        value={speed !== undefined ? speed : ""}
                        placeholder="Enter speed here"
                        onChange={handleSpeedChange}
                    />
                </div>
                <button type="submit">Calculate ETA</button>
                <div>
                    <label htmlFor="eta">ETA</label>
                    <input
                        type="text"
                        id="eta"
                        value={eta}
                        readOnly
                        placeholder="ETA will be displayed here"
                    />
                </div>
            </form>
        </>
    );
};

export default Calculator;
