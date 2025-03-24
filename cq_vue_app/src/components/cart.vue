<template>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <div class="wrapper">
    <header class="menu-toggle" >
    <!-- Mobile menu button -->
   
        <div class="navbar" >
            <div class="navbar-link" >
                <ul class="navbar-link-item"  :class="{ 'active': isOpen }">
                    <li class="item-link"> <a class="link" href="/"> Trang chủ</a></li>
                    <li class="item-link"> <a class="link" href="Product">Sản phẩm</a> </li>
                    <li class="item-link"> <a class="link" href="Blog"> About</a></li>
                    <li class="item-link"> <a class="link" href="contact">Liên hệ</a> </li>
                </ul>
            </div>
            <div class="navbar-logo">
                <img class="logo" src="@/assets/IMG/logo1.jpg" alt="logo">
            </div>
            <div class="navbar-search">
                <input type="text" class="search-input" placeholder="Tìm kiếm">
                <div class="icon-search">
                    <a class="link" href=""><i class="fa-solid fa-magnifying-glass"></i></a>
                </div>
            </div>
            <div class="navbar-cart-login-icon">
                <a style="font-size: 2rem;" href=""> <i  class="fa-solid fa-bag-shopping"></i></a>
                <a style="font-size: 2rem; padding-bottom: 10px;" href="signin"><i  class="fa-solid fa-user"></i></a>


            </div>
        </div>
        <div class="hamburger" @click="toggleMenu">☰</div>
   
</header>
</div>
<div class="container-cart">
    <h1 class="header-cart"> GIỎ HÀNG CỦA BẠN</h1>
    <hr>


    <div class="container-cart-main">
            <p class="cart-title"> có N sản phẩm trong giỏ hàng</p>
            <div class="cart-product">
                    <div class="cart-product-item">
                        <img src="@/assets/IMG/ban-an.jpg" alt="" class="cart-product-img">
                    </div>
                    <div class="cart-product-item">
                         <div class="cart-product-detail-text">

                                <div class="ccc">   
                                     <p class="cart-title-product">Tủ quần áo cao cấp 2 cánh gỗ MFC phủ Melamin</p>
                                
                                    
                                        <i class="fa-solid fa-xmark"></i>
                                    
                                </div>
                       
                                <div class="ccc"> 
                                        <div class=" quantity-control cart-product-detail-cost">
                                        
                                            <button @click="decrease" class="btn--sub">-</button>
                                            <input type="text" v-model="quantity" class="input--number" readonly />
                                            <button @click="increase" class="btn--add">+</button>
                                
                                        </div>
                                        <p class="cost-img-cart-detail">88888888888</p>
                                </div>
                            </div>  
                     </div>
            </div>
    
        </div>

    <div class="container-cart-main">
          
            <div class="cart-product">
                    <div class="cart-product-item">
                        <img src="@/assets/IMG/ban-an.jpg" alt="" class="cart-product-img">
                    </div>
                    <div class="cart-product-item">
                         <div class="cart-product-detail-text">

                                <div class="ccc">   
                                     <p class="cart-title-product">Tủ quần áo cao cấp 2 cánh gỗ MFC phủ Melamin</p>
                                
                                    
                                        <i class="fa-solid fa-xmark"></i>
                                    
                                </div>
                       
                                <div class="ccc"> 
                                        <div class=" quantity-control cart-product-detail-cost">
                                        
                                            <button @click="decrease" class="btn--sub">-</button>
                                            <input type="text" v-model="quantity" class="input--number" readonly />
                                            <button @click="increase" class="btn--add">+</button>
                                
                                        </div>
                                        <p class="cost-img-cart-detail">88888888888</p>
                                </div>
                            </div>  
                     </div>
            </div>
    
        </div>

    <div class="container-cart-main">
           
            <div class="cart-product">
                    <div class="cart-product-item">
                        <img src="@/assets/IMG/ban-an.jpg" alt="" class="cart-product-img">
                    </div>
                    <div class="cart-product-item">
                         <div class="cart-product-detail-text">

                                <div class="ccc">   
                                     <p class="cart-title-product">Tủ quần áo cao cấp 2 cánh gỗ MFC phủ Melamin</p>
                                
                                    
                                        <i class="fa-solid fa-xmark"></i>
                                    
                                </div>
                       
                                <div class="ccc"> 
                                        <div class=" quantity-control cart-product-detail-cost">
                                        
                                            <button @click="decrease" class="btn--sub">-</button>
                                            <input type="text" v-model="quantity" class="input--number" readonly />
                                            <button @click="increase" class="btn--add">+</button>
                                
                                        </div>
                                        <p class="cost-img-cart-detail">88888888888</p>
                                </div>
                            </div>  
                     </div>
            </div>
    
        </div>

    <div class="container-cart-main">
            
            <div class="cart-product">
                    <div class="cart-product-item">
                        <img src="@/assets/IMG/ban-an.jpg" alt="" class="cart-product-img">
                    </div>
                    <div class="cart-product-item">
                         <div class="cart-product-detail-text">

                                <div class="ccc">   
                                     <p class="cart-title-product">Tủ quần áo cao cấp 2 cánh gỗ MFC phủ Melamin</p>
                                
                                    
                                        <i class="fa-solid fa-xmark"></i>
                                    
                                </div>
                       
                                <div class="ccc"> 
                                        <div class=" quantity-control cart-product-detail-cost">
                                        
                                            <button @click="decrease" class="btn--sub">-</button>
                                            <input type="text" v-model="quantity" class="input--number" readonly />
                                            <button @click="increase" class="btn--add">+</button>
                                
                                        </div>
                                        <p class="cost-img-cart-detail">88888888888</p>
                                </div>
                            </div>  
                     </div>
            </div>
    
        </div>

    <div class="container-cart-main">
           
            <div class="cart-product">
                    <div class="cart-product-item">
                        <img src="@/assets/IMG/ban-an.jpg" alt="" class="cart-product-img">
                    </div>
                    <div class="cart-product-item">
                         <div class="cart-product-detail-text">

                                <div class="ccc">   
                                     <p class="cart-title-product">Tủ quần áo cao cấp 2 cánh gỗ MFC phủ Melamin</p>
                                
                                    
                                        <i class="fa-solid fa-xmark"></i>
                                    
                                </div>
                       
                                <div class="ccc"> 
                                        <div class=" quantity-control cart-product-detail-cost">
                                        
                                            <button @click="decrease" class="btn--sub">-</button>
                                            <input type="text" v-model="quantity" class="input--number" readonly />
                                            <button @click="increase" class="btn--add">+</button>
                                
                                        </div>
                                        <p class="cost-img-cart-detail">88888888888</p>
                                </div>
                            </div>  
                     </div>
            </div>
    
        </div>


</div>
</template>
<script>
export default {
  data() {
    return {
      quantity: 1, // Số lượng mặc định
    };
  },
  methods: {
    increase() {
      this.quantity++;
    },
    decrease() {
      if (this.quantity > 1) this.quantity--;
    },
  },
};
</script>
<style>
.container-cart-main{
    display: inline;
    
}
.cart-title-product{
    max-width: 490px;
    margin: 0 50px 40px 20px;
}
.wrapper {
    padding: 12px;
}

.ccc{
    max-width:1240px ;
    display: flex;
    justify-content: space-between;
}
.header-cart{

    font-size: 2.5rem;
}
.cart-product-detail-text{
    max-width: 1020px;
    display: block;
}
.container-cart-main{
    font-size: 2rem;
}
.cart-product-item{
    display: flex;
    justify-content: space-between;
}
/* .cart-product-item{
    display: flex;
    margin-top: 20px;
} */
.cart-product-img{
    width: 200px;
    height: 200px;
    margin: 0 20px;
}
.container-cart{
    max-width: 100%;
    padding-top: 50px;
  
    
 
}
.cart-product{
    display: flex;
    margin-top: 20px;
    background-color: rgb(255, 245, 240);
    padding: 20px;
}
/* main{
    
}    */



@media screen and (max-width: 800px) 
{

    .navbar-search{
        display: none !important;
    }
    .search-input{
        display: none;
    }
    .navbar-cart-login-icon{
        display: none !important;
    }
    .navbar-logo{

        display: none;
    }
    .container-cart{
        margin-top: 200px;
    }

    main{
    padding-top: 200px;
  }
  .navbar-link {
   
   
    background-color: var(--color-primary);
    width: 100% !important;; /* Chiều rộng 100% */
    /* padding-top: 30px; */
    position: fixed; /* Tuyệt đối */
    top: 20px; /* Cách top 50px */
    left: 0; /* Cách trái 0px */
    right: 0;
    flex-wrap: wrap;
  }
  .navbar-link-item {
    flex-direction: column;
    align-items: center; /* Căn giữa nội dung */
   
  }
   
  .navbar-link-item.active {
     display: flex;
    
    }

 
}
</style>