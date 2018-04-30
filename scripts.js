var todolist = new Array();




function submitPost () {
    var id = todolist.length;
    var titre = document.getElementById("title").value;
    var objet = document.getElementById("content").value;

    todolist[todolist.length] = new post(id, titre ,objet);

    console.log(todolist); 

    document.getElementById("todolist").innerHTML += 
    "<button onclick=\"changetask(" + id + ")\" type=\"button\"> changer </button>"
    + "<p id=" + "cell" + id 
    + ">" + titre + "  //  " +
    + objet 
    + "<button onclick=\"deletetask(" + id + ")\" type=\"button\"> effacer </button></p>";
}

function post (id, titre, objet) {

    this.id = id;
    this.titre = titre;
    this.objet = objet;
}

function deletetask (id) {

    document.getElementById("cell" + id).innerHTML = "";


    console.log("cell " + id + " got deleted" );
}

function changetask(id) {

    document.getElementById("cell" + id).innerHTML = "";


    console.log("cell " + id + " got status changed" );
}