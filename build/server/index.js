import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Meta, Links, Outlet, Scripts, useFetcher } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Button, Link, NextUIProvider, Card, CardHeader, Divider, CardBody, CardFooter } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { FaEye, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImEmbed2 } from "react-icons/im";
import nodemailer from "nodemailer";
import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function MainNavbar() {
  return /* @__PURE__ */ jsxs(Navbar, { className: "bg-gray-800 font-semibold font-montserrat", maxWidth: "full", children: [
    /* @__PURE__ */ jsx(NavbarBrand, { children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-xl font-semibold text-white", children: /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsx(ImEmbed2, { size: "36", color: "white" }) }) }) }),
    /* @__PURE__ */ jsxs(NavbarContent, { className: "hidden sm:flex", justify: "center", children: [
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx("a", { href: "/#portfolio", children: /* @__PURE__ */ jsx(Button, { endContent: /* @__PURE__ */ jsx(FaEye, { size: "24" }), className: "text-white text-base bg-green-600 font-semibold", children: "Portfolio " }) }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { href: "/about", className: "text-white", children: "Tietoja" }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { href: "/blog", className: "text-white", children: "Blogi" }) })
    ] }),
    /* @__PURE__ */ jsxs(NavbarContent, { justify: "end", children: [
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/PohjanPojka", children: /* @__PURE__ */ jsx(FaGithub, { size: "36", color: "white" }) }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx("a", { className: "hover:bg-red-400", href: "", children: /* @__PURE__ */ jsx(FaXTwitter, { size: "36", color: "white" }) }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/eemeli-myllym%C3%A4ki-256213231/", children: /* @__PURE__ */ jsx(FaLinkedin, { size: "36", color: "white" }) }) })
    ] })
  ] });
}
function App$7() {
  return /* @__PURE__ */ jsxs("html", { className: "min-h-full scroll-smooth", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(
        "link",
        {
          rel: "icon",
          href: "data:image/x-icon;base64,AA"
        }
      ),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsx("body", { className: "min-h-full bg-gray-700", children: /* @__PURE__ */ jsx(NextUIProvider, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-full bg-gray-700", children: [
      /* @__PURE__ */ jsx(MainNavbar, {}),
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] }) }) })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App$7
}, Symbol.toStringTag, { value: "Module" }));
function App$6() {
  return /* @__PURE__ */ jsx(Fragment, {});
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App$6
}, Symbol.toStringTag, { value: "Module" }));
async function action({ request }) {
  const transporter = nodemailer.createTransport({
    host: "",
    port: "",
    secure: "",
    auth: {
      user: "",
      pass: ""
    }
  });
  const body = await request.formData();
  const newMail = {
    email: body.get("email"),
    sms: body.get("sms"),
    content: body.get("content")
  };
  try {
    transporter.sendMail({
      from: '"noreply" <noreply@eemelimyllymaki.fi>',
      to: newMail.email,
      subject: "Kiitos yhteydenotosta",
      text: "Testi"
    });
  } catch {
  }
  return null;
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: "Module" }));
function App$5({ name, desc, langs, git, links: links2 }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Card, { className: "bg-gray-800 text-slate-100 font-montserrat", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "font-semibold text-lg", children: [
      /* @__PURE__ */ jsx("p", { className: "pr-4", children: name }),
      /* @__PURE__ */ jsx(Divider, { className: "bg-gray-500", orientation: "vertical" }),
      /* @__PURE__ */ jsxs("div", { className: "pl-4 space-x-2 text-3xl", children: [
        /* @__PURE__ */ jsx("i", { class: langs[0] }),
        /* @__PURE__ */ jsx("i", { class: langs[1] }),
        /* @__PURE__ */ jsx("i", { class: langs[2] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Divider, { className: "bg-gray-500" }),
    /* @__PURE__ */ jsx(CardBody, { children: /* @__PURE__ */ jsx("p", { children: desc }) }),
    /* @__PURE__ */ jsx(Divider, { className: "bg-gray-500" }),
    /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Link, { showAnchorIcon: true, href: git, children: "Lähdekoodi Githubissa" }) })
  ] }) });
}
function App$4() {
  let defState = ["Minun työkalupakkini", "Liikuta hiirtä eri kykyjeni päälle lukeaksesi lisää.", "", ""];
  const [state, setState] = useState(defState);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("ul", { className: "flex justify-center flex-wrap gap-4 p-4 pt-8 text-white font-montserrat font-medium w-full", children: [
      /* @__PURE__ */ jsx("li", { onMouseOver: () => setState(["React", "Olen rakentanut verkkosivuja eri React-pohjaisilla ohjelmistokehyksillä. Osaan tuottaa komponenttipohjaisia verkkosivukokonaisuuksia.", "https://react.dev/", "devicon-react-original"]), className: "bg-slate-800 p-2 rounded-md hover:bg-slate-500", children: "React" }),
      /* @__PURE__ */ jsx("li", { onMouseOver: () => setState(["TypeScript", "Käytän yleisesti TypeScriptiä aina kun mahdollista JavaScriptin sijaan. Luonnollisesti molempien käyttäminen sujuu.", "https://www.typescriptlang.org/", "devicon-typescript-plain"]), className: "bg-slate-800 p-2 rounded-md hover:bg-slate-500", children: "TypeScript" }),
      /* @__PURE__ */ jsx("li", { onMouseOver: () => setState(["Next.js", "Olen käyttänyt Next.js-ohjelmistokehystä rakentaessani selainpuolella renderöitäviä verkkosovelluksia.", "https://nextjs.org/", "devicon-nextjs-plain"]), className: "bg-slate-800 p-2 rounded-md hover:bg-slate-500", children: "Next.js" }),
      /* @__PURE__ */ jsx("li", { onMouseOver: () => setState(["Remix", "Olen käyttänyt Remix-ohjelmistokehystä rakentaessani verkkosovelluksia.", "https://remix.run/", ""]), className: "bg-slate-800 p-2 rounded-md hover:bg-slate-500", children: "Remix" }),
      /* @__PURE__ */ jsx("li", { onMouseOver: () => setState(["C#", "Olen käyttänyt C#-koodikieltä rakentamaan työpöytäsovelluksia Microsoftin .NET-ohjelmistokehyksen avulla. Olen käyttänyt koodikieltä myös Unity-pelimoottorin sisällä skriptauskielenä.", "https://dotnet.microsoft.com/en-us/languages/csharp", "devicon-csharp-plain"]), className: "bg-slate-800 p-2 rounded-md hover:bg-slate-500", children: "C#" }),
      /* @__PURE__ */ jsx("li", { onMouseOver: () => setState(["C++", "Olen hyödyntänyt C++-koodikieltä algoritmisessa ohjelmoinnissa ja ongelmanratkaisussa. Olen tutustunut myös Qt-pohjaisten työpöytäsovellusten rakentamiseen koodikielen avulla.", "https://fi.wikipedia.org/wiki/C%2B%2B", "devicon-cplusplus-plain"]), className: "bg-slate-800 p-2 rounded-md hover:bg-slate-500", children: "C++" }),
      /* @__PURE__ */ jsx("li", { onMouseOver: () => setState(["Python", "Olen käyttänyt Pythonin SciPy- ja NumPy-kirjastoja tieteellisessä ohjelmoinnissa, datan käsittelyssä ja lineaarialgebralaskennassa. Olen käyttänyt Pythonia myös algoritmiseen ohjelmointiin.", "https://www.python.org/", "devicon-python-plain"]), className: "bg-slate-800 p-2 rounded-md hover:bg-slate-500", children: "Python" }),
      /* @__PURE__ */ jsx("li", { onMouseOver: () => setState(["Tailwind", "Käytän hyvin usein Tailwindiä perinteisen CSS-tyyliohjelmoinnin sijaan verkkosivuja rakentaessani.", "https://tailwindcss.com/", "devicon-tailwindcss-plain"]), className: "bg-slate-800 p-2 rounded-md hover:bg-slate-500", children: "Tailwind" }),
      /* @__PURE__ */ jsx("li", { onMouseOver: () => setState(["GitHub", "Käytän GitHubia versiohallintaan.", "https://github.com", "devicon-github-plain"]), className: "bg-slate-800 p-2 rounded-md hover:bg-slate-500", children: "GitHub" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center pb-8", children: /* @__PURE__ */ jsx("div", { className: "w-2/3", children: /* @__PURE__ */ jsxs(Card, { className: "bg-gray-800 text-white font-montserrat", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "flex justify-between font-semibold", children: [
        /* @__PURE__ */ jsx(Link, { href: state[2], children: state[0] }),
        /* @__PURE__ */ jsx("i", { className: "text-4xl", class: state[3] })
      ] }),
      /* @__PURE__ */ jsx(Divider, { className: "bg-gray-400" }),
      /* @__PURE__ */ jsx(CardBody, { children: state[1] }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsxs("div", { className: "flex text-green-400", children: [
        /* @__PURE__ */ jsx(HiOutlineChevronRight, {}),
        /* @__PURE__ */ jsx(HiOutlineChevronRight, {}),
        /* @__PURE__ */ jsx(HiOutlineChevronRight, {}),
        /* @__PURE__ */ jsx(HiOutlineChevronRight, {})
      ] }) })
    ] }) }) })
  ] });
}
function App$3() {
  const fetcher = useFetcher();
  return /* @__PURE__ */ jsxs(fetcher.Form, { method: "post", action: "/contact", className: "w-1/2 px-6 py-4 font-montserrat text-gray-400", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between pb-2", children: [
      /* @__PURE__ */ jsx("p", { className: "", children: "Ota yhteyttä:" }),
      /* @__PURE__ */ jsx(Button, { type: "submit", className: "h-7 outline bg-gray-800 outline-green-600 outline-1 text-gray-400", children: "Lähetä" })
    ] }),
    /* @__PURE__ */ jsx(Divider, { className: "bg-gray-500" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "py-2", children: "Viesti *" }),
        /* @__PURE__ */ jsx("textarea", { required: true, type: "text", name: "content", className: "w-96 h-32 outline bg-gray-800 outline-1 outline-gray-600 text-gray-300 rounded-lg p-3 font-normal" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 pl-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "pb-2", children: "Sähköposti *" }),
          /* @__PURE__ */ jsx("input", { required: true, type: "email", name: "email", className: "p-1 max-h-8 bg-gray-800 outline-gray-600 text-white outline-1 outline rounded-lg font-normal" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "pb-2", children: "Puhelinnumero" }),
          /* @__PURE__ */ jsx("input", { name: "sms", className: "p-1 max-h-8 bg-gray-800 outline-gray-600 outline-1 text-white outline rounded-lg font-normal" })
        ] })
      ] })
    ] })
  ] });
}
function App$2() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-700 text-white font-montserrat py-36 pl-36", children: [
      /* @__PURE__ */ jsx("div", { className: "w-max", children: /* @__PURE__ */ jsx("p", { className: "animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl text-white font-bold", children: "Eemeli Myllymäki" }) }),
      /* @__PURE__ */ jsx("p", { className: "pt-5 w-1/2", children: " Terve! Olen Eemeli Myllymäki, nuori ja intohimoinen ohjelmistokehittäjän alku Tampereen seudulta. Vaikka minulla ei ole virallista koulutusta, olen itsenäisesti hankkinut vahvat taidot ja kokemusta monista ohjelmointikielistä eri harrastusprojektien kautta. Olen aina innokas oppimaan uutta ja ottamaan vastaan haasteita; erityisesti niitä, jotka vaativat luovaa ajattelua ja veitsenterävää ongelmanratkaisukykyä. Täällä voit tutustua projekteihini ja nähdä, mihin kaikkeen olen pystynyt pelkän pitkäjänteisyyden ja ahkeran harjoittelun avulla." })
    ] }),
    /* @__PURE__ */ jsx(Divider, { className: "bg-gray-500" }),
    /* @__PURE__ */ jsxs("div", { className: "py-8 text-white font-montserrat", id: "portfolio", children: [
      /* @__PURE__ */ jsx("p", { className: "font-semibold text-6xl underline pb-8 pl-6", children: "Projektini" }),
      /* @__PURE__ */ jsxs("div", { className: "gap-2 grid grid-cols-2 grid-rows-2 px-24", children: [
        /* @__PURE__ */ jsx(App$5, { name: "Portfoliosivu", desc: "Remixillä ja NextUI-käyttöliittymäkirjastolla kasattu portfolioverkkosivu.", langs: ["devicon-typescript-plain", "devicon-react-original colored"], git: "https://github.com", links: "" }),
        /* @__PURE__ */ jsx(App$5, { name: "Portfoliosivu", desc: "Remixillä ja NextUI:n frontend-työkaluilla kasattu portfolioverkkosivu.", langs: ["devicon-typescript-plain", "devicon-react-original colored"], git: "https://github.com", links: "" }),
        /* @__PURE__ */ jsx(App$5, { name: "Portfoliosivu", desc: "Remixillä ja NextUI:n frontend-työkaluilla kasattu portfolioverkkosivu.", langs: ["devicon-typescript-plain", "devicon-react-original colored"], git: "https://github.com", links: "" }),
        /* @__PURE__ */ jsx(App$5, { name: "Portfoliosivu", desc: "Remixillä ja NextUI:n frontend-työkaluilla kasattu portfolioverkkosivu.", langs: ["devicon-typescript-plain", "devicon-react-original colored"], git: "https://github.com", links: "" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Divider, { className: "bg-gray-500" }),
    /* @__PURE__ */ jsx("div", { className: "flex w-full justify-center font-montserrat", children: /* @__PURE__ */ jsx("p", { className: "pt-8 font-semibold underline text-white text-5xl", children: "Osaamiseni" }) }),
    /* @__PURE__ */ jsx(App$4, {}),
    /* @__PURE__ */ jsx(Divider, { className: "bg-gray-500" }),
    /* @__PURE__ */ jsx("div", { className: "font-montserrat text-gray-300 bg-gray-800", children: /* @__PURE__ */ jsx(App$3, {}) })
  ] });
}
const links$1 = () => {
  return [
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
    }
  ];
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App$2,
  links: links$1
}, Symbol.toStringTag, { value: "Module" }));
function App$1() {
  return /* @__PURE__ */ jsx(Fragment, {});
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App$1
}, Symbol.toStringTag, { value: "Module" }));
const links = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png"
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
    }
  ];
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  links
}, Symbol.toStringTag, { value: "Module" }));
function App() {
  return /* @__PURE__ */ jsx(Fragment, {});
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-4L60pYn7.js", "imports": ["/assets/jsx-runtime-BWtM72Fx.js", "/assets/components-CL98zLh-.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CxHl7CCz.js", "imports": ["/assets/jsx-runtime-BWtM72Fx.js", "/assets/components-CL98zLh-.js", "/assets/index-pNgwDFOL.js"], "css": ["/assets/index-dENsRCgR.css", "/assets/main-CkOKcjmT.css"] }, "routes/portfolio": { "id": "routes/portfolio", "parentId": "root", "path": "portfolio", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/portfolio-7kwrClOA.js", "imports": ["/assets/jsx-runtime-BWtM72Fx.js"], "css": ["/assets/main-CkOKcjmT.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/contact-l0sNRNKZ.js", "imports": [], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-Co0FAAyo.js", "imports": ["/assets/jsx-runtime-BWtM72Fx.js", "/assets/index-pNgwDFOL.js", "/assets/components-CL98zLh-.js"], "css": ["/assets/index-dENsRCgR.css", "/assets/main-CkOKcjmT.css"] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-7kwrClOA.js", "imports": ["/assets/jsx-runtime-BWtM72Fx.js"], "css": ["/assets/main-CkOKcjmT.css"] }, "routes/links": { "id": "routes/links", "parentId": "root", "path": "links", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/links-g8vDfUWB.js", "imports": [], "css": [] }, "routes/blog": { "id": "routes/blog", "parentId": "root", "path": "blog", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/blog-7kwrClOA.js", "imports": ["/assets/jsx-runtime-BWtM72Fx.js"], "css": ["/assets/main-CkOKcjmT.css"] } }, "url": "/assets/manifest-ea2eecb7.js", "version": "ea2eecb7" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false, "unstable_fogOfWar": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route3
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/links": {
    id: "routes/links",
    parentId: "root",
    path: "links",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
