
 var novel = [
   {
     title: "Bottom-Tier Character Tomozaki",
     sourceLink: "https://www.noveltime.ml/series/Bottom-Tier-Character-Tomozaki-Light-Novel.html"
   },
   {
     title: "The Undetectable Strongest Job: Rule Breaker",
     sourceLink: "https://www.noveltime.ml/series/Rule-Breaker-Web-Novel.html"
   },
   {
     title: "How Could You Like Another Girl When You Already Have A Cute Fiancée Like Me?",
     sourceLink: "https://www.noveltime.ml/series/How-Could-You-Like-Another-Girl-When-You-Already-Have-A-Cute-Fiancée-Like-Me-Light-Novel.html"
   },
   {
     title: "After I Lectured an Unfriendly Girl Who Doesn't Let Strangers Approach her, She Really Took a Liking to Me",
     sourceLink: "https://www.noveltime.ml/series/After-I-Lectured-An-Unfriendly-Girl-Light-Novel.html"
   },
   {
     title: "I Became Friends with the Second Cutest Girl in My Class",
     sourceLink: "https://www.noveltime.ml/series/I-Became-Friends-With-The-Second-Cutest-Girl-In-My-Class.html"
   },
   {
     title: "Aim the Deepest Part of the Different World Labyrinth",
     sourceLink: "https://www.noveltime.ml/series/Aim-The-Deepest-Part-Of-The-Different-World-Labyrinth-Light-Novel.html"
   },
   {
     title: "Wandering Witch: The Journey of Elaina",
     sourceLink: "https://www.noveltime.ml/series/Majo-No-Tabitabi-Light-Nov.html"
   },
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

