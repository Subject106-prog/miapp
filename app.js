const fomulario = document.querySelector('.form-create');
fomulario.addEventListener('submit',(e)=> {
    e.preventDefault();
    const descripcion = document.querySelector('#descripcion').value;
    const contenedor = document.querySelector('.publicaciones');
    contenedor.innerHTML += `<div class="publicacion">
            <p>id: 00</p>
            <p>Descripcion</p>
            <button>Editar</button>
            <button>Eliminar</button>
        </div>`;
});