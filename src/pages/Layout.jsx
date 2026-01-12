import {  Outlet, useNavigate } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import useGlobalReducer from "../hooks/useGlobalReducer"
import strangerThingsService from "../services/strangerThingsService.js";

import { useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
	const navigate =useNavigate()

	const { dispatch } = useGlobalReducer()

	useEffect(() => {
		async function getCharacters() {
			const [data,error] = await strangerThingsService.getAllCharacter()

			if(error){
				 toast.error(error);
				 return navigate('/error')
			}
			
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
			 <Toaster />
        </ScrollToTop>
    )
}