import React from "react";
import { Image, Divider, Link } from "@nextui-org/react";

export default function App() {
    return (
        <>
            <div className="bg-gray-800 rounded-lg w-100 h-100 text-2xl sm:text-medium">
                    <Image alt="NextUI hero Image" src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"></Image>
                    <Link href="/blog#post-1" className="inline-flex p-4 font-semibold text-2xl sm:text-medium">Blogin otsikko: tilapäinen teksti</Link>
                    <Divider className="bg-gray-600"/>
                    <p className="text-2xl sm:text-medium inline-flex p-4">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </p>
                    <div className="flex justify-between text-gray-400 p-4 text-xl sm:text-sm">
                        <p>1.1.1900</p>
                        <p>Ohjelmointi</p>
                    </div>
            </div>
        </>
    );
}