import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
import WelcomePage from "../pages/WelcomePage";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            // 通过设置header为null,来禁用StackNavigator的Navigator Bar
            header: null,
        }
    }
});

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null
        }
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            // header: null
        }
    }
});


export default createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null
    }
})
