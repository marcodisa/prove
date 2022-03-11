<!-- questa prima parte di script PHP scrive la prima parte della macro di creazione tabella su un file -->

<?php

//ciao Davide
//ciao Marco
//ciao Hicare

// Controlli sicurezza
if (isset($_POST["nome"]) && isset($_POST["descrizione"])) {

    $nome = $_POST["nome"];
    $descrizione = $_POST["descrizione"];

    if (!empty($_POST['configTable'])) {        //il ciclo serve a leggere il valore del campo flaggato

        foreach ($_POST['configTable'] as $value) {
            $configurazione = $value;
        }
    }

    $textJson = "[{\n" . '"tableName": "' . $nome . '"' . ",\n" . '"tableDescription": "' . $descrizione . '"' . ",\n" . '"tableConfig": "' . $configurazione . '"' . "\n},";

    $src = fopen('./table_create.json', 'w+');    //la variabile $src vale TRUE se il file viene correttamente aperto, FALSE in caso contario. Può essere quindi sottoposta a test

    fwrite($src, $textJson);

    fclose($src);
}
?>


<HTML>
<HEAD>
    <TITLE>Struttura Tabella in PHP</TITLE>
    <META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8">

    <link rel="stylesheet" href="./jquery-ui/jquery-ui.css">
    <link rel="stylesheet" href="./struttura_tabella.css">

    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/TableDnD/0.9.1/jquery.tablednd.js" integrity="sha256-d3rtug+Hg1GZPB7Y/yTcRixO/wlI78+2m08tosoRn7A=" crossorigin="anonymous"></script>
    <script type="text/javascript">

        var configurazione_tabella = "<?php echo"$configurazione"?>";   //questo passaggio va fatto prima dell'include di
                                                                        //struttura_tabella per valorizzare la variabile js configurazione_tabella
    </script>
    <script type="text/javascript" src="./struttura_tabella.js"></script>
</HEAD>
<BODY>



<div id="widget" class="ui-widget-content">

    <h3 class="ui-widget-header">Table Structure</h3>

    <form id="myform" method="post" action="scrivi_macro.php">
        <fieldset style="min-height: 300px;">
            <legend>Configure your table:</legend>

            <p>
                <input type="button" id="btnAdd" onclick="AddColumn()" value="Add field"/>
            </p>

            <table id="tblContainer" cellpadding="5" cellspacing="0">
                <tr id="row_intestazione" style="background-color: #e9e9e9;">
                    <td style="width:135px">Type</td>
                    <td style="width:135px">Name</td>
                    <td style="width:135px">Property</td>
                    <td style="width:40px">Key</td>
                    <td style="width:40px">Calc</td>
                    <td style="width:40px">Ord</td>
                    <td style="width:40px">Form</td>
                    <td style="width:0px"></td> <!-- campo id field invisibile -->
                    <td style="width:70px"></td>
                </tr>
            </table>
        </fieldset>

        <br/>
        <p>
            <input id="btnannulla" type="submit" value="Cancel">
            <input type="submit" id="btnok" value="Ok">
        </p>
    </form>

</div>

<script type="text/javascript">
    if (configurazione_tabella == "ExtKey") {

        // Insert a row at the end of the table
        let newRow = document.getElementById("row_intestazione");

        // Insert a cell in the row at index 0
        let newCell = newRow.insertCell(2);
        newCell.setAttribute("Style","width:40px");

        // Append a text node to the cell
        let newText = document.createTextNode('Ext');
        newCell.appendChild(newText);
    }
</script>

</BODY>
</HTML>
