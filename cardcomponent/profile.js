import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import DisplayAnImage from './profileImage';
import UserData from './userData';

export default function Profile ({userInfo}){

    const styles = StyleSheet.create({
        container: {
          padding: 10,
          width: 170,
          height: 300,
          backgroundColor: "blue",
          borderRadius: 10,
          margin: 10
        },
        name: {
          color: "white"
        },
        personalIntro: {
          width: 150,
          height: 150,
        },
        goal: {
            width: 150,
            height: 150,
          },
      });

    return(
        <View style={styles.container}>
            
            <DisplayAnImage imageSource = {userInfo.imageLink}/>
            <Text style={styles.name}>{userInfo.name}</Text>
            <Text>{userInfo.personalIntro}</Text>
            <Text>{userInfo.personalGoal}</Text>

        </View>
    )
}