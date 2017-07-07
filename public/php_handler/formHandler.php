<?php

    $_POST = json_decode(file_get_contents('php://input'), true); 
    
    
    if(isset($_POST['type'])){
        $link = mysqli_connect("localhost", "root", "", "test");
        mysqli_set_charset($link, "utf8");
         
        // getData
        if ($_POST['type'] === 'getData') {
         
            $res = []; // ответ

            //выборка юзеров
            $userQuery = $link->query(' SELECT * FROM `user`');
            $users = [];
            if ($userQuery) {
                for($i = 0; $i < mysqli_num_rows($userQuery); $i++){
                    $row = mysqli_fetch_assoc($userQuery);
                    $users[$i] = $row;
                }
            }

            //выборка количеств
            $quantityQuery = $link->query(' SELECT * FROM `quantity` ');
            $quantity = [];
            if ($quantityQuery) {
                for($i = 0; $i < mysqli_num_rows($quantityQuery); $i++){
                    $row = mysqli_fetch_assoc($quantityQuery);
                    $quantity[$i] = $row;
                }
            }

            //выборка типов количеств
            $quantityTypesQuery = $link->query(' SELECT * FROM `quantityTypes` ');
            $quantityTypes = [];
            if ($quantityTypesQuery) {
                for($i = 0; $i < mysqli_num_rows($quantityTypesQuery); $i++){
                    $row = mysqli_fetch_assoc($quantityTypesQuery);
                    $quantityTypes[$i] = $row['label'];
                }
            }

            //выборка языков
            $langTypesQuery = $link->query(' SELECT * FROM `langType` ');
            $langTypes = [];
            if ($langTypesQuery) {
                for($i = 0; $i < mysqli_num_rows($langTypesQuery); $i++){
                    $row = mysqli_fetch_assoc($langTypesQuery);
                    $langTypes[$i] = $row['lang'];
                }
            }

            //выборка типов статуса
            $statusTypesQuery = $link->query(' SELECT * FROM `langType` ');
            $statusTypes = [];
            if ($statusTypesQuery) {
                for($i = 0; $i < mysqli_num_rows($statusTypesQuery); $i++){
                    $row = mysqli_fetch_assoc($statusTypesQuery);
                    $statusTypes[$i] = $row['lang'];
                }
            }

            $res = [
                'users'    => $users,
                'quantity' => $quantity,
                'quantityTypes' => $quantityTypes,
                'langTypes' => $langTypes,
                'statusTypes' => $statusTypes
            ];

            echo json_encode($res);
        }
        // getData




        //изменение юзера
        else if ($_POST['type'] === 'updateUser'){

        }
        //удаление юзера
        else if ($_POST['type'] === 'deleteUser'){ 
            $id = $_POST['data'];
            $link->query("  DELETE FROM `user` WHERE `id` = $id ");
            $link->query("  DELETE FROM `quantity` WHERE `user_id` = $id ");
            echo json_encode('correct');
        }

        // создание / обновление юзера
        else if ($_POST['type'] === 'createUser'){
            $first_name = $_POST['data']['first-name'];
            $last_name = $_POST['data']['last-name'] ;
            $birthdate = $_POST['data']['birthdate'];
            $status = $_POST['data']['marital_status'];
            $description = $_POST['data']['description'];
            $lang = $_POST['data']['lang'];


            if (isset( $_POST['id']) && $_POST['id'] != '' ) {  // выборка юзера по id - если есть, значит обновить данные
                $user_id = $_POST['id'];
            
                $testExistingUser = $link->query("SELECT `id` FROM `user` WHERE `id` = $user_id"); 

                if ($testExistingUser) {
                     $link->query(" UPDATE `user` SET 
                        `first_name` = '$first_name',
                        `last_name`= '$last_name',
                        `birthdate`= '$birthdate',
                        `status`= '$status',
                        `description`= '$description',
                        `lang`= '$lang' WHERE `id` = '$user_id'
                    ");
                    
                    $link->query(" DELETE FROM `quantity` WHERE `user_id` = '$user_id' "); // удалить все quantity по user_id 

                     if (isset($_POST['data']['quantity']) && count($_POST['data']['quantity']) > 0 ) { 
                       
                        for ($i=0; $i < count($_POST['data']['quantity']); $i++) { 
                            $quantity_item = $_POST['data']['quantity'][$i];
                            $link->query(" INSERT INTO `quantity` ( `label`, `user_id` ) VALUES ( '$quantity_item', '$user_id' ) ");
                        }
                     }
                     
                    echo json_encode('correct');

                }
            }
            else { // если нету, то внести данные

                $link->query("  
                        INSERT INTO `user`( `first_name`, `last_name`, `birthdate`, `status`, `description`, `lang`) 
                        VALUES ( '$first_name', '$last_name', '$birthdate', '$status', '$description', '$lang');
                    ");

                $new_user_id = $link->query("SELECT `id` FROM `user` ORDER BY `id` DESC LIMIT 1"); // юзер с наибольшим id, предполагаю, что это юзер от стоящего выше SQL запроса 
                $new_user_id = mysqli_fetch_assoc($new_user_id);
                $new_user_id = $new_user_id['id'];
                if (isset($_POST['data']['quantity'])) {
                    $quantity = $_POST['data']['quantity'];
                    for ($i=0; $i < count($quantity); $i++) {
                        $quantity_item = $quantity[$i];
                        $link->query("  INSERT INTO `quantity` ( `label`, `user_id` ) VALUES ( '$quantity_item', '$new_user_id' ); ");
                    }
                }
                echo json_encode('correct');
            }
        }

        // echo 'data';
        // }
        else {
            echo json_encode('no data');
        // echo 'no data';

        }
    }

   
?>