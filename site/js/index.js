function logar(event){
    //impede o envio normal do formulário
    //força a chamada a passar pelo "modal"
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == 'admin'){
        Swal.fire({
            title: 'Login realizado!',
            text: 'Bem-Vindo(a), ' + usuario + '!', 
            icon: 'success',
            confirmButtonText: 'OK!'
        }).then(() => {
            setTimeout(() => {
                location.href="./html/home.html";
            }, 100);
        });

        //alert('LOGIN OK');
        //location.href = './html/home.html';
    }else{
        //alert('ERRO usuário ou senha incorretos');
    }

}