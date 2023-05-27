import { Text, TextInput, View, TouchableOpacity, Image} from "react-native"
import styles from './styles'
import { FlatList } from "react-native"
import {ArrowRight} from 'react-feather'
import axios from "axios"
import { useState } from "react"

export default function Usuario({navigation}){

    const [imagem, setImagem] = useState()

    const id = localStorage.getItem('id_Usuario')

    const token = localStorage.getItem('token')

    const get = axios.get(`http://127.0.0.1:8000/Usuarios/${id}/`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }).then(respo =>{
        const data = respo.data
        const imagem = data.imagem
        setImagem(imagem)

    })

    return(
        <View style={styles.container}>

            <View style={styles.ajustes}>
                <Text style={styles.subAjustes}>Ajustes</Text>
            </View>
            
           <View style={styles.photo}>
            
            <View style={styles.foto}><img src={imagem}/></View>

                <Text style={styles.conta}>@thiago.alves</Text>
                <Text style={styles.nome}>Thiago Alves</Text>
            </View>

        <View  >
                <ul style={styles.abas}> 
                    <Text style={styles.textCon}>Minha conta </Text>
                    <li style={styles.subAbas}> Editar <ArrowRight style={{marginLeft:'251px'}} color="black" size='22'/></li>
                    <li style={styles.subAbas}> Meu FastBank <ArrowRight style={{marginLeft:'251px'}} color="black" size='22'/></li>
                    <li style={styles.subAbas}> Meu número <ArrowRight style={{marginLeft:'263px'}}color="black" size='22'/></li> 
                    <li style={styles.subAbas}> Meu Email <ArrowRight style={{marginLeft:'277px'}} color="black" size='22'/></li>
                    <li style={styles.subAbas}> Dados Pessoais <ArrowRight style={{marginLeft:'241px'}} color="black" size='22'/></li>
                    <li style={styles.subAbas}> Conta bancária <ArrowRight style={{marginLeft:'244px'}} color="black" size='22'/></li>
                    <li style={styles.subAbas}> Cartões <ArrowRight style={{marginLeft:'303px'}} color="black" size='22'/></li>
                </ul>
        
        </View>


        </View>

    )
}