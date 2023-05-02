import React from 'react'
import Hero from './hero'
import More_Ads from './More_ads'
import Ad1 from '../../public/images/eid_ads.svg'
// import Ad2 from '/public/images/ad2.svg'
// import Ad3 from '/public/images/ad3.svg'

const Ad_detail = () => {

    const ads = [
        {
            id: 1,
            image: "https://img.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
            title: 'Eid',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        },
        {
            id: 2,
            image: "https://img.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
            title: 'Sale',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        },
        {
            id: 3,
            image: "https://img.freepik.com/free-vector/realistic-eid-mubarak-greeting-card_1017-31239.jpg?w=2000",
            title: 'Dress',
            description: 'Eid is a digital advertising platform that helps you find the right ad for your business.',
            amt: "1000"
        }
    ]

    

    return (
        <section class=" flex-col w-full">
            <Hero ads={ads} />
            <More_Ads ads={ads} />
        </section>
    )
}

export default Ad_detail
