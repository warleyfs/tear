<?php
    $dir = __DIR__ . "/data/";

    $all_data = [];

    if ($handle = opendir($dir)) {
        while ($entry = readdir($handle)) {
            if ($entry == ".")
                continue;
            if ($entry == "..")
                continue;
            $content = file_get_contents($dir . $entry);
            $data = json_decode($content, true);
            array_push($all_data, $data);
        }
        closedir($handle);
        echo json_encode($all_data);
    }
?>
