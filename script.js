let div = document.createElement('div');
document.body.appendChild(div);

let myFirstPromise = new Promise(function(resolve, reject){
    
    getapi =()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(respons => respons.json())
    .then(myvalue => display(myvalue))
    .catch((error)=>{
        console.log('Error:', error)
    });
    };

    resolve("it works!");
    reject("Error");
});

myFirstPromise.then(onresolve =>{
   console.log(onresolve);
}, onreject =>{
    console.log(onreject);
});

display = (content) => {

    div.innerText='random dog images';

    let bodypage = document.body;
    bodypage.style.display = 'flex';
    bodypage.style.flexDirection = 'column';
    bodypage.style.alignItems = 'center';
    bodypage.style.justifyContent = 'center';
    // bodypage.style.margin = '1rem';
    // bodypage.style.padding = '1rem';

    // let link = document.createElement('a');
    // document.body.appendChild(link);
    // link.appendChild(btn);
    // link.href = content;

    let img = document.createElement('img');
    document.body.appendChild(img);
    img.src = content.message;
    img.style.width ='100px';
    img.style.height ='100px';
    img.style.margin ='1rem';
    img.style.borderRadius ='1rem';
    // div.innerHTML = JSON.stringify(content.message);

    let btn = document.createElement('button');
    document.body.appendChild(btn);
    btn.innerText = 'Next Image';
    btn.style.backgroundColor = 'green';
    btn.style.color = 'white';
    btn.style.border = 0;
    btn.style.borderRadius = '2rem';
    btn.addEventListener("click", function(){
        if('click'){
            window.location.reload();
        };
    });
};
getapi();