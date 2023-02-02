
function Card({ image, name }) {
    return (
        <article>
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
    );
}

export default Card;
