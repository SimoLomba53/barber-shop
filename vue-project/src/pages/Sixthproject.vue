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
        <h1 class="text-center mb-2"><span class="netflixtitle">NETFLIX</span> WEBSITE REMAKE</h1>
        <div class="d-flex flex-column justify-content-center align-items-center">
            
            <div id="carouselExampleControls" class="carousel slide col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 p-3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/boolfix1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/boolfix2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/boolfix3.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/boolfix4.png" class="d-block w-100" alt="...">
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
                <p>Esso consiste nel ricreare,in ogni minimo dettaglio,la parte estetica e logistica del sito web di <span class="text-danger">Netflix</span>,una società statunitense operante nella distribuzione streaming via Internet di film, serie televisive e altri contenuti d'intrattenimento a pagamento. Fu fondata da Reed Hastings e Marc Randolph il 29 agosto 1997 a Scotts Valley, in California.</p>
                <p>L'obiettivo del progetto era affinare le proprie capacità grafiche e visive,individuando i tratti
                    particolari del sito e replicandopli utilizzando le tecnologie di HTML e CSS,e renderlo funzionante tramite un API.</p>
                <p>Per esempio,se si ricerca un film o un regista,escono fuori tutti i film collegati alla parola chiave utilizzata o girati dal che si ha ricercato.</p>
                <p>Passando il mouse sulla card,essa si capovolgerà,e si potranno visualizzare tutti i dettagli del prodotto,come il titolo,la descrizione,la votazione che esso ha ottenuto dalle critiche,e la nazione di cui è originario.</p>
            </div>
            <div>
                <img class="logo2" src="/blacklogo.png" alt="">
            </div>
        </div>

    </body>
</template>

<style>

.netflixtitle{
    color: #e15b68;
}

</style>
