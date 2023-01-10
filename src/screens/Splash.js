import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView } from "react-native";
import React from "react";
import { colors } from "../../src/constants";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const Splash = ({navigation}) => {
  setTimeout(()=>{
    navigation.navigate('joining')
  },3000)
  return (
    <SafeAreaView style={styles.container}>
     
      <Image source={require('../assets/wa.png')} style={{width:170, height:170}}/>
      <Text style={{fontSize:38}}>Khap Shap</Text>

      <Text style={{fontSize:17, marginTop:15}}>Connect with your friends to do some Khap Shap.</Text>
    </SafeAreaView>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:colors.primary,
    paddingBottom:150
  }

});
