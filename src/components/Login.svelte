<script>
  console.log("Login");
</script>

<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: red;
    padding: 5px;
  }

  .login-modal {
    width: 450px;
    height: 340px;
    display: flex;
    background: green;
    border-radius: 0 6px 6px 0;
    justify-content: center;
    /* align-items: center; */
    padding: 7px;
  }

  .info-card {
    color: #ffffff;
    display: flex;
    width: 220px;
    height: 350px;
    background: #282262;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    padding: 7px;
  }
</style>

<div class="container">
  <div class="info-card">Info card</div>
  <div class="login-modal">Login</div>
</div>
