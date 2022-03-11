
<script>createArray()</script>
<?php  


//carico un array associativo con le opzioni valorizzate dal JS

	echo "<script>alert('sono in PHP');</script>";

	$tipo = $_POST["tipo_campo"];
	$nome = $_POST["nome"];
	$prop = $_POST["prop"]; 
	$chiave = $_POST["checkbox-1"];
	$calcoli = $_POST["checkbox-2"];
	$ordinamento = $_POST["checkbox-3"];
	$formula = $_POST["checkbox-4"];

	print($id);
	/*
	$campi_tabella = array(	
							"nome" => $nome,
							"prop" => $prop,
							"tipo" => $tipo,
							"chiave" => $chiave,
							"calcoli" => $calcoli,
							"ordinamento" => $ordinamento,
							"formula" => $formula
							);  
	print_r($campi_tabella);
*/


?>