// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ4V74e4RPNuiYsM4pG6foUqeXXgiWTEY",
  authDomain: "academydatas-dc1a2.firebaseapp.com",
  projectId: "academydatas-dc1a2",
  storageBucket: "academydatas-dc1a2.firebasestorage.app",
  messagingSenderId: "932482523151",
  appId: "1:932482523151:web:d6bb14f77b8d93b5c2837a"
};

// Initialize Firebase (para versão 3.7.4)
firebase.initializeApp(firebaseConfig);

function cadastrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    // Validação básica
    if (!email || !senha) {
        alert("Por favor, preencha email e senha");
        return;
    }
    
    // Função de cadastro do Firebase com email e senha
    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(function (userCredential) {
            console.log("Usuário cadastrado:", userCredential.user);
            alert("Seus dados foram cadastrados com sucesso!");
            
            // Limpar os campos
            document.getElementById('email').value = '';
            document.getElementById('senha').value = '';
        })
        .catch(function (error) {
            console.error("Erro ao cadastrar:", error.code, error.message);
            
            // Mensagens de erro mais específicas
            switch(error.code) {
                case 'auth/email-already-in-use':
                    alert('Este email já está em uso');
                    break;
                case 'auth/invalid-email':
                    alert('Email inválido');
                    break;
                case 'auth/weak-password':
                    alert('A senha deve ter pelo menos 6 caracteres');
                    break;
                default:
                    alert('Falha ao cadastrar: ' + error.message);
            }
        });

         function loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        alert("Logado com Google: " + user.displayName);
      })
      .catch((error) => {
        alert("Erro Google: " + error.message);
      });
  }

}