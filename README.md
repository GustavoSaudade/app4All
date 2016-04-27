# app4All
Aplicativo desenvolvido para processo seletivo na 4All. Desenvolvido para Android e Web browser.<br>

Autor: Gustavo Kluwe Saudade<br>
Contato: gustavosaudade@hotmail.com<br>

Aplicativo desenvolvido com o frameWork Apache Cordova

<h3>Para instalar em um celular ou Tablet Android:</h3>

1 - Com o browser do Android, acessar o link: <a href="https://tsfr.io/f6caer">https://tsfr.io/f6caer</a><br>
2 - Clicar em "Download App"<br>
3 - Quando o download concluir, clicar no arquivo baixado e "instalar".  

<h3>Para rodar localmente siga os seguintes passos:</h3>

1 - Instalar o <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">JDK</a><br>
2 - Instalar o <a href="https://nodejs.org/en/download/">Node JS</a><br>
3 - Instalar o <a href="http://developer.android.com/intl/pt-br/sdk/index.html#Other">Android SDK</a><br>
4 - Criar uma variável de ambiente chamada ANDROID_HOME que aponta para android-sdk (é preciso apontar o endereço completo onde foi instalado o SDK do passo 3)<br>

  * No Windows:<br>
  a) Navegar para Painel de Controle / Sistema e Segurança / Sistema / Configurações avançadas do sistema;<br>
  b) Clicar na aba Avançado;<br>
  c) Clicar em Variáveis ​​de Ambiente...;<br>
  d) Em Variáveis ​​do sistema clicar em Novo...;<br>
  e) No campo Nome da variável informar: ANDROID_HOME;<br>
  f) No campo Valor da variável informar: o caminho onde foi instalado o SDK do passo 2. Ex.: C:\Program Files (x86)\Android\android-sdk;<br>
  g) Clicar em OK.<br>
  h) Encontrar a variável PATH e clicar sobre ela;<br>
  i) Navegar para o final do valor do campo Valor da Variável e incluir: ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools;%ANDROID_HOME%\build-tools\22.0.1;<br>
  j) Clicar em OK.<br>
  l) Clicar em OK;<br>
  m) Clicar em OK;<br>
  n) Clicar em OK.<br><br>

  * No MacOSX:<br>
  a) Abrir uma sessao do terminal, e executar os seguintes comandos: <code>$ vi .bash_profile</code><br>
  b) Inserir as seguintes entradas:<br>
    <code>export ANDROID_HOME=/path/to/your/android-sdk</code><br>
    <code>export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$ANDROID_HOME/build-tools/22.0.1</code><br>
  c) Ainda com o terminal aberto, pressionar a tecla ESC<br>
  d) Digitar <code>:wq</code><br>
  e) Executar: <code>$ source ~/.bash_profile</code><br><br>

5 - Editar a variável de ambiente PATH e adicionar ao final: <code>;%ANDROID_%HOME\tools</code><br>
6 - Abrir o Windows PowerShell / Terminal / Bash e digitar: <code>android</code><br>
7 - No gerenciador de SDKs Android, baixe o "SDK Platform" da API 23. (não é necessário baixar os outros itens) <br>
8 - No gerenciador de SDKs Android, baixe o "SDK Build Tools" da API 23.<br>
9 - <code>git clone https://github.com/GustavoSaudade/app4All.git</code><br>
10 - <code>npm install -g cordova</code> e, opcional: <code>sudo npm install -g phonegap</code>(para ter o servidor web)<br>
11 - Para buildar a .apk <code>cordova build android</code><br>
12 - Para rodar em um dispositivo android ou emulador: <code>cordova run android</code><br>
13 - Para rodar no browser <code>phonegap serve</code>
