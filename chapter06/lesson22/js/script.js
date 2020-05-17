$(function() {
    $(".alert").hide();

    $("#submitBtn").click(function(){
        var sendFlag = true;

        if(!$("#text").val()){
            $("#textSection .alert").show()
            sendFlag = false;
        }else{
            $("#textSection .alert").hide()
        }

        // ラジオボタンのチェック
        var radioChk = $('input[name="radio"]:checked').length;
        if(radioChk == 0){
            $("#radioSection .alert").show()
            sendFlag = false;
        }else{
            $("#radioSection .alert").hide()
        }
        
        // チェックボックスのチェック
        var chkboxChk = $('input[name="checkbox"]:checked').length;
        // console.log(chkboxChk);
        if(chkboxChk < 3){
            $("#checkboxSection .alert").show()
            sendFlag = false;
        }else{
            $("#checkboxSection .alert").hide()
        }
    
        // セレクトボックスのチェック
        if($("select").val() == "none"){
            $("#selectSection .alert").show()
            sendFlag = false;
        }else{
            $("#selectSection .alert").hide()
        }

        // テキストエリアのチェック
        if(!$("#textarea").val()){
            $("#textareaSection .alert").show()
            sendFlag = false;
        }else{
            $("#textareaSection .alert").hide()
        }

        if(sendFlag == false){
            return false;
        }
    });
});
