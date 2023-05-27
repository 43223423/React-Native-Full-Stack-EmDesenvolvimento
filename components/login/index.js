import { Text, TextInput, View, TouchableOpacity, Image} from "react-native"
import styles from './styles'
import Registrar from "../registrar"
import { useState, useEffect } from "react"


export default function Login({navigation}){


    

    return(
        <View style={styles.container}>

            <View style={styles.ajuda}>

            <View style={styles.help}>
                    <TouchableOpacity style={styles.text}>Ajuda</TouchableOpacity>
            </View>

            </View>

            <View style={styles.foto}>

            <View style={styles.logo}>
                <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
            </View>

            </View>

            <View style={styles.btn}>

            <View style={styles.entrada}>
               <TouchableOpacity 
               onPress={()=>navigation.navigate('Entrar')}
               
               
               >Entrar</TouchableOpacity>

            </View>
            </View>
            
            <View style={styles.btn}>

                <View style={styles.registro}>
                    <TouchableOpacity onPress={() => navigation.navigate(Registrar)}>Registrar</TouchableOpacity>
                </View>
            

            </View>

        </View>

    )}