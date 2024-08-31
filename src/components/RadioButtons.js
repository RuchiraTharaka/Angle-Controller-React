import React from 'react';

const RadioButtons = ({ angle, onAngleChange }) => {
    const handleChange = (e) => {
        onAngleChange(parseInt(e.target.value));
    };

    return (
        <div className="input-group radio-buttons">
            {[0, 45, 60, 90, 180].map(value => (
                <label key={value}>
                    <input
                        type="radio"
                        name="angle"
                        value={value}
                        checked={angle === value}
                        onChange={handleChange}
                    />
                    {value}
                </label>
            ))}
        </div>
    );
};

export default RadioButtons;
