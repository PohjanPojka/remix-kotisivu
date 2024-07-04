import React from "react"
import "../app/main.css"
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function App({ name, desc, langs, git, links }) {

    return (
        <>
            <Card className="bg-gray-800 text-slate-100 font-montserrat">
                <CardHeader className="font-semibold text-lg">
                    <p className="pr-4">{name}</p>
                    <Divider className="bg-gray-500" orientation="vertical"/>
                    <div className="pl-4 space-x-2 text-3xl">
                        <i class={langs[0]}></i>
                        <i class={langs[1]}></i>
                        <i class={langs[2]}></i>
                    </div>
                </CardHeader>
                <Divider className="bg-gray-500"/>
                <CardBody>
                    <p>{desc}</p>
                </CardBody>
                <Divider className="bg-gray-500"/>
                <CardFooter>
                    <Link showAnchorIcon href={git}>Lähdekoodi Githubissa</Link>
                </CardFooter>
            </Card>
        </>
    )
};