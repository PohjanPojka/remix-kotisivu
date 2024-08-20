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
          <meta charset="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <meta name="description" content="IT-alan yrittäjä Tampereen seudulta. Portfoliosivu. Ota yhteyttä."></meta>
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
  