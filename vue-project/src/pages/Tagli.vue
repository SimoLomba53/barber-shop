<script >
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
           <div class="parallax-container-tagli">
            <div class="parallax-tagli" :style="parallaxStyle"></div>
             <div class="content-tagli">
                <nav>
                  <div class="navbar d-flex flex-row align-items-center p-5">
                   <div>
                      <router-link class="text-dark" :to="{ name: 'Homepage' }">
                          <img src="/barberlogowhite.png" alt="" style="width: 100px;">
                      </router-link>
                   </div>
                   <div class="d-none d-md-flex gap-5 text-center">
                
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
                    <div class="jumbotagli text-center d-flex align-items-center justify-content-center">
                       <div class="d-flex flex-column align-items-center justify-content-center">
                      
                        <h1>I NOSTRI TAGLI</h1>
                          
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
                 <p>LA QUALITA' E' IL NOSTRO PUNTO DI FORZA!</p>
                 <p class="infohomedescription">
                 Nel nostro salone di parrucchieri, la qualità e la perfezione dei tagli sono alla base di tutto ciò che facciamo. Il nostro team di esperti parrucchieri ha una profonda conoscenza delle ultime tendenze e tecniche di taglio, unita a una grande passione per l'arte dell'hairstyling.

    Ogni taglio viene eseguito con una precisione meticolosa, tenendo conto della forma del viso, della texture dei capelli e delle vostre preferenze personali. Utilizziamo solo strumenti di alta qualità e prodotti professionali per garantire risultati impeccabili. Ogni dettaglio, dalle linee perfettamente definite alle sfumature fluide, viene curato con cura per creare un look unico e su misura per ogni cliente.

                 </p>
                 <div class="d-flex align-items-center justify-content-center">
                 <img src="/firma.png" alt="" style="width:200px;">
                 </div>
                </div>
             
             </div>
           </section>
           <section class="tagli">
              <div data-aos="fade-up"
             data-aos-duration="3000" class="col-12 justify-content-center align-items-center d-flex flex-column flex-sm-row gap-5 p-3 p-sm-5">
                 <div class="col-10 col-sm-5">
                    <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                      <source src="/videotaglio1.MOV" type="video/mov">
                      
                        
                    </video>
                    
                 </div>
                 <div class="col-10 col-sm-5">
                        <video  class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                          <source src="/videotaglio2.MOV" type="video/mp4">
                      
                        
                        </video>
                 </div>
              </div>
              <div data-aos="fade-up"
             data-aos-duration="3000" class="col-12 justify-content-center align-items-center d-flex flex-column flex-sm-row gap-5 p-3 p-sm-5">
                     <div class="col-10 col-sm-5">
                        <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                          <source src="/videotaglio3.MOV" type="video/mp4">
                      
                        
                        </video>
                     </div>
                     <div class="col-10 col-sm-5">
                            <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                              <source src="/videotaglio4.MOV" type="video/mp4">
                      
                        
                            </video>
                     </div>
                  </div>
                  <div data-aos="fade-up"
             data-aos-duration="3000" class="col-12 justify-content-center align-items-center d-flex flex-column flex-sm-row gap-5 p-3 p-sm-5">
                     <div class="col-10 col-sm-5">
                        <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                          <source src="/videotaglio5.MOV" type="video/mp4">
                      
                        
                        </video>
                     </div>
                     <div class="col-10 col-sm-5">
                            <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                              <source src="/videotaglio6.MOV" type="video/mp4">
                      
                        
                            </video>
                     </div>
                  </div>
                  <div data-aos="fade-up"
                 data-aos-duration="3000" class="col-12 justify-content-center align-items-center d-flex flex-column flex-sm-row gap-5 p-3 p-sm-5">
                         <div class="col-10 col-sm-5">
                            <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                              <source src="/videotaglio7.MOV" type="video/mp4">
                      
                        
                            </video>
                         </div>
                         <div class="col-10 col-sm-5">
                                <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                                  <source src="/videotaglio8.MOV" type="video/mp4">
                      
                        
                                </video>
                         </div>
                      </div>
                      <div data-aos="fade-up"
                   data-aos-duration="3000" class="col-12 justify-content-center align-items-center d-flex flex-column flex-sm-row gap-5 p-3 p-sm-5">
                           <div class="col-10 col-sm-5">
                              <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                                <source src="/videotaglio9.MOV" type="video/mp4">
                      
                        
                              </video>
                           </div>
                           <div class="col-10 col-sm-5">
                                  <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                                    <source src="/videotaglio10.MOV" type="video/mp4">
                      
                        
                                  </video>
                           </div>
                        </div>
                        <div data-aos="fade-up"
                     data-aos-duration="3000" class="col-12 justify-content-center align-items-center d-flex flex-column flex-sm-row gap-5 p-3 p-sm-5">
                             <div class="col-10 col-sm-5">
                                <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                                  <source src="/videotaglio11.MOV" type="video/mp4">
                      
                        
                                </video>
                             </div>
                             <div class="col-10 col-sm-5">
                                    <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline style="width: 100%;">
                                      <source src="/videotaglio12.MOV" type="video/mp4">
                      
                        
                                    </video>
                             </div>
                          </div>
           </section>
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
.droptitle{
    color: #b4d0e7;
}

.parallax-container-tagli {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.parallax-tagli {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('/taglijumbo.jpg'); /* Inserisci il percorso dell'immagine di sfondo */
  background-repeat: no-repeat;
  background-size: cover;
  
}

.content-tagli {
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

.jumbotagli{
  width: 100%;
  height: 65vh;
  
}

.jumbotagli h1{
  font-size:clamp(80px,8vw,200px);
}

.jumbotagli button{
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.tagli{
    background-color: #d2d2d2;
}
.rominapower{
  position: absolute;
  left: -50px !important;
}

.infohomedescription{
  font-size:clamp(10px,3.50vw,25px);
}
</style>
