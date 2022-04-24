function createWebsite () {

    const main = document.getElementById('content');

    const titleRow  = document.createElement('div');
    const buttonRow  = document.createElement('div');
    const mainRow  = document.createElement('div');

    titleRow.classList.add('row','centerRow');
    buttonRow.classList.add('row','centerRow');
    mainRow.classList.add('row');
    mainRow.setAttribute('id','main')

    const title = document.createElement('div');
    title.classList.add("twelve","columns");
    title.innerHTML = '<h1> <strong>Fancy Food</strong></h1><hr>';
    titleRow.appendChild(title);

    const homeButton = document.createElement('div');
    homeButton.classList.add('one-half','column');
    homeButton.innerHTML = '<button id="home" class="button-primary">Home</button><hr>';
    buttonRow.appendChild(homeButton);

    const menuButton = document.createElement('div');
    menuButton.classList.add('one-half','column');
    menuButton.innerHTML = '<button id="menu" class="button-primary">Menu</button><hr>';
    buttonRow.appendChild(menuButton);


    main.append(titleRow,buttonRow,mainRow)

}

export default createWebsite;