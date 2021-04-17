import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function SignUp(props) {

    const styles = StyleSheet.create({
        container: {
            flexDirection: "column",
            backgroundColor: "#A9A9F5",
            minHeight: 160,
            maxWidth: 200,
            padding:10
        },
        text:{
            fontSize: 20,
            marginTop: 10
        },
        button:{
            margin: 15
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text}>SignUp Form</Text>
            <Text style={styles.text}>Enter email</Text>
            <input placeholder="Enter valid email" />

            <Text style={styles.text}>Enter password</Text>
            <input type="password" placeholder="Enter password" />
            
            <button style={{margin: 15, backgroundColor: "blue"}}>Submit</button>
            
        </View>
    );
}

export default SignUp;