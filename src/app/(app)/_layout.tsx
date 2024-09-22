import { useAuthStore } from "@/src/stores/auth-store";
import { Redirect, Stack } from "expo-router";

const AppLayout =()=>{

    const {isAuthenticated, setIsAuthenticated} = useAuthStore();

    if(!isAuthenticated){
        return <Redirect href="/login"></Redirect>
    }

    return (
        <Stack></Stack>
    )

}

export default AppLayout;