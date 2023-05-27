import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#0E222E',
        flex:1
    },
    ContainerImage:{
        width:'100%',
        height:'245px',
        backgroundColor:'#0E222E',
        display:'flex',
        alignItems:"center",
        justifyContent:"center"
    },
    LogoImage:{
        width:"252px",
        height:"252px",
        marginTop:'33px',
      
    },
    ContainerInput:{
        width:'100%',
        height:'500px',
        backgroundColor:"gray"
    },
    input:{
        width:'150px',
        height:'50px',
        borderRadius:'15px',
        fontSize:'15px',
        borderWidth:'2px',
        borderColor:'black',
        color:'white'
    },
    ContainerAllInput:{
        height:'450px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around'
    },
    InputFather:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    Button:{
        width:'70px',
        height:'45px',
        backgroundColor:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
        
    },
    ContainerButton:{
        width:'100%',
        height:'70px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }


})
export default styles
