var tableTT = document.getElementsByClassName('table-trang-thai');
console.log(tableTT);

const data = [
    {
    masp: "001",
    tensp: "Sản phẩm A",
    trangthai: 1
    },
    {
    masp: "0012",
    tensp: "Sản phẩm A1",
    trangthai: 0
    },
    {
    masp: "0013",
    tensp: "Sản phẩm A2",
    trangthai: 1
    },
    {
    masp: "0014",
    tensp: "Sản phẩm A2",
    trangthai: 1
    },
    {
    masp: "0015",
    tensp: "Sản phẩm A2",
    trangthai: 1
    },
    {
    masp: "0016",
    tensp: "Sản phẩm A2",
    trangthai: 1
    },
    {
    masp: "0017",
    tensp: "Sản phẩm A2",
    trangthai: 0
    },
    {
    masp: "0018",
    tensp: "Sản phẩm A2",
    trangthai: 1
    }
];

const titleTB = [
    "Mã sản phẩm",
    "Tên sản phẩm",
    "Trạng thái",
    null
]

//tạo table trạng thái
var table = document.createElement("table");
//console.log(table);
var thead = document.createElement("thead");
//console.log(thead);
var trhead = document.createElement("tr");

//tạo các cột title
for(let i=0; i<4; i++) {
    var newTh = document.createElement("th");
    newTh.innerHTML = titleTB[i];
    trhead.appendChild(newTh);
}
//console.log(trhead);

//phần dữ liệu tbody
var tbody = document.createElement("tbody");
for(let i=0; i<data.length; i++) {
    var tr = document.createElement("tr");
    for(let j=0; j<4; j++) {
        var td = document.createElement("td");
        if(j == 0) {
            td.innerHTML = data[i].masp;
        } else if(j == 1) {
            td.innerHTML = data[i].tensp;
        } else if(j == 2){
            if(data[i].trangthai) {
                td.innerHTML = "<i class=\"fa-solid fa-circle\"></i> Đang hoạt động";
                td.className = "td-active";
            } else {
                td.innerHTML = "<i class=\"fa-solid fa-circle\"></i> Dừng hoạt động";
                td.className = "td-no-active";
            }
        } else {
            var button = document.createElement("button");
            button.className = "btn-rmd";
            button.id = "btn-" + data[i].masp;
            //console.log(button);

            button.innerHTML = "<i class=\"fa-solid fa-ellipsis-vertical\"></i>";

            console.log(button);

            td.appendChild(button);

            td.className = "r-m-d";
            td.id = "rmd-" + data[i].masp;
            console.log(td);
        }
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

var tfoot = document.createElement("tfoot");


//hoàn thiện bảng
thead.appendChild(trhead);
table.appendChild(thead);
table.appendChild(tbody);

tableTT[0].appendChild(table);
console.log(tableTT[0]);

