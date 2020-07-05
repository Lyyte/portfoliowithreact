import React from 'react'

import BCCard from './BCCard'

import PlaceHolder from '../assets/images/pencil.jpg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class BCCarousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Javascript Assignment',
                    subTitle: 'Subtitle',
                    imgSrc: PlaceHolder,
                    link: 'https://lyyte.github.io/Word-Guess-Game/',
                },
                {
                    id: 1,
                    title: 'jQuery Assignment',
                    subTitle: 'Coursework',
                    imgSrc: PlaceHolder,
                    link: 'https://lyyte.github.io/Crystal-Collector/',
                },
                {
                    id: 2,
                    title: 'Javascript Assignment 2',
                    subTitle: 'Subtitle',
                    imgSrc: PlaceHolder,
                    link: 'https://lyyte.github.io/Trivia-Game/',
                },
                {
                    id: 3,
                    title: 'GifTastic',
                    subTitle: 'Subtitle',
                    imgSrc: PlaceHolder,
                    link: 'https://lyyte.github.io/JIFtastic/',
                },
                {
                    id: 4,
                    title: 'Train Scheduler',
                    subTitle: 'Subtitle',
                    imgSrc: PlaceHolder,
                    link: 'https://lyyte.github.io/Train-Schedule-/',
                },
                {
                    id: 5,
                    title: 'LIRI Bot',
                    subTitle: 'Subtitle',
                    imgSrc: PlaceHolder,
                    link: 'https://lyyte.github.io/Liri/',
                },
                {
                    id: 6,
                    title: 'HW',
                    subTitle: 'Coursework',
                    imgSrc: PlaceHolder,
                    link: 'https://google.com',
                },
                {
                    id: 7,
                    title: 'HW',
                    subTitle: 'Subtitle',
                    imgSrc: PlaceHolder,
                    link: 'https://google.com',
                },
            ]
        }
    }

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