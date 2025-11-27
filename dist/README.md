# Dossier Dist

Ce dossier contient les fichiers compilés de KitokoCSS.

## Compilation

Pour générer les fichiers CSS compilés, exécutez :

```bash
npm install
npm run build
```

Cela générera :
- `kitoko.css` - Version CSS non minifiée
- `kitoko.min.css` - Version CSS minifiée
- `kitoko.bundle.min.js` - Version JavaScript minifiée

## CDN

Une fois le projet publié sur GitHub, les fichiers seront disponibles via jsDelivr :

```
https://cdn.jsdelivr.net/gh/fomadev/kitokocss@v1.0.0/dist/kitoko.min.css
https://cdn.jsdelivr.net/gh/fomadev/kitokocss@v1.0.0/dist/kitoko.bundle.min.js
```

