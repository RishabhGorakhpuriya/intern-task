import React, { useState } from 'react'

const Circle = () => {

    const [circles, setCircles] = useState([]);
    const [counters, setCounters] = useState([]);
    const addCircle = () => {
        const yellowColor = "#FFFF00";
        const newCircle = {
            color: yellowColor,
            counter: 0,
        };

        if (circles.length < 10) {
            setCircles([...circles, newCircle]);
            setCounters([...counters, 0]);
        }
    };

    const changeColor = (index) => {
        const updatedCircles = [...circles];
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        updatedCircles[index].color = randomColor;
        setCircles(updatedCircles);

        const updatedCounters = [...counters];
        updatedCounters[index] += 1;
        setCounters(updatedCounters);
    };

    const copyCircle = (index) => {
        const updatedCircles = [...circles];
        const circleToCopy = { ...updatedCircles[index], counter: 0 };
        updatedCircles.splice(index + 1, 0, circleToCopy);
        setCircles(updatedCircles);

        const updatedCounters = [...counters];
        updatedCounters.splice(index + 1, 0, 0);
        setCounters(updatedCounters);
    };
    return (
        <div className="Container mt-5 p-3">
            <div className="row">
                <div className="col-md-12">
                    <button  disabled={circles.length >= 10} className='mt-2' onClick={addCircle}>Add Circle</button>
                </div>
                {circles.map((circle, index) => (
                    <div className="col-md-3 my-3">
                        <div key={index}>
                            <div
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    backgroundColor: circle.color,
                                    marginBottom: '10px',
                                }}
                            ></div>
                            <p> {circle.color}</p>
                            <button onClick={() => changeColor(index)}>Change Color</button>
                            <span> {counters[index]}</span>
                            <button onClick={() => copyCircle(index)}>Copy Circle</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Circle


