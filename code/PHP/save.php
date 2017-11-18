<?php

    require("world_data_parser.php");

    $array = parseCSV("../../world_data_v1.csv");

    print("XML Savestatus: ");

    if(saveXML($array)) {
        print("erfolgreich (1)");
    } else {
        print("fehlerhaft(0)");
    }
?>