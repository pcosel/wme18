<?php
        function parseCSV (string $path) {
            $file = fopen($path, "r");
            $array = array();
            $innerArray = array();
            $firstLine = fgetcsv($file);

            //replacing spaces in csv with underscores
            foreach ($firstLine as $key => $value) {
                $firstLine[$key] = str_replace(" ", "_", $value);
            }

            //iterating through all lines of the csv
            $i = 0;
            while(!feof($file)) {
                $line = fgetcsv($file);

                //iterating through all elements of one line
                for($j = 0; $j < count($line); $j++) {
                    $innerArray[$firstLine[$j]] = $line [$j];
                }
                $array[$i] = $innerArray;
                $i++;
            }

            return $array;
        }

        function saveXML (array $array) {

            //creating root node
            $xml = new SimpleXMLElement("<?xml version=\"1.0\" encoding=\"UTF-8\"?><Countries></Countries>");

            //iterating through all countries
            foreach ($array as $key1 => $value1) {

                //adding node for every country
                $xmlChild = $xml -> addChild("Country");

                //iterating through elements
                foreach ($value1 as $key2 => $value2) {

                    //adding node for every attribute
                    $xmlChild -> addChild("$key2", htmlspecialchars("$value2"));
                }
            }

            return $xml -> asXML("world_data.xml");
        }

        function printXML (string $xmlPath, string $xsltPath) {
            //not finished
        }
?>