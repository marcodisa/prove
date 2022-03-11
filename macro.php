
<HTML>
<HEAD>
	<TITLE>Struttura Tabella in PHP</TITLE>
	<META HTTP-EQUIV="CONTENT-TYPE" CONTENT="TEXT/HTML; CHARSET=utf-8">

	<link rel="stylesheet" href="./jquery-ui/jquery-ui.css">
	<link rel="stylesheet" href="./struttura_tabella.css">

	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  	<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
	<script  type="text/javascript" src="./struttura_tabella.js"></script>
</HEAD>
<BODY>


<!--FORM method="POST" action="scrivi_macro.php">

	Nome Tabella: <input type="text" NAME="nome" required>
	<br /><br />
	Descrizione Tabella: <input type="text" NAME="descrizione" required>
	<br /><br />
    Nome Colonna Base: <input type="text" NAME="nome_base" required>
	<br /><br />
    Tipo Colonna Base: <input type="text" NAME="tipo_base" required>
	<br /><br />

	<input type="submit" value="invia">
</FORM-->


	<div id="widget" class="ui-widget-content">
		<h3 class="ui-widget-header">Struttura Tabella</h3>
		
		<form method="POST" action="scrivi_macro.php">
			<br />
			<input type="button" id="btnAdd" onclick="AddColumn()" value="Aggiungi nuovo campo" />

			<hr />
			<table id="tblContainer" cellpadding="5" cellspacing="5"></table>

			<hr />
			<p>
				<label for="descrizione_campo	">Descrizione Campo:</label>
			</p>
			<textarea id="descrizione_campo" type="text" name="tipo_base"></textarea>
			<hr />
			<p>
				<input id="btnannulla" type="submit" value="Annulla">
				<input id="btnok" type="submit" value="Ok">
			</p>
		</form>

		
	</div>

</BODY>
</HTML>
