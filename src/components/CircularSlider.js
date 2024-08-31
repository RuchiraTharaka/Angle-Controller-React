import React, { useState, useRef, useEffect } from 'react';
import SliderHandle from './SliderHanlde';
import AngleInput from './AngleInput';
import RadioButtons from './RadioButtons';
import '../App.css';
const CircularSlider = () => {
    const [angle, setAngle] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        updateHandlePosition(angle);
    }, [angle]);

    const normalizeAngle = (value) => value % 360;

    const updateHandlePosition = (angle) => {
        const normalizedAngle = normalizeAngle(angle);
        const radius = sliderRef.current.offsetWidth / 2 - 13; // Adjust for knob size
        const radians = (normalizedAngle - 90) * (Math.PI / 180); // Convert degrees to radians
        const x = radius + radius * Math.cos(radians);
        const y = radius + radius * Math.sin(radians);
        if (sliderRef.current) {
            sliderRef.current.style.setProperty('--handle-x', `${x}px`);
            sliderRef.current.style.setProperty('--handle-y', `${y}px`);
        }
    };

    const handleAngleChange = (newAngle) => {
        setAngle(isNaN(newAngle) ? 0 : newAngle);
    };

    const handleMouseDown = (e) => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        handleMouseMove(e); // Start position
    };

    const handleMouseMove = (e) => {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const newAngle = (Math.atan2(y, x) * (180 / Math.PI) + 90 + 360) % 360;
        handleAngleChange(Math.round(newAngle));
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="container">
            <h1>Angle Selector</h1>
            <AngleInput angle={angle} onAngleChange={handleAngleChange} />
            <div
                className="circle-slider"
                ref={sliderRef}
                onMouseDown={handleMouseDown}
            >
                <SliderHandle />
            </div>
            <RadioButtons angle={angle} onAngleChange={handleAngleChange} />
        </div>
    );
};

export default CircularSlider;
