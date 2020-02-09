<script>
  import {
    Tile,
    Tabs,
    Tab,
    TabContent,
    TabsSkeleton
  } from "carbon-components-svelte";

  import LoginForm from "./LoginForm.svelte";
  import RegisterForm from "./RegisterForm.svelte";
</script>

<style>
  .image-container {
    display: flex;
    height: 100%;
    width: 60vw;
    background: #2c3e50;
    overflow: hidden;
  }

  .login-form {
    height: 100%;
    width: 40vw;
    background: #ecf0f1;
    padding: 65px;
  }

  .login-container {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .teste {
    display: flex;
    width: 350px;
    height: 350px;
    background: khaki;
  }
</style>

<div class="login-container">
  <div class="image-container">
    <img src="./images/blockchain-login.png" alt="blockchain network" />
  </div>
  <div class="login-form">
    <Tabs style="display: flex; justify-content: center;">
      <Tab tabindex="0" label="Entrar" />
      <Tab tabindex="1" label="Cadastrar" />

      <span slot="content">
        <TabContent>
          <LoginForm />
        </TabContent>
        <TabContent>
          <RegisterForm />
        </TabContent>
      </span>
    </Tabs>
  </div>

</div>
