import React from 'react'
import Card from '../Card'
import styles from "./Resort.module.css"
//import data.json
import data from '../data.json'

const ResortData = data.resorts
console.log(ResortData)

function Resort() {
    return (
        <section id='#resort'>
            <div className='mt-20 mb-20'>
                <div className='' >
                    <h2 className='font-Poppins font-bold text-underline'>Our Resort</h2>
                    <p className='font-Poppins font-normal mt-8 '>The Resorts We Offer</p>
                </div>
                <div className='flex justify-center items-center'>

                    <div className={styles.resort__container}>
                        {data.resorts?.map(({ name, image }, id) => (
                            <Card id={id} name={name} image={image} />
                        ))}

                        <div className="card bg-black">
                            <div className="card_image min-h-[156px] max-h-[156px]">
                                <img src="/card-bg.jfif" alt="Explore All" />
                                <div class="absolute inset-0 bg-black opacity-30"></div>
                                <div className="absolute inset-0 card_title text-white flex flex-row justify-end items-end pr-4 font-Poppins font-bold text-xl opacity-100">
                                    <p>Explore All</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resort