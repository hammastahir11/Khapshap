import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, TextInput, TouchableOpacity, TouchableHighlight } from "react-native";
import { Button } from 'react-native-paper';
import React from "react";
import { colors } from "../constants";

const Joining = ({ navigation }) => {
  return (

    <SafeAreaView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: colors.primary, paddingTop: 0 }}>
      

      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Image source={require('../assets/wa.png')} style={{ width: 170, height: 170 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 45, color: colors.white }}>Khap Shap</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 10 }}>Sign In/Sign Up</Text>
        <Text style={{ fontSize: 20, marginTop: 20 }}>Connect with your friends</Text>
      </View>


      <View style={styles.touchable}>
        <TouchableOpacity onPress={() => navigation.navigate("login")} style={styles.button}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={() => navigation.navigate("signup")} style={styles.button}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>








    </SafeAreaView>
  )
}

export default Joining

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: 'green', padding: 20, borderRadius: 10, marginHorizontal: 80, marginBottom: 20, alignItems: 'center', alignContent: 'center', marginTop: 15

  },
  text: {
    fontSize: 22,
    color: "white",
    margin: 10
  },
  button: {

    backgroundColor: 'green'
  }
})