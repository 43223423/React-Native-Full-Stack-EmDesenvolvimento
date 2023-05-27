import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },
    voltar:{
        width:'100%',
        height:'40px',
        backgroundColor:"rgb(15, 27, 34)",
        display:'flex',
        flexDirection:'row',
        alignItems:"center"
    },
    subVoltar:{
        marginLeft:'10px',
        fontSize:'20px',
        color:'white',
        display:'flex',
        

    },
    check:{
        alignSelf:'center'
    },
    textVoltar:{
        color:'white',
        fontSize:'20px'
    },
    navBar:{
        width:'100%',
        height:'50px',
        backgroundColor:'#12212B',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textCon:{
        fontSize:'25px',
        color:'white'
    },
    codigoBoleto:{
        width:'100%',
        height:'150px',
        backgroundColor:'#12212B'
    },
    textBo:{
        color:'white',
        fontSize:'29px',
        marginLeft:'10px',
        marginTop:'9px'
    },
    subCodigoBoleto:{
        color:'white',
        fontSize:'26px',
        marginLeft:'24px',
        marginTop:'10px'
    },
    descricao:{
        width:'100%',
        height:'250px',
        backgroundColor:'#12212B',
        display:"flex",
        justifyContent:'space-around',
        alignItems:"center"
    },
    dados:{
       marginLeft:'20px'
     
    },
    text01:{
        fontSize:"23px",
        color:'white',
        padding:'5px'
    },
    text02:{
        fontSize:"23px",
        color:'white',
        padding:'5px'
    },
    text03:{
        fontSize:"23px",
        color:'white',
        padding:'5px',
        borderBottomWidth:'2px',
        borderBottomColor:'green',
        
    },
    agendar:{
        width:'100%',
        height:'120px',
        backgroundColor:'#12212B',
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        borderWidth:'0.2px'
    },
    subAgendar:{
        fontSize:'20px',
        color:'green',
        textDecorationLine:'underline',
        textDecorationColor:'green',
        padding:'10px'
    },
    btn:{  
        width:'100%',
        height:'207px',
        backgroundColor:'#12212B',
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        
    },
    subBtn:{
        width:'220px',
        height:'63px',
        backgroundColor:"rgb(15, 27, 34)",
        borderRadius:'10px',
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        fontSize:'19px',
        color:'white'
    }
})


export default styles