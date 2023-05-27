import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#deded9',
        flex:1
    },
    ajustes:{
        width:'100%',
        height:50,
        backgroundColor:'#0E222E',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    subAjustes:{
        fontSize:'23px',
        fontWeight:'bold',
        color:'white'
    },
   
    ajuda:{
        width:40,
        height:2,
        color:'white',
        marginRight:5
    },
    help:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end'
    
    },
    

    photo:{
      width:"100%",
      height:'14pc',
      backgroundColor:'none',
      marginTop:'20px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
     

    },
    foto:{
        width:150,
        height:150,
        borderRadius:'100%',
        backgroundColor:'white',
        borderColor:'#0E222E'
    },
    conta:{
        fontSize:'25px',
        fontWeight:'bold'
    },
    nome:{
        fontSize:'20px',
        fontWeight:'600'
    },

    voltar:{
        color:'white'
    },
    subAbas:{
        width:'100%',
        height:45,
        border:'0.2px solid',
        backgroundColor:'white',
        listStyleType:'none',
        fontSize:'20px',
        display:'flex',
        alignItems:'center',
       
    },
    
    abas:{
        width:"100%",
        height:"300px",
        backgroundColor:'',
        listStyleType:'none',
        padding:'inherit', // Tirou o espaço da lista
        display:'flex',
        flexDirection:'column',
        
    },
    textCon:{
        fontSize:'22px',
        fontWeight:'bold'
    }

})
export default styles