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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <body>
        <div class="parallax-container-shop">
            <div class="parallax-shop" :style="parallaxStyle"></div>
            <div class="content-shop">
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
                                <a href="">PREZZI</a>
                            </router-link>
                            <router-link class="text-dark" :to="{ name: 'Info' }">
                                <a href="">PRENOTA</a>
                            </router-link>


                        </div>

                    </div>
                </nav>
                <div class="jumboshop text-center d-flex align-items-center justify-content-center">
                    <div class="d-flex flex-column align-items-center justify-content-center">

                        <h1>PREZZI</h1>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>

        <section>

            <div class="introhome bg-dark col-12">
                <div data-aos="fade-up"
                     data-aos-duration="3000" class="col-8 offset-2 text-center p-5">
                    <img src="/barberlogowhite.png" alt="" style="width: 100px;">
                    <p>PREZZI IMBATTIBILI!</p>
                    <p class="infohomedescription">
                        Siamo fieri di offrirvi esperienza, talento e qualità insuperabili, il tutto a prezzi imbattibili. La nostra missione è rendervi splendidi senza dover svuotare il portafoglio. Con un team di parrucchieri esperti, utilizziamo solo prodotti di alta qualità e seguiamo le ultime tendenze. Siamo certi che non troverete tariffe migliori altrove per i nostri servizi di altissimo livello. La soddisfazione dei nostri clienti è la nostra priorità, garantendo un rapporto qualità-prezzo imbattibile. Affidatevi a noi e lasciatevi coccolare dalla migliore esperienza di bellezza sul mercato!

                    </p>
                    <img src="/firma.png" alt="" style="width:250px;">
                </div>

            </div>
        </section>
        <section class="shop">
            <div data-aos="fade-up"
                     data-aos-duration="3000" class="col-12 d-flex flex-column flex-md-row  ">
               <div class="col-12 col-md-6 text-center manprice p-5">
                  <h1>UOMO</h1>
                  <p>TAGLIO: € 10</p>
                  <p>SFUMATURA LAMETTA: € 12</p>
                  <p>SFUMATURA MODELLATO: € 12</p>
                  <p>TAGLIO CON DISEGNO: € 17</p>
                  <p>BARBA: € 5</p>
                  <p>BARBA MODELLATA: € 8</p>
                  <p>SHAMPOO: € 2</p>
                  <p>SOPRACCIGLIA: € 4</p>
                  <p>DEPILAZIONE VISO CON FILO: € 8</p>
                  <p>PULIZIA VISO BLACK MASK E VAPORE: € 12</p>
                  <p>TAGLIO BAMBINI: € 8</p>
                  <p>TAGLIO BAMBINI CON MENO DI UN ANNO: GRATIS</p>

               </div>
               <div class="col-12 col-md-6 text-center womenprice p-5">
                  <h1>DONNA</h1>
                  <p>SHAMPOO CON PIEGA: € 8/9</p>
                  <p>SHAMPOO + PIEGA + TAGLIO: € 10</p>
                  <p>SHAMPOO + PIEGA + PERMANENTE: € 25/35</p>
                  <p>TAGLIO + COLORE + PIEGA: € 20/25</p>
                  <p>TAGLIO + COLORE (WELLA): € 25/35</p>
                  <p>TAGLIO + PIEGA + COLPI DI SOLE: € 25/28</p>
                  <p>PIEGA MOSSA: € 9/10</p>
                  <p>TAGLIO + PIEGA + STRATURA LISCI: € 50/70</p>
                  <p>TRATTAMENTO RINFORZANTE: € 18</p>
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
.droptitle {
    color: #b4d0e7;
}

.parallax-container-shop {
    position: relative;
    overflow: hidden;
    height: 100vh;
}

.parallax-shop {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('/barber7.jpg');
    /* Inserisci il percorso dell'immagine di sfondo */
    background-repeat: no-repeat;
    background-size: cover;

}

.content-shop {
    position: relative;
    z-index: 1;
    height: 100%;
    color: #ffffff;
}

.navbar {
    width: 100%;

}

.navbar a {
    text-decoration: none;
    color: #ffffff;
}

.jumboshop {
    width: 100%;
    height: 65vh;

}

.jumboshop h1 {
    font-size:clamp(80px,8vw,200px);
}

.jumboshop button {
    background-color: transparent;
    color: white;
    border: 1px solid white;
}

.shop {
    background-color: #d2d2d2;
}

.manprice h1{
    color: royalblue;
    font-size: 60px;
}

.manprice p{
    font-size: 20px;
}

.womenprice h1{
    color: deeppink;
    font-size: 60px;
}

.womenprice p{
    font-size: 20px;
}

.manprice{
    border: 1px solid grey;
}

.womenprice{
    border: 1px solid grey;
}
</style>
