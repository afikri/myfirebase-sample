import React from 'react'
import { StyleSheet, TextInput, KeyboardAvoidingView, View } from 'react-native'

const LoginScreen = () => {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    style={styles.container}
                >
                    Login Screen
                </TextInput>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})