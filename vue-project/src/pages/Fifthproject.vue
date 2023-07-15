<script setup>
import AOS from "aos";
AOS.init();
</script>

<template>
    <body>
        <div class="projectnavbar">
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
        </div>
        <h1 class="text-center mb-2"><span class="airbnbtitle">AIRBNB</span> WEBSITE REMAKE</h1>
        <div class="d-flex flex-column justify-content-center align-items-center">

            <div id="carouselExampleControls" class="carousel slide col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 p-3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/boolbnb1def.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/boolbnbdef2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/boolbnbdef3.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/boolbnbdef4.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/boolbnbdef5.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/boolbnbdef6.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/boolbnbdef7.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/boolbnbdef8.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/boolbnbdef9.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="col-10 text-center p-1">
                <p>Il progetto è stato realizzato per il corso intensivo di sviluppo web di <span
                        class="text-success">Boolean.</span></p>
                <p>Esso consiste di ricreare in team,una versione di <span class="airbnbtitle">AirBnb</span>,un portale online statunitense che mette in contatto persone in cerca di un alloggio o di una camera per brevi periodi, con persone che dispongono di uno spazio extra da affittare, generalmente privati.</p>
                <p>L'obiettivo del progetto era ricreare la piattaforma in maniera completa e funzionante al 100%.</p>
                <p>La web app è munita di una parte per gli utenti,in cui è possibile ricercare un appartamento in qualsiasi città,visualizzandone i dettagli,gli optional,e le varie caratteristiche,per poi contattare l'host e confermarne la prenotazione,e di una seconda parte,a cui si ha accesso registrandosi,in cui è possibile pubblicare un proprio appartamento,gestirlo al 360 gradi,sponsorizzarlo,e rispondere agli utenti interessati.</p>
            </div>
            <div>
                <img class="logo2" src="/blacklogo.png" alt="">
            </div>
        </div>

    </body>
</template>

<style>
 .airbnbtitle{
    color: #e4baa1;
 }

 
</style>
