# Lysere

Site commercial de Lysere, consacré à la conception d’automatisations et de systèmes sur mesure pour les entreprises.

La homepage présente :

- les problèmes métier qui se prêtent à l’automatisation ;
- les domaines commercial, administratif, opérationnel et support ;
- le fonctionnement d’un flux automatisé ;
- l’intégration avec les outils existants ;
- la méthode Lysere et un mini-diagnostic interactif.

L’adresse professionnelle utilisée par le CTA final doit être renseignée dans `app/config.ts` après validation.

## Stack

- React 19 et Vinext
- Vite et Cloudflare Workers
- OpenAI Sites pour l’hébergement
- CSS sur mesure, sans bibliothèque d’interface

## Lancer le projet

Pré-requis : Node.js 22.13 ou supérieur.

```bash
npm install
npm run dev
```

Puis ouvrir l’adresse locale affichée par Vite.

Pour vérifier le projet avant publication :

```bash
npm run lint
npm run build
npm test
```
