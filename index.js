let projects = [ {
                    intro: "project name",
                    date: "May 21, 2021",
                    image:"hhtp//www.altcampus.com",
                    para: "about the project",
                 },{
                  name: "project name",
                  date: "May 21, 2021",
                  img:"hhtp//www.altcampus.com",
                  para: "about the project",
                 },{
                  name: "project name",
                  date: "May 21, 2021",
                  image:"hhtp//www.altcampus.com",
                  para: "about the project",
                 },{
                  name: "project name",
                  date: "May 21, 2021",
                  image:"hhtp//www.altcampus.com",
                  para: "about the project",
                 }];



let ul = document.querySelector(`.project-bio`);


/*projects.forEach((ele) =>{

  let li = document.querySelector(`.project-box`);

  let h3 = document.querySelector(`h3`);

  h3.innertext = ele.name;

  let p = document.querySelector(`p`);

  p.innerText = ele.date;

  let image = document.querySelector(`img`);

  image.innerText = ele.img

  li.append(h3 , p ,image);

  console.log(li);

   ul.append(li);

}) */

projects.forEach((ele) => {
  
   let newHtml = `<li class = "project-box">
  <h3>`${ele.intro}`</h3>
  <p>May 21, 2021</p>
  <img  src="#" alt="#">
  <p>text about the project</p>
  
</li>`


})