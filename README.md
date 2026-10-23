# M.P Horse Training — site vitrine

Site vitrine statique en français, responsive téléphone/ordinateur, prêt à être publié gratuitement sur GitHub Pages.

## Fichiers
- `index.html` : contenu du site
- `style.css` : design sombre et sportif, couleurs bleu-blanc-rouge
- `script.js` : menu mobile et affichage des annonces
- `horses.json` : liste des chevaux (vide pour le moment)
- `assets/` : logo et photos fournis

## Publier gratuitement avec GitHub Pages
1. Décompressez `MP-Horse-Training-site.zip`.
2. Créez un dépôt GitHub public ou utilisez le dépôt déjà prévu pour ce site.
3. Envoyez tous les fichiers et le dossier `assets` à la racine du dépôt.
4. Dans **Settings → Pages**, choisissez la branche principale et le dossier `/ (root)`, puis enregistrez.
5. GitHub affichera l'adresse du site une fois la publication terminée.

## Ajouter un cheval à vendre
Ouvrez `horses.json` et remplacez `[]` par une liste d'annonces. Exemple :

```json
[
  {
    "name": "Nom du cheval",
    "age": "5 ans",
    "sex": "Hongre",
    "height": "1,68 m",
    "breed": "KWPN",
    "pedigree": "Père × mère",
    "price": "Prix sur demande",
    "description": "Description du cheval et niveau de travail.",
    "image": "assets/mon-cheval.jpg"
  }
]
```

Ajoutez la photo correspondante dans `assets/`, puis enregistrez et envoyez les changements sur GitHub. Pour retirer une annonce, supprimez son objet dans `horses.json`.

## À personnaliser avant la mise en ligne
- Remplacer `contact@mphorsetraining.fr` dans `index.html` par la bonne adresse e-mail si elle est différente.
- Ajouter les mentions légales et la politique de confidentialité adaptées à l'activité.
- Vérifier le recadrage des photos sur le téléphone et l'ordinateur.

Les annonces sont volontairement vides : aucun cheval n'est présenté comme étant à vendre sans confirmation.
