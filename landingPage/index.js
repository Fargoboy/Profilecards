import React from 'react';
import { Text, StyleSheet,View } from 'react-native';
import SignUp from './signUp';

function LandingPage() {
    const styles = StyleSheet.create({
        headingText: {
            fontSize: 30,
            marginBottom: "20"
        }
    })
    return (
        <View>

            <Text style={styles.headingText}>Welcome to my page</Text>
            <br/>
            <br/>
            <br/>
            
            <SignUp/>
            
        </View>
    );
}

export default LandingPage;