import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import styles from './styles'
import codigoConta from '../codigoConta'

import Home from '../home'


export default function Sucesso({navigation}){
    return(
        <View style={styles.container}>
           <View style={styles.Container_image}>
                <Image style={styles.image} source={require('../../assets/logo.jpg')}/>
           </View>
           <View style={styles.Container_text}>
                <Text style={styles.Text01}>Conta paga com sucesso!</Text>
                <Text style={styles.Text02}>Obrigado, e volte sempre!</Text>
           </View>
            <View style={styles.Container_buttons}>
                <View style={styles.Container_voltar}>
                        <TouchableOpacity onPress={()=> navigation.navigate(Home)} style={styles.Button_voltar}>Voltar para a home!</TouchableOpacity>

                </View>
                <View style={styles.Container_again}>
                        <TouchableOpacity onPress={()=> navigation.navigate(codigoConta)} style={styles.Button_again}>Pagar outra conta!</TouchableOpacity>
                </View>
           </View>
        </View>
    )
}
