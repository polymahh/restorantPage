function createItem (src,name,price){
    
    const body = document.createElement('div');
    body.classList.add('row','centerRow');

    const img = document.createElement('img');
    img.setAttribute('src',src);
    img.classList.add('u-max-full-width')

    const title = document.createElement('h3');
    title.innerText = name

    const pricetxt = document.createElement('span')
    pricetxt.innerText = `Price:${price}`

    const seperator = document.createElement('hr')


    body.append(img,title,pricetxt,seperator)
    return body;

}


let items =[
    createItem('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    'Salad',
    '5.00$'),
    createItem('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
    'Pizza',
    '8.00$'),
    createItem('https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
    'French Toast',
    '5.00$'),
    createItem('https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
    'French Toast',
    '5.00$'),
]

function createMenu () {
const main = document.getElementById('main');
items.forEach(item => main.appendChild(item))

}

export default createMenu;