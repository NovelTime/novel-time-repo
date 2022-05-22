
  let novel = [
    {
      title:"She Professed Herself The Pupil Of The Wiseman", sourceLink:"She-Professed-Herself-The-Pupil-Of-The-Wiseman-Light-Novel.html"
    },
    {
          title:"Date This Super Cute Me!",
         sourceLink:"Date-This-Super-Cute-Me.html"
    }
];

var ul = document.getElementById("list");
for(var x in novel){
  var li = document.createElement("li");
  li.classList.add("list-group-item");
  var a = document.createElement("a");
  a.setAttribute("href","");
  
  a.innerHTML = novel[x].title;
  a.href = novel[x].sourceLink;
  
  li.appendChild(a);
  ul.appendChild(li);
}

