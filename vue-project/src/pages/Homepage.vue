<script>
import AOS from "aos";
AOS.init();

export default {
  data() {
    return {
      parallaxStyle: '',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.parallaxStyle = `background-position: center ${scrollTop * 0.3}px;`;
    },
  },
};



</script>

<template>
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <body>
       <div class="parallax-container">
        <div class="parallax" :style="parallaxStyle"></div>
         <div class="content">
            <nav>
              <div class="navbar d-flex flex-row align-items-center p-5">
               <div>
                  <router-link class="text-dark" :to="{ name: 'Info' }">
                      <img src="/barberlogowhite.png" alt="" style="width: 100px;">
                  </router-link>
               </div>
               <div class="d-flex flex-row gap-5 text-center">
                
                      <a href="">TAGLI</a>
                
                      <a href="">LO SHOP</a>
               
                      <a href="">PRENOTA</a>
                
               </div>
               <div>
                
               </div>
              </div>
            </nav>
                <div class="jumbohome text-center">
                   <div class="d-flex flex-column align-items-center justify-content-center">
                      <h1>CUT, SHAVE, TRIM</h1>
                      <button class="p-3">PRENOTA</button>
                   </div>
                   <div>

                   </div>
                </div>
         </div>
       </div>
       <section>
         <div class="introhome bg-dark col-12">
            <div class="col-8 offset-2 text-center p-5">
             <img src="/barberlogowhite.png" alt="" style="width: 100px;">
             <p>A NOTE FROM THE FOUNDERS:</p>
             <p class="infohomedescription">
              10 years ago we set out to build a concept; a bar, barbershop and product line with one goal in mind: to make you feel like like the best you. Over the course of those years, the honest conversations, cold beers, top-of-the-game pomades and quick trims are all, undoubtedly, part of the process. The physical transformation happens to your hair, but the real result is feeling like the best version of yourself, looking into that mirror and saying “there I am”.
             </p>
             <img src="firma.png" alt="" style="width:250px;">
            </div>
         </div>
       </section>
       <section>
         <div class="cuthome col-12">
          <div class="col-8 offset-2 d-flex flex-row">
            <div class="col-6">
              <div data-aos="fade-up"
       data-aos-duration="3000" class="text-center cuthometext">
                <h2>The Barber Shop</h2>
                <p>Cuts, Shaves & Trims From The Best In The Biz.</p>
                <p>All shop services are accompanied by a complimentary cocktail.</p>
              </div>
              <img data-aos="fade-up"
       data-aos-duration="3000" class="p-5" src="/barber3.jpg" alt="" style="width: 100%;">
            </div>
            <div class="col-6">
              <img data-aos="fade-up"
         data-aos-duration="3000" class="p-5" src="/barber4.jpg" alt="" style="width: 100%;">
               <div data-aos="fade-up"
         data-aos-duration="3000" class="text-center cuthometext2">
                  <h2>The Barber Shop</h2>
                  <p>Cuts, Shaves & Trims From The Best In The Biz.</p>
                  <p>All shop services are accompanied by a complimentary cocktail.</p>
                </div>
            </div>
          </div>
         </div>
       </section>
       <section>
         <div class="homevideo col-12">
            <div  class="col-8 offset-2 text-center p-5">
               <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline>
               <source
                src='/barbervideo.mp4' 
                type="video/mp4"
              />
              </video>
            </div>
         </div>
       </section>
        <footer>
          <div>

          </div>
        </footer>
       
       
    </body>
    
</template>

<style>
.parallax-container {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.parallax {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('/barber1.jpg'); /* Inserisci il percorso dell'immagine di sfondo */
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.content {
  position: relative;
  z-index: 1;
  height: 100%;
  color: #ffffff;
}

.navbar{
  width: 100%;
  
}

.navbar a{
  text-decoration: none;
  color: #ffffff;
}

.jumbohome{
  width: 100%;
  
}

.jumbohome h1{
  font-size: 170px;
}

.jumbohome button{
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.introhome{
 
}

.introhome p{
  color: #ffffff;
  
}

.infohomedescription{
  font-size: 20px;
}

.cuthome{
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #ffffff;
}

.cuthometext{
  padding-top: 200px;
  padding-bottom: 200px;
}


.cuthometext2{
  padding-top: 100px;
  padding-bottom: 200px;
}

.homevideo{
  background-color: #212529;
}

.homevideo video{
  width: 100%;
}
</style>
