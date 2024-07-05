import React from "react";
import { Image, Divider, Link } from "@nextui-org/react";
import { useLoaderData } from "@remix-run/react";

export default function App({postId}) {
    const { data } = useLoaderData<typeof loader>();

    return (
        <>
            <div className="bg-gray-800 rounded-lg w-1/3 text-2xl sm:text-medium">
                    <Image alt={data[postId].imgalt} src={data[postId].imgsrc}></Image>
                    <Link href={"/blog#"+data[postId].id} className="inline-flex p-4 font-semibold text-2xl sm:text-medium">{data[postId].title}</Link>
                    <Divider className="bg-gray-600"/>
                    <p className="text-2xl sm:text-medium inline-flex p-4">{data[postId].summary}</p>
                    <div className="flex justify-between text-gray-400 p-4 text-xl sm:text-sm">
                        <p>{data[postId].date}</p>
                        <p>{data[postId].category}</p>
                    </div>
            </div>
        </>
    );
}