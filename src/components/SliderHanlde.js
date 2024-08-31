import React from 'react';
import '../App.css';

const SliderHandle = () => {
    return (
        <div className="handle" style={{ left: 'var(--handle-x)', top: 'var(--handle-y)' }}></div>
    );
};

export default SliderHandle;
