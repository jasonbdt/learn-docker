<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World: apache/php</h1>

        <?php $load = sys_getloadavg(); ?>

        <p>
            Serverzeit: <?php echo date("c"); ?><br />
            Serverauslastung (load): <?php echo $load[0]; ?>
        </p>
    </body>
</html>