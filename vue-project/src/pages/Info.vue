<script>
import AOS from "aos";
AOS.init();

</script>

<template>
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
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
                <h1 class="">HASSAN BARBER SHOP</h1>
                
                <p class=""><img class="p-1" src="/houseiconwhite.png" alt="" style="width: 28px;">Via Nizza, 346, 10127 Torino TO</p>
                <p class=""><img class="p-1" src="/phoneiconwhite.png" alt="" style="width: 28px;">388 306 5165</p>
                <p class=""><img class="p-1" src="/calendarwhiteicon.png" alt="" style="width: 28px;">LUNEDI/SABATO 9-20</p>
                <p class="">Lo shop è facilissimo da raggiungere sia in automobile che con i mezzi pubblici.</p>
                <p class="">Si trova a 200 metri dalla fermata della metropolitana "Italia 61" e a 10 minuti a piedi dalla stazione ferroviaria Torino Lingotto.</p>
                <p class="">In automobile dista solamente 10 minuti dal puro centro della citta di Torino.</p>
                <p class="contactslogan">Dona nuova vita ai tuoi da Hassan Barber Shop, dove ogni taglio è un capolavoro su misura! </p>
                
                </div>
             </div>          
            </section>
            <section>
                <div class="col-12">
                   <iframe class="col-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.1132541023658!2d7.660685376761314!3d45.02262637107011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478813f6f54c58f3%3A0x2d93889b005b8151!2sBarber%20Shop%20Hassan!5e0!3m2!1sit!2sit!4v1689707367153!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
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
  font-size: 170px;
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
</style>
