var counter = 0;
var counter2 = 0;
let rownum = 0;

//To manage resizable and draggable capabilities
$(function () {
    $("#widget").resizable();
    $("#widget").draggable();
});


$(document).change(function () {
    $("#tblContainer").tableDnD({
        onDragClass: "myDragClass",
        onDrop: function (table, row) {
            $("#tblContainer").find("tr").removeClass("even odd");
            $("#tblContainer").find("tr:even").addClass("even");
            $("#tblContainer").find("tr:odd").addClass("odd");
        }
    });
});


var config_table = configurazione_tabella;


function AddColumn() {

    counter++;
    rownum++;

    //Build an array containing different colum types
    var types = [
        {TypeId: "", Name: ""},
        {TypeId: 1, Name: "Alfanumerica"},
        {TypeId: 2, Name: "Numerica"},
        {TypeId: 3, Name: "Booleana"},
        {TypeId: 4, Name: "Calendario"},
        {TypeId: 5, Name: "Link a Cartella"},
        {TypeId: 6, Name: "Link a Tabella"}
    ];

    //Create a DropDownList element.
    var ddlTypes = $("<select class='tipo' id='" + counter + "' required/>");

    //Add the Options to the DropDownList.
    $(types).each(function () {

        var option = $("<option name='tipo_campo' id='tipo_campo'/>");

        //Set Customer Name in Text part.
        option.html(this.Name);

        //Set Customer CustomerId in Value part.
        option.val(this.TypeId);

        //Add the Option element to DropDownList.
        ddlTypes.append(option);
    });

    //Reference the container Table.
    var tblContainer = $("#tblContainer");

    //Add the Table row.
    let row = tblContainer[0].insertRow(-1);
    row.setAttribute("id", "row" + counter);

    //Add the DropDownList to Table Row.
    let cell = row.insertCell(-1);
    $(cell).append(ddlTypes);

    //Reset cell wen change drop down list selection
    let cellNome = row.insertCell(-1);
    if (config_table == "ExtKey") {
        var cellExt = row.insertCell(-1);
    }
    let cellProp = row.insertCell(-1);
    let cellChiave = row.insertCell(-1);
    let cellCalc = row.insertCell(-1);
    let cellOrd = row.insertCell(-1);
    let cellForm = row.insertCell(-1);
    let cellRemove = row.insertCell(-1);


    $(function () {
        $('#' + counter).change(function () {

            counter2++; //serve ad assegnare id univoci ai radiofield di ord ed alle checkbox chiave

            var tipoId = $('option:selected', this).text();

            $(cellNome).empty();
            if (config_table == "ExtKey") {
                $(cellExt).empty(btnExt);
            }
            $(cellProp).empty(btnProp);
            $(cellChiave).empty(btnChiave);
            $(cellCalc).empty(btnCalc);
            $(cellOrd).empty(btnOrd);
            $(cellForm).empty(btnForm);

            if (tipoId == "Alfanumerica") {

                var btnNome = $("<input class='nameInput' id='nameInput' name='nome' style='width: 120px' required>");
                $(cellNome).append(btnNome);

                var btnProp = $("<input class='prop' id='propInput' name='prop' placeholder='40'  type='number' min='1' max='32767' style='width: 120px'>");
                $(cellProp).append(btnProp);

                var btnChiave = $("<input class='chiave' type='checkbox' name='checkbox-2' id='checkbox-2-" + counter2 + "'>");
                $(cellChiave).append(btnChiave);

                var btnCalc = $("<input class='calc' type='checkbox' name='checkbox-3' id='checkbox-3'>");
                $(cellCalc).append(btnCalc);

                var btnOrd = $("<input class='ord' type='radio' name='checkbox-4' id='checkbox-4-" + counter2 + "' onclick='gestisciChiave(this)'>");
                $(cellOrd).append(btnOrd);

                var btnForm = $("<input class='form' type='checkbox' name='checkbox-5' id='checkbox-5'>");
                $(cellForm).append(btnForm);
            } else if (tipoId == "Numerica") {

                var btnNome = $("<input class='nameInput' id='nameInput' style='width: 120px' required>");
                $(cellNome).append(btnNome);

                var btnProp = $("<select class='prop' id='combobox' style='width: 120px'><option value='Float'>Float</option><option value='Int1'>Int1</option><option value='Int2'>Int2</option><option value='Int4'>Int4</option></select>");
                $(cellProp).append(btnProp);

                var btnChiave = $("<input class='chiave' type='checkbox' name='checkbox-2' id='checkbox-2-" + counter2 + "'>");
                $(cellChiave).append(btnChiave);

                var btnCalc = $("<input class='calc' type='checkbox' name='checkbox-3' id='checkbox-3'>");
                $(cellCalc).append(btnCalc);

                var btnOrd = $("<input class='ord' type='radio' name='checkbox-4' id='checkbox-4-" + counter2 + "' onclick='gestisciChiave(this)'>");
                $(cellOrd).append(btnOrd);

                var btnForm = $("<input class='form' type='checkbox' name='checkbox-5' id='checkbox-5'>");
                $(cellForm).append(btnForm);
            } else if (tipoId == "Booleana") {

                var btnNome = $("<input class='nameInput' id='nameInput' style='width: 120px' required>");
                $(cellNome).append(btnNome);
            } else if (tipoId == "Calendario") {

                var btnNome = $("<input class='nameInput' id='nameInput' style='width: 120px' required>");
                $(cellNome).append(btnNome);

                var btnChiave = $("<input class='chiave' type='checkbox' name='checkbox-2' id='checkbox-2-" + counter2 + "'>");
                $(cellChiave).append(btnChiave);

                var btnCalc = $("<input class='calc' type='checkbox' name='checkbox-3' id='checkbox-3'>");
                $(cellCalc).append(btnCalc);

                var btnOrd = $("<input class='ord' type='radio' name='checkbox-4' id='checkbox-4-" + counter2 + "' onclick='gestisciChiave(this)'>");
                $(cellOrd).append(btnOrd);

                var btnForm = $("<input class='form' type='checkbox' name='checkbox-5' id='checkbox-5'>");
                $(cellForm).append(btnForm);
            } else if (tipoId == "Link a Cartella") {

                var btnNome = $("<input class='nameInput' id='nameInput' style='width: 120px' required>");
                $(cellNome).append(btnNome);

                var btnChiave = $("<input class='chiave' type='checkbox' name='checkbox-2' id='checkbox-2-" + counter2 + "'>");
                $(cellChiave).append(btnChiave);
            } else if (tipoId == "Link a Tabella") {

                var btnNome = $("<input class='nameInput' id='nameInput' style='width: 120px' required>");
                $(cellNome).append(btnNome);

                if (config_table == "ExtKey") {
                    var btnExt = $("<input class='extKey' type='checkbox' name='checkbox-6' id='checkbox-6'>");
                    $(cellExt).append(btnExt);
                }

                var btnProp = $("<select class='prop' id='combobox' style='width: 120px'><option value='Float'>Float</option><option value='Int1'>Int1</option><option value='Int2'>Int2</option><option value='Int4'>Int4</option></select>");
                $(cellProp).append(btnProp);
            }
        });
    });


    $("tr").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    $("#tblContainer").find("tr:even").addClass("even");
    $("#tblContainer").find("tr:odd").addClass("odd");

    //Create a Remove Button.
    var btnRemove = $("<input style='float: right' type='button' value='Remove'/>");

    btnRemove.click(function () {
        rownum--;
        //Determine the reference of the Row using the Button.
        var row = btnRemove.closest("TR");
        //Delete the Table row.
        row.remove();
    });

    //Add the Remove Button to Table Row.
    cellRemove = row.insertCell(-1);
    $(cellRemove).append(btnRemove);
};


$(document).ready(function () {
    $("form#myform").submit(function (event) {

        event.preventDefault();

        $(document).ready(function () {

            var tipo = [];
            var nome = [];
            if (config_table == "ExtKey") {
                var extkey = [];
            }
            var prop = [];
            var chiave = [];
            var calc = [];
            var ord = [];
            var form = [];

            $.each($(".tipo option:selected"), function () {
                tipo.push($(this).text());
            });

            $.each($(".nameInput"), function () {
                nome.push($(this).val());
            });

            if (config_table == "ExtKey") {
                $.each($(".extKey"), function () {
                    if ($(this).is(":checked"))
                        //extkey.push($(this).val());
                        extkey.push("1");
                    else
                        extkey.push("0");
                });
            }

            $.each($(".prop"), function () {
                prop.push($(this).val());
            });

            $.each($(".chiave"), function () {
                if ($(this).is(":checked"))
                    chiave.push("1");
                else
                    chiave.push("0");
            });

            $.each($(".calc"), function () {
                if ($(this).is(":checked"))
                    calc.push("1");
                else
                    calc.push("0");
            });

            $.each($(".ord"), function () {
                if ($(this).is(":checked"))
                    ord.push("1");
                else
                    ord.push("0");
            });

            $.each($(".form"), function () {
                if ($(this).is(":checked"))
                    form.push("1");
                else
                    form.push("0");
            });


            var aType = [];

            if (config_table == "ExtKey") {
                aType.push([0, 1, 2, 3, 4, 5, 6, 7]);
            } else {
                aType.push([0, 1, 2, 3, 4, 5, 6]);
            }

            var counter_ext = 0;
            var counter_prop = 0;
            var counter_chiave = 0;
            var counter_calc = 0;
            var counter_ord = 0;
            var counter_form = 0;

            for (var i = 0; i < rownum; i++) {

                var tipoCel = tipo[i];

                if (tipoCel == "Calendario" || tipoCel == "Booleana" || tipoCel == "Link a Cartella") {
                    var propCel = "";
                } else {
                    var propCel = prop[counter_prop];
                    counter_prop++;
                }

                var nomeCel = nome[i];

                if (tipoCel == "Booleana" || tipoCel == "Link a Tabella") {
                    var chiaveCel = "";
                } else {
                    var chiaveCel = chiave[counter_chiave];
                    counter_chiave++;
                }

                if (tipoCel == "Link a Tabella" && config_table == "ExtKey") {
                    var extCel = extkey[counter_ext];
                    counter_ext++;
                } else if (config_table == "ExtKey") {
                    var extCel = "";
                }

                if (tipoCel == "Booleana" || tipoCel == "Link a Tabella" || tipoCel == "Link a Cartella") {
                    var calcCel = "";
                } else {
                    var calcCel = calc[counter_calc];
                    counter_calc++;
                }

                if (tipoCel == "Booleana" || tipoCel == "Link a Tabella" || tipoCel == "Link a Cartella") {
                    var ordCel = "";
                } else {
                    var ordCel = ord[counter_ord];
                    counter_ord++;
                }

                if (tipoCel == "Booleana" || tipoCel == "Link a Tabella" || tipoCel == "Link a Cartella") {
                    var formCel = "";
                } else {
                    var formCel = form[counter_form];
                    counter_form++;
                }


                if (config_table == "ExtKey") {
                    aType.push([tipoCel, nomeCel, extCel, propCel, chiaveCel, calcCel, ordCel, formCel]);
                } else {
                    aType.push([tipoCel, nomeCel, propCel, chiaveCel, calcCel, ordCel, formCel]);
                }

            }


            function arrayToJSONObject(arr) {
                //header
                var keys = arr[0];

                //vacate keys from main array
                var newArr = arr.slice(1, arr.length);

                var formatted = [],
                    data = newArr,
                    cols = keys,
                    l = cols.length;
                for (var i = 0; i < data.length; i++) {
                    var d = data[i],
                        o = {};
                    for (var j = 0; j < l; j++)
                        o[cols[j]] = d[j];
                    formatted.push(o);
                }
                return formatted;
            }

            var formOutput = JSON.stringify(arrayToJSONObject(aType));
            console.log(formOutput);


            $.ajax({
                url: "scrivi_macro.php",
                data: {data: formOutput, config: config_table},
                type: 'POST',
                success: function () {
                    alert("post to PHP done :)");
                }
            });
        });
    });
});


function gestisciChiave(elemento) {  //viene eseguita ad ogni click su un radiofield di ordinamento

    if (elemento.value == "on") {

        var id = elemento.id;
        //alert (id);
        var lungh_id = id.length;
        var x = id.substr(11, lungh_id);  //11 perchè l'id è "checkbox-4-" + il contatore, quindi deve leggere dal 12esimo carattere in poi
        //alert (x);

        $('input#checkbox-2-' + x).prop('checked', true);
    }
}


function campoBase() {

    counter++;
    rownum++;

    //Build an array containing different colum types
    var types = [
        {TypeId: 1, Name: "Alfanumerica"},
        {TypeId: 2, Name: "Numerica"},
        {TypeId: 4, Name: "Calendario"}
    ];

    //Create a DropDownList element.
    var ddlTypes = $("<select class='tipo' id='" + counter + "' style='width:109.2px' required/>");

    //Add the Options to the DropDownList.
    $(types).each(function () {

        var option = $("<option name='tipo_campo' id='tipo_campo'/>");

        //Set Customer Name in Text part.
        option.html(this.Name);

        //Set Customer CustomerId in Value part.
        option.val(this.TypeId);

        //Add the Option element to DropDownList.
        ddlTypes.append(option);
    });

    //Reference the container Table.
    var tblContainer = $("#tblContainer");

    //Add the Table row.
    let row = tblContainer[0].insertRow(-1);
    row.setAttribute("id", "row" + counter);
    row.setAttribute("class", "nodrag nodrop");

    //Add the DropDownList to Table Row.
    let cell = row.insertCell(-1);
    $(cell).append(ddlTypes);

    //Reset cell wen change drop down list selection
    let cellNome = row.insertCell(-1);
    if (config_table == "ExtKey") {
        var cellExt = row.insertCell(-1);
    }
    let cellProp = row.insertCell(-1);
    let cellChiave = row.insertCell(-1);
    let cellCalc = row.insertCell(-1);
    let cellOrd = row.insertCell(-1);
    let cellForm = row.insertCell(-1);
    row.insertCell(-1);

    var tipoId = $('#' + counter + ' option:selected').text();

    $(cellProp).empty(btnProp);
    $(cellChiave).empty(btnChiave);
    $(cellCalc).empty(btnCalc);
    $(cellOrd).empty(btnOrd);
    $(cellForm).empty(btnForm);

    if (tipoId == "Alfanumerica") {

        var btnNome = $("<input class='nameInput' id='nameInput' name='nome' style='width: 120px' required>");
        $(cellNome).append(btnNome);

        var btnProp = $("<input class='prop' id='propInput' name='prop' placeholder='40'  type='number' min='1' max='32767' style='width: 120px'>");
        $(cellProp).append(btnProp);

        var btnChiave = $("<input class='chiave' type='checkbox' name='checkbox-2' id='checkbox-2-" + counter2 + "' disabled>");
        $(cellChiave).append(btnChiave);
        $('#checkbox-2-' + counter2).prop('checked', true);

        var btnCalc = $("<input class='calc' type='checkbox' name='checkbox-3' id='checkbox-3'>");
        $(cellCalc).append(btnCalc);

        var btnOrd = $("<input class='ord' type='radio' name='checkbox-4' id='checkbox-4-" + counter2 + "' onclick='gestisciChiave(this)'>");
        $(cellOrd).append(btnOrd);

        var btnForm = $("<input class='form' type='checkbox' name='checkbox-5' id='checkbox-5'>");
        $(cellForm).append(btnForm);
    } else if (tipoId == "Numerica") {

        var btnNome = $("<input class='nameInput' id='nameInput' style='width: 120px' required>");
        $(cellNome).append(btnNome);

        var btnProp = $("<select class='prop' id='combobox' style='width: 120px'><option value='Float'>Float</option><option value='Int1'>Int1</option><option value='Int2'>Int2</option><option value='Int4'>Int4</option></select>");
        $(cellProp).append(btnProp);

        var btnChiave = $("<input class='chiave' type='checkbox' name='checkbox-2' id='checkbox-2-" + counter2 + "' disabled>");
        $(cellChiave).append(btnChiave);
        $('#checkbox-2-' + counter2).prop('checked', true);

        var btnCalc = $("<input class='calc' type='checkbox' name='checkbox-3' id='checkbox-3'>");
        $(cellCalc).append(btnCalc);

        var btnOrd = $("<input class='ord' type='radio' name='checkbox-4' id='checkbox-4-" + counter2 + "' onclick='gestisciChiave(this)'>");
        $(cellOrd).append(btnOrd);

        var btnForm = $("<input class='form' type='checkbox' name='checkbox-5' id='checkbox-5'>");
        $(cellForm).append(btnForm);
    } else if (tipoId == "Calendario") {

        var btnNome = $("<input class='nameInput' id='nameInput' style='width: 120px' required>");
        $(cellNome).append(btnNome);

        var btnChiave = $("<input class='chiave' type='checkbox' name='checkbox-2' id='checkbox-2-" + counter2 + "' disabled>");
        $(cellChiave).append(btnChiave);
        $('#checkbox-2-' + counter2).prop('checked', true);

        var btnCalc = $("<input class='calc' type='checkbox' name='checkbox-3' id='checkbox-3'>");
        $(cellCalc).append(btnCalc);

        var btnOrd = $("<input class='ord' type='radio' name='checkbox-4' id='checkbox-4-" + counter2 + "' onclick='gestisciChiave(this)'>");
        $(cellOrd).append(btnOrd);

        var btnForm = $("<input class='form' type='checkbox' name='checkbox-5' id='checkbox-5'>");
        $(cellForm).append(btnForm);
    }

    $(function () {
        $('#' + counter).change(function () {

            counter2++; //serve ad assegnare id univoci ai radiofield di ord ed alle checkbox chiave

            var tipoId = $('option:selected', this).text();

            $(cellNome).empty();
            $(cellProp).empty(btnProp);
            $(cellChiave).empty(btnChiave);
            $(cellCalc).empty(btnCalc);
            $(cellOrd).empty(btnOrd);
            $(cellForm).empty(btnForm);

            if (tipoId == "Alfanumerica") {

                var btnNome = $("<input class='nameInput' id='nameInput' name='nome' style='width: 120px' required>");
                $(cellNome).append(btnNome);

                var btnProp = $("<input class='prop' id='propInput' name='prop' placeholder='40'  type='number' min='1' max='32767' style='width: 120px'>");
                $(cellProp).append(btnProp);

                var btnChiave = $("<input class='chiave' type='checkbox' name='checkbox-2' id='checkbox-2-" + counter2 + "' disabled>");
                $(cellChiave).append(btnChiave);
                $('#checkbox-2-' + counter2).prop('checked', true);

                var btnCalc = $("<input class='calc' type='checkbox' name='checkbox-3' id='checkbox-3'>");
                $(cellCalc).append(btnCalc);

                var btnOrd = $("<input class='ord' type='radio' name='checkbox-4' id='checkbox-4-" + counter2 + "' onclick='gestisciChiave(this)'>");
                $(cellOrd).append(btnOrd);

                var btnForm = $("<input class='form' type='checkbox' name='checkbox-5' id='checkbox-5'>");
                $(cellForm).append(btnForm);
            } else if (tipoId == "Numerica") {

                var btnNome = $("<input class='nameInput' id='nameInput' style='width: 120px' required>");
                $(cellNome).append(btnNome);

                var btnProp = $("<select class='prop' id='combobox' style='width: 120px'><option value='Float'>Float</option><option value='Int1'>Int1</option><option value='Int2'>Int2</option><option value='Int4'>Int4</option></select>");
                $(cellProp).append(btnProp);

                var btnChiave = $("<input class='chiave' type='checkbox' name='checkbox-2' id='checkbox-2-" + counter2 + "' disabled>");
                $(cellChiave).append(btnChiave);
                $('#checkbox-2-' + counter2).prop('checked', true);

                var btnCalc = $("<input class='calc' type='checkbox' name='checkbox-3' id='checkbox-3'>");
                $(cellCalc).append(btnCalc);

                var btnOrd = $("<input class='ord' type='radio' name='checkbox-4' id='checkbox-4-" + counter2 + "' onclick='gestisciChiave(this)'>");
                $(cellOrd).append(btnOrd);

                var btnForm = $("<input class='form' type='checkbox' name='checkbox-5' id='checkbox-5'>");
                $(cellForm).append(btnForm);
            } else if (tipoId == "Calendario") {

                var btnNome = $("<input class='nameInput' id='nameInput' style='width: 120px' required>");
                $(cellNome).append(btnNome);

                var btnChiave = $("<input class='chiave' type='checkbox' name='checkbox-2' id='checkbox-2-" + counter2 + "' disabled>");
                $(cellChiave).append(btnChiave);
                $('#checkbox-2-' + counter2).prop('checked', true);

                var btnCalc = $("<input class='calc' type='checkbox' name='checkbox-3' id='checkbox-3'>");
                $(cellCalc).append(btnCalc);

                var btnOrd = $("<input class='ord' type='radio' name='checkbox-4' id='checkbox-4-" + counter2 + "' onclick='gestisciChiave(this)'>");
                $(cellOrd).append(btnOrd);

                var btnForm = $("<input class='form' type='checkbox' name='checkbox-5' id='checkbox-5'>");
                $(cellForm).append(btnForm);
            }
        });
    });

    $("tr").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    $("#tblContainer").find("tr:even").addClass("even");
    $("#tblContainer").find("tr:odd").addClass("odd");

    //Add the Remove Button cell to Table Row.
    row.insertCell(-1);
};