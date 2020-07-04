import React from 'react'

import Banner from '../components/Banner'
import Carousel from '../components/Carousel'

function HomePage(props) {
    return(
        <div>
            <Banner title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    )
}

export default HomePage;