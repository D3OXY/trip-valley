import React, { useState } from 'react';

function PricesForm({ formData, setFormData }) {
    const [inputValue, setInputValue] = useState([]);

    const handleAdd = (inputValue) => {
        if (!inputValue.name) return;
        if (!inputValue.amount) return;
        setFormData({
            ...formData,
            prices: [...formData.prices, inputValue]
        });
        setInputValue([{ name: '', amount: '' }]);
    };

    const handleRemove = (index) => {
        const prices = [...formData.prices];
        prices.splice(index, 1);
        setFormData({ ...formData, prices });
    }

    return (
        <div className='p-2 border border-black w-[40rem] m-2'>

            <div className='flex flex-col m-2 items-start justify-center'>

                <div className='flex flex-row items-center justify-center w-full'>
                    <ul className='flex flex-row'>
                        {formData.prices.map((prices, index) => (
                            <div key={index} className="bg-gray-200 p-2 mr-2 mb-2">
                                {prices.name + ' - ' + prices.amount}
                                <button
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
                        <label htmlFor='prices-text'>Prices</label>
                        <button onClick={() => handleAdd(inputValue)} className='p-2 bg-blue-600 rounded-lg text-white' >+ Add</button>
                    </div>
                    <input
                        type='text'
                        name='prices-name'
                        value={inputValue.name}
                        placeholder='Name eg:- " For Bachelor "'
                        onChange={(e) => setInputValue({ name: e.target.value, amount: inputValue.amount })}
                        className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'
                    />
                    <input
                        type="text"
                        name="prices-amount"
                        value={inputValue.amount}
                        placeholder='Amount eg:- " 150/- "'
                        onChange={(e) => setInputValue({ name: inputValue.name, amount: e.target.value })}
                        className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'
                    />
                </div>

            </div>
        </div>
    )
}

export default PricesForm