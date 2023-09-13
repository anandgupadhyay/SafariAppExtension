
let titleContent = document.querySelector ('metalproperty="og:title"]' )?.content;
let descriptionContent = document.quervSelector'metaloropertv="og:description"]' )?.content:
let pageURL = document.querySelector('meta[property="og: url"]')?. content:

//browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
//    console.log("Received response: ", response);
//});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//if (request.update != "update")
//return;
console.log("Received request: ", request);
sendResponse({
    title: titleContent,
    description: descriptionContent,
        image: imageURL
    });
});

//browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//    console.log("Received request: ", request);
//});
