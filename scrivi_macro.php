<?php
session_start();
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

    $textField = '"fields"' . ': [';
    $textJson = $_SESSION["textJson"];
    $textJson = $textJson . $textField;

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

    $textJson = $textJson . "]}";

    echo $textJson;

    $src = fopen('./table_create.json', 'a+');

    fwrite($src, $textJson);
    fclose($src);


    //Scrittura json su MongDB

// connect to OVHcloud Public Cloud Databases for MongoDB (cluster in version 4.4, MongoDB PHP Extension in 1.8.1)
    $m = new MongoDB\Driver\Manager('mongodb+srv://m001-student:pippo@sandbox.5gfnd.mongodb.net/Luna_Cloud?retryWrites=true&w=majority');
    //echo "Connection to database successfully ";
// display the content of the driver, for diagnosis purpose
    //var_dump($m);

    $bulk = new MongoDB\Driver\BulkWrite;

    $json = '{"a": 1,"b": 2,"c": 3,"d": 4,"campi": [{"a": 5,"b": 6,"c": 7,"d": 8},{"e": 5,"f": 6,"g": 7,"h": 8}]}';
    $json2 = '{"tableName": "sw","tableDescription": "x","tableConfig": "Default"}';

    $pippo = json_decode($textJson, true);

    //$document = ['title' => "pippo", 'nome' => "pluto"];

    $_id1 = $bulk->insert($pippo);

    $manager = new MongoDB\Driver\Manager('mongodb+srv://m001-student:pippo@sandbox.5gfnd.mongodb.net/Luna_Cloud?retryWrites=true&w=majority');
    $result = $manager->executeBulkWrite('Luna_Cloud.Prove_tabella', $bulk);

}

// Da capire meglio se e come implementare la fine della sessione
/*
session_destroy();

if (isset($_SESSION["textJson"])) {
    echo "sono ancora in sessione!";
} else {
    echo "sono fuori sessione!";
}
*/
?>


