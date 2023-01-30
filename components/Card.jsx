
function Card({ id, image, title }) {
    return (
        <article key={id} className="flex items-center justify-center flex-col bg-white max-w-[300px] min-h-[156px] h-[100%] p-2 rounded-lg border-2 hover:border-4 border-black cursor-pointer ease-in-out duration-200">
            {image && (
                <div className="max-h-[156px]  overflow-hidden object-fill rounded-lg">
                    <img src={image} alt={title} />
                </div>
            )}
            <div className="flex items-center justify-center font-Poppins font-bold">
                <p className="text-black mt-4 mb-0 ">{title}</p>
            </div>
        </article>
    );
}

export default Card;
