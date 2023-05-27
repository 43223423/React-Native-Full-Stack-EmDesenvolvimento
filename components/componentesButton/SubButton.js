import { View } from 'react-native'
import styles from './styles.js'

export default function SubButton({text, icon}){
    return(
        <View>
            <button style={styles.Button_sugestao}>{icon}</button>
            <span style={styles.text}>{text}</span>
        </View>
    )
}