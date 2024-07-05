import React from "react";
import "../main.css"
import '@fontsource-variable/montserrat'
import { Image, Divider, Textarea } from '@nextui-org/react'
import ProjectCard from "../../components/ProjectCard"
import SkillsNavigator from "../../components/SkillsNavigator"
import ContactInput from "../../components/ContactInput"
import BlogCard from "../../components/BlogCard"
import type { LinksFunction } from "@remix-run/node"
import path from "path";
import { fileURLToPath } from "url";
import { json } from "@remix-run/node";
import { promises as fs } from "fs";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loader = async (args: LoaderFunctionArgs) => {
    
    const jsonDirectory = __dirname + "/../../blog";
    const fileContent = await fs.readFile(jsonDirectory + "/blogData.json", "utf8");
    const data = JSON.parse(fileContent);
  
    return json({data});
  } 

export default function App() {

    const { data } = useLoaderData<typeof loader>();

    return(
        <>
            <div className="bg-gradient-to-t from-gray-700 to-gray-600 text-white font-montserrat py-24 md:py-36 pl-10 md:pl-36">
            <div className="w-max"><p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-3xl sm:text-5xl text-white font-bold">Eemeli Myllymäki</p></div>
            <p className="inline-flex break-words text-2xl sm:text-medium pt-5 w-2/3 sm:w-1/2"> Terve! Olen Eemeli Myllymäki, nuori ja intohimoinen ohjelmistokehittäjän alku Tampereen seudulta. Vaikka minulla ei ole virallista koulutusta, olen itsenäisesti hankkinut vahvat taidot ja kokemusta monista ohjelmointikielistä eri harrastusprojektien kautta. Olen aina innokas oppimaan uutta ja ottamaan vastaan haasteita; erityisesti niitä, jotka vaativat luovaa ajattelua ja veitsenterävää ongelmanratkaisukykyä. Täällä voit tutustua projekteihini ja nähdä, mihin kaikkeen olen pystynyt pelkän pitkäjänteisyyden ja ahkeran harjoittelun avulla.</p>
            </div>
            <Divider className="bg-gray-500"/>
            <div className="py-8 text-white font-montserrat" id="portfolio">
                <p className="font-semibold text-6xl underline pb-8 pl-6">Projektini</p>
                <div className="gap-2 space-y-4 md:space-y-0 md:grid grid-cols-2 grid-rows-2 px-4 sm:px-24">
                    <ProjectCard name="Portfoliosivu" desc="Remixillä ja NextUI-käyttöliittymäkirjastolla kasattu portfolioverkkosivu." langs={[ "devicon-typescript-plain", "devicon-react-original colored", "devicon-tailwindcss-plain" ]} git="https://github.com" links=""/>
                    <ProjectCard name="Portfoliosivu" desc="Remixillä ja NextUI:n frontend-työkaluilla kasattu portfolioverkkosivu." langs={[ "devicon-typescript-plain", "devicon-react-original colored" ]} git="https://github.com" links=""/>
                    <ProjectCard name="Portfoliosivu" desc="Remixillä ja NextUI:n frontend-työkaluilla kasattu portfolioverkkosivu." langs={[ "devicon-typescript-plain", "devicon-react-original colored" ]} git="https://github.com" links=""/>
                    <ProjectCard name="Portfoliosivu" desc="Remixillä ja NextUI:n frontend-työkaluilla kasattu portfolioverkkosivu." langs={[ "devicon-typescript-plain", "devicon-react-original colored" ]} git="https://github.com" links=""/>
                </div>
            </div>
            <Divider className="bg-gray-500"/>
            <div className="flex w-full justify-center font-montserrat">
                <p className="pt-8 font-semibold underline text-white text-6xl">Osaamiseni</p>
            </div>
            <SkillsNavigator/>
            <Divider className="bg-gray-500"/>
            <div className="p-8 text-white font-montserrat">
                <p className="font-semibold text-6xl underline pb-6">Blogi</p>
                <div className="block sm:flex justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <BlogCard postId={0}/>
                    <BlogCard postId={0}/>
                    <BlogCard postId={0}/>
                </div>
            </div>
            
            <Divider className="bg-gray-500"/>
            <div className="bg-gray-800 font-montserrat text-gray-400">
                <div className="block lg:flex justify-between items-end">
                    <ContactInput/>
                    <p className="font-sm p-4">2024 Eemeli Myllymäki</p>
                </div>
            </div>
        </>
    )
};

export const links: LinksFunction = () => {
    return [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css",
      },
    ];
  };
  