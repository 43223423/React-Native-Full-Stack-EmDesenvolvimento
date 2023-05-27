import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer} from '@react-navigation/native'

import {createStackNavigator} from '@react-navigation/stack'

import {Feather, FontAwesome} from '@expo/vector-icons'

import Sucesso from "./components/sucesso";

import Home from "./components/home";

import Login from "./components/login";

import Saldo from "./components/saldo";

import Usuario from "./components/usuario";

import Entrar from './components/entrar'

import Registrar from "./components/registrar";

import DescricaoConta from "./components/descricaoConta";

import Investir from './components/investir'
import codigoConta from "./components/codigoConta";
import DataRegister from "./components/registrar/DataRegister";

const Nav = createBottomTabNavigator()

const Pilha = createStackNavigator()




function NavBar(){
    return(
        <Nav.Navigator
        screenOptions={{
            tabBarStyle:{
                backgroundColor:'white',
                borderTopColor:'transparent',
                paddinBottom:1,
                paddingTop:1
            }
        }}
        >
          
            <Nav.Screen name='Login' component={Login}
                options={{
                
                    headerShown:false,
                    tabBarIcon:({size,color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
                />
                  <Nav.Screen name='Home' component={Home}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
                />
              
            <Nav.Screen name='Usuario' component={Usuario}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
                />
            <Nav.Screen name='Saldo' component={Saldo}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
                />
            <Nav.Screen name='Registrar' component={Registrar}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
                />
            <Nav.Screen name='DescricaoConta' component={DescricaoConta}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
                />
            <Nav.Screen name='Sucesso' component={Sucesso}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
                />
            <Nav.Screen name="DataRegister" component={DataRegister}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}            
            
            />
            
            {/* <Nav.Screen name='Investir' component={Investir}
                options={{
                    
                    headerShown:false,
                    tabBarIcon:({size,color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
                /> */}


           


        </Nav.Navigator>
    )
}


export default function Router(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen
                name="NavBar"
                component={NavBar}
                options={{title:false}}
            
                />
                <Pilha.Screen
                name="Login"
                component={Login}
                options={{title:false}}
            
                />
                <Pilha.Screen
                name="Entrar"
                component={Entrar}
                options={{title:false}}
            
                />
                <Pilha.Screen
                name="Home"
                component={Home}
                options={{title:false}}
            
                />
                <Pilha.Screen
                name="Usuario"
                component={Usuario}
                options={{title:false}}
            
                />
                <Pilha.Screen
                name="Saldo"
                component={Saldo}
                options={{title:false}}
            
                />
                <Pilha.Screen
                name="Registrar"
                component={Registrar}
                options={{title:false}}
            
                />
                <Pilha.Screen
                name="DescricaoConta"
                component={DescricaoConta}
                options={{title:false}}
            
                />
                <Pilha.Screen
                name="Investir"
                component={Investir}
                options={{title:false}}
            
                />
                <Pilha.Screen
                name="codigoConta"
                component={codigoConta}
                options={{title:false}}
                />
                <Pilha.Screen
                name="DataRegister"
                component={DataRegister}
                options={{title:false}}
                />

            </Pilha.Navigator>



        </NavigationContainer>

        
    )
}