let drop_down_nav = document.getElementsByClassName("drop-down-dog-nav");

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(object) {
  let dog_links = [];
  for (const name in object) {
    // console.log(`${name}: ${object[name]}`);
    let ele = document.createElement("a");
    let a_content = document.createTextNode(name);
    ele.appendChild(a_content);
    ele.href = object[name];
    let li = document.createElement("li");
    li.classList.add("dog-link");
    li.appendChild(ele);
    dog_links.push(li)
  }
  return dog_links;
};

function attachDogLinks() {
  let drop_down = document.getElementsByClassName("drop-down-dog-list");
  let dog_links = dogLinkCreator(dogs);
  dog_links.forEach(function(ele) {
    drop_down[0].appendChild(ele);
  });
};

function handleEnter() {
  let li = document.getElementsByClassName("dog-link");
  Array.from(li).forEach( function(ele) {
    ele.classList.toggle("show");
  })
 
  // console.log("dogs");
};

attachDogLinks();

drop_down_nav[0].addEventListener("mouseenter",  function(e) {
  handleEnter();
});

drop_down_nav[0].addEventListener("mouseleave", function (e) {
  handleLeave();
});

function handleLeave() {
  let li = document.getElementsByClassName("dog-link");
  Array.from(li).forEach(function (ele) {
    ele.classList.toggle("show");
  })

  // console.log("dogs");
};