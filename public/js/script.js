function say(){
    let rr = document.querySelector('.toast');
        if(rr){
            document.body.removeChild(document.querySelector('.toast'));
        }
        setTimeout(()=>{
            say();
        }, 5000);
}

window.addEventListener('load', say);