# Changelog

Tous les changements notables de ce projet seront documentés dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère à [Semantic Versioning](https://semver.org/lang/fr/).

## [1.0.0] - 2025-11-27

### Ajouté
- Framework CSS complet avec préfixe `kt-`
- Système de grille responsive avec 12 colonnes et 6 breakpoints (xs, sm, md, lg, xl, xxl)
- Composants UI complets :
  - Boutons (primary, secondary, success, danger, warning, info, light, dark) avec variantes outline
  - Cartes avec header, body et footer
  - Alertes avec support dismissible
  - Badges avec variantes pill
  - Formulaires avec états de validation
  - Navigation avec toggler mobile
  - Modales
  - Tableaux (striped, bordered, hoverable)
  - Pagination
  - Carrousels
  - Toasts/Snackbars
- Classes utilitaires :
  - Espacement (marges et paddings)
  - Display (none, block, flex, etc.)
  - Flexbox (justify, align, gap, etc.)
  - Couleurs (texte et fond)
  - Bordures et coins arrondis
  - Ombres
- JavaScript compagnon léger (Vanilla JS) pour composants interactifs
- Documentation complète avec exemples
- Guide rapide pour démarrage
- Templates d'exemple :
  - Dashboard
  - Landing Page
  - Blog Article
  - E-commerce Product
  - Portfolio
  - Contact
- Support du mode sombre via `prefers-color-scheme`
- Architecture modulaire SCSS pour personnalisation facile
- CDN via jsDelivr
- Système de couleurs sémantiques avec palette complète

### Documentation
- Documentation complète dans `docs/index.html`
- Guide rapide dans `guide.html`
- README avec instructions d'installation
- Exemples fonctionnels dans `examples/`

### Technique
- Code source modulaire en SCSS
- Compilation via Sass
- Support des variables CSS personnalisables
- Accessibilité (A11Y) avec attributs ARIA
- Compatible avec tous les navigateurs modernes

