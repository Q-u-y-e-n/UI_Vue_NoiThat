<template>
    <div class="container">

<div class="form">
    <form  @submit.prevent="signup" action="" method="POST">
        <h1>ĐĂNG KÍ TÀI KHOẢN</h1>

        
             <!-- {% csrf_token %} -->


            <div class="form-item">
            
                <label  class="title" for="username">Email</label>
                <input v-models="form.email"  style="  padding: 0 16px;"  class="nhap" type="text" name="email" id="username" >
            </div>
            <div class="form-item">
            
                <label class="title" for="sdt">Số điện thoai</label>
            <input v-models="form.sdt"  style="  padding: 0 16px;"  class="nhap" type="number" name="sdt" id="sdt">
            </div>

            <div class="form-item">
                
                <label class="title" for="mk">Mật khẩu</label>
                <input v-models="form.mk"  style="  padding: 0 16px;"  class="nhap" type="password" name="mk" id="mlk" >
            </div>
            <div class="form-item">
            
                <label  class="title" for="confirm">Xác nhận mật khẩu</label>
                <input v-models="form.confirm"  style="  padding: 0 16px;"  class="nhap" type="password" name="confirm" id="confirm" >
            </div>
        

            <div  style="margin-bottom: 4px; "  class="nut" >
                <button @click="signup()" style=" 
                padding: 10px 25px;
                border-radius: 5px;
                background-color:RGB(167, 110, 67);
                border: 1px solid RGB(167, 110, 67);
                display: flex; 
                margin: auto;
                margin-top: 5px;
                font-size: 1rem;
                
                color: white;
                " class="gui" type="submit">Đăng ký</button>
            </div>
        
       
    </form>
    <!-- <p v-if="message" id="message">{{ message }}</p> -->


</div>
</div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        email: '',
        sdt: '',
        mk: '',
        confirm: ''
      },
      message: ''
    };
  },
  methods: {
    async signup() {
      if (this.form.mk !== this.form.confirm) {
        this.message = 'Mật khẩu xác nhận không khớp';
        return;
      }

      try {
        let response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.form.email,
            sdt: this.form.sdt,
            password1: this.form.mk,
            password2: this.form.confirm,
          }),
        });

        let result = await response.json();
        if (response.status === 201) {
          alert('Đăng ký thành công! Chuyển đến trang Home.');
          window.location.href = '/';
          
        } else {
          this.message = result.error || JSON.stringify(result);
        }
      } catch (error) {
        this.message = 'Đã có lỗi xảy ra, vui lòng thử lại!';
      }
    }
  }
};

</script>



<style>


/* form đăng kí tài khoản */

.input{
 
    text-align: center;
    border: none;
    font-size: 16px;
    margin-top: 50px;
}
.form {
    display: grid;
    margin-top: 200px;
    margin-left: 100px;
    background-color: RGB(231, 218, 202);
    border: solid 2px black;
    border-radius: 20px;
    padding: 20px;
    box-sizing: content-box;
    height: 300px;
    position: absolute;
    top: -43%;
    left: -13%;
    padding: 20px;

}

h1 {
    text-align: center;
  
}

.container {
    background-color: RGB(231, 218, 202);
    width: 600px;
    height: 400px;
    position: relative;
    display: flex;
    margin: auto;
   
}

.form-item {
    display: flex;
    margin: 15px;
    margin-bottom: 10px;
    padding: 0 16px;
    border-radius: 3px; 
    padding: 0 16px;
    border-radius: 3px;;
}

.title {
    font-size: 20px;
    margin-right: 10px;
    min-height: 20px;
    flex: 1;
}

.nhap {
    min-width: 270px;
    height: 30px;
    border-radius: 5px;
    border: solid 1px black;
    flex: 1;
    border-radius: 30px;
  
    
}

.nut {
    border-radius: 20px;
    min-width: 150px;
    
    min-height: 45px;
    font-size: 20px;
    cursor: pointer;
    width: 100px;
    height: 30px;
    margin: 15px auto;

}

.forgot,a {
    display: block;
    padding-top: 1px;
    color: black;
    text-align: center;  
    font-size: 1rem;
   
}

button.gui {
    padding: 8px 16px;
    border-radius: 5px;
    background-color: RGB(255, 195, 213);
    border: 1px solid RGB(255, 195, 213);
    margin-top: 5px;
}


.forgot{
    font-size: 0.5rem;
    color: #807373;

}

.controls{
    color: #646c6c9c;
}

.border{
    border-bottom: 1px solid;
}

@media (min-width: 1024px) {
  #app {
    grid-template-columns: unset !important;
  }
}


</style>