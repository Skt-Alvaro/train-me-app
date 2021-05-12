import React from "react";
import { logo } from "../../helpers/images";
import styled from "styled-components/native";
import PutCodeForInstitutionForm from "../../form/PutCodeForInstitutionForm";

const PutCodeForInstitutionScreen = () => {
    return (
        <Container>
            <LogoImage source={logo} resizeMode="contain" />
            <FormContainer>
                <Text>Ingrese el código de 4 dígitos de su institución.</Text>
                <PutCodeForInstitutionForm />
            </FormContainer>
        </Container>
    );
};

export default PutCodeForInstitutionScreen;

const Container = styled.SafeAreaView`
    margin-top: 12%;
`;

const LogoImage = styled.Image`
    width: 60%;
    height: 20%;
    align-self: center;
`;

const FormContainer = styled.View`
    width: 80%;
    align-self: center;
`;

const Text = styled.Text`
    font-size: 20px;
    padding: 40px 0px 20px 5.5%;
`;
