import React, { useState, useEffect } from 'react';
import {Text, Image, View, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FitnesDashboard from '../screens/Fitnes/FitnesDasboard';
import TrainFitnes from '../screens/Fitnes/TrainFitnes'

import FitnesIcon from '../assets/NavIcons/fitnes.svg';
import FitnesUnactiveIcon from '../assets/NavIcons/fitnesUnactive.svg';
import EditStats from '../screens/Fitnes/components/subTabs/EditStats';

import EatsIcon from '../assets/NavIcons/eats.svg';
import EatsIconUnActive from '../assets/NavIcons/eatsUnactive.svg';
import FormIcon from '../assets/NavIcons/form.svg';
import ShopIcon from '../assets/NavIcons/shopping-bag.svg';
import ShopIconActive from '../assets/NavIcons/storeUnactive.svg';

import MoreIcon from '../assets/NavIcons/more.svg';
import MoreIconActive from '../assets/NavIcons/moreActive.svg';
import MenuBg from '../assets/formTab/menu-bg.png'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FitnesStack() {
    return (
        <Stack.Navigator
            initialRouteName={'FitnesScreen'}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen
                name="ViewScreen"
                component={FitnesDashboard}
                options={{
                    gestureEnabled: false
                }}
            />
            <Stack.Screen
                name="TrainFitnes"
                component={TrainFitnes}
                options={{
                    gestureEnabled: false
                }}
            />
            <Stack.Screen
                name="EditStats"
                component={EditStats}
                options={{
                    gestureEnabled: false
                }}
            />
        </Stack.Navigator>
    );
}

function MyFormStack() {
    return (
        <Stack.Navigator
            initialRouteName={'FitnesScreen'}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen
                name="ViewScreen"
                component={FitnesDashboard}
                options={{
                    gestureEnabled: false
                }}
            />

        </Stack.Navigator>
    );
}
function ShopStack() {
    return (
        <Stack.Navigator
            initialRouteName={'FitnesScreen'}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen
                name="ViewScreen"
                component={FitnesDashboard}
                options={{
                    gestureEnabled: false
                }}
            />

        </Stack.Navigator>
    );
}
function MoreStack() {
    return (
        <Stack.Navigator
            initialRouteName={'FitnesScreen'}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen
                name="ViewScreen"
                component={FitnesDashboard}
                options={{
                    gestureEnabled: false
                }}
            />

        </Stack.Navigator>
    );
}
function EatsStack() {
    return (
        <Stack.Navigator
            initialRouteName={'FitnesScreen'}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen
                name="ViewScreen"
                component={FitnesDashboard}
                options={{
                    gestureEnabled: false
                }}
            />

        </Stack.Navigator>
    );
}
function BgTabBar({ state, descriptors, navigation }) {

    return  <ImageBackground    source={require('../assets/formTab/menu-bg.png')}
                                 style={styles.bgImage}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;
            const tabIcon = options.tabBarIcon
            console.log(tabIcon[1], route.name)
            const tabIconActive = options.tabBarIconActive

            const isFocused = state.index === index;

            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                }
            };

            const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
            };

            return index == 2 ?
                   <View style={ styles.tabStyleTop }>
                       <TouchableOpacity
                           accessibilityRole="button"
                           accessibilityState={isFocused ? { selected: true } : {}}
                           accessibilityLabel={options.tabBarAccessibilityLabel}
                           testID={options.tabBarTestID}
                           onPress={onPress}
                           onLongPress={onLongPress}
                           style={ styles.tabCentered }
                       >
                           {tabIcon}
                       </TouchableOpacity>
                       <Text style={{top: 5, fontSize: 12,color: isFocused ? '#283933' : '#BCC3CC' }}>
                           {label}
                       </Text>
                   </View>
                    : <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabStyle }
                    >
                    {!isFocused && <Text style={styles.tabIcon}> {tabIcon[0]}</Text> }
                    {isFocused && <Text style={styles.tabIcon}> {tabIcon[1]}</Text> }
                        <Text style={{ top: 11,fontSize: 12, fontFamily: 'FuturaPT-Medium', fontWeight: '500',color: isFocused ? '#000000' : '#BCC3CC' }}>
                            {label}
                        </Text>

                    </TouchableOpacity>
        })}
    </ImageBackground>
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
        flex: 1,
        resizeMode: 'contain',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        position: 'absolute',
        height: 110
},
    tabStyle: {
        top: 15,
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabIcon: {
        height: 20,
    },
    tabStyleTop: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabCentered: {
        width: 63,
        height: 63,
        shadowColor: "rgba(0, 0, 0, 0.22)",
        shadowOffset:{
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 100,
        bottom: 10,
    },

})

function BottomTabs() {
    return (
        <Tab.Navigator
            tabBar={props => <BgTabBar {...props} />}
            initialRouteName={'Dashboard'}
            activeColor="#616D78"
            inactiveColor="rgba(97, 109, 120, 0.6)"

            tabBarOptions={{
                showIcon: true,
                activeTintColor: '#283933',
                inactiveTintColor: '#BCC3CC',

                tabStyle: {
                    marginTop: 13,
                    height: 50
                },
                labelStyle: {
                    fontSize: 13
                },
                style: {
                    height: 86,
                    bottom: 0,
                    opacity: .5,
                    elevation: 0,
                    borderTopWidth: 0
                }
            }}
            shifting={false}
        >

            <Tab.Screen
                name="Fitnes"
                component={FitnesStack}
                options={{
                    tabBarLabel: '????????????',
                    tabBarIcon:  [<FitnesUnactiveIcon />, <FitnesIcon />]

                }}
            />
            <Tab.Screen
                name="Gold"
                component={EatsStack}
                options={{
                    tabBarLabel: '??????????????',
                    tabBarIcon: [<EatsIcon  /> , <EatsIconUnActive />]
                }}
            />
            <Tab.Screen
                name="?????? ??????????"
                component={MyFormStack}
                options={{
                    tabBarLabel: '?????? ??????????',
                    tabBarIcon: <FormIcon  />
                }}
            />
            <Tab.Screen
                name="??????????????"
                component={ShopStack}
                options={{
                    tabBarLabel: '??????????????',
                    tabBarIcon: [<ShopIcon  />, <ShopIconActive /> ]
                }}
            />
            <Tab.Screen
                name="??????"
                component={MoreStack}
                options={{
                    tabBarLabel: '??????',
                    tabBarIcon:  [<MoreIcon  />, <MoreIconActive /> ]
                }}
            />
            {/*<Tab.Screen*/}
            {/*    name="Profile"*/}
            {/*    component={ProfileMain}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: 'Profil',*/}
            {/*        tabBarIcon: ({ focused, color }) => (focused ? <ProfileIconActive /> : <ProfileIcon />)*/}
            {/*    }}*/}
            {/*/>*/}
        </Tab.Navigator>
    );
}

const AppNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName={props.initialRouteName}
            screenOptions={{
                headerShown: false,
                gestureEnabled: false
            }}
        >
            <Stack.Screen name="MainStack" component={BottomTabs} />

        </Stack.Navigator>
    );
};


export default AppNavigator;
