import React, { Component } from 'react';
import { Image } from 'react-native';
import Styles from './Styles';
import {
    Container,
    Header,
    Body,
    Footer,
    Text,
    Card,
    Content,
    CardItem,
    Title,
    Button,
    Icon,
} from 'native-base';

class NativeCard extends Component {
    render() {
        return (
            <Container>
                <Header style={Styles.header}>
                    <Title>Header</Title>
                </Header>
                <Content>
                    <Card style={Styles.cardMain}>
                        <Card style={Styles.card}>
                            <CardItem>
                                <Image
                                    style={Styles.facebookImage}
                                    source={require('../../images/facebook.png')}
                                />
                            </CardItem>
                            <CardItem>
                                <Text>Hello Rohit!</Text>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Image
                                    style={Styles.reactImage}
                                    source={require('../../images/reactnative.png')}
                                />
                            </CardItem>
                        </Card>
                    </Card>
                    <Card style={Styles.likeinfo}>
                        <CardItem >
                            <Icon type="AntDesign" name="like1" style={Styles.like} />
                        </CardItem>
                        <CardItem>
                            <Icon type="Entypo" name="emoji-happy" style={Styles.heart} />
                        </CardItem>
                    </Card>
                    <Card style={Styles.responseCard}>

                        <CardItem>
                        <Icon type="EvilIcons" name="like" />
                        <Text>Like</Text>
                        </CardItem>
                        

                        <CardItem>
                        <Icon type="Octicons" name="comment" />
                        <Text>Comment</Text>
                        </CardItem>

                        <CardItem>
                        <Icon type="FontAwesome5" name="share" />
                        <Text>Share</Text>
                        </CardItem>

                    </Card>
                </Content>
                <Footer style={Styles.footer}>
                    <Title>Footer</Title>
                </Footer>
            </Container>
        );
    }
}

export default NativeCard;
