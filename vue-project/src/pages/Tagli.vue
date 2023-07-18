<script setup>
import AOS from "aos";
AOS.init();
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
                <div class="col-8 offset-2 text-center p-5">
                 <img src="/barberlogowhite.png" alt="" style="width: 100px;">
                 <p>LA QUALITA' E' IL NOSTRO PUNTO DI FORZA!</p>
                 <p class="infohomedescription">
                 Nel nostro salone di parrucchieri, la qualità e la perfezione dei tagli sono alla base di tutto ciò che facciamo. Il nostro team di esperti parrucchieri ha una profonda conoscenza delle ultime tendenze e tecniche di taglio, unita a una grande passione per l'arte dell'hairstyling.

    Ogni taglio viene eseguito con una precisione meticolosa, tenendo conto della forma del viso, della texture dei capelli e delle vostre preferenze personali. Utilizziamo solo strumenti di alta qualità e prodotti professionali per garantire risultati impeccabili. Ogni dettaglio, dalle linee perfettamente definite alle sfumature fluide, viene curato con cura per creare un look unico e su misura per ogni cliente.

                 </p>
                 <img src="firma.png" alt="" style="width:250px;">
                </div>
             
             </div>
           </section>
           <section>
              <div class="col-12">
                 <div class="col-4">
                    <video src=""></video>
                 </div>
              </div>
           </section>
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
  font-size: 170px;
}

.jumbotagli button{
  background-color: transparent;
  color: white;
  border: 1px solid white;
}
</style>
