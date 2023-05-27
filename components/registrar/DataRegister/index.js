import { useState } from 'react'
import styles from './styles'
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native'
import axios from 'axios'



export default function DataRegister({navigation}){

    const [nome, setNome] = useState()
    const [registro, setRegistro] = useState()
    const [idade, setIdade] = useState()
    const [telefone, setTelefone] = useState()
    
    const token = localStorage.getItem('token')

    const id = localStorage.getItem('id_Usuario')

    const Submit = async () =>{
        try{
            axios.all([
             await axios.post('http://127.0.0.1:8000/Clientes/',{
                    nome:nome,
                    rg:registro,
                    idade:idade,
                    numero:telefone,
                    Usuario_Cliente:id
    
                },{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                }),
                await axios.get('http://127.0.0.1:8000/Clientes/',{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                })
          
            ])
            .then(axios.spread(function(ResponGet, RespoPost){
                const id_Cliente = ResponGet.data.codigo
                console.log(JSON.stringify(RespoPost))
                console.log(id_Cliente)
                localStorage.setItem('id_Cliente',id_Cliente)
            }))
    
            
        }catch(error){
            console.log(error)
        }
    }


    return(
        <View style={styles.container}>
            <View style={styles.ContainerImage}>
                <Image style={styles.LogoImage} source={require('../../../assets/logo.jpg')}/>
            </View>

            <View style={styles.ContainerAllInput}>
                <View style={styles.InputFather}>

                   <TextInput placeholder='Insira seu nome:'
                    style={styles.input}
                    onChangeText={(e)=> setNome(e)}
                    ></TextInput>
                    
                </View>

                <View style={styles.InputFather}>
                    <TextInput placeholder='Insira seu RG:'
                    style={styles.input}
                    onChangeText={(e)=> setRegistro(e)}
                    ></TextInput>
                </View>

                <View style={styles.InputFather}>
                    <TextInput placeholder='Insira sua idade:'
                    style={styles.input}
                    onChangeText={(e)=> setIdade(e)}
                    ></TextInput>
                </View>

                <View style={styles.InputFather}>
                    <TextInput placeholder='Insira seu telefone:'
                    style={styles.input}
                    onChangeText={(e)=>setTelefone(e)}
                    ></TextInput>
                </View>

                <View style={styles.ContainerButton}>
                    <TouchableOpacity style={styles.Button} onPress={Submit}>Enviar</TouchableOpacity>
                </View>
            </View>
        </View>
    )    
}

