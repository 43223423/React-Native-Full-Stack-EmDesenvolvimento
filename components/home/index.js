
import Button from "../componentesButton/Button"
import Investir from "../investir"
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native"
import styles from './styles'
import Usuario from "../usuario"
import { DollarSign, User, Paperclip, Hash } from "react-feather"
import Saldo from "../saldo"
import Footer from "../footer"
import SubButton from "../componentesButton/SubButton"

import codigoConta from "../codigoConta"

import {FaHandHoldingUsd} from 'react-icons/fa'

import {TbPlus} from 'react-icons/tb'

import {FaPiggyBank} from 'react-icons/fa'

import {MdMonetizationOn} from 'react-icons/md'
import axios from "axios"
import { useDebugValue, useState } from "react"

export default function Home({navigation, route}){

    const [email, setEmail ] = useState()

    const [imagem, setImagem] = useState()

    const id_Usuario = localStorage.getItem('id_Usuario')

    const token = localStorage.getItem('token')

    const get = axios.get(`http://127.0.0.1:8000/Usuarios/${id_Usuario}/`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }).then(respo => {
        const data = respo.data
        const email = data.email
        const image = data.imagem

        setImagem(image)
        setEmail(email)
        console.log(image)
        console.log(email)
    })
    

    return(
        <View style={styles.container}>
            <View style={styles.navbar}>

                <View style={styles.perfil}>
                <TouchableOpacity style={styles.fotoperfil} onPress={()=>navigation.navigate(Usuario)}><img src={imagem}/></TouchableOpacity>
                {/* <Image source={require(route.params?.imagem)}/> */}
                
                </View>


                <View style={styles.pesquisa}>
                    <TextInput style={styles.pes} placeholder="Busque no FastBank"/>

                </View>
            </View>


            <View style={styles.saldo}>
              
                <View style={styles.money}> 
                    <View style={styles.submoney}>
                    <TouchableOpacity  onPress={()=>navigation.navigate(Saldo)}><Image style={styles.logo} source={require('../../assets/miniLogo.jpg')}/></TouchableOpacity> 
                        <Text style={styles.email}>{email}</Text>
                    </View> 

                        <Text style={styles.sdc}> Saldo da conta:</Text>                
                        <Text style={styles.mo}>R$ </Text>
                        <TouchableOpacity style={styles}>

                        </TouchableOpacity>
                </View>

            </View>


            <View style={styles.opcoes}>
                <Button  navigation={()=> navigation.navigate('codigoConta')} text='Boleto' icon={<DollarSign color="green" size='24'/>}> </Button>
                <Button  text='Pix' icon={<Hash color="green" size='24'/>}> </Button>
                <Button navigation={()=>navigation.navigate(Saldo)} text='Extrato' icon={<Paperclip color="green" size='24'/>}> </Button>
                <Button  text='Pagar pessoas' icon={<User color="green" size='24'/>}> </Button>
            </View>


            <View style={styles.sugestao}>
                <Text style={styles.title}> Sugestões para você</Text>
                <View style={styles.SubButton}>
                    <SubButton icon={<FaHandHoldingUsd size='28' color="black"/>}></SubButton>
                    <SubButton icon={<TbPlus size='28' color="black"/>}></SubButton>
                    <SubButton icon={<FaPiggyBank size='28' color="black"/>}></SubButton>
                    <SubButton icon={<MdMonetizationOn size='28' color="black"/>}></SubButton>
                    </View>
                <View style={styles.botao}>
</View>
                    {/* <View style={styles.sugestaoNome}>
                        <Text>Proteger Carteira</Text>
                        <Text>Parcelar Boleto</Text>
                        <Text>@rodrigo.senai23</Text>
                        <Text>@lindomar.jacare33</Text>
                    </View> */}
                

            </View>

            <View style={styles.investimento}>

                <View style={styles.subInvestimento}>
                    {/* <TouchableOpacity onPress={() => navigation.navigate("Investir")}>  */}
                        <View style={styles.texto}> 
                            <Text style={styles.textIn}>Está afim de Investir?</Text>
                        
                            <Text style={styles.textPa}> Invista em ações {'\n'} para contruir seu {'\n'} <Text style={styles.patri}>patrimônio</Text> </Text>
                        </View>
                        <View style={styles.fotoIn}>
                            <TouchableOpacity onPress={()=>navigation.navigate(Investir)}>  <Image style={styles.inves} source={require('../../assets/Inves.png')}/> </TouchableOpacity>
                            <TouchableOpacity onPress={() =>navigation.navigate(Investir)}><Text style={styles.textCli}>Clique aqui!</Text></TouchableOpacity>
                        </View>
                   
                </View>
                    
            </View>
                    <Footer/>
            
        </View>

    )
}