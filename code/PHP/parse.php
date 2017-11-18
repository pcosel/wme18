<?php
    require('world_data_parser.php');

    $array = parseCSV("../../world_data_v1.csv");

    echo("<pre>".print_r($array, true)."</pre>");
?>