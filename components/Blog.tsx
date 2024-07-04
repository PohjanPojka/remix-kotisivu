import React from "react";
import "../app/main.css"
import { useLoaderData } from "@remix-run/react";
import { Image, Divider } from "@nextui-org/react"
import parse from "html-react-parser";

export default function App() {
    const { data } = useLoaderData<typeof loader>();

    var bodyArray: string[][] = [];
    for (const post of data) {
        var body: string[] = []
        for (const paragraph of post.content) {
          body.push('<p>' + paragraph + '<p/>')
        }
        bodyArray.push(body)
    }

    return(
        <>
        {
            data.map((post, i) => (
                <>
                    <div id={post.id} className="font-montserrat text-white p-4 space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-4xl md:text-2xl font-semibold">{post.title}</p>
                            <p className="text-xl text-gray-400">{post.date}, {post.category}</p> 
                        </div>
                        <Divider className="bg-gray-500"/>
                        <Image src={post.imgsrc} alt={post.imgalt}></Image>
                        <div className="space-y-2 text-2xl md:text-medium">
                            {bodyArray[i].map((parg, j) => (parse(parg)))}
                        </div>
                    </div>
                    <Divider className="bg-gray-500"/>
                </>
            ))
        }
        </>
    )
}