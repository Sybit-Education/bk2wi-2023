<script setup lang="ts"></script>


<template>
    <BNavbar toggleable="sm" variant="primary" v-b-color-mode="'dark'">
        <BNavbarBrand tag="h1" class="mb-0" to="/">Localee</BNavbarBrand>

        <BNavbarToggle target="nav-text-collapse" />

        <BCollapse id="nav-text-collapse" is-nav>
            <BNavbarNav>
                <BNavItem to="/verleih">Verleihe</BNavItem>
                <BNavItem to="/events">Events</BNavItem>
                <BNavItem to="/about">Über uns</BNavItem>
               
            </BNavbarNav>
        </BCollapse>
    </BNavbar>
</template>



<style scoped>
    h1{
        text-align: center;
    }

    

</style>