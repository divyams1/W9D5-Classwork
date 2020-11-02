
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    // debugger
    if (htmlElement.children) {
        Array.from(htmlElement.children).forEach( function(ele) {
            htmlElement.removeChild(ele);
        });
    }
    let element = document.createElement("p");
    let content = document.createTextNode(string);
    element.appendChild(content);
    htmlElement.appendChild(element);
};

htmlGenerator('Party Time.', partyHeader);

// module.exports = warmup;