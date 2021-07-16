<template>
<div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Flower Poem</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link active" aria-current="page">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link active" aria-current="page">Login</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link to="/join" class="nav-link active" aria-current="page">Join</router-link>
          
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/board" class="nav-link active" aria-current="page">Board</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/shop" class="nav-link active" aria-current="page">Shop</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/orderlist" class="nav-link active" aria-current="page">OrderList</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/boardcontent" class="nav-link active" aria-current="page">BoardContent</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/compInsertdelete" class="nav-link active" aria-current="page">CompInsertDelete</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/compropemit" class="nav-link active" aria-current="page">ComPropEmit</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/compslot" class="nav-link active" aria-current="page">CompSlot</router-link>
        </li><li class="nav-item">
          <router-link to="/dragtable" class="nav-link active" aria-current="page">Dragtable</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/styletable" class="nav-link active" aria-current="page">StyleTable</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tablecopymove" class="nav-link active" aria-current="page">TableCopyMove</router-link>
        </li>
      </ul>
      <form class="d-flex" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
        
</nav>

</div>

<div class="alert alert-primary" role="alert">instagram : https://www.instagram.com/_flowerpoem/</div>
  
    <router-view></router-view>
  
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  color: #2c3e50;
  margin-top: 0px;
}
</style>
