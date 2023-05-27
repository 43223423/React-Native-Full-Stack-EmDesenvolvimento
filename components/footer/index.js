import {Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'

export default function Footer(){
    return(
        <View style={styles.Footer_container}>
            <View style={styles.subFooter}>
                <h2>FasteBank &copy; 2023</h2>
                <hr style={{width:'90%', color:"white"}}></hr>

            </View>   
        </View>   
       
    )
}
