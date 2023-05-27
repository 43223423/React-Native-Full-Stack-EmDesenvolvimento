import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import styles from './styles'
import {Feather, FontAwesome5, FontAwesome} from '@expo/vector-icons'

export default function Investir({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Text style={styles.data}>19/02/2000</Text>
                <Text style={styles.textEv}> Eventos </Text>
            </View>

            <View style={styles.portifolio}>
                <View style={styles.subPortifolio}>
                    <View style={styles.subText}>
                        <Text style={styles.textPor}> Meu Portifolio </Text>
                        <Text style={styles.textMo}> R$450,00</Text>
                    </View>
                    <View style={styles.subText02}>
                        <Text style={styles.subTextPor}>Profit{'\n'}+2.3%  </Text>
                        <Text style={styles.subTextMo}>R$23,232.00</Text>

                    </View>
                </View>
            </View>

            <View style={styles.subContainer}>

                <View style={styles.news}>
                    <View style={styles.texto}>
                        <Text style={styles.textNe}>News</Text> 
                        <TouchableOpacity style={styles.textAl}>- See all</TouchableOpacity>
                    </View>
                    <View style={styles.subNews}>
                        <View style={styles.imgAp}>
                            <Image style={styles.subImgAp} source={require('../../assets/apple.png')}/>

                        </View>

                    </View>
                </View>

                <View style={styles.stocks}>
                    <Text style={styles.textSt}> My Stocks </Text>

                    <View style={styles.subStocks}>

                            
                            <View style={styles.subInsterprise}>
                                    <FontAwesome style={styles.icon}  name='amazon' color='orange' size='39px'/>
                                    <Text style={styles.textIn}>Amazon</Text>
                            </View>
                            

                            
                            <View style={styles.subInsterprise}>
                                    <FontAwesome style={styles.icon} name='facebook' color='blue' size='39px'/>
                                    <Text style={styles.textIn}>Facebook</Text>
                            </View>
                            
                    </View>
                </View>
            </View>
        </View>
    )
}

