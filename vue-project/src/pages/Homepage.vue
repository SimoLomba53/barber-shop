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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <body>
       <div class="parallax-container">
        <div class="parallax" :style="parallaxStyle"></div>
         <div class="content">
            <nav>
              <div class="navbar d-flex flex-row align-items-center p-5">
               <div>
                  <router-link class="text-dark" :to="{ name: 'Homepage' }">
                      <img src="/barberlogowhite.png" alt="" style="width: 100px;">
                  </router-link>
               </div>
               <div class="d-flex flex-row gap-5 text-center">
                
                      <router-link class="text-dark" :to="{ name: 'Tagli' }">
                          <a href="">TAGLI</a>
                      </router-link>
                      <router-link class="text-dark" :to="{ name: 'ShopPage' }">
                          <a href="">SHOP</a>
                    </router-link>
                    <router-link class="text-dark" :to="{ name: 'Info' }">
                        <a href="">PRENOTA</a>
                    </router-link>
                      
                
               </div>
               
              </div>
            </nav>
                <div class="jumbohome text-center d-flex align-items-center justify-content-center">
                   <div class="d-flex flex-column align-items-center justify-content-center">
                      
                    <h1>HASSAN BARBER SHOP</h1>
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
             <p>SEI NEL POSTO GIUSTO:</p>
             <p class="infohomedescription">
             Benvenuti nel nostro salone esclusivo, dove l'arte dell'hairstyling si fonde con trattamenti professionali per la pelle e il viso. Il nostri talentuosi barbieri sono maestri nell'arte del taglio di capelli con decorazioni creative, e sono capaci di creare look personalizzati che riflettono la vostra personalità. Inoltre, offriamo trattamenti per la pelle di alta qualità, utilizzando prodotti e tecniche all'avanguardia per un risultato impeccabile. Il nostro ambiente accogliente e rilassante vi farà sentire a vostro agio, mentre i nostri professionisti si prenderanno cura di voi con professionalità e attenzione. Ogni visita al nostro salone è un'esperienza indulgente, dove potrete rilassarvi e prendervi cura del vostro aspetto con stile. Siamo qui per offrirvi un servizio eccellente che vi farà sentire e apparire al meglio, regalandovi un look impeccabile e una pelle radiosa.
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
                src='/hassanvideo.mp4' 
                type="video/mp4"
              />
              </video>
            </div>
         </div>
       </section>
        <!-- Footer -->
  
  <!-- Footer -->
  <footer class="text-center text-lg-start bg-light text-muted">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-facebook-f"></i>
        </a>
        
        <a href="" class="me-4 text-reset">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-instagram"></i>
        </a>
       
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Pro Barber
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              <a href="#!" class="text-reset">Angular</a>
            </p>
            <p>
              <a href="#!" class="text-reset">React</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Vue</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Laravel</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              SECTION
            </h6>
            <p>
              <a href="#!" class="text-reset">Homepage</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Tagli</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Lo Shop</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Prenota</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><img src="/housefooter.png" alt="" style="width: 20px;"> New York, NY 10012, US</p>
            <p>
              <img src="/letterafooter.png" alt="" style="width: 20px;">
              info@example.com
            </p>
            <p><img src="/phonefooter.png" alt="" style="width: 18px;"> + 01 234 567 88</p>
            <p><img src="/printerfooter.png" alt="" style="width: 18px;"> + 01 234 567 89</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2021 Copyright:
      <a class="text-reset fw-bold" href="">Pro Barber</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
       
       
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
  height: 65vh;
  
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
