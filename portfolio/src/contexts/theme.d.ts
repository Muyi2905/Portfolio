import PropTypes from 'prop-types';
interface ThemeContextProps {
    themeName: string;
    toggleTheme: () => void;
}
declare const ThemeContext: import("react").Context<ThemeContextProps | null>;
interface ThemeProviderProps {
    children: React.ReactNode;
}
declare const ThemeProvider: {
    ({ children }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    };
};
export { ThemeProvider, ThemeContext };
