import { AppRegistry } from "react-native";
import App from "./app/App";
import { name as appName } from "./app.json";
import { createStackNavigator, createAppContainer } from "react-navigation";
import React from "react";

class HomeScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});

AppRegistry.registerComponent(appName, () => App);
