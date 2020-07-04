import React from 'react'

import Banner from '../components/Banner'

function HomePage(props) {
    return(
        <Banner title={props.title} subTitle={props.subTitle} text={props.text} />
    )
}

export default HomePage;