import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0E222E',
        

    },
    Container_Text01:{
        padding:'20px',
        display:'flex',
        alignItems:'center',
        color:'white'

    },
    Text01:{
        color:'black',
        fontWeight:'bold',
        fontSize:'30px',
        color:'white'


    },
    Container_Text02:{
        display:'flex',
        alignItems:'center',
        padding:'20px'
    },
    Text02:{
        fontWeight:'bold',
        fontSize:'20px',
        color:'white'
    },

    Sub_input:{
        padding:'18px',
        backgroundColor:'white',
        borderTopLeftRadius:'20px',
        borderTopRightRadius:'20px',
        fontWeight:"bold",
        fontSize:'20px'
    },
    Sub_input02:{
        padding:'18px',
        backgroundColor:'white',
        borderTopLeftRadius:'20px',
        borderTopRightRadius:'20px',
        fontWeight:"bold",
        fontSize:'20px',
        marginTop:'35px'
    },
    Pri_Container_Input:{
        display:'flex',
        justifyContent:'space-between',
        padding:'34px'
    },
    Button_submit:{
        padding:'20px',
        display:'flex',
        alignItems:'center'
    },
    subButton:{
        width:'100px',

        height:'40px',
        backgroundColor:'white',
        fontSize:'10px',
        fontWeight:'bold',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10px'
        
    },
    Leitor_container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    SubLeitor:{
        width:'300px',
        height:'50px',
        backgroundColor:'white',
        borderRadius:'10px',
        fontSize:'20px',
        fontWeight:'bold'
    },
    TextLeitor:{
        fontWeight:'bold',
        fontSize:'15px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

})
export default styles