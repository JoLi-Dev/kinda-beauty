async function getData(){
    const response = await fetch ("http://makeup-api.herokuapp.com/api/v1/products.json")
    const products = await response.json();
    console.log(products);
    renderMakeupList(products.array)
}
function renderMakeupList(fullMakeupList) {
    fullMakeupList.forEach(products => {
        const ul = document.querySelector ('ul')
        const li = document.querySelector ('li')
        li.innerText = products.name
        ul.append(li)
    });
}
getData();
    
