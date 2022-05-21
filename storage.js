
  let novel = [
  
    {
          title:"I Got a New Skill Every Time I Was Exiled, and After 100 Different Worlds, I Was Unmatched (WN)",
         sourceLink:"I-Got-a-New-Skill-Every-Time-I-Was-Exiled-and-After-Different-Worlds-I-Was-Unmatched.html"
    },
    {
          title:"Date This Super Cute Me!",
         sourceLink:"Date-This-Super-Cute-Me.html"
    },
    {
       title:"86",
    sourceLink:"eighty_six_light_novel.html"
     },
    { title:"Classroom Of The Elite",sourceLink:"classroom-of-the-elite.html" }, { title:"The Angel Next Door Spoils Me Rotten",sourceLink:"otonari-no-tenshi-sama-ni-itsu-no-ma-ni-ka-dame-ningen-ni-sareteita-ken-ln.html" },
    {
      title:"Full Clearing Another World under a Goddess with Zero Believers [LN]",sourceLink:"full-clearing-another-world-under-a-goddess-with-zero-believers-light-novel.html"
    }, 
    { title:"Chitose-kun wa Ramune Bin no Naka",sourceLink:"Chitose-kun-wa-Ramune-Bin-no-Naka.html" }, 
    { title:"Clearing an Isekai with the Zero-Believers Goddess – The Weakest Mage among the Classmates (WN)",sourceLink:"clearing-an-isekai-with-the-zero-believers-goddess-the-weakest-mage-among-the-classmates.html" },
    { title:"Omiai Shitakunakattanode, Muri Nandai na Jouken wo Tsuketara Doukyuusei ga Kita Ken ni Tsuite",sourceLink:"omiai-shitakunakattanode-muri-nandai-na-jouken-wo-tsuketara-doukyuusei-ga-kita-ken-ni-tsuite.html" },
    {
      title:"I Quit the Going-Home Club for a Girl with a Venomous Tongue",sourceLink:"i-quit-the-going-home-club-for-a-girl-with-a-venomous-tongue.html"
     },
    {
      title:"I Became Friends with the Second Cutest Girl in My Class",sourceLink:"i-became-friends-with-the-second-cutest-girl-in-my-class-wn.html"
     },
  {
    title:"My Plain-looking Fiance is Secretly Sweet with Me",sourceLink:"my-plain-looking-fiance-is-secretly-sweet-with-me-light-novel.html"
  },
  {
    title:"The World of Otome Games is Tough For Mobs",sourceLink:"toughformobs.html"
  },
  {
    title:"After My First Love Who is My Classmate Became My Family, My Childhood Friend Became Really Sweet to Me",sourceLink:"After-My-First-Love-Who-is-My-Classmate-Became-My-Family-My-Childhood-Friend-Became-Really-Sweet-to-Me.html"
  },
  {
    title:"Takane No Hana",sourceLink:"Takane-No-Hana-LN.html"
  },
  {
    title:"A Gal Who Looks Good in an Apron is Unfair!",sourceLink:"A-Gal-Who-Looks-Good-in-an-Apron-is-Unfair.html"
  },
  {
    title:"Gimai Seikatsu",sourceLink:"gimai-seikatsu-light-novel.html"
  },
  {
    title:"That Time I Got Reincarnated as a Slime",sourceLink:"that-time-i-got-reincarnated-as-a-slime.html"
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

