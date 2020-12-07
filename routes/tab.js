import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Home from './../screen/Home';
import More from './../screen/More';
import { trans } from '../languages/util';


const Tab = createBottomTabNavigator();

export default class Tabs extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    backgroundColor: "black",
                    activeTintColor: "white",
                    style: {
                        backgroundColor: '#1a1718',
                        borderTopColor: 'transparent',
                    },
                }}>
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarLabel: trans("Home"),
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Entypo name="home" size={size} color={color} />
                    }
                }} />
                <Tab.Screen name="Search" component={More} options={{
                    tabBarLabel: trans("Search"),
                    tabBarIcon: ({ focused, color, size }) => {
                        return <AntDesign name="search1" size={size} color={color} />
                    }
                }} />
                <Tab.Screen name="Comming" component={More} options={{
                    tabBarLabel: trans("Comming"),
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Entypo name="new" size={size} color={color} />
                    }
                }} />
                <Tab.Screen name="Download" component={More} options={{
                    tabBarLabel: trans("Download"),
                    tabBarIcon: ({ focused, color, size }) => {
                        return <AntDesign name="download" size={size} color={color} />
                    }
                }} />
                <Tab.Screen name="More" component={More} options={{
                    tabBarLabel: trans("More"),
                    tabBarIcon: ({ focused, color, size }) => {
                        return <AntDesign name="pluscircle" size={size} color={color} />
                    }
                }} />
                {/* <Tab.Screen name="Home" component={More} /> */}
            </Tab.Navigator>
        )
    }
}