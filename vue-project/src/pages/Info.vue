<script setup>
import AOS from "aos";
AOS.init();
</script>

<template>

  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <body class="infobody">
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
    <div class="col-12 backcolor">
    <div class="col-10 offset-1 infotextcont">
       <div class="col-12 mb-5 d-flex flex-row">
         <div class="col-8">
           <h1 class="firstinfotext"><span class="fst-italic text-secondary">Simone Lombardi </span>is a Full Stack Web Developer from Turin,Italy.</h1>
         </div>
         <div class="col-4">
           
         </div>
       </div>
       <div class="col-12 d-flex flex-row">
         <div class="col-4">

         </div>
         <div class="col-8">
           <p data-aos="fade-up" data-aos-duration="1000" class="secondinfotext"><span class="text-secondary">Simone</span>  decides to deepen his passion for technology as much as possible, as he considers it fundamental and at the center of our future. Sharpen your full stack developer skills with <span class="text-success">Boolean</span> , a very important intensive programming course,and he follows the awards in 2023.
             He loves creating effects and animations that stand out, taking care of the aesthetic factor of a web page, and giving it a particular style that manages to stand out.
             He is an extroverted, sunny and motivated person who loves interacting with others and making the most of every new acquaintance. Besides technology, his further passions are travelling, music and sports.</p>
         </div>
       </div>
    </div>
    <div>
        <img class="logo2" src="/blacklogo.png" alt="">
    </div>
    </div>
  </body>
</template>

<style>
  
</style>
