<%--
  Created by IntelliJ IDEA.
  User: ChiZhou
  Date: 2019/10/24
  Time: 11:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<%--<script src="../js/jquery-1.8.2.min.js"></script>--%>

<html>

<head>
    <title>Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<SCRIPT>

    function main(){
    document.formMain.action="/views/index";
    document.formMain.submit();
    }
    function butSubmit(flag) {
        if(flag=='img'){
            var imgSrc = $("#imgObj");
            console.log(imgSrc);
            var src = imgSrc.attr("src");
            console.log(chgUrl(src));
            imgSrc.attr("src", chgUrl(src));
        }
        if(flag=='sub'){
            // document.formLogin.action="/views/login";
            // document.formLogin.submit();
            var vUsername=document.getElementById("Username").value;
           var  vPassword=document.getElementById("Password").value;
            var vcode=document.getElementById("code").value;
            console.log(vcode+vUsername);
            jQuery.ajax({
                method: "post",
                url: "/views/login",
                async: false,
                dataType: "text",
                data: {
                    Username: vUsername,
                    Password: vPassword,
                    code: vcode
                },
                success: function (res) {
                    console.log("res:"+res);
                    if(res=="success"){
                        alert("登录成功");
                        document.fromMain.action="/views/main";
                        document.fromMain.submit();
                    }else{
                        alert("登录失败");
                    }


                }, error: function (err) { //
                    console.log("err:"+err);
                    alert("登录失败");
                }
            });
        }
        if(flag=='ret'){
            document.getElementById("Username").value="";
            document.getElementById("Password").value="";
            document.getElementById("code").value="";
        }
    }


       // 时间戳
       // 为了使每次生成图片不一致，即不让浏览器读缓存，所以需要加上时间戳
        function chgUrl(url) {
               var timestamp = (new Date()).valueOf();
               // url = url.substring(0, 20);
               if ((url.indexOf("&") >= 0)) {
                        url = url + "×tamp=" + timestamp;
               } else {
                       url = url + "?timestamp=" + timestamp;
               }
                return url;
            }
</SCRIPT>
<body>
<form name="fromMain" id="fromMain" action="" method="post">

</form>
<div class="container">
    <div class="jumbotron">
        <h1>Login</h1>
    </div>
    <div class="row">
        <div class="col-sm-2">
            <p> </p>
        </div>
        <div class="col-sm-8">
            <div style="padding: 100px 100px 10px;">
                <form id="formLogin"  name="formLogin" action="" method="post">
                    <div class="input-group">
                        <span class="input-group-addon">Username</span>
                        <input type="text" class="form-control" name="Username" id="Username" style="width: 200px " >
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">Password</span>
                        <input type="text" class="form-control" name="Password" id="Password" style="width: 200px "  >

                    </div>
                    <br>
                    <div class="input-group">
                        <table>
                            <tr>
                                <td>
                                    <img id="imgObj" alt="验证码" src="/views/getCode" style="height: 30px " >
                                    <img id="butImg" src="../image/32Reset.png" onclick="butSubmit('img')">
                                    <input type="text"   style="width: 90px "  name="code" id="code" >
                                </td>
                            </tr>
                        </table>

                    </div>
                    <br>
                    <button type="button" class="btn btn-primary" style="height: 50px;width: 100px " onclick="butSubmit('sub')">Submit</button>&nbsp;&nbsp;
                    <button type="button" class="btn btn-primary" style="height: 50px;width: 100px "  onclick="butSubmit('ret')">Reset</button>
                </form>
            </div>

        </div>
        <div class="col-sm-2">
        </div>
    </div>
</div>
<div>
<form name="formMain" id="formMain" action="" method="post">
    <div class="container">
        <button type="button" class="btn btn-primary" style="height: 50px;width: 100px "  onclick="main()">Back</button>
 </div>
</form>
</div>

</body>
</html>
