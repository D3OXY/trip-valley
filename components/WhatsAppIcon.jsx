import React from 'react'

function WhatsAppIcon() {
    return (
        <img
            src={'/whatsapp.svg'}
            alt='WhatsApp Icon'
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                width: '70px',
                height: '70px',
            }}
            className='cursor-pointer hover:p-2 hover:bg-[#08898F] hover:text-white rounded-full ease-in-out duration-200'
            onClick={() => {
                window.open('https://wa.me/919447777777');
            }}
        />
    );
}

export default WhatsAppIcon