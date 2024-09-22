import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const HomeScreen = ()=>{



    return (
        <View style={styles.container}>
            <Text>Wellcome</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    button: {
      marginTop: 16,
    },
  });

export default HomeScreen;