import React from 'react';
import {Container, Box, Columns, Column, Message, MessageHeader, MessageBody, Delete} from 'bloomer';
import StaticComponent from '../components/StaticComponent';

class Home extends React.Component {
    render() {
        return (
            <Container>
                <Box>Hello world</Box>
                <StaticComponent/>
                <Columns>
                    <Column>
                        <Message isColor='info'>
                            <MessageHeader>Inse a {'<MessageHeader />'} <Delete/></MessageHeader>
                            <MessageBody>Hodor hodor - hodor... Hodor hodor hodor... Hodor hodor hodor.</MessageBody>
                        </Message>
                    </Column>
                </Columns>
            </Container>
        );
    }
}

export default Home;