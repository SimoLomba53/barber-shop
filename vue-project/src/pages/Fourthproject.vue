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
        <h1 class="text-center mb-2"><span class="playstationtitle">PLAYSTATION </span>WEBSITE REMAKE</h1>
        <div class="d-flex flex-column justify-content-center align-items-center">

            <div id="carouselExampleControls" class="carousel slide col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 p-3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/ps1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/ps2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/ps3.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/ps4.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/ps5.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/ps6.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/ps7.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/ps8.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/ps9.png" class="d-block w-100" alt="...">
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
                <p>Esso consiste nel ricreare,in ogni minimo dettaglio,la parte estetica del sito web di PlayStation,in cui sono presenti tutte le nuove offerte,i nuovi giochi egli abbonamenti della piattaforma.</p>
                <p>L'obiettivo del progetto era affinare le proprie capacità grafiche e visive,individuando i tratti
                    particolari del sito e replicandopli utilizzando le tecnologie di HTML e CSS.</p>
            </div>
            <div>
                <img class="logo2" src="/blacklogo.png" alt="">
            </div>
        </div>

    </body>
</template>

<style>
.playstationtitle{
    color: #0171d1;
}
</style>
