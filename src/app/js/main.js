let menu = document.getElementById('menu');
let conteudo = document.getElementById('conteudo');
let ativo = false;


function abrirMenu(){
    if(!ativo){
        document.getElementById('menu').style.width = '250px';
        document.getElementById('conteudo').style.marginLeft = '250px';
        ativo = true;
    }
    else{
        document.getElementById('menu').style.width = '0px';
        document.getElementById('conteudo').style.marginLeft = '0px';
        ativo = false;
    }
   
}


function salvar(){
    var botaoAdicionar = document.querySelector(".save");
    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();

    });
    validaForm();
}

function validaForm(){

    if(!camponome.value){
        camponome.focus();
        alert("Preencha seu nome");
        document.getElementsByName('Busca')[0].placeholder='Digite o nome';

    }else {
        voltaCor();
     }

    if(!datacorte.value){
        trocaCor();
        alert("Preencha a data de corte");
        
    }else {
        voltaCor();
     }

    if(!datakr.value){
        trocaCor();
        alert("Preencha a data KR");
       
    }else {
        voltaCor();
     }


     function trocaCor(){
        $('.inputform').css({'background': '#fd949bc8'})
        $('.inputform').css('border', '2px solid red')
    }
    
    function voltaCor(){
        $('.inputform').css({'background': 'rgb(243, 241, 241)'})
        $('.inputform').css('border', '2px solid rgb(207, 205, 205)')
    }
}

