import React from "react";
import '../main.css'
import Blog from "../../components/Blog"
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

    return (
      <>
        <div className="bg-gray-700">
          <Blog/>
        </div>
      </>
    );
  }
  