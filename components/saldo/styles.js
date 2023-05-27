import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#12212B',
        flex:1
    },
    navBar:{
        width:'100%',
        height:'60px',
        backgroundColor:'black',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    textEx:{
        color:'white',
        fontSize:'20px'
    },
    saldoPri:{
        width:'100%',
        height:'200px',
        backgroundColor:'',
        display:'flex',
        alignItems:'center'
    },
    textAu:{
        color:'green',
        fontSize:'20px',
        marginTop:'25px'
    },
    saldoAu:{
        fontSize:'20px',
        color:'white'
    },
    money:{
        fontSize:'50px',
        color:"white"
    },
    dados:{
        width:'100%',
        height:'100%',
        backgroundColor:'',
        display:'flex',
        

        
    },
    subDados:{
        width:'100%',
        height:'108px',
        backgroundColor:'',
        marginBottom:'10px',
        display:'flex',
        
       
    },
    subData:{
        fontSize:'19px',
        color:'white',
        marginLeft:'10px'
    },
    line:{
        textDecorationLine:'line-through',
        textDecorationColor:'black',
        marginLeft:'80px',
        
    },  
    data:{
        width:'100%',
        height:'20px',
        display:'flow-root',
        
    },
    tipo:{
        color:'gray',
        fontSize:'20px',
        marginTop:'26px'
    },
    saldo:{
       display:'flex',
       flexDirection:'row',
       justifyContent:'space-around'
    },
    subSaldo:{
        fontSize:'20px',
        marginTop:'27px',
        marginRight:'58px',
        color:'white',
        textDecorationLine:'underline',
        textDecorationColor:'green'
    }

})
export default styles