let tabuada = document.querySelector('#tabuada');

let valorA = parseInt(document.querySelector('#input-numero').value);

document.querySelector('#btn-calc').addEventListener('click', event=>{
    let template = '';
    for(let valorB = 0; valorB <=10; valorB++){
        
        template = `
            <tr>
                <td>${(valorA)}</td>
                <td>X</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${valorA*valorB}</td>
            </tr>
        `;

    tabuada.innerHTML += template
        
    }//for valor b



})


    
