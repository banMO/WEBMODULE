// JS goes here
function populateHeader () {
       // Create a text node
    var headerText = document.createElement("span");
    var headerText1 = document.createElement("span");
    var headerText2 = document.createElement("span");
    headerText.append("The ");
    headerText1.append("BORING ");
    headerText2.append("company");
    headerText.style.color = "red";
    headerText1.style.color = "yellow";
    headerText2.style.color = "green";
    document.querySelector("header").appendChild(headerText);
    document.querySelector("header").appendChild(headerText1);
    document.querySelector("header").appendChild(headerText2);
}

function addArticle () {
    var section = document.getElementById("page-articles");
    var article = document.createElement("article");
    var h3 = document.createElement("h3");
    var par = document.createElement("p");
    h3.append("title");
    par.append("Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est nemo maiores labore deleniti accusamus iste eos, voluptate placeat, amet consequatur quae laudantium ducimus recusandae ullam. Lax")
    article.append(h3);
    article.append(par);
    section.appendChild(article);
}

function toogleFooter () {
    var footer = document.querySelector("footer");
    if (footer.style.display !== "none")
    {
        footer.style.display = "none";
    }  
    else {
        footer.style.display = "inline";
    } 
}

function colorleFooter () {
    var footer = document.querySelector("footer");
    var color1 = Math.floor(Math.random()* 256);
    var color2 = Math.floor(Math.random()* 256);
    var color3 = Math.floor(Math.random()* 256);
    var rgb = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
    footer.style.backgroundColor = rgb;
}

document.getElementById("populateBtn").addEventListener("click", populateHeader);
document.getElementById("addArticleBtn").addEventListener("click", addArticle);
document.getElementById("toogleFooterBtn").addEventListener("click", toogleFooter);
document.getElementById("colorFooterBtn").addEventListener("click", colorleFooter);


