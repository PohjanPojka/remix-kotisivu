import { Form, useFetcher } from "@remix-run/react";
import React from "react";
import {Divider, Button} from "@nextui-org/react";
import "../app/main.css";
import fs from "fs"
import captcha from "a-captcha/dist"

export default function App() {
    const fetcher = useFetcher();

    return (
        <div className="w-full md:w-1/2 px-6 py-4">
            <fetcher.Form method="post" action="/contact">
                <div className="flex justify-between pb-2">
                    <p className="">Ota yhteyttä:</p>
                    <Button type="submit" className="h-7 outline bg-gray-800 outline-green-600 outline-1 text-gray-400">Lähetä</Button>
                </div>
                <Divider className="bg-gray-500"/>
                <div className="md:flex items-center">
                    <div className="justify-items-start">
                        <p className="py-2">Viesti *</p>
                        <textarea required type="text" name="content" className="w-96 h-32 outline bg-gray-800 outline-1 outline-gray-600 text-gray-300 rounded-lg p-3 font-normal"></textarea>
                    </div>
                    <div className="flex md:block md:space-y-4 space-x-4 md:space-x-0 pt-2 md:pt-0 md:pl-4">
                        <div>
                            <p className="pb-2">Sähköposti *</p>
                            <input required type="email" name="email" className="p-1 max-h-8 bg-gray-800 outline-gray-600 text-white outline-1 outline rounded-lg font-normal"></input>
                        </div>
                        <div>
                            <p className="pb-2">Puhelinnumero</p>
                            <input name="sms" className="p-1 max-h-8 bg-gray-800 outline-gray-600 outline-1 text-white outline rounded-lg font-normal"></input>
                        </div>
                    </div>
                </div>
            </fetcher.Form>
        </div>
    );
}