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
        <h1 class="text-center mb-2"><span class="reclametitle">RECLAME </span>IT</h1>
        <div class="d-flex flex-column justify-content-center align-items-center">

            <div id="carouselExampleControls" class="carousel slide col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 p-3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/reclameit1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/reclameit2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/reclameit3.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/reclameit4.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                            <img src="/reclameit5.png" class="d-block w-100" alt="...">
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
                <p>Il progetto è stato realizzato per <span class="text-secondary">Reclame It</span> ,un'azienda che si occupa di sicurezza digitale e del recupero di account hackerati.
                        </p>
                <p>Il sito punta a esporre tutti i servizi,le garanzie, e l'aiuto che l'azienda può fornire in determinate situazioni,sposando un design semplice e moderno.</p>
                <p>L'utilizzo di anmiazioni,come il change delle parole nella parte principale del sito,o i contenuti a comparsa nel momento dello scorrimento,lo rendono un sito dinamico e che cattura l'attenzione di chi lo sta visionando.</p>
            </div>
            <div>
                <img class="logo2" src="/blacklogo.png" alt="">
            </div>
        </div>

    </body>
</template>

<style>
.reclametitle{
  color: #e7e5e2;
}
</style>
