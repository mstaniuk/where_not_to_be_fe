<template>
  <section id="advertising" class="page">
    <PageHead>
      <template v-slot:title>
        Advertising
      </template>

      <template v-slot:text>
        Thank you for being with us! Here you can look closer at out special
        advertising program.
      </template>

      <template v-slot:buttons>
        <div class="advertising__adscore">
          <span>Current AdScore</span>
          <span>10 284</span>
        </div>
      </template>
    </PageHead>

    <div class="advertising">
      <article class="advertising__content">
        <h2 class="advertising__heading">
          The mission
        </h2>
        <p>
          We truly believe that together we can make the world a better place to
          live. Our mission is to help people stay safe and well-informed,
          especially in tough times of global risk.
        </p>
        <p>
          That's why we decided to provide some advertising area in our app. We
          work
          <strong>100% pro bono</strong>, but the needs generated by the crisis
          are growing too fast.
        </p>
        <img class="advertising__illustration" :src="illustration" />
        <h2 class="advertising__heading">
          How it works?
        </h2>
        <p>
          Avoidly counts some points called <strong>Adscore</strong>. This
          number increases everytime when someone does a good thing for society,
          like staying at home or helping someone with shopping.
        </p>
        <p>
          The more Adscore you buy, the longer your ad will be visible to users.
          Currently the rate is <strong>1 ad point = 20$</strong>
        </p>
        <p class="advertising__conclusion">
          We spend all incomes for fighting the crisis!
        </p>
        <ul>
          <li>we bought more than <strong>200 000</strong> masks</li>
          <li>
            we delivered around <strong>100 000</strong> meals to doctors and
            nurses
          </li>
          <li>
            we provided over 5000 litres of cleaning supplies to schools and
            universities
          </li>
        </ul>

        <div class="advertising__cta">
          <p>
            Saving the world has never been easier! Promote your project and
            fight the crisis with us!
          </p>
          <button class="btn btn--filled btn--red">BUY ADVERTISEMENT</button>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import PageHead from "@/components/PageHead.vue";
import illustration from "@/assets/images/ads-illustration.svg";

export default {
  name: "Advertising",

  components: { PageHead },

  data() {
    return {
      illustration
    };
  }
};
</script>
