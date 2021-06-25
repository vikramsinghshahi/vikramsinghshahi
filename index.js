/*let projects = [ {
                    intro: "Basic Calculator",
                    date: "June 21, 2021",
                    image: `assets/media/project.png`,
                    para: "Created basic function of a calculator with the help of javascript",
                 },
                 {
                  intro: "Flip box",
                  date: "June 20, 2021",
                  image: `assets/media/project.png`,
                  para: "Flip box UI ",
                 },
                 {
                  intro: "project intro",
                  date: "May 21, 2021",
                  para: "about the project",
                  image: `assets/media/project.png`,
                 },
                 {
                  intro: "project intro",
                  date: "May 21, 2021",
                  para: "about the project",
                  image: `assets/media/project.png`,
                 },
                 {
                  intro: "project intro",
                  date: "May 21, 2021",
                  para: "about the project",
                  image: `assets/media/project.png`,
                 },
                 {
                  intro: "project intro",
                  date: "May 21, 2021",
                  para: "about the project",
                  image: `assets/media/project.png`,
                 },
   
               ];



let ul = document.querySelector(`.project-list`);

console.log(ul)

function getElement(){

projects.forEach((ele) =>{

   let li = document.createElement(`li`);
  
   li.classList.add("flex-30");

   li.classList.add("margin");
   
   let h3 = document.createElement(`h3`);
 
   h3.innerText = ele.intro;
 
   let span = document.createElement(`span`);
 
   span.innerText = ele.date;

   let p = document.createElement(`p`);
 
   p.innerText = ele.para;
 
  let img = document.createElement(`img`);
 
  img.src = ele.image;
  img.alt = ele.intro;
  img.classList.add("width");
 
   li.append(h3 ,span, p , img);
 
 
 
 
    ul.append(li);
 
   
 
 }
 ) 
}
 
getElement();*/
 


