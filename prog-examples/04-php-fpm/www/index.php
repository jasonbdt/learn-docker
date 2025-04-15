<?php
    // Datei: prog-examples/04-php-fpm/www/index.php
    require 'vendor/autoload.php';

    $Parsedown = new Parsedown();

    $img = 'ravenna.jpg';
    $exif = exif_read_data($img);

    // Markdown-Code einlesen
    $md = <<<EOD
    ![pic]($img)

    # Exif Info:

    * Kamera: {$exif['Make']}/{$exif['Model']}
    * Aufnahmedatum: {$exif['DateTimeOriginal']}
    * Belichtungszeit: {$exif['ExposureTime']}
    * Blende: {$exif['FNumber']}
    * ISO: {$exif['ISOSpeedRatings']}
    EOD;

    // Markdown-Code in HTML umwandeln und ausgeben
    echo $Parsedown->text($md);
