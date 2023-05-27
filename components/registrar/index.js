
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native'
import axios from 'axios'
import styles from './styles'
import { useState, useEffect } from 'react'
import { uploadBytesResumable, ref } from 'firebase/storage'
import {storage, db} from '../firebaseConfig'

import { auth } from '../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import DataRegister from './DataRegister'


export default function Registrar({navigation}){

    const [email, setEmail] = useState('')
    const [foto, setFoto] = useState('')
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    const [preview, setPreview] = useState()



    const [status, setStatus] = useState()

    const Submit = async () =>{
        try{
            axios.all([
                await axios.post('http://127.0.0.1:8000/Usuarios/',{
                    nomeUsuario:nome,
                    email:email,
                    password:password,
                    imagem:foto
                }, {
                    headers:{'Content-Type':'multipart/form-data'}
                    
                }),
                axios.get('http://127.0.0.1:8000/Usuarios/')

            ])
            .then(axios.spread(function(RespoPost, RespoGet){
                  
                const sta = RespoPost.data
                const id = sta.id
                localStorage.setItem('id_Usuario', id)
               navigation.navigate(DataRegister)
            }))
            }catch(error){
            console.log(error)
        }
        try{
            const conta = await axios.post('http://127.0.0.1:8000/create_user/',{
                username:nome,
                email:email,
                password:password,
                is_superuser: true,
                is_staff:true
            },{
                headers:{
                    'Content-Type':'application/json; charset=UTF-8'
                }
            }).then(respo => console.log(respo))

        }catch(error){
            console.log(error)
        }
      
    }

    
    return(
        <View style={styles.container}>
            <View style={styles.logo}> 
                <Image style={styles.subLogo} source={require("../../assets/logo.jpg")}/>
            </View>

            

            <View style={styles.input}>
                <View style={styles.name}>
                    <TextInput style={styles.subName}
                    placeholder='Insira seu nome:'
                    value={nome}
                    onChangeText={(e)=>{setNome(e)}}
                    >

                    </TextInput>
                </View>
            </View>
            <View style={styles.input}>
                <View style={styles.email}>
                    <TextInput style={styles.subEmail}
                     placeholder='Insira um Email:'
                     value={email}
                     onChangeText={(e)=>{setEmail(e)}}
                     >

                    </TextInput>
                    </View>  
            </View>
                <View style={styles.senha}>
                    <TextInput style={styles.subSenha}
                     placeholder='Insira uma senha:'
                    value={password}
                     onChangeText={(e)=>{setPassword(e)}}
                     >

                    </TextInput>
                </View>
                <View style={styles.foto} >
                    <input src={preview} type='file' 
                    style={styles.subFoto}
                    onChange={(e)=>{setFoto(e.target.files[0])}}
                    />

                </View>
            <View style={styles.input}>

                <View style={styles.enviar}>
                    <TouchableOpacity 
                    style={styles.subEnviar}
                    onPress={Submit}
                    
                    >
                          Enviar
                    </TouchableOpacity>
            
                </View>
            </View>

            <View style={styles.possuir}>
                <Text style={styles.subPossuir} onPress={()=>navigation.navigate("Entrar")}>
                    Já tenho uma conta!
                </Text>
            </View>
                   
        </View>
    )
}