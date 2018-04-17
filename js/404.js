/**
 * Created by web-01 on 2018/3/22.
 */
(()=>{
    let i=0.5;
    let j=1;
    let k=2;
    setInterval(function () {
        if(i>=1){
            i=0.5;
        }else{
            i++;
        }
        if(j>=10){
            j=1;
        }else{
            j++;
        }
        if(k>=10){
            k=2;
        }else{
            k++;
        }
        $("h2").css({"opacity":i,"text-shadow": j+"px" +j+"px" +k+"px" +"#ff0000"})
    },500);

    let time=setInterval(function () {
        var ti="";
       ti=$("span").html();

       if(ti>0){
           ti--;
           $("span").html(ti);
       }else{
           location.href=history.go(-1);
           clearInterval(time);

       }
    },1000)


    })();

