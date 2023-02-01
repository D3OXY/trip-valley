
function Card({ id, image, name }) {
    return (
        // <article key={id} className="flex items-center justify-center flex-col bg-white max-w-[300px] min-h-[156px] h-[100%] p-2 rounded-lg border-2 hover:border-4 hover:border-[#08898F] border-black cursor-pointer ease-in-out duration-200">
        //     {image && (
        //         <div className="max-h-[156px]  overflow-hidden object-fill rounded-lg">
        //             <img src={image} alt={title} />
        //         </div>
        //     )}
        //     <div className="flex items-center justify-center font-Poppins font-bold">
        //         <p className="text-black mt-4 mb-0 ">{title}</p>
        //     </div>
        // </article>
        // <div className="cards-list">
        <article key={id}>
            <div className="card bg-black">
                <div className="card_image min-h-[156px] max-h-[156px]">
                    <img src={image} alt={name} />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute inset-0 card_title text-white flex flex-row justify-end items-end pr-4 font-Poppins font-bold text-xl opacity-100">
                        <p>{name}</p>
                    </div>
                </div>
            </div>
        </article>
        // </div>
    );
}

export default Card;
