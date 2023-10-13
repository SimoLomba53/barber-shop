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
        <div class="parallax-container-info">
            <div class="parallax-info" :style="parallaxStyle"></div>
             <div class="content-info">
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
                    <div class="jumbohome2 text-center d-flex align-items-center justify-content-center">
                       <div class="d-flex flex-column align-items-center justify-content-center">
                      
                        <h1>CONTATTACI</h1>
                          
                       </div>
                       <div>

                       </div>
                    </div>
                    
             </div>
           </div>
           <section>
              <div class="datecontact d-flex flex-column p-5 justify-content-center text-center">
                <div  data-aos="fade-up" data-aos-duration="1000" class="contactcontent">
                <h1 class="">BARBER SHOP</h1>
                
                <p class=""><img class="p-1" src="/houseiconwhite.png" alt="" style="width: 28px;">Via Nizza, 346, 10127 Torino TO</p>
                <p class=""><img class="p-1" src="/phoneiconwhite.png" alt="" style="width: 28px;">388 306 5165</p>
                <p class=""><img class="p-1" src="/calendarwhiteicon.png" alt="" style="width: 28px;">LUNEDI/SABATO 9-20</p>
                <p class="">Lo shop è facilissimo da raggiungere sia in automobile che con i mezzi pubblici.</p>
                <p class="">Si trova a 200 metri dalla fermata della metropolitana "Italia 61" e a 10 minuti a piedi dalla stazione ferroviaria Torino Lingotto.</p>
                <p class="">In automobile dista solamente 10 minuti dal puro centro della citta di Torino.</p>
                <p class="contactslogan">Dona nuova vita ai tuoi capelli da Barber Shop, dove ogni taglio è un capolavoro su misura! </p>
                
                </div>
             </div>          
            </section>
            <section>
                <div class="col-12">
                   <iframe class="col-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.1132541023658!2d7.660685376761314!3d45.02262637107011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478813f6f54c58f3%3A0x2d93889b005b8151!2sBarber%20Shop%20Hassan!5e0!3m2!1sit!2sit!4v1689707367153!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                <i class="fas fa-gem me-3"></i>Barber Shop
              </h6>
              <p>
                Dona nuova vita ai tuoi capelli da Barber Shop, dove ogni taglio è un capolavoro su misura!
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
        <a class="text-reset fw-bold" href="">Barber Shop</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
       
    </body>
</template>

<style>
.parallax-container-info {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.parallax-info {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('/infocontact.jpg'); /* Inserisci il percorso dell'immagine di sfondo */
  background-repeat: no-repeat;
  background-size: cover;
  
}

.content-info {
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

.jumbohome2{
  width: 100%;
  height: 65vh;
  
}

.jumbohome2 h1{
  font-size:clamp(50px,10vw,220px);
}

.jumbohome2 button{
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.datecontact{
    background-color: #212529;
}

.contactcontent h1{
    color: #d2d2d2;
    font-size:70px;
}

.contactcontent p{
    color: #d2d2d2;
    
}

.contactslogan{
  font-size: 30px;
}

.rominapower{
  position: absolute;
  left: -50px !important;
}
</style>
