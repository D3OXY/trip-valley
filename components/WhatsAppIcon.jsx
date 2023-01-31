import React, { useState } from 'react'
import ContactPopup from './ContactPopup';

function WhatsAppIcon() {
    const [show, setShow] = useState(false);
    return (
        <div className='fixed bottom-[20px] right-[20px] '>
            {show && (<ContactPopup show={show} setShow={setShow} />)}
            {!show && (
                <>
                    <img
                        src={'/phone1.png'}
                        alt='Phone Icon'
                        style={{
                            width: '60px',
                            height: '60px',
                        }}
                        className='cursor-pointer hover:p-2 hover:bg-[#08898F] hover:text-white rounded-full ease-in-out duration-200'
                        onClick={() => setShow(!show)}
                    />
                    <img
                        src={'/whatsapp.svg'}
                        alt='WhatsApp Icon'
                        style={{
                            width: '70px',
                            height: '70px',
                        }}
                        className='cursor-pointer hover:p-2 hover:bg-[#08898F] hover:text-white rounded-full ease-in-out duration-200'
                        onClick={() => {
                            window.open('https://wa.me/919447777777');
                        }}
                    />
                </>
            )}
        </div>
    );
}

export default WhatsAppIcon