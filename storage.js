
 var novel = [
   {
     title: "A Gal Who Looks Good in an Apron is Unfair!",
     sourceLink: "https://www.noveltime.ml/series/A-Gal-Who-Looks-Good-In-An-Apron-Is-Unfair.html"
   },
   {
     title: "Gimai Seikatsu",
     sourceLink: "https://www.noveltime.ml/series/Gimai-Seikatsu-Light-Novel.html"
   },
    {
      title:"The Tunnel to Summer, the Exit of Goodbyes", sourceLink:"https://www.noveltime.ml/series/The-Tunnel-To-Summer-The-Exit-Of-Goodbyes-Light-Novel-Epub.html"
    },
    {
      title:"She Professed Herself The Pupil Of The Wiseman", sourceLink:"https://www.noveltime.ml/series/She-Professed-Herself-The-Pupil-Of-The-Wiseman-Light-Novel.html"
    },
    {
          title:"Date This Super Cute Me!",
         sourceLink:"https://www.noveltime.ml/series/Date-This-Super-Cute-Me.html"
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

