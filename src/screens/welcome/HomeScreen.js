import React from "react";
import styled from "styled-components/native";
import { logo } from "../../helpers/images";

const HomeScreen = (props) => {
    return (
        <Container>
            <CardContainer>
                <LogoImage source={logo} resizeMode={"contain"} />
                <ActionButtons>
                    <Button
                        onPress={() =>
                            props.navigation.navigate("FindInstitution")
                        }
                    >
                        <ButtonText>Encontrar mi Institución</ButtonText>
                    </Button>
                    <Button
                        onPress={() =>
                            props.navigation.navigate("PutCodeForInstitution")
                        }
                    >
                        <ButtonText>
                            Ingresar por Código de Institución
                        </ButtonText>
                    </Button>
                </ActionButtons>
            </CardContainer>
        </Container>
    );
};

export default HomeScreen;

const Container = styled.SafeAreaView`
    background-color: #056af3;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const ActionButtons = styled.View``;

const CardContainer = styled.View`
    background-color: #fff;
    margin: 0 auto;
    align-items: center;
    border-radius: 10px;
    width: 92%;
    padding-bottom: 28px;
`;

const LogoImage = styled.Image`
    /* width: 200px; */
    height: 85px;
    margin: 50px 0px 30px 0px;
`;

const Button = styled.TouchableOpacity`
    padding: 20px 35px;
    background-color: #056af3;
    margin-bottom: 30px;
    border-radius: 8px;
    align-items: center;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-size: 21px;
`;
