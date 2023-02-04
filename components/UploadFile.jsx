import React, { useState } from 'react'
import { BsCameraFill } from 'react-icons/bs'
import { storage } from "../lib/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

function UploadFile() {
    const [imgUrl, setImgUrl] = useState(null);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        const file = e.target[0]?.files[0]
        if (!file) return;
        setLoading(true)
        const storageRef = ref(storage, `files/${uuidv4()}-${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                alert(error);
                setLoading(false)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL)
                    setLoading(false)
                });
            }
        );
    }

    return (
        <div className='flex flex-col items-center justify-center m-2 p-4 font-Poppins font-semibold  w-[20rem] md:w-[40rem]'>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center w-full" >
                <input type='file' />
                <button disabled={loading} className='py-2 px-10 bg-slate-500 text-white rounded-lg hover:bg-transparent hover:text-black border hover:border border-slate-500 hover:border-black ease-in-out duration-200 hover:scale-[1.02] flex flex-row items-center justify-center'><BsCameraFill />
                    {loading ?
                        "Uploading...  " + progress + "%" :
                        "Upload"
                    }
                </button>
            </form>
            {imgUrl && <code onClick={() => navigator.clipboard.writeText(imgUrl)} className="upload-snippet max-w-[70vw] overflow-scroll border border-black rounded-lg hover:scale-[1.01] duration-200 ease-in-out cursor-copy ">{imgUrl}</code>}
        </div>
    )
}

export default UploadFile