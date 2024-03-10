let imagecontainer=document.getElementById("photogallery");

//create an image and append it to dom tree
let imgelmet=document.createElement("img");
imgelmet.src="duck.png";
imagecontainer.appendChild(imgelmet)

//create a delete button and append it to dom tree
let deletebtn=document.createElement("button");
deletebtn.innerText="delete";
imagecontainer.appendChild(deletebtn);

//add event to delete btn
deletebtn.addEventListener("click",function(){
    imgelmet.remove();
    deletebtn.remove();
});

// set default values for img
imgelmet.width= '200';
imgelmet.height= '200';

//zooming
let zoominBtn=document.createElement("button");
let zoomoutBtn=document.createElement("button");
zoominBtn.innerText="Zoom in";
zoomoutBtn.innerText="Zoom out";
const scalefactor= 1.5;
zoominBtn.addEventListener("click",function(){
 imgelmet.width *= scalefactor;
 imgelmet.height *= scalefactor;
});
zoomoutBtn.addEventListener("click",function(){
imgelmet.width /= scalefactor;
imgelmet.height /= scalefactor;
});
imagecontainer.appendChild(zoominBtn);
imagecontainer.appendChild(zoomoutBtn);

let br=document.createElement("br");
imagecontainer.appendChild(br);
let br2=document.createElement("br");
imagecontainer.appendChild(br2);

//extra cridit
//Catch the image
let title=document.createElement("h2");
title.innerText="Catch the image: hover on the image and it will run from you!"
imagecontainer.appendChild(title);

let imgelmet2=document.createElement("img");
imgelmet2.src="smileface.jpg";
imagecontainer.appendChild(imgelmet2);
// set default values for img
imgelmet2.width= '100';
imgelmet2.height= '100';
imgelmet2.addEventListener("mouseover",function(){
    imgelmet2.style.marginRight=Math.floor(Math.random() * 400)+'px';
    imgelmet2.style.marginLeft=Math.floor(Math.random() * 400)+'px';
    imgelmet2.style.marginTop=Math.floor(Math.random() * 400)+'px';
    imgelmet2.style.marginBottom=Math.floor(Math.random() * 400)+'px';
})
