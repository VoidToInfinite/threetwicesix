import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import LangUS from '../lang/en-US.json';
import LangES from '../lang/es-ES.json';

const langContext = React.createContext();

/**
 * Create a React functional component
 * Component states (Delegated state) 
 * @returns JSX DOM with components [WishInput, Wishlist]
 */
const LangProvider = ({ children }) => {
    let defaultLocale;
    let defaultMessages;
    const lang = localStorage.getItem('lang');

    if (lang) {
        defaultLocale = lang;

        if (lang === 'es-ES') {
        defaultMessages = LangES;
        } else if (lang === 'en-US') {
        defaultMessages = LangUS;
        } else {
        defaultLocale = 'es-ES';
        defaultMessages = LangES;
        }
    }

    const [messages, setMessages] = useState(defaultMessages);
    const [locale, setLocale] = useState(defaultLocale);

    const setLang = (lenguaje) => {
        switch (lenguaje) {
        case 'es-ES':
            setMessages(LangES);
            setLocale('es-ES');
            localStorage.setItem('lang', 'es-ES');
            break;
        case 'en-US':
            setMessages(LangUS);
            setLocale('en-US');
            localStorage.setItem('lang', 'en-US');
            break;
        default:
            setMessages(LangES);
            setLocale('es-ES');
            localStorage.setItem('lang', 'es-ES');
        }
    };

    return (
        <langContext.Provider value={{ setLang, locale }}>
            <IntlProvider locale={ locale } messages={ messages }>
                { children }
            </IntlProvider>
        </langContext.Provider>
    );
};
/**
 *  export langContext component
 */
export { LangProvider, langContext };
