import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import mergeSort from './Algorithms/mergesort';
import '../Styles/Sorting.css'
import { motion } from 'framer-motion';
import bubbleSort from './Algorithms/bubbleSort';
import quickSort from './Algorithms/quickSort';

const springAnim = {
    type: "spring",
    damping: 20,
    stiffness: 300,
};

export default function Sorting() {
    const sortingAlgos = [
        { name: "Bubble Sort", key: "bubbleSort" },
        { name: "Merge Sort", key: "mergeSort" },
        { name: "Quick Sort", key: "quickSort" },
        { name: "Selection Sort", key: "selectionSort" },
        { name: "Insertion Sort", key: "insertionSort" },
    ];

    const [open, setOpen] = useState(false);
    const [controls, setControls] = useState(false);
    const [algo, setAlgo] = useState(false);
    const [algoNotSelected, setAlgoNotSelected] = useState(false);
    const [algoName, setAlgoName] = useState('Algorithms');
    const [speed, setSpeed] = useState(5);
    const [arraySize, setArraySize] = useState(15);
    const [arr, setArr] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    useEffect(() => {
        createArray();
    }, []);

    useEffect(() => {
        renderSubmit();
    }, [isSorting]);

    const createArray = () => {
        const newArr = [];
        for (let i = 0; i < arraySize; i++) {
            newArr.push({
                value: Math.floor(Math.random() * (window.innerHeight / 4 - 30 + 1)) + 30,
                class: 'bar',
                id: "id-" + i,
            });
        }
        setArr(newArr);
    };

    const handleSpeedChange = (e) => {
        setSpeed(parseInt(e.target.value));
    };

    const handleArraySizeChange = (e) => {
        setArraySize(parseInt(e.target.value));
        createArray();
    };

    const sortArray = async () => {

        if (algoName === 'Algorithms') {
            setAlgoNotSelected(true);
            setTimeout(() => {
                setAlgoNotSelected(false);
            }, 1500);
        } else {
            setIsSorting(true);
            let results;
            if (algoName === 'Merge Sort') {
                results = mergeSort(arr);
            }
            else if (algoName === 'Bubble Sort') {
                results = bubbleSort(arr);
                // console.log(results)
            }
            else if (algoName === 'Quick Sort') {
                results = quickSort(arr);
                // console.log(results)
            }

            // console.log(speed)
            setArr(results[0])
            for (let i = 0; i < results.length; i++) {
                await new Promise(resolve =>
                    setTimeout(() => {
                        // console.log(Math.pow(1.9, speed))
                        // console.log(800 - Math.pow(1.9, speed))
                        if (i == 0) console.log(results[i])
                        setArr(results[i]);
                        resolve();
                    }, (800 - Math.pow(1.87, speed)))
                );
            }
            setIsSorting(false);
        }

        console.log("Last")
        console.log(isSorting)
    };

    const renderSubmit = () => {
        if (isSorting) {
            return (
                <button className='font-montserrat text-gray-700 cursor-pointer  py-2 px-5 bg-slate-300 hover:bg-slate-600 hover:text-white rounded-lg duration-300' disabled>Sorting...</button>
            );
        } else {
            return (
                <button onClick={sortArray} className='font-montserrat text-gray-700 cursor-pointer  py-2 px-5 bg-slate-300 hover:bg-slate-600 hover:text-white rounded-lg duration-300'>Sort</button>
            );
        }
    };

    return (
        <>
            <nav className='shadow-md w-full fixed top-0 left-0 z-50 bg-white mb-[65px]'>
                <div className="md:flex items-center justify-between bg-white md:px-10 px-7">
                    <NavLink to="/" className="font-bold text-2xl cursor-pointer flex items-center font-montserrat text-gray-700 hover:text-gray-950">
                        <span className="text-3xl mr-1 pt-2">
                            <ion-icon name="code-slash-outline"></ion-icon>
                        </span>
                        AlgoVista
                    </NavLink>
                    <div onClick={() => setOpen((prev) => !prev)} className='text-3xl absolute right-8 top-1 cursor-pointer md:hidden '>
                        <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-5 ${open ? 'top-18 opacity-100 slide-down' : `top-[-490px] opacity-0`} md:opacity-100 opacity-0`}>
                        {algoNotSelected && (<li className="md:ml-8 md:my-0 my-5 ml-5 text-xl">
                            <p className='font-montserrat bg-red-300 px-5 py-2 rounded-xl border-red-600 border-2'>Please Select an Algorithm!</p>
                        </li>)}
                        <li className="md:ml-8 md:my-0 my-5 ml-5 text-xl">
                            {!isSorting && (<button onClick={createArray} className='font-montserrat text-gray-700 cursor-pointer hover:text-gray-400 duration-300'>Randomise</button>)}
                        </li>
                        <li onClick={() => setAlgo((prev) => !prev)} className="md:ml-8 md:my-0 my-5 ml-5 text-xl flex md:flex-col gap-5 relative items-start">
                            <button className='px-3 py-1 flex items-center rounded-lg font-montserrat text-gray-700 cursor-pointer hover:text-gray-400 duration-300'>
                                {algoName}
                                <span className='ml-1 pt-2'><ion-icon name="caret-down-outline"></ion-icon></span>
                            </button>
                            {algo && (
                                <div className={`md:absolute md:top-full md:right-0 p-3  md md:bg-white md:shadow-md md:mt-2 ${controls ? 'block' : 'hidden'} md:flex md:flex-col gap-2 md:items-center`}>
                                    {sortingAlgos.map((algo) => (
                                        <button onClick={() => setAlgoName(algo.name)} key={algo.key} className='font-montserrat text-gray-700 cursor-pointer hover:text-gray-400 text-lg duration-300 my-1'>{algo.name}</button>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li onClick={() => setControls((prev) => !prev)} className="md:ml-8 md:my-0 my-5 ml-5 text-xl flex md:flex-col gap-5 relative items-start">
                            <button className='px-3 w-[135px] py-1 flex items-center rounded-lg font-montserrat text-gray-700 cursor-pointer hover:text-gray-400 duration-300'>
                                Controls
                                <span className='ml-1 pt-2'><ion-icon name="caret-down-outline"></ion-icon></span>
                            </button>
                            {controls && (
                                <div className={`md:absolute md:top-full md:right-0 md:w-[135px] md:bg-white md:shadow-md md:mt-2 ${controls ? 'block' : 'hidden'} md:flex md:flex-col gap-2 md:items-center`}>
                                    <div className='flex flex-col items-center mt-2 md:mt-0'>
                                        <label className='font-montserrat text-gray-700 text-sm'>Speed</label>
                                        <input onChange={handleSpeedChange} type="range" min="0" max="10" value={speed} className='w-[120px]' />
                                    </div>
                                    <div className='flex flex-col items-center mt-2 mb-3 md:mt-0'>
                                        <label className='font-montserrat text-gray-700 text-sm'>Array Size</label>
                                        <input onChange={handleArraySizeChange} type="range" min="8" max="38" value={arraySize} className='w-[120px]' />
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="md:ml-8 md:my-0 my-5 ml-5 text-xl">
                            {renderSubmit()}
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='mt-[65px]'></div>
            <div className='flex justify-center items-end mx-[50px]'>
                {arr.map((val, idx) => (
                    <motion.div layout transition={springAnim} className={`${val.class} m-1 text-white text-center font-bold rounded-sm`} key={val.id} id={val.id} style={{ height: `${val.value * 3}px`, width: `40px`, order: idx }}>{val.value}
                    </motion.div>
                ))}
            </div>
            <div className='font-montserrat mt-3 text-xl'>
                Time Complexity: O(n log n)
            </div>

        </>
    );
}
