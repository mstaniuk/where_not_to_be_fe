<template>
    <div class="top-bar">
        <div class="top-bar__left">
            <div class="top-bar__menu-btn" @click="menuExpanded = !menuExpanded">
                <i v-if="!menuExpanded" class="icon icon-hamburger" />
                <i v-else class="icon icon-hamburger" />
            </div>
        </div>
        <div class="top-bar__center">
            <img class="app-logo" :src="AppLogo" alt="Avoidly application logo" />
        </div>
        <div class="top-bar__right"></div>
    </div>
</template>

<script>
import AppLogo from "@/assets/images/AppLogo.svg";

export default {
    name: "TopBar",

    data() {
        return {
            AppLogo,
            menuExpanded: false 
        }
    }
}
</script>

<style lang="scss">
    .top-bar {
        height: $topbar-height;
        text-align: center;
        width: 100vw;
        background-color: lighten($color-navy, 10%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;

        &__menu-btn {
            cursor: pointer;
            width: $menu-btn-size;
            height: $menu-btn-size;
            text-align: center;
            font-size: 40px;
            color: $color-white;

            i {
                line-height: $menu-btn-size;
            }
        }
    }
</style>