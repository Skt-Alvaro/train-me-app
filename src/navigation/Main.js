import React from "react";
import { StatusBar, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/welcome/HomeScreen";
import FindInstitutionScreen from "../screens/welcome/FindInstitutionScreen";
import PutCodeForInstitutionScreen from "../screens/welcome/PutCodeForInstitutionScreen";
import HeaderIcon from "../components/HeaderIcon";

const Stack = createStackNavigator();

const Main = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#056AF3" />
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="FindInstitution"
                    component={FindInstitutionScreen}
                    options={{
                        headerTitle: () => <HeaderIcon />,
                        headerStyle: { height: 70 },
                    }}
                />
                <Stack.Screen
                    name="PutCodeForInstitution"
                    component={PutCodeForInstitutionScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;
