import React from 'react'
import Card from '../Card'
import styles from "./Package.module.css"

const PackageData = [
    {
        id: 0,
        title: 'Wayanad',
        image: 'https://s3-alpha-sig.figma.com/img/5a9f/e360/476aa6bb116bc324fa3ab90fba3fb58e?Expires=1676246400&Signature=KqRDjzPtYVjFmd7gp8AlnuwTGFn0JFP4oiywMfeP5vC34~VfCX9UkiWWKiyr5Jpla7zpOwlnWBERUcE6q5m1CoamvOthSERuQGY~Mvt31xrwuK7mv6FzJZxML5fQukeGy6cOrfQxSokZXaRIF3UtJ-kkpFFkP7iQWnRC~Ezh5c0Rht74HRJpHbgLcJiXxUiPkkEhI5yNTyGzV~hIaZkUTUFpKGkXEhIgh5YyDeF3PZlxUM~nyCi3w2ILJ2kkvNYnJE8vzLn3sUkX1YCZeY~kVPqTGFzMFCTLV~dZQQKbu1-bsF86PswNbjJevUBH1hZ~YTxpBAegPeKvkvrWxtW9Dg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 1,
        title: 'Munnar',
        image: 'https://s3-alpha-sig.figma.com/img/4deb/f2c8/fce978035168b452cf2885207d47210f?Expires=1676246400&Signature=KEy1b4U8~IxykQLXi5zqq1QM0Ojrq30SCvpDbXNHivhuzctlI0jCF0i332rq5maQAfQcoe0LwQcH6WveW0Yz35SwYbl54tSriLbWyD2zlhyMUMfsZZ59zmORfPcuKtiKmJrGzRifugBY0SlCT2JCdMhE~AKOB7HHIjtZS1iRY6qJeCqbErfZxbOt3K65Uj7wnP7OD~ud8EJkZhEwU6dOd~aN6R2cSfyfE7zP60yea8D4C-jYATeDurXa~6TzrjlsHb9h9rgFEwVPwDrSazx2JOT5ASTOmb7sLE7ocoryHO-6LYWn1WNoAJsDdVquhPJxOezCO4HyVMA9HXV0j53OYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 2,
        title: 'Kulukkumala',
        image: 'https://s3-alpha-sig.figma.com/img/3951/f742/a72c34f4bc8d8315dbea3e13ee277bc9?Expires=1676246400&Signature=IrDMJvQ3x4~BPOvL5D2oId6L8CYtEzpYYFOamqjr3JnLmnmenFDliVA27RVbjmwiNZyutsQ8gA4VaOZ7Il7O2PLroEfkV9tEkdPz3TE4PTd0gVmN6HSUUc8RE6NHG~IlNOttV1kQzFdhfZ1ajKHrT-PNEgkJNMRUbEFZK9qTjdeIsp1LCyPzNtfobel0Q-LYaEei26lIuD2hLIrVX~9sY0tRXQ3puvZgMqItXxVx0q4FFD-Sqy96LbU45WMsmwqFtOfP2-bCARHJTLGrkDXPgQJpv1oY~KJlo16KCgQsJmR9kuXr5HSuAb3cEuDkFMMdxGZ2qLrHiLsTyAwZRKZl2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 3,
        title: 'Kulukkumala',
        image: 'https://s3-alpha-sig.figma.com/img/3951/f742/a72c34f4bc8d8315dbea3e13ee277bc9?Expires=1676246400&Signature=IrDMJvQ3x4~BPOvL5D2oId6L8CYtEzpYYFOamqjr3JnLmnmenFDliVA27RVbjmwiNZyutsQ8gA4VaOZ7Il7O2PLroEfkV9tEkdPz3TE4PTd0gVmN6HSUUc8RE6NHG~IlNOttV1kQzFdhfZ1ajKHrT-PNEgkJNMRUbEFZK9qTjdeIsp1LCyPzNtfobel0Q-LYaEei26lIuD2hLIrVX~9sY0tRXQ3puvZgMqItXxVx0q4FFD-Sqy96LbU45WMsmwqFtOfP2-bCARHJTLGrkDXPgQJpv1oY~KJlo16KCgQsJmR9kuXr5HSuAb3cEuDkFMMdxGZ2qLrHiLsTyAwZRKZl2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 4,
        title: 'Kulukkumala',
        image: 'https://s3-alpha-sig.figma.com/img/3951/f742/a72c34f4bc8d8315dbea3e13ee277bc9?Expires=1676246400&Signature=IrDMJvQ3x4~BPOvL5D2oId6L8CYtEzpYYFOamqjr3JnLmnmenFDliVA27RVbjmwiNZyutsQ8gA4VaOZ7Il7O2PLroEfkV9tEkdPz3TE4PTd0gVmN6HSUUc8RE6NHG~IlNOttV1kQzFdhfZ1ajKHrT-PNEgkJNMRUbEFZK9qTjdeIsp1LCyPzNtfobel0Q-LYaEei26lIuD2hLIrVX~9sY0tRXQ3puvZgMqItXxVx0q4FFD-Sqy96LbU45WMsmwqFtOfP2-bCARHJTLGrkDXPgQJpv1oY~KJlo16KCgQsJmR9kuXr5HSuAb3cEuDkFMMdxGZ2qLrHiLsTyAwZRKZl2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 5,
        title: 'Kulukkumala',
        image: 'https://s3-alpha-sig.figma.com/img/3951/f742/a72c34f4bc8d8315dbea3e13ee277bc9?Expires=1676246400&Signature=IrDMJvQ3x4~BPOvL5D2oId6L8CYtEzpYYFOamqjr3JnLmnmenFDliVA27RVbjmwiNZyutsQ8gA4VaOZ7Il7O2PLroEfkV9tEkdPz3TE4PTd0gVmN6HSUUc8RE6NHG~IlNOttV1kQzFdhfZ1ajKHrT-PNEgkJNMRUbEFZK9qTjdeIsp1LCyPzNtfobel0Q-LYaEei26lIuD2hLIrVX~9sY0tRXQ3puvZgMqItXxVx0q4FFD-Sqy96LbU45WMsmwqFtOfP2-bCARHJTLGrkDXPgQJpv1oY~KJlo16KCgQsJmR9kuXr5HSuAb3cEuDkFMMdxGZ2qLrHiLsTyAwZRKZl2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
        id: 6,
        title: 'Kulukkumala',
        image: 'https://s3-alpha-sig.figma.com/img/3951/f742/a72c34f4bc8d8315dbea3e13ee277bc9?Expires=1676246400&Signature=IrDMJvQ3x4~BPOvL5D2oId6L8CYtEzpYYFOamqjr3JnLmnmenFDliVA27RVbjmwiNZyutsQ8gA4VaOZ7Il7O2PLroEfkV9tEkdPz3TE4PTd0gVmN6HSUUc8RE6NHG~IlNOttV1kQzFdhfZ1ajKHrT-PNEgkJNMRUbEFZK9qTjdeIsp1LCyPzNtfobel0Q-LYaEei26lIuD2hLIrVX~9sY0tRXQ3puvZgMqItXxVx0q4FFD-Sqy96LbU45WMsmwqFtOfP2-bCARHJTLGrkDXPgQJpv1oY~KJlo16KCgQsJmR9kuXr5HSuAb3cEuDkFMMdxGZ2qLrHiLsTyAwZRKZl2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
]

function Package() {
    return (
        <section id='#resort'>
            <div className='mt-20 mb-20'>
                <div className='' >
                    <h2 className='font-Poppins font-bold text-underline'>Our Packages</h2>
                    <p className='font-Poppins font-normal mt-8 '>Package Options Offered</p>
                </div>
                <div className='flex justify-center items-center '>

                    <div className={styles.package__container}>
                        {PackageData.map(({ id, title, image }) => (
                            <Card key={id} title={title} image={image} />
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

export default Package