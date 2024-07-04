import React from "react";
import { Image, Divider } from "@nextui-org/react";

export default function App() {
    return (
        <>
            <div className="bg-gray-800 rounded-lg w-100 h-100">
                    <Image alt="NextUI hero Image" src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"></Image>
                    <p className="inline-flex p-4 font-semibold">Blogin otsikko: tilapäinen teksti</p>
                    <Divider className="bg-gray-600"/>
                    <p className="inline-flex p-4">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </p>
                    <div className="flex justify-between text-sm text-gray-400 p-4">
                        <p>1.1.1900</p>
                        <p>Ohjelmointi</p>
                    </div>
            </div>
        </>
    );
}