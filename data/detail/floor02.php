<?php
  
   require("init.php");
   
   $sql="select * from queen_floor02 ";
   $result=mysqli_query($conn,$sql);
   $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
   echo json_encode($rows);
 


?>