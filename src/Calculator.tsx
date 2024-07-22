import React, { useState } from "react";

const Calculator: React.FC = () => {
    // State variables for distance, speed, and ETA
    const [distance, setDistance] = useState<number | string>("");
    const [speed, setSpeed] = useState<number | string>("");
    const [eta, setEta] = useState<string>("");

    // Handler for changes in the distance input field
    const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // Update distance state with the value from the input field
        setDistance(event.target.valueAsNumber);
        const newDistance = event.target.value;
        if (newDistance === "") {
            setDistance("");
        } else {
            setDistance(Number(newDistance));
        }
    };

    // Handler for changes in the speed input field
    const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // Update speed state with the value from the input field
        setSpeed(event.target.valueAsNumber);
        const newSpeed = event.target.value;
        if (newSpeed === "") {
            setSpeed("");
        } else {
            setSpeed(Number(newSpeed));
        }
    };

    // Function to calculate ETA based on distance and speed
    const calculateEta = (): void => {
        // Check if distance and speed are valid numbers and speed is greater than 0
        if (typeof distance === "number" && typeof speed === "number" && speed > 0) {
            const time = distance / speed; // Calculate time in hours
            const hours = Math.floor(time); // Extract hours
            const minutes = Math.floor((time - hours) * 60); // Extract minutes
            setEta(`${hours}h ${minutes}m`); // Update ETA state
        } else {
            setEta("Invalid input"); // Set ETA state to error message if inputs are invalid
        }
    };

    return (
        <>
            {/* Form for entering distance and speed, and displaying ETA */}
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
