import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const FindInstitutionScreen = () => {
    return (
        <Container>
            <Button>
                <ButtonText>Buscar por nombre de institución</ButtonText>
            </Button>
            <HelpContainer>
                <Text>
                    ¿No puede encontrar su institución? Intente escribir la URL
                    completa.
                </Text>
                <TouchableOpacity>
                    <HelpText>Haga click aquí para obtener ayuda</HelpText>
                </TouchableOpacity>
            </HelpContainer>
        </Container>
    );
};

export default FindInstitutionScreen;

const Container = styled.SafeAreaView`
    align-self: center;
    width: 90%;
    margin-top: 13px;
`;

const Button = styled.TouchableOpacity`
    padding: 15px;
    border: 1px solid black;
    border-radius: 5px;
`;

const ButtonText = styled.Text`
    font-size: 15px;
`;

const HelpContainer = styled.View`
    margin-top: 15px;
    width: 90%;
`;

const Text = styled.Text`
    font-size: 16px;
`;

const HelpText = styled.Text`
    color: blue;
    font-size: 16px;
`;
