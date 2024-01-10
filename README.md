# Projet X (clone de Twitter)

Ce projet développe un clone de Twitter avec React.

## Premier critère d'acceptation

### Fonctionnalité: Affichage de la page d'accueil

**Scénario:** L'utilisateur accède à la page d'accueil

**Étant donné:** que l'utilisateur ouvre l'application React dans le navigateur

**Alors:** il voit un en-tête, un contenu principal et un pied de page

### Fonctionnalité: Visualisation des tweets factices

**Scénario:** L'utilisateur visualise des tweets factices sur la page

**Étant donné:** que l'utilisateur est sur la page d'accueil

**Alors:** il voit une liste de tweets factices prédéfinis

### Fonctionnalité: Accès au formulaire de création de tweet

**Scénario:** L'utilisateur trouve le formulaire de création de tweet

**Étant donné:** que l'utilisateur est sur la page d'accueil

**Alors:** il voit un formulaire qui lui permet de rédiger un nouveau tweet

## Deuxième critère d'acceptation

### Fonctionnalité: Navigation vers les profils

**Scénario:** L'utilisateur navigue vers une page de profil

**Étant donné:** que l'utilisateur est sur un tweet

**Quand:** il clique sur l'avatar, le nom d'utilisateur ou le handle

**Alors:** il est redirigé vers la page de profil de l'utilisateur

**Et:** le chemin de navigation est "/<username>"

### Fonctionnalité: Navigation entre les pages

**Scénario:** L'utilisateur navigue vers une page de profil

**Étant donné:** que l'utilisateur est sur la page d'accueil

**Quand:** il sélectionne le menu "Profil" dans la barre de navigation

**Ou:** il clique sur la section ProfileSetting (cfr. maquette)

**Alors:** il est redirigé vers sa page de profil

### Fonctionnalité: Effets sur les boutons d'action

**Scénario:** L'utilisateur survole les boutons d'action

**Étant donné:** que l'utilisateur est sur un tweet

**Quand:** il survole une action sous le contenu du tweet

**Alors:** la couleur de l'icone et texte change conformement à l'illustration "action-button-effects.gif"

**Et:** quand il quitte le bouton

**Alors:** le bouton reprend sa couleur de depart

### Fonctionnalité: Effets sur les boutons d'action

**Scénario:** L'utilisateur clique un bouton d'action

**Étant donné:** que l'utilisateur est sur un tweet

**Quand:** il clique un bouton d'action sous le contenu du tweet

**Alors:** la couleur de l'icone et texte change conformement à l'illustration "action-button-effects.gif"
