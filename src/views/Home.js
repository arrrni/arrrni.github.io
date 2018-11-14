import React from 'react';
import { Box, Container, Columns, Column, Message, MessageHeader, MessageBody, Delete, Progress} from 'bloomer';
import StaticComponent from '../components/StaticComponent';
import MainNavbar from '../components/MainNavbar';
import SideMenu from '../components/SideMenu';

class Home extends React.Component {
    render() {
        return (
            <section>
                <MainNavbar/>
                <StaticComponent/>
                <section className="section">
                    <Container isFluid={true}>
                        <Columns>
                            <Column isSize={2}>
                                <SideMenu />
                            </Column>
                            <Column isSize={10}>
                                <Columns>
                                    <Column>
                                        <Message isColor='info'>
                                            <MessageHeader>Information <Delete/></MessageHeader>
                                            <MessageBody>This is unfinished site as you can see. Don't mind if something just doesn't work at the moment. We will get there soon...</MessageBody>
                                        </Message>
                                    </Column>
                                </Columns>
                                <Box>
                                    This is a test box instance with progress bar.
                                    <Progress value={15} max={100}/>
                                </Box>
                                <Columns>
                                    <Column>
                                        .
                                    </Column>
                                </Columns>
                            </Column>
                        </Columns>
                    </Container>
                </section>
            </section>
        );
    }
}

export default Home;