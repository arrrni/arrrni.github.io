import React from 'react';
import { Hero, HeroBody, Container, Title } from 'bloomer';

const StaticComponent = () => (
    <Hero isColor='primary' isSize='medium'>
        <HeroBody>
            <Container hasTextAlign='centered'>
                <Title>There was a Github Page...</Title>
            </Container>
        </HeroBody>
    </Hero>
);

export default StaticComponent;