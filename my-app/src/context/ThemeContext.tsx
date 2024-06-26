import React, {createContext, ReactNode, useContext, useState} from 'react';


interface ThemeContextProps {
    darkTheme: boolean;
    setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultThemeContext: ThemeContextProps = {
    darkTheme: false,
    setDarkTheme: () => {
    }
};

export const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);

export const useDarkTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(`useTheme must be used within a ThemeContextProvider`);
    }
    return context;
};

interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);


    const contextValue: ThemeContextProps = {
        darkTheme,
        setDarkTheme,
    };

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
