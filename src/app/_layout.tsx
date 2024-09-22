import { Slot, Stack } from "expo-router";
import { useEffect } from "react";
import { useAuthStore} from "../stores/auth-store";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Layout  = ()=>{

    const {isAuthenticated, setIsAuthenticated} = useAuthStore();

    useEffect(()=>{
        const checkAuth = async ()=>{
            const token = await AsyncStorage .getItem('token');
            if(token){
                setIsAuthenticated(true);
            }else{
                setIsAuthenticated(false);
            }
        }
        checkAuth();
    },[])

    

    return (
        <Slot></Slot>
    )
}

export default Layout;