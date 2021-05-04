import React from "react";
import styled from "styled-components/native";
import { logoIcon } from "../helpers/images";

function HeaderIcon() {
    return <Image source={logoIcon} />;
}

export default HeaderIcon;

const Image = styled.Image`
    width: 30px;
    height: 30px;
`;
