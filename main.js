//variables that store a reference to header and section elements
let header = document.querySelector('header');
let section = document.querySelector('section');

//variable to store request URL
let requestURL = "https://haakmitchell.github.io/JSProject/deals.json";

//XHR object
let request = new XMLHttpRequest();

//open a new request
request.open('GET', requestURL);

//request to accept JSON
request.responseType = 'json';

//send the request
request.send();

//event handler that listens for onload event of the JSON file/object
request.onload = function() {
  let wDeals = request.response;
  console.log(wDeals);
  dealsWeird(wDeals);
}

//show the deals
function dealsWeird(jsonObj) {

  //bind deals object to a variables
  let weirdDeals = jsonObj.deal;

  for (let i = 0; i < weirdDeals.length; i++) {

    //create elements
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');

    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'https://haakmitchell.github.io/JSProject/images/' + weirdDeals[i].image);
    img.setAttribute('alt', weirdDeals[i].image );

    h2.textContent = weirdDeals[i].name;
    p1.textContent = 'Price: $' + weirdDeals[i].price;
    p2.textContent = 'Description: ' + weirdDeals[i].description;

    let features = weirdDeals[i].features;
    for(let j = 0; j < features.length; j++ ) {
      let listItem = document.createElement('li');
      listItem.textContent = features[j];
      list.appendChild(listItem);
    }

    // Append each element to article, then append article to section

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(list);
    section.appendChild(article);

  }

}
