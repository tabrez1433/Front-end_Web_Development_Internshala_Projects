// code for dynamic import
const Dynamic = async (id, filepath,cssPath) => {
    let res = await fetch(filepath);
    let html = await res.text();
    document.getElementById(id).innerHTML = html;

    if (cssPath) {
        // Create a link element for the CSS file
        let linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = cssPath;

        // Append the link element to the head of the document
        document.head.appendChild(linkElement);
    }
    //for display current year in footer
    document.getElementById('year').innerHTML = new Date().getFullYear();

};
