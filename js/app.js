let slash = '\\';
let slashes = '';
let sepDiv = document.getElementsByClassName('separater');
console.log(sepDiv);
for(let i =0 ; i < 300 ; i++)
{
    slashes = slashes + slash ;
}

sepDiv[0].textContent = slashes ;
sepDiv[1].textContent = slashes ;