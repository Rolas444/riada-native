import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useAuthStore } from "../stores/auth-store";
import { useRouter } from "expo-router";
import { TextInput, Text } from "react-native-paper";

const LoginScreen = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const setIsAuthenticated = useAuthStore(state=>state.setIsAuthenticated);
    const router = useRouter();


    const handleLogin = async ()=>{
        const token  = '';

    await AsyncStorage.setItem('token', token);
    setIsAuthenticated(true);
    router.push("./home");
    
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Inicia Sesión</Text>
            <TextInput
                label="Usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                label="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      textAlign: 'center',
    },
    input: {
      marginBottom: 12,
    },
    button: {
      marginTop: 16,
    },
  });

export default LoginScreen;