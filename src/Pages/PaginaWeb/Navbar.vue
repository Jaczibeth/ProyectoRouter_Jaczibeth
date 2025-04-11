<script>
import Logo from "C:/Users/jaczi/Documents/PaginaWebJaczibeth/src/assets/IMG/Logo.png"

export default{
    data() {
        return {
            Logo
        }
    }
};
</script>
<template>
    <nav class="navbar navbar-expand-lg custom-bg" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img width="180" height="70" :src="Logo" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#inicio">INICIO</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#acercade">ACERCA DE</a>
                    </li>
                    <li  class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false" hreflang="#carrusel">
                            CAFES
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="nav-link" aria-disabled="">CALIENTES</a></li>
                            <li><a class="dropdown-item" href="#">EXPRESS</a></li>
                            <li><a class="dropdown-item" href="#">LATTE</a></li>

                            <li>
                                <hr class="dropdown-divider">FRIOS
                            </li>
                            <li><a class="dropdown-item" href="#">FRAPPE</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">OPINIONES</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2 input-bg" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn  btn-warning button-bg" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>
