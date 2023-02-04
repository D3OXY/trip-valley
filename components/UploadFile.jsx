import React from 'react'

function UploadFile() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='flex items-center justify-center'>
            <form onSubmit={handleSubmit}>
                <button className='py-2 px-10'>Upload</button>
            </form>
        </div>
    )
}

export default UploadFile