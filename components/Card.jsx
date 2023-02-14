import { useRouter } from "next/router";
import { useState } from "react";
import { SlLocationPin } from 'react-icons/sl';

function Card({ data, section }) {
    const router = useRouter();
    const [hover, setHover] = useState(false);
    let name = data.name.replace(/-/g, ' ');
    name = name.charAt(0).toUpperCase() + name.slice(1);
    let location = data.location
    return (
        <>
            <div
                onClick={() => {
                    if (data.name === "Explore All") {
                        router.push("/" + section);
                    } else {
                        router.push(`/${section}/${data.name}`);
                    }
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="cursor-pointer"
                style={{
                    width: "300px",
                    height: "200px",
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.thumbnail})`,
                    backgroundSize: "cover",
                    borderRadius: "15px",
                    border: "2px solid black",
                    boxShadow: !hover ? "0 0 10px #ddd" : "0 0 10px black",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    padding: "10px",
                    transform: hover ? "scale(0.9)" : "scale(1)",
                    transition: "transform 0.3s ease-in-out"
                }}>
                <div className="flex flex-col">
                    <p className="m-0 font-Poppins font-bold text-xl text-white">{name}</p>
                    {location && <p className="flex flex-row items-center m-0 font-Poppins font-bold text-xl text-white"><SlLocationPin />{location}</p>}
                </div>
            </div>
        </>
    );
}

export default Card;
