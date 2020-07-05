import React from 'react'

import BCCard from './BCCard'

import Image1 from '../assets/images/img1.jpg'
import Image2 from '../assets/images/img2.jpg'
import Image3 from '../assets/images/img3.jpg'
import Image4 from '../assets/images/img4.jpg'
import Image5 from '../assets/images/img5.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BCCarousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image1,
                    link: 'https://google.com',
                },
                {
                    id: 1,
                    title: 'Bootcamp',
                    subTitle: 'Coursework',
                    imgSrc: Image2,
                    link: '/bootcamp',
                },
                {
                    id: 2,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image3,
                    link: 'https://google.com',
                },
                {
                    id: 3,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image4,
                    link: 'https://google.com',
                },
                {
                    id: 4,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image5,
                    link: 'https://google.com',
                },
                {
                    id: 5,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image1,
                    link: 'https://google.com',
                },
                {
                    id: 6,
                    title: 'Bootcamp',
                    subTitle: 'Coursework',
                    imgSrc: Image2,
                    link: '/bootcamp',
                },
                {
                    id: 7,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image3,
                    link: 'https://google.com',
                },
                {
                    id: 8,
                    title: 'title',
                    subTitle: 'Subtitle',
                    imgSrc: Image4,
                    link: 'https://google.com',
                },
            ]
        }
    }
    //1000px wide 1600px tall

    makeItems = (items) => {
        return items.map(item => {
            return <BCCard item={item} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default BCCarousel;