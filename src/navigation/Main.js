import React from "react";
import { StatusBar, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/welcome/HomeScreen";
import FindInstitutionScreen from "../screens/welcome/FindInstitutionScreen";
import PutCodeForInstitutionScreen from "../screens/welcome/PutCodeForInstitutionScreen";
import Header from "../components/Header";
import FindInstitutionText from "../components/welcome/FindInstitutionText";
import { navigationRef } from "./RootNavigation";

const Stack = createStackNavigator();

const Main = () => {
    return (
        <NavigationContainer ref={navigationRef}>
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
                        header: () => (
                            <Header
                                text={<FindInstitutionText />}
                                navigateComponent="Home"
                            />
                        ),
                    }}
                />
                <Stack.Screen
                    name="PutCodeForInstitution"
                    component={PutCodeForInstitutionScreen}
                    options={{
                        header: () => <Header navigateComponent="Home" />,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;
