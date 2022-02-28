import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activestyle>
                    Inicio
                </NavLink>
                <NavLink to="/productos" activestyle>
                    Productos
                </NavLink>
                <NavLink to="/sale" activestyle>
                    SALE
                </NavLink>
                <NavLink to="/cuidados" activestyle>
                    Cuidados
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/contacto" activestyle>Contacto</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;

