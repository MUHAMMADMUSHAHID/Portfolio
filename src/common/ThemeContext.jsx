import React, {createContext,useContext,useEffect,useState} from 'React';
import { Children } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({Children}) =>{
    const [theme, seTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
);
}