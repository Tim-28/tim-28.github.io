const form = document.querySelector('#form');
const input = document.querySelector('#todo');
const ul = document.querySelector('#container');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const toDo = input.value;
    const newLi = document.createElement('li');
    const cb = document.createElement('input')
    cb.type = 'checkbox';
    cb.setAttribute('class','checkbox');
    newLi.append(cb);
    newLi.append(toDo);
    ul.append(newLi);
    input.value = '';
    delBtn = document.createElement('button');
        delBtn.setAttribute('content','test content');
        delBtn.setAttribute('class','dBtn');
        delBtn.textContent = 'Remove'
        newLi.append(delBtn);

    delBtn.addEventListener('click', function(){
        console.log('CLICKED');
        newLi.remove();
    })
}
);