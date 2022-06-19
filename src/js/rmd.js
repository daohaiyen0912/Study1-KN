   //console.log(document.getElementById("rmdDropdown"));
        //button rmd
var btnRMD = document.getElementsByClassName("btn-rmd");
//console.log(btnRMD);
    
//td chứa button rmd
var rmdBTN = document.getElementsByClassName("r-m-d");
for(let i=0; i<rmdBTN.length; i++) {
    //tạo dropdown rmd
    var newDiv = document.createElement("div");
    newDiv.className = "dropdown-content-rmd";
    newDiv.id = "div-" + rmdBTN[i].id;
    console.log(newDiv.id);
    
    //thêm các dropmenu item
    dropMenuItem(newDiv);
    
    rmdBTN[i].appendChild(newDiv);
    //console.log(rmdBTN[i]);
}

//tạo dropMenuItem nhỏ
function dropMenuItem(newDiv) {
    for(let i=0; i<3; i++) {
        var item = document.createElement("button");
        if(i==0) {
            item.innerText = "Xem";
        } else if(i==1) {
            item.innerText = "Sửa";
        } else {
            item.innerText = "Xóa";
        }
        newDiv.appendChild(item);
    }
}

//set onClick cho từng nút show RMD
for(let i=0; i<btnRMD.length; i++) {
    btnRMD[i].onclick = function() {
        showRMD(btnRMD[i], i);
    }
}
//show dropdown RMD
function showRMD(idbtn, i) {
    var str = idbtn.id.slice(4);
    console.log(str);
    console.log("div-rmd-" + str);
    document.getElementById("div-rmd-" + str).classList.toggle("show");
    var dropdowns = document.getElementsByClassName("dropdown-content-rmd");
    for(let j=0; j<btnRMD.length; j++) {
        if(i != j) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.btn-rmd')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-rmd");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}