const form = document.getElementById(`form`);
console.log(form)

const datosFormulario = [];

form.addEventListener("submit", e =>{
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
    datosFormulario.push(data);
    console.log(datosFormulario);
    form.reset()
})
for (let index = 0; index < datosFormulario.length; index++) {
    if(datosFormulario[index].vendedor == `juana`);
        
}