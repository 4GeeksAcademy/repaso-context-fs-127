import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import useGlobalReducer from "../hooks/useGlobalReducer"
import strangerThingsService from "../services/strangerThingsService.js";

import { useEffect } from "react"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {

	const { dispatch } = useGlobalReducer()

	useEffect(() => {
		async function getCharacters() {
			const data = await strangerThingsService.getAllCharacter()
			
			dispatch({type:'set_all_characters',payload:data})
		}

		getCharacters()
	}, []
	)

    return (
        <ScrollToTop>
			<Navbar/>
                <Outlet />
            <Footer />
        </ScrollToTop>
    )
}