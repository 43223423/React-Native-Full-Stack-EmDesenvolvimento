import {View, Text, TextInput, TouchableOpacity, CheckBox } from 'react-native'
import styles from './styles'
import {ArrowLeft} from 'react-feather'
import Sucesso from '../sucesso'
import codigoConta from '../codigoConta'


export default function DescricaoConta({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.voltar}>
                <TouchableOpacity onPress={()=> navigation.navigate(codigoConta)} style={styles.subVoltar}> <ArrowLeft  size='30'/></TouchableOpacity>
                <Text onPress={()=> navigation.navigate(codigoConta)} style={styles.textVoltar}> Voltar </Text>
            </View>
            <View style={styles.navBar}>
                <Text style={styles.textCon}>Descrição da Conta</Text>
            </View>
            <View style={styles.codigoBoleto}>
                <Text style={styles.textBo}>Código do boleto:</Text>
                <Text style={styles.subCodigoBoleto}>34543234545 3456543456 {'\n'} 5654567654334323233209</Text>
            </View>
            <View style={styles.descricao}>
                <View style={styles.dados}>
                <Text style={styles.text01}>Banco: {'\n'} 143 - LowBank S.M</Text>
                <Text style={styles.text02}>Valor: {'\n'} R$ 230,00</Text>
                <Text style={styles.text03}>Vencimento: {'\n'} 12/04/2032</Text>
                <Text></Text>
                </View>
            </View>

            <View style={styles.agendar}>
            
            
                <CheckBox style={styles.check}/>
                <TouchableOpacity style={styles.subAgendar}>Pagar agora </TouchableOpacity>
                <TouchableOpacity style={styles.subAgendar}> Agendar para o dia...</TouchableOpacity>
                
            </View>

            <View style={styles.btn}>
                <TouchableOpacity onPress={()=> navigation.navigate(Sucesso)} style={styles.subBtn}>Continuar com o {'\n'} pagamento</TouchableOpacity>
            </View>
        </View>
    )
}