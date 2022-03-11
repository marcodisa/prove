<HTML>
<HEAD>
    <TITLE>Struttura Tabella in PHP</TITLE>
    <META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8">

    <link rel="stylesheet" href="./jquery-ui/jquery-ui.css">
    <link rel="stylesheet" href="./struttura_tabella.css">

    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
    <script type="text/javascript" src="./struttura_tabella.js"></script>
</HEAD>
<BODY>


<div id="widget" class="ui-widget-content">
    <h3 class="ui-widget-header">Struttura Tabella</h3>

    <form method="POST" action="tabella2.php">

        <script>
            $(function () {
                $('#configTable').prop('checked', true);
                $("input").checkboxradio();
                $("fieldset").controlgroup();
            });
        </script>

        <fieldset>
            <legend>Select a configuration:</legend>
            <label for="configTable">Default table</label>
            <input type='radio' name='configTable[]' id='configTable' value='Default'>
            <label for="pilotTable">Pilot table</label>
            <input type='radio' name='configTable[]' id='pilotTable' value='Pilot'>
            <label for="extKey">External Keys</label>
            <input type='radio' name='configTable[]' id='extKey' value='ExtKey'>
        </fieldset>

        <br/>
        <p>
            <label for="nome_tabella">Nome Tabella:</label>
        </p>
        <textarea id="nome_tabella" type="text" name="nome" style="position: relative; width: 100%;" required></textarea>

        <p>
            <label for="descrizione_tabella">Descrizione Tabella:</label>
        </p>
        <textarea id="descrizione_tabella" type="text" name="descrizione" style=" position: relative; width: 100%;"></textarea>

        <p>
            <input id="btnannulla" type="submit" value="Annulla">
            <input id="btnok" type="submit" value="Ok">
        </p>

    </form>


</div>

</BODY>
</HTML>
