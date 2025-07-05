# Border Collie - Mistr Pasení Ovcí

Prezentační webová stránka o trailových závodech border collie v pasení ovcí.

## 📋 Obsah

- **Principy pasení ovcí** - Základní principy a techniky
- **Povely pro řízení psa** - Standardní anglické povely používané v soutěžích
- **Zajímavosti** - Fascinující fakta o border collie
- **Tailové závody** - Průběh a hodnocení soutěží

## 🚀 Rychlé spuštění

### Prerekvizity
- Node.js 18.0 nebo novější
- npm nebo yarn

### Instalace
```bash
# Klonování repositáře
git clone https://github.com/ajtyrunner/border-collie-herding-presentation.git
cd border-collie-herding-presentation

# Instalace závislostí
npm install

# Spuštění ve vývojovém režimu
npm run dev
```

Aplikace bude dostupná na `http://localhost:3000`

## 🐙 Git Setup a GitHub Push

### První nasazení na GitHub
```bash
# Inicializace Git repositáře
git init

# Přidání všech souborů
git add .

# První commit
git commit -m "Initial commit: Border Collie presentation"

# Přidání remote origin
git remote add origin https://github.com/ajtyrunner/border-collie-herding-presentation.git

# Push na GitHub
git branch -M main
git push -u origin main
```

### Další změny
```bash
# Přidání změn
git add .

# Commit se zprávou
git commit -m "Update presentation content"

# Push na GitHub
git push
```

## 🌐 Deployment na Vercel

### Automatický deployment
1. Pushněte kód na GitHub: `https://github.com/ajtyrunner/border-collie-herding-presentation`
2. Připojte repositář na [Vercel](https://vercel.com)
3. Vercel automaticky nasadí aplikaci při každém push

### Manuální deployment
```bash
# Instalace Vercel CLI
npm i -g vercel

# Deployment
vercel --prod
```

## 📱 Funkce

- **Responzivní design** - Optimalizováno pro všechna zařízení
- **Moderní UI** - Čistý design s tématikou ovce vs pes
- **Interaktivní prezentace** - Smooth scrolling a animace
- **SEO optimalizace** - Metadata pro vyhledávače

## 🎨 Design

Design využívá přírodní barvy:
- **Sheep White** - Bílá ovce
- **Wool Cream** - Krémová vlna
- **Border Brown** - Hnědá border collie
- **Grass Green** - Zelená tráva
- **Sky Blue** - Modrá obloha

## 🛠️ Technologie

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Ikony
- **Vercel** - Hosting platform

## 📂 Struktura projektu

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Hlavní stránka
│   └── globals.css     # Globální styly
├── public/             # Statické soubory
├── next.config.js      # Next.js konfigurace
├── tailwind.config.js  # Tailwind konfigurace
└── package.json        # Dependencies
```

## 🏆 Trailové závody

Aplikace obsahuje detailní informace o:
- Průběhu závodů (Outrun, Lift, Fetch, Drive, Pen)
- Bodovém hodnocení
- Používaných povelech
- Principech pasení

## 🐕 Border Collie

Prezentace obsahuje zajímavosti o:
- Inteligenci a schopnostech
- Původu plemene
- Tréninkovém procesu
- Světových šampionátech

## 📄 Licence

Projekt je vytvořen pro vzdělávací účely. 