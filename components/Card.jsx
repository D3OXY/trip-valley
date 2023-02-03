import { useState } from "react";

function Card({ image, name }) {
    const [hover, setHover] = useState(false);
    return (
        <>
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    width: "300px",
                    height: "200px",
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
                    backgroundSize: "cover",
                    borderRadius: "15px",
                    border: "2px solid black",
                    boxShadow: !hover ? "0 0 10px #ddd" : "0 0 10px black",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    padding: "10px",
                    transform: hover ? "scale(0.9)" : "scale(1)",
                    transition: "transform 0.3s ease-in-out"
                }}>
                <p className="m-0 font-Poppins font-bold text-xl text-white">{name}</p>
            </div>
        </>
    );
}

export default Card;
