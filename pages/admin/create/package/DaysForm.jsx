import React, { useState } from 'react';

function DaysForm({ formData, setFormData }) {
    const [inputValue, setInputValue] = useState([]);

    const handleAdd = (inputValue) => {
        if (!inputValue.title) return;
        if (!inputValue.description) return;
        const updatedDescription = inputValue.description.replace(/\n/g, '<br />');
        setFormData({
            ...formData,
            days: [...formData.days, { ...inputValue, description: updatedDescription }]
        });
        setInputValue([{ title: '', description: '' }]);
    };

    const handleRemove = (index) => {
        const days = [...formData.days];
        days.splice(index, 1);
        setFormData({ ...formData, days });
    }

    return (
        <div className='p-2 border border-black w-[20rem] md:w-[40rem] m-2'>

            <div className='flex flex-col m-2 items-start justify-center'>

                <div className='flex flex-row items-center justify-center w-full'>
                    <ul className='flex flex-row overflow-scroll'>
                        {formData.days.map((day, index) => (
                            <div key={index} className="bg-gray-200 p-2 mr-2 mb-2">
                                Day - {index + 1}
                                <button
                                    type='button'
                                    onClick={() => handleRemove(index)}
                                    className="ml-2 text-xs text-red-500 hover:text-red-700"
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center w-full'>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <label htmlFor='days-title'>Days</label>
                        <button type='button' onClick={() => handleAdd(inputValue)} className='p-2 bg-blue-600 rounded-lg text-white' >+ Add</button>
                    </div>
                    <input
                        type='text'
                        name='days-title'
                        value={inputValue.title}
                        placeholder='Name eg:- " Day - 1 "'
                        onChange={(e) => setInputValue({ title: e.target.value, description: inputValue.description })}
                        className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'
                    />
                    <textarea
                        rows={6}
                        type="text"
                        name="days-description"
                        value={inputValue.description}
                        placeholder='Description eg:- " Day - 1 Description(With proper spacing)'
                        onChange={(e) => setInputValue({ title: inputValue.title, description: e.target.value })}
                        className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'
                    />

                </div>

            </div>
        </div>
    )
}

export default DaysForm