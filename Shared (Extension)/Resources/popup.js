//console.log("Hello World!", browser);

let titleElement = document.getElementById('title') ;
let descriptionElement = document.getElementById ('description') ;
let imageElement = document.getElementById('image')


let tabs = await browser.tabs.query({active: true, currentWindow: true});
let response = await browser.tabs.sendMessage(tabs[0].id, {update:"update"});
//console.log("url:", browser.tabs.url);
titleElement.textContent = response?.title:
descriptionElement.textContent = browser.tabs.url://response?.description:
imageElement.src = response?. image;
