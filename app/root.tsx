import {
    Links,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
import React from "react";
import './main.css'
import {NextUIProvider} from "@nextui-org/react";
import MainNavbar from "../components/MainNavbar";

 
  export default function App() {
    return (
      <html className="min-h-full scroll-smooth">
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <meta name="viewport" content="width=600, initial-scale=1"></meta>
          <Meta />
          <Links />
        </head>
        <body className="min-h-full bg-gray-700">
          <NextUIProvider>
            <div className="min-h-full bg-gray-700">
              <MainNavbar/>
              <Outlet />
  
              <Scripts />
            </div>
          </NextUIProvider>
        </body>
      </html>
    );
  }
  