📱 Aplicativo React Native com Firebase e Navegação
Este é um aplicativo React Native completo com autenticação via Firebase, navegação entre telas e integração com API externa, desenvolvido para funcionar tanto com React Native CLI quanto com Expo.

✨ Funcionalidades Principais
Autenticação com Firebase (email/senha)

Navegação entre telas (Stack e Drawer)

Integração com API (JSONPlaceholder)

Armazenamento de dados no Firestore

Tela de Loading durante requisições

Gerenciamento de estado com Hooks

Design responsivo para diferentes tamanhos de tela

🛠 Tecnologias Utilizadas
React Native

React Navigation (Stack e Drawer)

Firebase (Authentication e Firestore)

Axios para requisições HTTP

React Native Vector Icons

Expo (opcional para desenvolvimento)

📂 Estrutura de Arquivos
/src
  /components       # Componentes reutilizáveis
    CustomDrawerContent.js
    LoadingIndicator.js
  /screens          # Telas do aplicativo
    DashboardScreen.js
    DetailsScreen.js
    LoginScreen.js
    ProfileScreen.js
  /navigation       # Configurações de navegação
    AppNavigator.js
  /services         # Serviços externos
    api.js
  /hooks            # Hooks customizados
    useAuth.js
    useApi.js
/assets             # Recursos estáticos
  /fonts
    Roboto-Regular.ttf
    Roboto-Bold.ttf
🔧 Configuração do Ambiente
Pré-requisitos
Node.js (v14 ou superior)

npm ou yarn

React Native CLI ou Expo CLI

Android Studio/Xcode (para emuladores)

Instalação
Clone o repositório:

bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
Instale as dependências:

bash
npm install
# ou
yarn install
Configure o Firebase:

Crie um projeto no Firebase Console

Copie as credenciais para firebaseConfig.js

Executando o Projeto
Com React Native CLI:
bash
npx react-native start
npx react-native run-android
# ou
npx react-native run-ios
Com Expo:
bash
expo start
# Escaneie o QR code com o app Expo Go
🔐 Configuração do Firebase
Crie um projeto no Firebase Console

Ative o Authentication (método Email/Senha)

Ative o Firestore Database

Configure as regras de segurança (modo teste para desenvolvimento)

🚀 Como Contribuir
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/incrivel)

Commit suas mudanças (git commit -m 'Adicionando feature incrível')

Push para a branch (git push origin feature/incrivel)

Abra um Pull Request

📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

📧 Contato
Seu Nome - seu-email@exemplo.com

Link do Projeto: https://github.com/seu-usuario/nome-do-repo