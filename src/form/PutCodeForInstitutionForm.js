import React, { useState, useRef } from "react";
import styled from "styled-components/native";

const PutCodeForInstitutionForm = () => {
    const [digit1, setDigit1] = useState("");
    const [digit2, setDigit2] = useState("");
    const [digit3, setDigit3] = useState("");
    const [digit4, setDigit4] = useState("");
    const pin1 = useRef();
    const pin2 = useRef();
    const pin3 = useRef();
    const pin4 = useRef();

    function all() {
        const all = digit1 + digit2 + digit3 + digit4;
        console.log(all);
    }

    return (
        <>
            <InputContainer>
                <TextInput
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        setDigit1(text);
                        if (digit1 == "") {
                            pin2.current.focus();
                        }
                    }}
                    value={digit1}
                    ref={pin1}
                />
                <TextInput
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        setDigit2(text);
                        if (digit2 == "") {
                            pin3.current.focus();
                        }
                    }}
                    value={digit2}
                    ref={pin2}
                />
                <TextInput
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        setDigit3(text);
                        if (digit3 == "") {
                            pin4.current.focus();
                        }
                    }}
                    value={digit3}
                    ref={pin3}
                />
                <TextInput
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(text) => setDigit4(text)}
                    value={digit4}
                    ref={pin4}
                />
            </InputContainer>
            <Button onPress={() => all()}>
                <ButtonText>Continuar</ButtonText>
            </Button>
        </>
    );
};

export default PutCodeForInstitutionForm;

const TextInput = styled.TextInput`
    background-color: #f2f2f2;
    font-weight: 600;
    align-self: center;
    padding: 10px;
    font-size: 35px;
    text-align: center;
    width: 18%;
    border-radius: 7px;
    border-width: 1px;
    border-color: gray;
`;

const InputContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;

const Button = styled.TouchableOpacity`
    background-color: #056af3;
    padding: 10px;
    width: 90%;
    align-self: center;
    border-radius: 6px;
    margin-top: 30px;
`;

const ButtonText = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 25px;
`;
