// EXTERNAL DEPS  =============================================================
import React, { useState } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
const activeChain = "mumbai";
import {
    ConnectWallet,
    useContract,
    useContractWrite,
} from "@thirdweb-dev/react";

// import "@fontsource/sen/400.css";
// import "@fontsource/sen/700.css";
import "../styles/setuFonts.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

// INTERFACE  =================================================================
import { ThemeProvider, ContentWrapper } from "fictoan-react";

// LAYOUTS  ===================================================================
import { CrucibleLightTheme } from "../styles/Crucible.light.theme";
import { CrucibleDarkTheme } from "../styles/Crucible.dark.theme";
import { GlobalStyle } from "../styles/Global.styled";

// COMPONENTS ===============================================================
// import { SiteHeader } from "@components/SiteHeader/SiteHeader";
// import { Sidebar } from "@components/Sidebar/Sidebar";
// import { Footer } from "@components/Footer/Footer";
// import Head from "next/head";
// import "../styles/SetuFonts.css";

// HOOKS  =====================================================================

// CONTEXTS  ==================================================================

// ASSETS  ====================================================================

// DATA  ======================================================================

// TYPES  =====================================================================

function MyApp({ Component, pageProps }) {
    let [currentTheme, setCurrentTheme] = useState("light");

    const toggleTheme = () => {
        if (currentTheme === "light") {
            setDocsTheme("dark");
        } else {
            setDocsTheme("light");
        }
    };

    const setDocsTheme = (theme) => {
        setCurrentTheme(theme);
        localStorage.setItem("theme", theme);
    };

    const getLayout = Component.getLayout || ((page) => page);

    const modifiedPageProps = { ...pageProps, toggleTheme };

    return (
        <ThemeProvider
            theme={
                currentTheme === "light"
                    ? CrucibleLightTheme
                    : CrucibleDarkTheme
            }
        >
            <GlobalStyle />
            {/* <SiteHeader /> */}

            <ThirdwebProvider activeChain={activeChain}>
                <Component {...modifiedPageProps}></Component>
            </ThirdwebProvider>
            {/* <Footer /> */}
            <ToastContainer
                theme="light"
                position="top-right"
                autoClose={800}
                draggable
            />
        </ThemeProvider>
    );
}

export default MyApp;
