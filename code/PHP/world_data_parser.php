<?php
        function parseCSV (string $path) {
            $file = fopen($path, "r");
            $array = array();
            $innerArray = array();
            $firstLine = fgetcsv($file);
            foreach ($firstLine as $key => $value) {
                $firstLine[$key] = str_replace(" ", "_", $value);
            }
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

        function saveXML (array $array) {
            $xml = new SimpleXMLElement("<?xml version=\"1.0\" encoding=\"UTF-8\"?><Countries></Countries>");

            foreach ($array as $key1 => $value1) {
                $xmlChild = $xml -> addChild("Country");
                foreach ($value1 as $key2 => $value2) {
                    $xmlChild -> addChild("$key2", htmlspecialchars("$value2"));
                }
            }

            print($xml);

            $result = $xml -> asXML("world_data.xml");

            return $result;

            /*$file = fopen("world_data.xml", "w");
            $error = fwrite($file, $xml);
            if($error == false) {
                return true;
            } else {
                return false;
            } */
        }

        function printXML () {

        }
?>