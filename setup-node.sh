#!/bin/bash

# Setup script pro Border Collie projekt
# Načte správnou verzi Node.js pomocí NVM

echo "🐕 Nastavuji Border Collie projekt..."

# Načtení NVM
if [ -f ~/.nvm/nvm.sh ]; then
    echo "📦 Načítám NVM..."
    source ~/.nvm/nvm.sh
    
    # Kontrola, zda existuje .nvmrc
    if [ -f .nvmrc ]; then
        echo "⚙️  Používám Node.js verzi z .nvmrc..."
        nvm use
        
        # Pokud verze není nainstalovaná, nainstaluj ji
        if [ $? -ne 0 ]; then
            echo "📥 Instaluji Node.js $(cat .nvmrc)..."
            nvm install
            nvm use
        fi
    else
        echo "🔄 Používám nejnovější LTS verzi Node.js..."
        nvm use --lts
    fi
    
    echo "✅ Node.js verze: $(node --version)"
    echo "✅ NPM verze: $(npm --version)"
    
    # Kontrola, zda existuje node_modules
    if [ ! -d "node_modules" ]; then
        echo "📦 Instaluji dependencies..."
        npm install
    fi
    
    echo "🚀 Projekt je připraven! Spustit můžete pomocí: npm run dev"
else
    echo "❌ NVM není nainstalován nebo nenalezen v ~/.nvm/nvm.sh"
    echo "🔗 Nainstalujte NVM: https://github.com/nvm-sh/nvm"
fi
