<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Si PHPMailer est installé via Composer
// require_once __DIR__ . '/../../vendor/autoload.php';

// Si PHPMailer est téléchargé manuellement, décommentez ces lignes et ajustez le chemin
require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

// Validation des champs requis
$required = ['lastName', 'firstName', 'phonePortable', 'email', 'departureAddress', 'departurePostalCode', 'departureCity'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Le champ $field est requis"]);
        exit;
    }
}

$mail = new PHPMailer(true);

try {
    // Configuration SMTP Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'docteurdemenagement@gmail.com';
    // IMPORTANT: Utilisez un "Mot de passe d'application" Gmail, pas votre mot de passe normal
    // Créez-le ici: https://myaccount.google.com/apppasswords
    $mail->Password = 'VOTRE_MOT_DE_PASSE_APPLICATION_GMAIL';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = 0; // Mettez à 2 pour le débogage

    // Expéditeur
    $mail->setFrom('docteurdemenagement@gmail.com', 'Docteur Déménagement');
    
    // Destinataire (vous recevez la demande)
    $mail->addAddress('docteurdemenagement@gmail.com', 'Docteur Déménagement');
    
    // Reply-To pour pouvoir répondre directement au client
    $mail->addReplyTo($data['email'], $data['firstName'] . ' ' . $data['lastName']);

    // Contenu de l'email pour vous
    $mail->isHTML(true);
    $mail->Subject = 'Nouvelle demande de devis - ' . htmlspecialchars($data['firstName'] . ' ' . $data['lastName']);
    
    // Corps de l'email
    $body = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h2 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; }
            h3 { color: #1e40af; margin-top: 20px; }
            .info-box { background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 10px 0; }
            .label { font-weight: bold; color: #4b5563; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>Nouvelle demande de devis</h2>
            
            <h3>Informations client</h3>
            <div class='info-box'>
                <p><span class='label'>Type:</span> " . htmlspecialchars($data['type'] ?? 'Non spécifié') . "</p>
                <p><span class='label'>Nom:</span> " . htmlspecialchars($data['lastName']) . "</p>
                <p><span class='label'>Prénom:</span> " . htmlspecialchars($data['firstName']) . "</p>
                <p><span class='label'>Téléphone Fixe:</span> " . htmlspecialchars($data['phoneFixe'] ?? 'Non renseigné') . "</p>
                <p><span class='label'>Téléphone Portable:</span> " . htmlspecialchars($data['phonePortable']) . "</p>
                <p><span class='label'>Email:</span> " . htmlspecialchars($data['email']) . "</p>
            </div>
            
            <h3>Adresse de départ</h3>
            <div class='info-box'>
                <p><span class='label'>Adresse:</span> " . htmlspecialchars($data['departureAddress']) . "</p>
                <p><span class='label'>Code Postal:</span> " . htmlspecialchars($data['departurePostalCode']) . "</p>
                <p><span class='label'>Ville:</span> " . htmlspecialchars($data['departureCity']) . "</p>
                <p><span class='label'>Étages:</span> " . htmlspecialchars($data['departureFloors'] ?? 'Non spécifié') . "</p>
                <p><span class='label'>Ascenseur:</span> " . htmlspecialchars($data['departureElevator'] ?? 'Non spécifié') . "</p>
                <p><span class='label'>Informations complémentaires:</span> " . nl2br(htmlspecialchars($data['departureInfo'] ?? 'Aucune')) . "</p>
            </div>
            
            <h3>Adresse d'arrivée</h3>
            <div class='info-box'>
                <p><span class='label'>Adresse:</span> " . htmlspecialchars($data['arrivalAddress'] ?? 'Non renseigné') . "</p>
                <p><span class='label'>Code Postal:</span> " . htmlspecialchars($data['arrivalPostalCode'] ?? 'Non renseigné') . "</p>
                <p><span class='label'>Ville:</span> " . htmlspecialchars($data['arrivalCity'] ?? 'Non renseigné') . "</p>
                <p><span class='label'>Étages:</span> " . htmlspecialchars($data['arrivalFloors'] ?? 'Non spécifié') . "</p>
                <p><span class='label'>Ascenseur:</span> " . htmlspecialchars($data['arrivalElevator'] ?? 'Non spécifié') . "</p>
            </div>
            
            <h3>Détails du déménagement</h3>
            <div class='info-box'>
                <p><span class='label'>Volume (m³):</span> " . htmlspecialchars($data['volume'] ?? 'Non spécifié') . "</p>
                <p><span class='label'>Superficie (m²):</span> " . htmlspecialchars($data['surface'] ?? 'Non spécifié') . "</p>
                <p><span class='label'>Date prévue:</span> " . htmlspecialchars($data['date'] ?? 'Non spécifiée') . "</p>
                <p><span class='label'>Formule:</span> " . htmlspecialchars($data['formule'] ?? 'Non spécifiée') . "</p>
            </div>
        </div>
    </body>
    </html>
    ";
    
    $mail->Body = $body;
    $mail->AltBody = strip_tags($body);

    // Envoyer l'email à vous
    $mail->send();
    
    // Préparer l'email de confirmation au client
    $mail->clearAddresses();
    $mail->clearReplyTos();
    $mail->setFrom('docteurdemenagement@gmail.com', 'Docteur Déménagement');
    $mail->addAddress($data['email'], $data['firstName'] . ' ' . $data['lastName']);
    $mail->Subject = 'Confirmation de votre demande de devis - Docteur Déménagement';
    
    $confirmationBody = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h2 { color: #2563eb; }
            .highlight { background: #dbeafe; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .contact-info { background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>Merci pour votre demande de devis !</h2>
            <p>Bonjour " . htmlspecialchars($data['firstName']) . ",</p>
            <p>Nous avons bien reçu votre demande de devis pour votre déménagement.</p>
            <div class='highlight'>
                <p><strong>Notre équipe va analyser votre demande et vous contacter sous 24 heures.</strong></p>
            </div>
            <div class='contact-info'>
                <p><strong>Besoin d'informations ?</strong></p>
                <p>Téléphone: <strong>06 05 99 25 10</strong></p>
                <p>Email: <strong>docteurdemenagement@gmail.com</strong></p>
                <p>Adresse: <strong>55 av. de Paris, 94300 Vincennes</strong></p>
            </div>
            <p>Cordialement,<br><strong>L'équipe Docteur Déménagement</strong></p>
        </div>
    </body>
    </html>
    ";
    
    $mail->Body = $confirmationBody;
    $mail->AltBody = "Merci pour votre demande de devis. Nous vous contacterons sous 24h. Contact: 06 05 99 25 10";
    
    // Envoyer l'email de confirmation au client
    $mail->send();
    
    echo json_encode([
        'success' => true,
        'message' => 'Votre demande a été envoyée avec succès. Vous recevrez un email de confirmation.'
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur lors de l\'envoi: ' . $mail->ErrorInfo
    ]);
}
?>
