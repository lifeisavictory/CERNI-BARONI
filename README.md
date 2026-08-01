<img src="https://capsule-render.vercel.app/api?type=waving&color=8C2F22&height=120&section=header&text=%C4%8Cern%C3%AD%20baroni&fontSize=36&fontColor=ffffff&fontAlignY=55&desc=React%20%7C%20Vite%20%7&descSize=16&descAlignY=80&descAlign=50" alt="Header" width="100%"/>

# Černí baroni — Pomocné technické prapory

### Informační web na doméně [cernibaroni.cz](https://www.cernibaroni.cz)



## 📌 O projektu

<br/>

Informační přehled o Pomocných technických praporech (PTP) — takzvaných „černých baronech“ — zvláštních pracovních útvarech Československé lidové armády v letech 1950–1954. Web popisuje jejich vznik a fungování, kdo do nich byl zařazován, doložené osobnosti a osudy i satirickou knihu a film Miloslava Švandrlíka *Černí baroni*.

## 🤖 Transparentnost — AI & vývoj

<br/>

> ⚠️ **Celý projekt** — návrh, kód, styl i sestavení textového obsahu — vznikl v dialogu s AI asistentem **Claude Code** (Anthropic) na základě zadání a průběžného review autora. Historická fakta byla ověřována proti veřejně dostupným zdrojům, texty jsou ale vlastní parafráze, nikoli doslovné citace ani původní historický výzkum.

## 🗺️ Stránky webu

<br/>

| Stránka | Cesta | Obsah |
|---|---|---|
| 🏠 Domů | `/` | Úvod a rozcestník |
| ⛏️ Vznik a fungování | `/vznik` | Časová osa, původ přezdívky, kategorie zařazovaných, pracovní podmínky |
| 🎗️ Příslušníci a osudy | `/prislusnici` | Doložené osobnosti (Zdeněk Sternberg, Miloslav Švandrlík, Zdeněk Sirový) a šlechta v PTP |
| 📖 Kniha a film | `/kniha` | O knize, filmová a televizní adaptace, zámek Zelená Hora |
| 🔗 Zdroje | `/zdroje` | Přehled zdrojů, ze kterých web čerpá |
| 🔒 Ochrana soukromí | `/ochrana-soukromi` | Cookies, analytika, externí služby |

## 🛠️ Technologický stack

<br/>

| ⚛️ Front-end | 🎨 Design | 🧰 Vývojové prostředí |
|:---:|:---:|:---:|
| ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | ![WebStorm](https://img.shields.io/badge/WebStorm-000000?style=flat-square&logo=webstorm&logoColor=white) |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white) | ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=googlefonts&logoColor=white) | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white) |
| ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) | | ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) |

![Mobile First](https://img.shields.io/badge/📱_Responzivní_design-Mobile--First-8C2F22?style=flat-square)

Web je navržen **mobile-first** — hlavička se pod 768px šířky sbaluje pod hamburger navigaci.

Fonty: [Fraunces](https://fonts.google.com/specimen/Fraunces) (nadpisy), [Inter](https://fonts.google.com/specimen/Inter) (text), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (navigace, popisky).

## 📂 Struktura projektu

```
├── index.html              # HTML shell, SEO/OG meta tagy, Google Fonts
├── public/
│   └── favicon.svg          # favicon (ikona medaile, Lucide, ISC licence)
├── src/
│   ├── main.jsx              # vstupní bod, BrowserRouter
│   ├── App.jsx                 # definice routes
│   ├── index.css                 # design tokeny (barvy, fonty), globální styly
│   ├── App.css                    # styly komponent a layoutu
│   ├── components/
│   │   └── Layout.jsx               # hlavička, patička, navigace (sdílené na všech stránkách)
│   ├── pages/                        # jednotlivé stránky (viz tabulka výše)
│   └── data/
│       └── content.js                 # veškerý textový obsah a seznam zdrojů odděleně od komponent
```

<br/>

```bash
npm install       # instalace závislostí
npm run dev       # dev server s HMR na http://localhost:5173
npm run build     # produkční build do dist/
npm run preview   # servíruje produkční build lokálně
npm run lint      # ESLint
```

## 📚 Přesnost obsahu

<br/>

Fakta na webu jsou sestavena z veřejně dostupných novinářských a historických zdrojů (Radio Prague International, iROZHLAS, ČT24, Deník.cz, Reflex.cz, Paměť národa, Wikipedie a další — kompletní seznam s odkazy je na stránce **Zdroje**). U jednotlivých čísel a osudů se odhady zdrojů mohou mírně lišit. Kniha a film *Černí baroni* jsou beletrie/satira, nikoliv historický pramen.

## 👤 Autor

<br/>

<div align="center">

**Tomáš Salamánek**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-salamanek-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/salamanek)
[![GitHub](https://img.shields.io/badge/GitHub-lifeisavictory-181717?style=for-the-badge&logo=github)](https://github.com/lifeisavictory)

</div>

<div align="center">

⭐ Pokud se ti projekt líbí, dej mu hvězdičku!

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=8C2F22&height=80&section=footer" alt="Footer" width="100%"/>
