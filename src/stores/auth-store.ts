import {create} from 'zustand';

interface AuthState {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticate: boolean) => void;
}

export const useAuthStore = create<AuthState>((set)=>({
    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated: boolean)=>set({isAuthenticated}),
}))


