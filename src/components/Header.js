import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { logoIcon } from "../helpers/images";
import styled from "styled-components/native";
import * as RootNavigation from "../navigation/RootNavigation";

const Header = (props) => {
    return (
        <>
            <Container>
                <ContainerLeftItems>
                    <TouchableOpacity
                        onPress={() =>
                            RootNavigation.navigate(props.navigateComponent)
                        }
                    >
                        <Icon name="arrow-back" size={30} />
                    </TouchableOpacity>
                    <Image source={logoIcon} />
                </ContainerLeftItems>
                {props.text}
            </Container>
            <View style={{ borderBottomWidth: 1 }}></View>
        </>
    );
};

export default Header;

const Container = styled.SafeAreaView``;

const ContainerLeftItems = styled.View`
    padding: 20px 0px 20px 13px;
    flex-direction: row;
`;

const Image = styled.Image`
    width: 35px;
    height: 35px;
    margin-left: 20px;
`;
