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
               <div class="d-none d-md-flex flex-row gap-5 text-center ">
                
                      <router-link class="text-dark" :to="{ name: 'Tagli' }">
                          <a href="">TAGLI</a>
                      </router-link>
                      <router-link class="text-dark" :to="{ name: 'ShopPage' }">
                          <a href="">PREZZI</a>
                    </router-link>
                    <router-link class="text-dark" :to="{ name: 'Info' }">
                        <a href="">PRENOTA</a>
                    </router-link>
                      
                
               </div>
               <div class="dropdown d-block d-md-none">
                 <button class="btn dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="/menu.jpg" alt="" style="width: 40px;">
                </button>
                <ul class="rominapower dropdown-menu dropdown-menu-dark text-center">
                 <li>
                  <router-link class="text-dark" :to="{ name: 'Tagli' }">
                            <a href="">TAGLI</a>
                  </router-link>
                 </li>
                 <li>
                  <router-link class="text-dark" :to="{ name: 'ShopPage' }">
                            <a href="">PREZZI</a>
                      </router-link>
                  </li>
                 <li>
                  <router-link class="text-dark" :to="{ name: 'Info' }">
                          <a href="">PRENOTA</a>
                  </router-link>
                 </li>
                </ul>
               </div>
               
              </div>
            </nav>
                <div class="jumbohome text-center d-flex align-items-center justify-content-center">
                   <div class="d-flex flex-column align-items-center justify-content-center">
                      
                    <h1>HASSAN BARBER SHOP</h1>
                    <router-link class="text-dark" :to="{ name: 'Info' }">
                      <button class="p-3">PRENOTA</button>
                    </router-link>
                   </div>
                   <div>

                   </div>
                </div>
         </div>
       </div>
       <section>
         <div class="introhome bg-dark col-12">
            <div data-aos="fade-up"
         data-aos-duration="3000" class="col-10 offset-1 col-md-8 offset-md-2 text-center p-5">
             <img src="/barberlogowhite.png" alt="" style="width: 100px;">
             <p>SEI NEL POSTO GIUSTO:</p>
             <p class="infohomedescription">
             Benvenuti nel nostro salone esclusivo, dove l'arte dell'hairstyling si fonde con trattamenti professionali per la pelle e il viso. Il nostri talentuosi barbieri sono maestri nell'arte del taglio di capelli con decorazioni creative, e sono capaci di creare look personalizzati che riflettono la vostra personalità. Inoltre, offriamo trattamenti per la pelle di alta qualità, utilizzando prodotti e tecniche all'avanguardia per un risultato impeccabile. Il nostro ambiente accogliente e rilassante vi farà sentire a vostro agio, mentre i nostri professionisti si prenderanno cura di voi con professionalità e attenzione. Ogni visita al nostro salone è un'esperienza indulgente, dove potrete rilassarvi e prendervi cura del vostro aspetto con stile. Siamo qui per offrirvi un servizio eccellente che vi farà sentire e apparire al meglio, regalandovi un look impeccabile e una pelle radiosa.
             </p>
             <img src="/firma.png" alt="" style="width:250px;">
            </div>
         </div>
       </section>
       <section class="homeimage">
         <div class="cuthome col-12">
          <div class="col-8 offset-2 d-flex flex-column flex-md-row">
            <div class="col-12 col-md-6">
              <div data-aos="fade-up"
       data-aos-duration="3000" class="text-center cuthometext">
                <h2 class="firsthometitle">Hassan Barber Shop</h2>
                <p>Non è un semplice barber shop.</p>
                <p>Ma un luogo in cui sentirsi a casa.</p>
              </div>
              <img data-aos="fade-up"
       data-aos-duration="3000" class="p-5" src="/home7.jpeg" alt="" style="width: 100%;">
            </div>
            <div class="col-12 col-md-6">
              <img data-aos="fade-up"
         data-aos-duration="3000" class="p-5" src="/home8.jpeg" alt="" style="width: 100%;">
               <div data-aos="fade-up"
         data-aos-duration="3000" class="text-center cuthometext2">
                  <h2 class="secondhometitle">Non siamo solo un negozio</h2>
                  <p>Ma un luogo di serenita in cui puoi ridere e scherzare.</p>
                  <p>Mentre ti rilassi ascoltando dell'ottima musica.</p>
                </div>
            </div>
            
          </div>
          <div class="col-8 offset-2 d-flex flex-column flex-md-row">
              <div class="col-12 col-md-6">
                <div data-aos="fade-up"
         data-aos-duration="3000" class="text-center cuthometext">
                  <h2 class="firsthometitle">Tagli Unici con un tocco di maestria</h2>
                  <p>Ogni taglio è un'opera d'arte unica, concepita con cura e maestria.</p>
                  <p>Anni di esperienza e passione per il mestiere, sfiorano le lame con precisione millimetrica, trasformando ciocche ordinarie in opere di bellezza senza pari.</p>
                </div>
                <img data-aos="fade-up"
         data-aos-duration="3000" class="p-5" src="/home3.jpeg" alt="" style="width: 100%;">
              </div>
              <div class="col-12 col-md-6">
                <img data-aos="fade-up"
           data-aos-duration="3000" class="p-5" src="/home6.jpeg" alt="" style="width: 100%;">
                 <div data-aos="fade-up"
           data-aos-duration="3000" class="text-center cuthometext2">
                    <h2 class="secondhometitle">La creatività prende forma</h2>
                    <p>Prova uno dei nostri fantastici tagli decorativi.</p>
                    <p>E rimarrai stupito di come un taglio di capelli può rendere il tuo stile unico e inimitabile.</p>
                  </div>
              </div>
            
            </div>
            <div class="col-8 offset-2 d-flex flex-column flex-md-row">
              <div class="col-12 col-md-6">
                <div data-aos="fade-up"
         data-aos-duration="3000" class="text-center cuthometext">
                  <h2 class="firsthometitle">La nostra missione</h2>
                  <p>Regalarti più di un taglio impeccabile.</p>
                  <p>Vogliamo regalarti momenti indimenticabili e far sì che tu ritorni sempre con un sorriso sulle labbra.</p>
                </div>
                <img data-aos="fade-up"
         data-aos-duration="3000" class="p-5" src="/home2.jpeg" alt="" style="width: 100%;">
              </div>
              <div class="col-12 col-md-6">
                <img data-aos="fade-up"
           data-aos-duration="3000" class="p-5" src="/home1.jpeg" alt="" style="width: 100%;">
                 <div data-aos="fade-up"
           data-aos-duration="3000" class="text-center cuthometext2">
                    <h2 class="secondhometitle">Ogni dettaglio è fondamentale</h2>
                    <p>Prima di iniziare ogni taglio, ascolta con pazienza i desideri e le preferenze di ognuno.</p>
                    <p>Suggerendo soluzioni personalizzate che soddisfano anche le richieste più esigenti.</p>
                  </div>
              </div>
            
            </div>
            <div class="col-8 offset-2 d-flex flex-column flex-md-row">
              <div class="col-12 col-md-6">
                <div data-aos="fade-up"
         data-aos-duration="3000" class="text-center cuthometext">
                  <h2 class="firsthometitle">Passione, dedizione e ricerca dell'eccellenza</h2>
                  <p>La soddisfazione dei nostri clienti è la nostra più grande ricompensa.</p>
                  <p>la fidelizzazione di una clientela affezionata è la prova della nostra maestria nel realizzare veri e propri capolavori su capelli.</p>
                </div>
                <img data-aos="fade-up"
         data-aos-duration="3000" class="p-5" src="/home4.jpeg" alt="" style="width: 100%;">
              </div>
              <div class="col-12 col-md-6">
                <img data-aos="fade-up"
           data-aos-duration="3000" class="p-5" src="/home5.jpeg" alt="" style="width: 100%;">
                 <div data-aos="fade-up"
           data-aos-duration="3000" class="text-center cuthometext2">
                    <h2 class="secondhometitle">Non rinunciare a tutto questo.</h2>
                    <p>Hassab Barber Shop è pronto ad accoglierti.</p>
                    <p>E' il momento giusto per ottenere il taglio che hai sempre voluto!</p>
                  </div>
              </div>
            
            </div>
         </div>
       </section>
       <section>
         <div class="homevideo col-12">
            <div  class="col-12 offset-0 col-sm-10 offset-sm-1 text-center p-3 p-sm-5">
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
        <a href="https://www.tiktok.com/@yassin.eljoker95?is_from_webapp=1&sender_device=pc" class="me-4 text-reset">
          <i class="fab fa-tiktok"></i>
        </a>
        
        <a href="https://www.google.com/maps/dir/45.4627338,9.1777322/hassan+barber+shop+torino/@45.2664297,7.2529781,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x478813f6f54c58f3:0x2d93889b005b8151!2m2!1d7.6632603!2d45.0226264?entry=ttu" class="me-4 text-reset">
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
              <i class="fas fa-gem me-3"></i>Hassan Barber Shop
            </h6>
            <p>
              Dona nuova vita ai tuoi capelli da Hassan Barber Shop, dove ogni taglio è un capolavoro su misura!
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footlink">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              SECTION
            </h6>
            <p>
              <router-link class="text-dark" :to="{ name: 'Homepage' }">
                            <a href="">Homepage</a>
              </router-link>
            </p>
            <p>
              <router-link class="text-dark" :to="{ name: 'Tagli' }">
                              <a href="">Tagli</a>
              </router-link>
            </p>
            <p>
              <router-link class="text-dark" :to="{ name: 'ShopPage' }">
                              <a href="">Prezzi</a>
              </router-link>
            </p>
            <p>
              <router-link class="text-dark" :to="{ name: 'Info' }">
                              <a href="">Prenota</a>
              </router-link>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><img src="/housefooter.png" alt="" style="width: 20px;"> Via Nizza, 346, 10127 Torino TO</p>
            <p>
              <img src="/letterafooter.png" alt="" style="width: 20px;">
              info@example.com
            </p>
            <p><img src="/phonefooter.png" alt="" style="width: 18px;"> 388 306 5165</p>
            <p><img src="/printerfooter.png" alt="" style="width: 18px;"> 388 306 5165</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2023 Copyright:
      <a class="text-reset fw-bold" href="">Hassan Barber Shop</a>
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
  background-image: url('/barber6.jpg'); /* Inserisci il percorso dell'immagine di sfondo */
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
  font-size:clamp(80px,8vw,200px);
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
  font-size:clamp(10px,4vw,25px);
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

.jumbohome button{
  transition: 1s;
}

.jumbohome button:hover{
  color: black;
  background-color: #ffffff;
}

.footlink a{
  text-decoration: none;
  color:#565a5d;
}

.homeimage img{
  width: 100%;
}

.firsthometitle{
   color:#004c8c;
   font-size: 45px;
}

.secondhometitle{
   color:#f64848 ;
   font-size: 45px;
}

.rominapower{
  position: absolute;
  left: -50px !important;
}
</style>
