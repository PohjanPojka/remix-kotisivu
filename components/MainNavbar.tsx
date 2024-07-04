import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/navbar";
import React from "react";
import "../app/main.css"
import { Button, Link } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaEye } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImEmbed2 } from "react-icons/im";
import '@fontsource-variable/montserrat'

export default function MainNavbar() {
    return(
        <Navbar className="bg-gray-800 font-semibold font-montserrat" maxWidth="full">
            <NavbarBrand>
                <a href="/" className="text-xl font-semibold text-white"><div className="p-4"><ImEmbed2 size="36" color="white" /></div></a>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex" justify="center">
                <NavbarItem>
                    <a href="/#portfolio"><Button endContent={<FaEye size="24"/>} className="text-white text-base bg-green-600 font-semibold">Portfolio </Button></a>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about" className="text-white">Tietoja</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/blog" className="text-white">Blogi</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <a href="https://github.com/PohjanPojka"><FaGithub size="36" color="white"/></a>
                </NavbarItem>
                <NavbarItem>
                    <a className="hover:bg-red-400" href=""><FaXTwitter size="36" color="white"/></a>
                </NavbarItem>
                <NavbarItem>
                    <a href="https://www.linkedin.com/in/eemeli-myllym%C3%A4ki-256213231/"><FaLinkedin size="36" color="white"/></a>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};