import { Text, TextInput, View, TouchableOpacity, Image} from "react-native"
import styles from './styles'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebaseConfig"
import { useState } from "react"
import Registrar from "../registrar"
import Login from "../login"
import Home from "../home"
import axios from "axios"

export default function Entrar({navigation, route}){


    const [foto, setFoto] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const [status, setStatus] = useState()

    // const token = localStorage.setItem('token')

    const btLogin = async (e)=>{

        e.preventDefault()

        try{
           const login = await axios.post('http://127.0.0.1:8000/token/',{
                username:email,
                password:password
           },{
            headers:{
                'Content-Type':'application/json; charset=UTF-8',
            }
           })
           .then(respo => {
            const data = respo.data
            const access = data.access
            console.log(data)
            localStorage.setItem('token',access)
            navigation.navigate(Home)

            const status = respo.status
            setStatus(status)
           
           })


        }catch(error){
            console.log(error)
        }
    }
    return(
        <View style={styles.container}>

            <View style={styles.voltar}>
                <TouchableOpacity style={styles.back}
                onPress={()=>navigation.navigate(Login)}
                
                ><Text>Voltar</Text></TouchableOpacity>
            </View>

            <View style={styles.ajuda}>

            <View style={styles.help}>
                    <TouchableOpacity style={styles.textAjuda}><Text>Ajuda</Text></TouchableOpacity>
            </View>

            </View>

            <View style={styles.foto}>
                <Image style={styles.logo} source={require('../../assets/logo.jpg')}/>
            </View>
    
            {status != 200 ? <Text style={{color:'white'}}>Conta nn existe</Text> : ''}

            <View style={styles.entrada}>
                <TextInput style={styles.input} placeholder="Digite seu email"
                keyboardType="email"
                onChange={(e) => setEmail(e.target.value)}
                />

            </View>
            
    
                <View style={styles.registro}>
                <TextInput style={styles.input} placeholder="Digite sua senha"
                type='password'
                onChange={(e)=> setPassword(e.target.value)}
                />
            </View>
            
            <View style={styles.enviar}>
                <TouchableOpacity style={styles.btnEnviar} 
                onPress={btLogin}>
                    <Text>Enviar</Text>
                </TouchableOpacity>

            </View>


            </View>
         

        

    )}