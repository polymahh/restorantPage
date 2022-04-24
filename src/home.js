function createHome (){
    const main = document.getElementById('main');
    const paragraph = document.createElement("div");
    paragraph.classList.add("twelve","columns")

    const text = document.createElement("p");
    text.innerHTML = 
    '<p><span><strong>ABOUT  :</strong></span> <br><br>Want some overpriced food stuffed down your throat by a bunch of overpolite waiters? Want to show your date how rich you really are? Dope Stuff is the place for you! Our prices are bad for your heart as well as your wallet.</p>';

    main.appendChild(paragraph)
    paragraph.appendChild(text)


}

export default createHome;