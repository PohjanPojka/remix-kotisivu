import React from "react";
import { useState } from "react";
import "../app/main.css";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { HiOutlineChevronRight } from "react-icons/hi";

export default function App() {
    /** Header, Content, Link, Icon */
    let defState = ["Minun työkalupakkini", "Liikuta hiirtä eri kykyjeni päälle lukeaksesi lisää.", "", ""];

    const [state, setState] = useState(defState);

    return (
        <>
            <ul className="flex justify-center flex-wrap gap-4 p-4 pt-8 text-white font-montserrat text-xl sm:text-medium w-full">
                {/** Kopioi rivi aina uudelle elementille. En jaksa säätää tämän kanssa enempää. */}
                <li onMouseOver={() => setState(["React", "Olen rakentanut verkkosivuja eri React-pohjaisilla ohjelmistokehyksillä. Osaan tuottaa komponenttipohjaisia verkkosivukokonaisuuksia.", "https://react.dev/", "devicon-react-original"])} className="bg-slate-800 p-2 rounded-md hover:bg-slate-500">React</li>
                <li onMouseOver={() => setState(["TypeScript", "Käytän yleisesti TypeScriptiä aina kun mahdollista JavaScriptin sijaan. Luonnollisesti molempien käyttäminen sujuu.", "https://www.typescriptlang.org/", "devicon-typescript-plain"])} className="bg-slate-800 p-2 rounded-md hover:bg-slate-500">TypeScript</li>
                <li onMouseOver={() => setState(["Next.js", "Olen käyttänyt Next.js-ohjelmistokehystä rakentaessani selainpuolella renderöitäviä verkkosovelluksia.", "https://nextjs.org/", "devicon-nextjs-plain"])} className="bg-slate-800 p-2 rounded-md hover:bg-slate-500">Next.js</li>
                <li onMouseOver={() => setState(["Remix", "Olen käyttänyt Remix-ohjelmistokehystä rakentaessani verkkosovelluksia.", "https://remix.run/", ""])} className="bg-slate-800 p-2 rounded-md hover:bg-slate-500">Remix</li>
                <li onMouseOver={() => setState(["C#", "Olen käyttänyt C#-koodikieltä rakentamaan työpöytäsovelluksia Microsoftin .NET-ohjelmistokehyksen avulla. Olen käyttänyt koodikieltä myös Unity-pelimoottorin sisällä skriptauskielenä.", "https://dotnet.microsoft.com/en-us/languages/csharp", "devicon-csharp-plain"])} className="bg-slate-800 p-2 rounded-md hover:bg-slate-500">C#</li>
                <li onMouseOver={() => setState(["C++", "Olen hyödyntänyt C++-koodikieltä algoritmisessa ohjelmoinnissa ja ongelmanratkaisussa. Olen tutustunut myös Qt-pohjaisten työpöytäsovellusten rakentamiseen koodikielen avulla.", "https://fi.wikipedia.org/wiki/C%2B%2B", "devicon-cplusplus-plain"])} className="bg-slate-800 p-2 rounded-md hover:bg-slate-500">C++</li>
                <li onMouseOver={() => setState(["Python", "Olen käyttänyt Pythonin SciPy- ja NumPy-kirjastoja tieteellisessä ohjelmoinnissa, datan käsittelyssä ja lineaarialgebralaskennassa. Olen käyttänyt Pythonia myös algoritmiseen ohjelmointiin.", "https://www.python.org/", "devicon-python-plain"])} className="bg-slate-800 p-2 rounded-md hover:bg-slate-500">Python</li>
                <li onMouseOver={() => setState(["Tailwind", "Käytän hyvin usein Tailwindiä perinteisen CSS-tyyliohjelmoinnin sijaan verkkosivuja rakentaessani.", "https://tailwindcss.com/", "devicon-tailwindcss-plain"])} className="bg-slate-800 p-2 rounded-md hover:bg-slate-500">Tailwind</li>
                <li onMouseOver={() => setState(["GitHub", "Käytän GitHubia versiohallintaan.", "https://github.com", "devicon-github-plain"])} className="bg-slate-800 p-2 rounded-md hover:bg-slate-500">GitHub</li>
            </ul>
            <div className="flex justify-center pb-8">
                <div className="w-4/5 sm:w-2/3">
                    <Card className="bg-gray-800 text-white font-montserrat">
                        <CardHeader className="flex justify-between font-semibold">
                            <Link className="text-2xl sm:text-medium" href={state[2]}>{state[0]}</Link>
                            <i className="text-4xl" class={state[3]}></i>
                        </CardHeader>
                    <Divider className="bg-gray-400"/>
                        <CardBody className="text-xl sm:text-medium">
                            {state[1]}
                        </CardBody>
                        <CardFooter>
                            <div className="flex text-xl sm:text-medium text-green-400"><HiOutlineChevronRight/><HiOutlineChevronRight/><HiOutlineChevronRight/><HiOutlineChevronRight/></div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )   
};
