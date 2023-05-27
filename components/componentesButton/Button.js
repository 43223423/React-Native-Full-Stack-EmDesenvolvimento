import { View } from 'react-native'
import styles from './styles.js'
import {TouchableOpacity} from 'react-native'

export default function Button({text, icon, navigation}){
    return(
        <View>
            <TouchableOpacity onPress={navigation} style={styles.Button_container}>{icon}</TouchableOpacity>
            <span style={styles.text}>{text}</span>
        </View>
    )
}
 function Icon(){
    return{
    

    }
}