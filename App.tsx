import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, Pressable, Image, Switch, Alert } from 'react-native';

export default function App() {

  
    
    const [weight,setWeightText] = useState('');
    const [height,setHeightText] = useState('');
    const [bmi,setBMI] = useState('');
    const [bmiCategory,setBMICategory] = useState('');
    //const [switchOn, setSwitchOn] = useState(false);
    const [tSwitch, toggleSwitch] = useState(false);

    

    const calculateBMI = () => {

        if(tSwitch==true){
        console.log('kgs/cms')
        const weightInKgs = parseFloat(weight)
        const heightInMeters = parseFloat(height)/100
        const bmiVal = weightInKgs/(heightInMeters*heightInMeters)
       
        setBMI(bmiVal.toFixed(2))

        if(bmiVal < 18.5){
            setBMICategory("Underweight")
        }
        else if(bmiVal <= 24.9){
            setBMICategory("Normal weight")
        }
        else if(bmiVal <= 29.9 ){
            setBMICategory("Overweight")
        }
        else if(bmiVal >= 30 ){
            setBMICategory("Obesity")
        }
        
    }else{
        console.log('lbs/in')
        const weightInKgs = parseFloat(weight) * 0.45359237
        const heightInMeters = parseFloat(height) * 0.0254
        const bmiVal = weightInKgs/(heightInMeters*heightInMeters)
       
        setBMI(bmiVal.toFixed(2))

        if(bmiVal < 18.5){
            setBMICategory("Underweight")
        }
        else if(bmiVal <= 24.9){
            setBMICategory("Normal weight")
        }
        else if(bmiVal <= 29.9 ){
            setBMICategory("Overweight")
        }
        else if(bmiVal >= 30 ){
            setBMICategory("Obesity")
        }

    }

    
    }
      
    


    return (
        <View style={styles.maincontainer}>
            <Text style={styles.title}>BMI Calculator</Text>
            <Image style={styles.ImageBackground} source={require('./meter-400x360v.png')} />
            
            <View style={styles.container}>

            <Text style={styles.Label}>Select measurement system (SI [kg, cm]/metric[lb, in])</Text>
            <Switch value={tSwitch} onValueChange={toggleSwitch}/>
            <Text style={styles.weight}>{tSwitch ? 'Enter weight in kgs' : 'Enter weight in lbs'}</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Weight"
                    id="weight"
                    keyboardType="numeric"
                    onChangeText={(weight) => setWeightText(weight)}
                    value={weight}
                />
            <Text style={styles.height}>{tSwitch ? 'Enter height in cms' : 'Enter height ins '}</Text>
                <TextInput 
                    style={styles.input}
                    id="height"
                    placeholder="Height"
                    keyboardType="numeric"
                    onChangeText={(height) => setHeightText(height)}
                    value={height}
                />
               
                <Pressable onPress={calculateBMI} style={styles.button}><Text style={styles.text}>Calculate BMI</Text></Pressable>
                
        <Text style={styles.result}> Result : {bmi}</Text>
        <Text style={styles.category}>{bmiCategory}</Text>
  
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    maincontainer: {
        marginTop: 30,
    },
    input:{
        borderWidth:1,
        marginBottom:10,
        padding:10,
        width:'80%',
        borderRadius:10,
     },
    title: {
        backgroundColor: 'grey',
        textAlign: 'center',
        padding: 10,
        fontSize: 15,
        color: '#FFFF',
        fontWeight:'bold',
  
    },
    result: {
        backgroundColor: 'grey',
        textAlign: 'center',
        padding: 10,
        fontSize: 15,
        color: '#FFFF',
        fontWeight:'bold',
  
    },
    container: {
        marginTop: 40,
        alignItems: 'center',
    },
    weight: {
        
        textAlign: 'center',
        padding: 0,
        fontSize: 15,
        color: 'red',
        fontWeight:'bold',
  
    },
    height: {
        
        textAlign: 'center',
        padding: 0,
        fontSize: 15,
        color: 'red',
        fontWeight:'bold',
  
    },
    category: {
        textAlign: 'center',
        padding: 5,
        fontSize: 15,
        color: 'black',
        fontWeight:'bold',
  
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
        margin:3,
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      ImageBackground: {
        
        resizeMode: "cover",
        width: "100%",
        height: "40%",
        alignItems: "center",
      },
      Label: {
        
        textAlign: 'center',
        padding: 5,
        fontSize: 10,
        color: 'black',
        fontWeight:'bold',
      }
  
});


