import React from 'react';

const AngleInput = ({ angle, onAngleChange }) => {
    const handleChange = (e) => {
        const newAngle = parseInt(e.target.value);
        onAngleChange(isNaN(newAngle) ? 0 : newAngle);
    };

    return (
        <div className="input-group">
            <label htmlFor="angleInput">Enter Angle: </label>
            <input
                type="number"
                id="angleInput"
                value={parseInt(angle%360)}
                min="0"
                max="360"
                onChange={handleChange}
            />
        </div>
    );
};

export default AngleInput;
