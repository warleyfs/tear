<?php
    $dir = __DIR__ . "/data/";

    $files = array();

    if ($handle = opendir($dir)) {
        
        // while (false !== ($file = readdir($handle))) {
        //     if ($file == "." || $file == "..")
        //         continue;

        //     $files[filemtime($dir . $file)] = $file;
        // }
        
        // closedir($handle);

        // ksort($files);

	    // $reallyLastModified = end($files);
        // $content = file_get_contents($dir . $reallyLastModified);
        // $data = json_decode($content, true);

        // echo json_encode($data);
        
        while (false !== ($file = readdir($handle))) {
            if ($file == "." || $file == "..")
                continue;

            $content = file_get_contents($dir . $file);
            $data = json_decode($content, true);

            $files[] = $data;
        }
        
        echo json_encode($files);
        
    }else{
        echo "ERROR";
    }
?>
