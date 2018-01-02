var score = [];

function caluclateMarks() {
    clearMessages("AllSuccess"); clearMessages("AllWarnings"); clearMessages('AllErrors'); 
    if(isValidScores()) {
        document.getElementById("total").innerHTML=""+ getTotal();
        document.getElementById("percent").innerHTML= ""+getPercentage(getTotal());
        document.getElementById("result").innerHTML= isFailed() ? 'Fail' : 'Pass';
        
        if(isFailed()) {
            setMessage('warning'," We are sad for your Result Failed !! All the best again");
        } else setMessage('success'," Yeahh  huuuuuuu ..  you are passed with "+getPercentage()+ " percentage");
        score = [];
    } else {
        setMessage('error'," Please provide all thee values and Re-Submit");
    }
}


function setMessage(messageType, message) {
    if(messageType == 'error') {
        clearMessages("AllSuccess"); clearMessages("AllWarnings");
        document.getElementById("AllErrors").innerHTML+="<li style='color:red'>"+message+"</li>";
    }
    else if(messageType == 'warning') { clearMessages("AllSuccess");
        document.getElementById("AllWarnings").innerHTML+="<li style='color:grey'>"+message+"</li>";
    }
    else { 
        clearMessages('AllErrors');  clearMessages("AllWarnings");
        document.getElementById("AllSuccess").innerHTML+="<li style='color:blue'>"+message+"</li>";
    }
}

function clearMessages(field) {
    document.getElementById(field).innerHTML="";
}

function getTotal() {
    var total = 0;
    score.map(function(item) {
        total += parseInt(item);        
    }); 
    return total;
}

function getPercentage(total) {
    return (total / 600 )*100;
}

function isFailed() {
    var failed = false;
    score.map(function(item) {
        if(parseInt(item) < 35) {
            failed = true;
        }
    })

    return failed;
}

function isValidScores() {
    var isValied = true;
    for(var i =1; i<=6; i++) {
        if(isNaN(document.getElementById('sub'+i).value)) {
            setMessage('error',"Subject number "+i+" should be number not a charecter.");
            isValied = false;
        } else if(document.getElementById('sub'+i).value == null || document.getElementById('sub'+i).value == '' ) {
            setMessage('warning',"Please provide marks for  Subject "+i);
            isValied = false;
        } else {
            score.push(document.getElementById('sub'+i).value);
           // isValied = true;
        }
    }

    return isValied;

}