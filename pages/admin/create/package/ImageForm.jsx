import React, { useState } from 'react';

function ImageForm({ formData, setFormData }) {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = (inputValue) => {
        if (!inputValue) return;
        setFormData({
            ...formData,
            images: [...formData.images, inputValue]
        });
        setInputValue('');
    };

    const handleRemove = (index) => {
        const images = [...formData.images];
        images.splice(index, 1);
        setFormData({ ...formData, images });
    }
    return (
        <div className='p-2 border border-black w-[20rem] md:w-[40rem] m-2'>

            <div className='flex flex-col m-2 items-start justify-center'>

                <div className='flex flex-row items-center justify-center w-full'>
                    <ul className='flex flex-row overflow-scroll'>
                        {formData.images.map((image, index) => (
                            <div key={index} className="bg-gray-200 p-2 mr-2 mb-2">
                                Image {index + 1}
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
                        <label htmlFor='images'>Images</label>
                        <button type='button' onClick={() => handleAdd(inputValue)} className='p-2 bg-blue-600 rounded-lg text-white' >+ Add</button>
                    </div>
                    <input
                        type='text'
                        name='images'
                        value={inputValue}
                        placeholder="Image URL(Click Add after each URL)"
                        onChange={(e) => setInputValue(e.target.value)}
                        className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'
                    />
                </div>

            </div>
        </div>
    )
}

export default ImageForm