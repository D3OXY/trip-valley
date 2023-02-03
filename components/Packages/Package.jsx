import React from 'react'
import Card from '../Card'
import styles from "./Package.module.css"
import data from '../data.json'

function Package() {
    return (
        <section id='#resort'>
            <div className='mt-20 mb-20'>
                <div className='' >
                    <h2 className='font-Poppins font-bold text-underline'>Our Packages</h2>
                    <p className='font-Poppins font-normal mt-8 '>Package Options Offered</p>
                </div>
                <div className='flex justify-center items-center '>

                    <div className="card__container">
                        {data.packages.map(({ name, image }, id) => {
                            if (id < 4) {
                                return <Card key={id} name={name} image={image} />
                            }
                            return null;
                        })}
                        <Card name="Explore All" image="/card-bg.jfif" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Package