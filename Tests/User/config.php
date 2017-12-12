<?php
    session_start();
    require_once "src/Facebook/autoload.php";

#Facebook.php requires these 3 parameters
#Found on developers site
    $FB = new \Facebook\Facebook([
      'app_id' => '104704363640121',
      'app_secret' => 'c2d69464babef013ac1df110f4a71832',
      'default_graph_version' => 'v2.11'
    ]);

    $helper = $FB -> getRedirectLoginHelper();
?>

