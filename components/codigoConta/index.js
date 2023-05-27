import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import Button from '../componentesButton/Button'
import DescricaoConta from '../descricaoConta'
import axios from 'axios'
import { useState } from 'react'

export default function codigoConta({navigation}){

    const [codigoBarras, setCodigoBarras] = useState()

    const [valor, setValor] = useState()

    const [descricao, setDescricao] = useState()

    const codigo = localStorage.getItem('id_Cliente')
    
    const token = localStorage.getItem('token')

    axios.all([
            axios.post("http://127.0.0.1:8000/Transacoes/",{
            codigo:codigoBarras,
            valor:valor,
            saldo:'999',
            descricao:descricao,
            cliente:codigo
    
        },{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }),
        axios.get
    ])




    return(
        <View style={styles.container}>
            <View style={styles.Container_Text01}>
                <Text style={styles.Text01}>Pagar boleto</Text>
            </View>
            <View style={styles.Container_Text02}>
                <Text style={styles.Text02}>Digite o codígo de barras:</Text>
            </View>
            <View style={styles.Pri_Container_Input}>
                    <TextInput style={styles.Sub_input} onChage={(e) => setCodigoBarras(e.target.value)} placeholder='Codígo de barras'/>
                    <TextInput style={styles.Sub_input02} onChange={(e) => setDescricao(e.target.value)} placeholder='Descrição (Opcional)'/>
                    <TextInput style={styles.Sub_input02} onChange={(e) => setValor(e.target.value)} placeholder='Digite o valor da conta'/>

                    <Text style={{fontSize:'20px', fontWeight:'bold', color:'white'}}>Opcional</Text>
            </View>
{/* 
            <View style={styles.Leitor_container}>
                <TouchableOpacity style={styles.SubLeitor}><Text style={styles.TextLeitor}>Use o leitor de código de barras</Text></TouchableOpacity>
            </View> */}

            <View style={styles.Button_submit}>
                <TouchableOpacity onPress={()=>navigation.navigate(DescricaoConta)} style={styles.subButton}><Text style={{fontWeight:'bold'}}>Enviar</Text></TouchableOpacity>
            </View>

        </View>
    )
}