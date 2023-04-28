const form = document.querySelector('form');
let wrap = document.querySelector('.wrapper');
let taskList = document.querySelector('.tasks');
let md = document.querySelector('.mode');
let imgM = document.querySelector('bg');
let body = document.querySelector('.dark'); 
let theme = md.querySelector('.ident');

form.addEventListener('submit', function(event) 
{
        event.preventDefault();
        const userInput = document.querySelector('#new-todo');
        
        let msg = document.querySelector('.msg');
        if(userInput.value == '')
        {
                msg.classList.add('error');
                msg.innerHTML = 'Please Fill all the Fields!';
                setTimeout(()=> {
                        msg.classList.remove('error');
                        msg.innerHTML = '';
                }, 1000);
        }
        else
        {
                let templi = document.querySelector('.virtual');
                let p = document.querySelector('.v-det');
                p.innerHTML = `${userInput.value}`;
                let li = templi.cloneNode('deep', true);
                li.classList.add('org');
                p.classList.remove('v-det');
                li.classList.remove('virtual');
                taskList.appendChild(li);
                let box = li.querySelector('.check-box');
                box.addEventListener("click", ()=> {
                        const opened = box.getAttribute('aria-expanded');
                                if(opened ==='false'){
                                        box.setAttribute('aria-expanded', 'true');
                                        let text = box.parentNode.querySelector('.li-tasks');
                                        text.style.textDecoration = 'line-through';
                                        text.style.opacity = '70%';
                                        setTimeout(()=> {
                                                let parent = box.parentNode;
                                                parent.remove();
                                        }, 3000);
                                        box.parentElement.setAttribute('aria-expanded', 'true');
                                }
                                else{
                                        box.setAttribute('aria-expanded', 'false');
                                        text.style.textDecoration = 'none';
                                        text.style.opacity = '100%';
                                }
                                        });
                let cross = li.querySelector('.cross-s');
                cross.addEventListener("click", ()=> {
                       let parent = cross.parentNode.parentNode;
                        parent.remove();
                                        });
                p.classList.add('v-det');
                userInput.value = '';
        }
});
md.addEventListener('click', ()=>{
        let state = md.getAttribute('aria-expanded');
        let img = document.querySelector('.bg-i');
        if(state === 'false'){
        theme.setAttribute('d','M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z');
        md.setAttribute('aria-expanded', 'true');
        img.setAttribute('src', './images/bg-desktop-light.jpg');
        body.classList.add('light');
        }
        else{
        theme.setAttribute('d','M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z');
        md.setAttribute('aria-expanded', 'false');
        img.setAttribute('src', './images/bg-desktop-dark.jpg');
        body.classList.remove('light');
        }
})

new Sortable(taskList,{
        animation:300
})
