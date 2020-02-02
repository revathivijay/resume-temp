
var global_count = 0;

$(document).ready(function () {
    $('form').on('submit', function (event) {
        console.log('Entered submit')
        $.ajax({
            data: {
                filter_name: $('#filters').val(),
                job_post_name: $('#job_post').val(),
            },
            type: 'POST',
            url: '/temp'
        })
            .done(function (data) {
                $('#job_post_name').text(data.job_post).show();
                $('#filter_name').text(data.filter).show();
                var node = document.getElementById("skill_id");
                while (node.firstChild) {
                    node.removeChild(node.firstChild);
                }
                global_count = data.skills.length;
                for (var i = 0; i < data.skills.length; i++){
                    var btn_id = "btn_" + i;
                    var div_id = "div_" + i;
                    var a1 = "<div class='skill_item_subclass'><p class ='col-sm-8 skill_para' id=";
                    var a2 = "></p><button class = 'col-sm-1 cancel_btn' id=" + "btn_" + i + " onclick='cancel_clicked(this.id)'>x</button></div >";
                    //creating div element
                    var divv = document.createElement("div");
                    divv.className = 'card skill_item_class';
                    divv.id = div_id;
                    divv.innerHTML = a1 + i + a2;
                    //appending div element in a bigger div element
                    document.getElementById("skill_id").appendChild(divv);
                    
                    var text = document.createTextNode(data.skills[i]);
                    var para = document.getElementById(i);
                    console.log("para initialised");
                    para.appendChild(text);
                    console.log("para appended");
                }

                //to add skill
                var a3 = "<div class='skill_item_subclass'><input class ='col-sm-8 skill_para'type = 'text' id=";
                var a4 = " placeholder = 'Add Skills here'><button class = 'col-sm-1 add_btn' id='btn_add' onclick='add_skill()'>+</button></div >";
                //creating div element
                var divv_ = document.createElement("div");
                divv_.className = 'card add_skill_button';
                divv_.id = "add_div";
                divv_.innerHTML = a3 + "add_skill_input" + a4;
                //appending div element in a bigger div element
                document.getElementById("skill_id").appendChild(divv_);

            });
        event.preventDefault();
    });
});

function add_skill() {

    console.log("you want to add a skill");
    var text = document.getElementById("add_skill_input").value;

    i = global_count;
    var btn_id = "btn_" + i;
    var div_id = "div_" + i;
    var a1 = "<div class='skill_item_subclass'><p class ='col-sm-8 skill_para' id=";
    var a2 = "></p><button class = 'col-sm-1 cancel_btn' id=" + "btn_" + i + " onclick='cancel_clicked(this.id)'>x</button></div >";
    //creating div element
    var divv = document.createElement("div");
    divv.className = 'card skill_item_class';
    divv.id = div_id;
    divv.innerHTML = a1 + i + a2;
    //appending div element in a bigger div element
    var add_btn = document.getElementById("add_div");
    document.getElementById("skill_id").insertBefore(divv, add_btn);

    var text = document.createTextNode(text);
    var para = document.getElementById(i);
    console.log("para initialised");
    para.appendChild(text);
    console.log("para appended");
    document.getElementById('add_skill_input').value = "";
    global_count++;

}

function cancel_clicked(id) {
    console.log(id+"wda");
    
    var id_no = id.substring(id.length - 1, id.length);
    console.log("div_" + id_no);
    
    var to_remove = document.getElementById("div_" + id_no);
    to_remove.parentNode.removeChild(to_remove);
}
