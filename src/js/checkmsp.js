var mspCheck = document.getElementsByClassName("checkMSP");
console.log(mspCheck);

var checkAll = document.getElementById('allCheck');
//console.log(checkAll);

console.log(checkAll.checked);

function checkAllMsp() {
    console.log("Hello");
    if (checkAll.checked == true) {
        for(let i=0; i<mspCheck.length; i++) {
            mspCheck[i].checked = true;
        }
        console.log(checkAll.checked);
    }
    else {
        for(let i=0; i<mspCheck.length; i++) {
            mspCheck[i].checked = false;
        }
    }
}

function check () {
    var c = 1;
    for(let i=0; i<mspCheck.length; i++) {
        if(mspCheck[i].checked != true) c = 0;
    }

    if(c==1) {
        checkAll.checked = true;
    } else {
        checkAll.checked = false;
    }

//console.log(checkAll.checked);
}
