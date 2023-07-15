<script setup>
  import AOS from "aos";
  
  AOS.init();
  
     
</script>

<template>
   <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

   <body class="projectbody">
     
      <nav>
          <ul>
               <li>
                    <router-link class="text-dark" :to="{ name: 'Homepage' }">
                         HOMEPAGE
                    </router-link>
               </li>
          </ul>
            
           <ul>
                <li>
                 <router-link class="text-dark" :to="{ name: 'Info' }">
                    INFO
                 </router-link>
               </li>
          </ul>
     </nav>
     
     <div class="textprojcont mb-3">
      <div class="firstext text-center mb-3 ">
       <span>MY PROJECTS </span><span class="greyspan">  MY WORK</span>
      </div>
      <div class="secondtext text-center mb-3 ">
       <span class="greyspan">MY SKILLS </span><span>  MY PASSION</span>
      </div>
     </div>
     <section>
          <router-link :to="{ name: 'Firstproject' }" class="routerlink">
          <div data-aos="fade-up" data-aos-duration="1000" class="firstproj pj col-10 offset-1 mb-2">
               <div class="projbuttcont d-flex align-items-center justify-content-center text-center">
              
               </div>
          </div>
          </router-link>
          <router-link :to="{ name: 'Secondproject' }" class="routerlink">
          <div data-aos="fade-up" data-aos-duration="1000"  class="secondproj pj col-10 offset-1 mb-2">
               <div class="projbuttcont d-flex align-items-center justify-content-center text-center">
                    
               </div>
          </div>
          </router-link>
          <div class="col-10 offset-1 d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row justify-content-between mb-2">
               <router-link :to="{ name: 'Thirdproject' }" class="routerlink">
               <div data-aos="fade-up" data-aos-duration="1000" class="thirdproj pj ">
                  <div class="projbuttcont d-flex align-items-center justify-content-center text-center col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         
                    </div> 
               </div>
               </router-link>
               <router-link :to="{ name: 'Fourthproject' }" class="routerlink">
               <div data-aos="fade-up" data-aos-duration="1000" class="fourthdproj pj ">
                   <div class="projbuttcont d-flex align-items-center justify-content-center text-center col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        
                    </div>
               </div>
               </router-link>
          </div>
          <div class="col-10 offset-1 d-flex flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row justify-content-between mb-2">
                    <router-link :to="{ name: 'Fifthproject' }" class="routerlink">
                    <div data-aos="fade-up" data-aos-duration="1000" class="fifthproj pj">
                       <div class="projbuttcont d-flex align-items-center justify-content-center text-center col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         
                       </div>
                    </div>
                    </router-link>
                    <router-link :to="{ name: 'Sixthproject' }" class="routerlink">
                    <div data-aos="fade-up" data-aos-duration="1000"  class="sixthproj pj">
                       <div class="projbuttcont d-flex align-items-center justify-content-center text-center col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         
                       </div>
                    </div>
                    </router-link>
          </div>
          <div>
               <img class="logo2" src="/blacklogo.png" alt="">
          </div>

     </section>
     
   </body> 
   
</template>

<style>

.routerlink{
     opacity: 1;
     transition: 0.8s;
}

.routerlink:hover{
     opacity: 0.6;
     
}

.projectbody{
     background-color: #fcfbfd;
}

.firstext{
     margin-right: 240px;
}

.greyspan{
     color:rgb(100 100 100);
}

.textprojcont{
     padding-top: 150px;
     font-size: 80px;
}

.firstproj{
     background-image:url(/dropbox.png);
     background-size:cover;
     background-repeat: no-repeat;
     height: 400px;
     
}

.secondproj{
     background-image:url(/boolifyPC.png);
     background-size: cover;
     height: 400px;
}

.thirdproj{
     background-image:url(/reclameit.png);
     background-size:cover;
     height: 400px;
     width: 41vw;
     
}

.fourthdproj{
    background-image:url(/playstation.png);
     background-size: cover;
     height: 400px;
     width: 41vw;
}

.fifthproj{
     background-image:url(/boolbnb.png);
     background-size:cover;
     height: 400px;
     width: 41vw;
     
}

.sixthproj{
    background-image:url(/boolfix1.png);
     background-size: cover;
     height: 400px;
     width: 41vw;
     
}

.pj{
   opacity:1;
   transition: 0.8s;
   margin-bottom: 0.5rem;
   
   
   
}

.pj:hover{
   opacity: 0.6;
   
}




.projectbutton{
  text-decoration: none;
  color: #000000;
  font-size: 24px;
  border: 2px solid #050505;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 20px;
  transition: 0.6s;
  position: relative;
  top: 150px;
  opacity: 10;
  z-index: 1;
  opacity: 0;
  width: 400px;
  

  
}

.projectbutton:hover {
  background-color: #fcfbfd;
  color: rgb(0, 0, 0);
  opacity: 1;
  transform: scale(1.2);
}

@media only screen and (max-width: 992px) {
  .thirdproj{
     
     width: 100%;
     
}

.fourthdproj{
    
     width: 100%;
}

.fifthproj{
     
     width: 100%;
     
}

.sixthproj{
    
     width: 100%;
     
}


}






</style>
