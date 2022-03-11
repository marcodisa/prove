<?php

if (isset($_POST['data'])) {

    //$data è un array PHP che utilizza tutti i relativi metodi
    $data = json_decode(stripslashes($_POST['data']));


    $config_table = $_POST['config'];

    if ($config_table == "ExtKey") {
        //Modulo che scrive su un file i dati in valori di input del form in formato json
        $typeArray = array("type", "name", "ext", "prop", "key", "calc", "ord", "form");
    } else {
        $typeArray = array("type", "name", "prop", "key", "calc", "ord", "form");
    }

    $counterJson = 0;

    //Aggiungo i valori di input in tabella1

    foreach ($data as $v1) {

        $counterType = 0;

        if ($counterJson != 0)
            $textRow = ",{\n";
        else
            $textRow = "{\n";

        foreach ($v1 as $v2) {
            if ($counterType != 6 && $config_table != "ExtKey")
                $textRow = $textRow . '"' . $typeArray[$counterType] . '": "' . $v2 . '"' . ",\n";
            elseif ($counterType != 7 && $config_table == "ExtKey")
                $textRow = $textRow . '"' . $typeArray[$counterType] . '": "' . $v2 . '"' . ",\n";
            else
                $textRow = $textRow . '"' . $typeArray[$counterType] . '": "' . $v2 . '"' . "\n";
            $counterType++;
        }

        $textJson = $textJson . $textRow . "}";
        $counterJson++;
    }

    $textJson = $textJson . "]";


    $src = fopen('./table_create.json', 'a+');

    fwrite($src, $textJson);
    fclose($src);

}


?>


