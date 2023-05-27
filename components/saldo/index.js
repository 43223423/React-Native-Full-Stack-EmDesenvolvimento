import { Text, TextInput, View } from "react-native"
import styles from './styles'

export default function Saldo({ navigation }) {


    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <Text style={styles.textEx}>Extrato</Text>
            </View>

            <View style={styles.saldoPri}>
                <Text style={styles.textAu}> Saldo Atual </Text>
                <Text style={styles.saldoAu}> R$ <View style={styles.money}>10.000,00</View></Text>
            </View>

            <View style={styles.dados}>

                <View style={styles.subDados}>
                    <View style={styles.data}>
                        <Text style={styles.subData}>31/03/2023</Text>
                        <Text style={styles.line}>                            </Text>
                    </View>

                    <View style={styles.saldo}>
                        <Text style={styles.tipo}>Transferência</Text>
                        <Text style={styles.subSaldo}>R$ 999,00</Text>


                    </View>
                </View>
                <View style={styles.subDados}>
                    <View style={styles.data}>
                        <Text style={styles.subData}>16/08/2022</Text>
                        <Text style={styles.line}>                            </Text>
                    </View>
                    <View style={styles.saldo}>
                        <Text style={styles.tipo}>Saláro</Text>
                        <Text style={styles.subSaldo}>R$ 900,00</Text>


                    </View>
                </View>
                <View style={styles.subDados}>
                    <View style={styles.data}>
                        <Text style={styles.subData}>06/04/2023</Text>
                        <Text style={styles.line}>                            </Text>
                    </View>
                    <View style={styles.saldo}>
                        <Text style={styles.tipo}>Saláro</Text>
                        <Text style={styles.subSaldo}>R$ 99,10</Text>


                    </View>
                </View>
                <View style={styles.subDados}>
                    <View style={styles.data}>
                        <Text style={styles.subData}>12/04/2023</Text>
                        <Text style={styles.line}>                            </Text>
                    </View>
                    <View style={styles.saldo}>
                        <Text style={styles.tipo}>Saláro</Text>
                        <Text style={styles.subSaldo}>R$ 9099,10</Text>


                    </View>
                </View>

            </View>
        </View>

    )
}