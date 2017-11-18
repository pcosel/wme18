<?php
        function parseCSV (string $path) {
            $file = fopen($path, "r");
            $array = array();
            $innerArray = array();
            $firstLine = fgetcsv($file);

            $i = 0;
            while(!feof($file)) {
                $line = fgetcsv($file);
                for($j = 0; $j < count($line); $j++) {
                    $innerArray[$firstLine[$j]] = $line [$j];
                }
                $array[$i] = $innerArray;
                $i++;
            }

            return $array;
        }

        function saveXML () {

        }

        function printXML () {

        }
?>