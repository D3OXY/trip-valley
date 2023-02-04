import React from 'react'

function DataForm({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className='p-2 border border-black w-[20rem] md:w-[40rem] m-2'>
            <div className='flex flex-col m-2 items-start justify-center'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Resort Name"
                    className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'
                    required
                />
            </div>

            <div className='flex flex-col m-2 items-start justify-center'>
                <label htmlFor='description'>Description</label>
                <textarea
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Resort Description"
                    className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'
                    required
                />
            </div>

            <div className='flex flex-col m-2 items-start justify-center'>
                <label htmlFor='thumbnail'>Thumbnail</label>
                <input
                    type='text'
                    name='thumbnail'
                    value={formData.thumbnail}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'
                    required
                />
            </div>

        </div>
    )
}

export default DataForm