<?php
    require_once "config.php";
#needed to add local host to "Valid OAuth redirect URIs" in order for authentication to work.

    $redirectURL = "http://localhost:63342/MovieWebsite/login.php/fb-callback.php";
    #may be useful to change permissions to include birthdays, posts, or things that can help us recommend movies
    $permissions = ['email'];
    $loginURL = $helper -> getLoginUrl($redirectURL, $permissions);
?>


<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content= width=device- width initial-scale=1.0 maximum-scale=1.0 user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge",chrome=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="main.css">
    <title>Log In</title>
</head>


<body>

    <div class="container">
        <!--GETTING RID OF THE COL and OFFSET WORKS WONDERS-->
        <div class="col-md-6 col-md-offset-3" align="center">
            <h1>Movies4Dayz</h1>
            <img src=""><br><br>

            <form>

                <input  name="email" placeholder="Email" class="form-control"><br>
                <input  name="email" type="password" placeholder="Password" class="form-control"><br>
                <input type="submit" value="Log In" class="btn btn-primary">
                <input type="button" onclick="window.location =  '<?php echo $loginURL?>'"' value="Log In with Facebook" class="btn btn-primary">

            </form>

        </div>
    </div>


</body>
</html>