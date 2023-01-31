import React from 'react';
import {
    FaWhatsapp,
    FaPhone,
    FaCopy
} from 'react-icons/fa';

const Popup = () => {
    const phoneNumbers = [
        {
            number: "+1234567891",
            whatsApp: true
        },
        {
            number: "+1234567892",
            whatsApp: false
        },
        {
            number: "+1234567893",
            whatsApp: false
        }
    ];

    const handlePhoneCall = (number) => {
        window.location.href = `tel: `;
    }

    const handleWhatsapp = (number) => {
        window.location.href = `https://wa.me/`;
    }

    const handleCopy = (number) => {
        var dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.setAttribute('value', number);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);

        alert('Copied the text: ' + number);
    }

    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-1/2 bg-gray-200 rounded-lg shadow-lg p-4">
                <div className="flex flex-col items-center justify-center mb-4">
                    <h2 className="text-2xl font-bold">Phone numbers</h2>
                </div>
                {phoneNumbers.map((phoneNumber, i) => (
                    <div key={i} className="flex items-center justify-between py-2">
                        <span>{phoneNumber.number}</span>
                        <div className="flex items-center">
                            {phoneNumber.whatsApp && (
                                <button
                                    className="mr-2 text-green-400 hover:text-green-600"
                                    onClick={() => handleWhatsapp(phoneNumber.number)}
                                >
                                    <FaWhatsapp size={18} />
                                </button>
                            )}
                            <button
                                className="mr-2 text-blue-400 hover:text-blue-600"
                                onClick={() => handlePhoneCall(phoneNumber.number)}
                            >
                                <FaPhone size={18} />
                            </button>
                            <button
                                className="mr-2 text-red-400 hover:text-red-600"
                                onClick={() => handleCopy(phoneNumber.number)}
                            >
                                <FaCopy size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Popup;
