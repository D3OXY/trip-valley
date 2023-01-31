import { useState } from "react";

function ContactPopup({ show, setShow }) {
    const [number1, setNumber1] = useState("8129387797");
    const [number2, setNumber2] = useState("8089252877");
    const [number3, setNumber3] = useState("8590697642");

    const handleCopy = (number) => {
        navigator.clipboard.writeText(number);
    };

    const handleCall = (number) => {
        window.open(`tel:${number}`, "_blank");
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            {show && (
                <div className="bg-[#F5F5F5] border-2 border-black p-8 rounded-xl  shadow-2xl shadow-lime-300">
                    <div className="text-2xl font-Poppins font-bold mb-8 text-underline">Contact Us</div>
                    <section className="mb-8 border-b border-black pb-4">
                        <div className="flex items-center mb-4">
                            <div className="text-teal-500 font-Inter font-bold mr-2">Number 1:</div>
                            <div className="font-Inter hover:underline cursor-help">{number1}</div>
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-teal-500 text-white p-2 rounded font-Poppins"
                                onClick={() => handleCopy(number1)}
                            >
                                Copy
                            </button>
                            <button
                                className="bg-teal-500 text-white p-2 rounded font-Poppins"
                                onClick={() => handleCall(number1)}
                            >
                                Call
                            </button>
                        </div>
                    </section>
                    <section className="mb-8 border-b border-black pb-4">
                        <div className="flex items-center mb-4">
                            <div className="text-teal-500 font-Inter font-bold mr-2">Number 2:</div>
                            <div className="font-Inter hover:underline cursor-help">{number2}</div>
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-teal-500 text-white p-2 rounded font-Poppins"
                                onClick={() => handleCopy(number2)}
                            >
                                Copy
                            </button>
                            <button
                                className="bg-teal-500 text-white p-2 rounded font-Poppins"
                                onClick={() => handleCall(number2)}
                            >
                                Call
                            </button>
                        </div>
                    </section>
                    <section className="mb-4">
                        <div className="flex items-center mb-4">
                            <div className="text-teal-500 font-Inter font-bold mr-2">Number 3:</div>
                            <div className="font-Inter hover:underline cursor-help">{number3}</div>
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-teal-500 text-white p-2 rounded font-Poppins"
                                onClick={() => handleCopy(number3)}
                            >
                                Copy
                            </button>
                            <button
                                className="bg-teal-500 text-white p-2 rounded font-Poppins"
                                onClick={() => handleCall(number3)}
                            >
                                Call
                            </button>
                        </div>
                    </section>
                    <button
                        className="mt-2 text-teal-500 font-Poppins font-bold hover:underline"
                        onClick={() => setShow(!show)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default ContactPopup;