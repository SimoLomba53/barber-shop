<script setup>



</script>

<template>
    <body>
        <div class="hero">

         <video class="video-player back-video"  preload="auto" autoplay="autoplay" loop muted playsinline>
            <source
              src='/gocciablu.mp4' 
              type="video/mp4"
            />
          </video>
          <!--<img class="back-video1" src="/slporta.jpg" alt="">-->

          <nav>
            <ul>
                <li>
                  <router-link :to="{ name: 'ProjectList' }">
                    PROJECT
                 </router-link>
                </li>
            </ul>
            
            <ul>
                <li>
                  <router-link :to="{ name: 'Info' }">
                   INFO
                  </router-link>
                </li>
            </ul>
          </nav>
          <div class="content">
            <div>
            <h1 class="mb-1 ">SIMONE LOMBARDI</h1>
            <h2 >FULL STACK WEB DEVELOPER</h2>
            <router-link :to="{ name: 'ProjectList' }" class="explorebutton">
               Explore
            </router-link>
            
            </div>
            <div>
                <img class="logo" src="/ultimatelogo.png" alt="">
            </div>
          </div>
          
        </div>
     
      </body>
</template>

<style>


</style>
