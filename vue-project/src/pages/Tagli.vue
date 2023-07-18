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
        <h1 class="text-center mb-2"><span class="droptitle">DROPBOX</span> WEBSITE REMAKE</h1>
        <div class="d-flex flex-column justify-content-center align-items-center">

            <div id="carouselExampleControls" class="carousel slide col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 p-3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/dropbox1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/dropbox2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/dropbox3.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/dropbox4.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/dropbox5.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/dropbox6.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/dropbox7.png" class="d-block w-100" alt="...">
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
                <p>Esso consiste nel ricreare,in ogni minimo dettaglio,la parte estetica del sito web di DropBox,un servizio
                    di file hosting gestito dalla società californiana Dropbox Inc., che offre cloud storage,
                    sincronizzazione automatica dei file, cloud personale e software client.</p>
                <p>L'obiettivo del progetto era affinare le proprie capacità grafiche e visive,individuando i tratti
                    particolari del sito e replicandopli utilizzando le tecnologie di HTML e CSS.</p>
            </div>
        </div>
        <div>
            <img class="logo2" src="/blacklogo.png" alt="">
        </div>

    </body>
</template>

<style>
.droptitle{
    color: #b4d0e7;
}
</style>
