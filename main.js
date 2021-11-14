const myfile = document.getElementById('folder');

//Al hacer click en el input borrar el arbol de carpetas y archivos


// Al cargar el input, devolver el path seleccionado
myfile.addEventListener('change', function (e) {
  dibujar(myfile.files);
  //limpiar el input
  myfile.value = '';

});

myfile.addEventListener('click', function () {
  //eliminar div "treeUl"
  const tree = document.getElementById('treeFiles');
  const ul = document.getElementById('treeUl');
  tree.removeChild(ul);
  
});


function dibujar(myfile) {

  // dibujar un arbol de carpetas y archivos
  const tree = document.getElementById('treeFiles');
  const ul = document.createElement('ul');
  ul.id = 'treeUl';
  
  for (let i = 0; i < myfile.length; i++) {
    const element = myfile[i];
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.innerHTML = element.name;
    li.appendChild(span);
    ul.appendChild(li);
    tree.appendChild(ul);

  }
}