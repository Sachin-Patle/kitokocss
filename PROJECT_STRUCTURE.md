# Structure du Projet KitokoCSS v1.0

## 📁 Organisation des Dossiers

```
KitokoCSS/
├── assets/              # Ressources statiques (icônes SVG)
│   └── icons.svg        # Bibliothèque d'icônes SVG
│
├── dist/                # Fichiers compilés (pour CDN)
│   ├── kitoko.css      # CSS non minifié
│   ├── kitoko.min.css  # CSS minifié
│   ├── kitoko.bundle.min.js  # JavaScript minifié
│   └── README.md        # Documentation du dossier dist
│
├── docs/                # Documentation complète
│   └── index.html      # Documentation principale avec navigation
│
├── examples/            # Templates d'exemple
│   ├── index.html      # Page d'accueil des exemples
│   ├── dashboard.html  # Template dashboard
│   ├── landing-page.html  # Template landing page
│   ├── blog-article.html  # Template article de blog
│   ├── e-commerce-product.html  # Template produit e-commerce
│   ├── portfolio.html  # Template portfolio
│   └── contact.html    # Template page de contact
│
├── js/                  # Code source JavaScript
│   └── kitoko.bundle.js  # JavaScript compagnon (source)
│
├── src/                 # Code source SCSS
│   ├── base/           # Styles de base
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   │
│   ├── components/      # Composants UI
│   │   ├── _alert.scss
│   │   ├── _badge.scss
│   │   ├── _button.scss
│   │   ├── _card.scss
│   │   ├── _carousel.scss
│   │   ├── _form.scss
│   │   ├── _modal.scss
│   │   ├── _navbar.scss
│   │   ├── _pagination.scss
│   │   ├── _table.scss
│   │   └── _toast.scss
│   │
│   ├── config/          # Configuration
│   │   ├── _breakpoints.scss
│   │   └── _variables.scss
│   │
│   ├── layout/          # Système de grille
│   │   └── _grid.scss
│   │
│   ├── mixins/          # Mixins réutilisables
│   │   ├── _button.scss
│   │   └── _utilities.scss
│   │
│   ├── utilities/       # Classes utilitaires
│   │   ├── _borders.scss
│   │   ├── _colors.scss
│   │   ├── _display.scss
│   │   ├── _flexbox.scss
│   │   ├── _shadows.scss
│   │   └── _spacing.scss
│   │
│   └── main.scss        # Fichier principal (importe tout)
│
├── build.bat            # Script de compilation (Windows CMD)
├── build.ps1            # Script de compilation (PowerShell)
├── CHANGELOG.md         # Historique des versions
├── LICENSE              # Licence MIT
├── package.json         # Configuration npm
├── README.md            # Documentation principale
├── VERSION              # Numéro de version
├── .editorconfig        # Configuration de l'éditeur
├── .gitignore           # Fichiers ignorés par Git
│
├── guide.html           # Guide rapide (pour kitokocss.page.gd)
├── logo-trans.png       # Logo transparent
├── FM.png               # Image utilisée dans les exemples
└── fordi.png            # Image utilisée dans les exemples
```

## 🎯 Fichiers Essentiels

### Documentation
- `README.md` - Documentation principale
- `CHANGELOG.md` - Historique des versions
- `docs/index.html` - Documentation complète interactive
- `guide.html` - Guide rapide pour démarrage
- `dist/README.md` - Documentation du dossier dist

### Code Source
- `src/main.scss` - Point d'entrée SCSS
- `js/kitoko.bundle.js` - JavaScript compagnon (source)

### Fichiers Compilés (pour CDN)
- `dist/kitoko.min.css` - CSS minifié
- `dist/kitoko.bundle.min.js` - JavaScript minifié

### Configuration
- `package.json` - Configuration npm et scripts
- `.gitignore` - Fichiers ignorés par Git
- `.editorconfig` - Configuration de l'éditeur
- `LICENSE` - Licence MIT
- `VERSION` - Numéro de version

### Scripts de Build
- `build.bat` - Compilation Windows (CMD)
- `build.ps1` - Compilation Windows (PowerShell)

## 📦 Scripts NPM Disponibles

```bash
npm run build        # Compile CSS et JS
npm run build:css    # Compile uniquement le CSS
npm run build:js     # Minifie le JavaScript
npm run watch        # Mode watch pour développement
npm run dev          # Alias pour watch
```

## ✅ Checklist v1.0

- [x] Framework CSS complet avec préfixe `kt-`
- [x] Système de grille responsive
- [x] Composants UI complets
- [x] Classes utilitaires
- [x] JavaScript compagnon
- [x] Documentation complète
- [x] Guide rapide
- [x] Templates d'exemple
- [x] Fichiers compilés pour CDN
- [x] CHANGELOG
- [x] LICENSE (MIT)
- [x] Scripts de build
- [x] Configuration Git

