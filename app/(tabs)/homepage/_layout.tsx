import React from 'react';
import { Image, Platform, StyleSheet, View, Text } from 'react-native';
import { Tabs } from 'expo-router';

import CustomTabBarButton from '@/components/CustomTabBarButton';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#555',
            tabBarInactiveTintColor: '#555',
            headerShown: false,
            tabBarButton: CustomTabBarButton,
            tabBarBackground: TabBarBackground,
            tabBarShowLabel: false,
            tabBarStyle: [
            styles.tabBarStyle,
            Platform.select({
                ios: {
                position: 'absolute',
                },
                default: {},
            }),
            ],
        }}
        >
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <Image
                source={require('@/assets/images/home.png')}
                style={[styles.icon, { tintColor: focused ? '#fff' : color }]}
              />
              <Text style={[styles.iconLabel, { color: focused ? '#fff' : color }]}>home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'favorites',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <Image
                source={require('@/assets/images/favorites.png')}
                style={[styles.icon, { tintColor: focused ? '#fff' : color }]}
              />
              <Text style={[styles.iconLabel, { color: focused ? '#fff' : color }]}>favorites</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: 'trips',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <Image
                source={require('@/assets/images/trips.png')}
                style={[styles.icon, { tintColor: focused ? '#fff' : color }]}
              />
              <Text style={[styles.iconLabel, { color: focused ? '#fff' : color }]}>trips</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'chat',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <Image
                source={require('@/assets/images/chat.png')}
                style={[styles.icon, { tintColor: focused ? '#fff' : color }]}
              />
              <Text style={[styles.iconLabel, { color: focused ? '#fff' : color }]}>chat</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'more',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
              <Image
                source={require('@/assets/images/more.png')}
                style={[styles.icon, { tintColor: focused ? '#fff' : color }]}
              />
              <Text style={[styles.iconLabel, { color: focused ? '#fff' : color }]}>more</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    position: 'absolute',
    bottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  activeIconContainer: {
    backgroundColor: '#7475A7',
    borderRadius: 30,
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 15,
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 5,
    width: 49,
    height: 30,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});