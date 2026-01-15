# Configuration Email - Docteur Déménagement

## Configuration Gmail SMTP

Pour utiliser Gmail avec PHPMailer, vous devez créer un **"Mot de passe d'application"** car Gmail ne permet plus l'authentification par mot de passe standard.

### Étapes pour créer un mot de passe d'application Gmail :

1. **Activez la validation en 2 étapes** sur votre compte Gmail (si ce n'est pas déjà fait)
   - Allez sur https://myaccount.google.com/security
   - Activez "Validation en deux étapes"

2. **Créez un mot de passe d'application** :
   - Allez sur https://myaccount.google.com/apppasswords
   - Sélectionnez "Autre (nom personnalisé)" et entrez "Docteur Déménagement"
   - Cliquez sur "Générer"
   - **Copiez le mot de passe généré** (16 caractères sans espaces)

3. **Configurez le fichier `send-email.php`** :
   - Ouvrez `public/api/send-email.php`
   - Remplacez `VOTRE_MOT_DE_PASSE_APPLICATION_GMAIL` par le mot de passe d'application que vous venez de créer
   - Sauvegardez le fichier

### Installation de PHPMailer

Si PHPMailer n'est pas déjà installé via Composer, vous devez le télécharger :

1. Téléchargez PHPMailer depuis : https://github.com/PHPMailer/PHPMailer
2. Extrayez le dossier `PHPMailer` dans `public/api/`
3. La structure doit être : `public/api/PHPMailer/src/PHPMailer.php`

### Test

Une fois configuré, testez le formulaire sur votre site. Si vous rencontrez des erreurs :
- Vérifiez que le mot de passe d'application est correct
- Vérifiez que la validation en 2 étapes est activée
- Vérifiez les logs d'erreur PHP de votre serveur

### Sécurité

⚠️ **Important** : Ne commitez jamais le fichier `send-email.php` avec le mot de passe réel dans Git. Utilisez des variables d'environnement ou un fichier de configuration séparé.
