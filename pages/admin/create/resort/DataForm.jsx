import React from 'react'

function DataForm({ formData, setFormData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <div className='p-2 border border-black w-[40rem] m-2'>
            <div className='flex flex-col m-2 items-start justify-center'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Resort Name"
                    className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'
                />
            </div>

            <div className='flex flex-col m-2 items-start justify-center'>
                <label htmlFor='description'>Description</label>
                <input
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Resort Description"
                    className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'

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

                />
            </div>

            <div className='flex flex-col m-2 items-start justify-center'>
                <label htmlFor='checkin'>Check In</label>
                <input
                    type='text'
                    name='checkin'
                    value={formData.checkin}
                    onChange={handleChange}
                    placeholder="eg: 11:00 AM"
                    className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'

                />
            </div>

            <div className='flex flex-col m-2 items-start justify-center'>
                <label htmlFor='checkout'>Check Out</label>
                <input
                    type='text'
                    name='checkout'
                    value={formData.checkout}
                    onChange={handleChange}
                    placeholder="eg: 12:00 PM"
                    className='border-2 border-gray-300 p-2 rounded-md m-2 w-full'

                />
            </div>

        </div>
    )
}

export default DataForm