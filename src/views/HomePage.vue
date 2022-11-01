<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <nav>
          <h1>Home</h1>
        </nav>
      </header>

      <main>
        <section class="dashboard">
          <div class="card-dashboard">
            <h3>Kolam</h3>
            <p>10</p>
          </div>
          <div class="card-dashboard">
            <h3>Kolam Aktif</h3>
            <p>8</p>
          </div>
          <div class="card-dashboard">
            <h3>Ikan Hidup</h3>
            <p>182 <span>Ekor</span></p>
          </div>
          <div class="card-dashboard">
            <h3>Ikan Mati</h3>
            <p>89 <span>Ekor</span></p>
          </div>
          <div class="card-dashboard">
            <h3>Panen 2022</h3>
            <p>109 <span>Kg</span></p>
          </div>
          <div class="card-dashboard">
            <h3>Total Pakan</h3>
            <p>223 <span>Kg</span></p>
          </div>
        </section>

        <section class="berat-ikan">
          <h2>TOTAL BERAT IKAN</h2>
          <div class="card-bi-container">
            <div class="card-bi">
              <img src="assets/img/lele 1.png" alt="lele" width="150" />
              <h3>LELE</h3>
              <p>200 Kg</p>
            </div>
            <div class="card-bi">
              <img src="assets/img/lele 1.png" alt="lele" width="150" />
              <h3>LELE</h3>
              <p>200 Kg</p>
            </div>
          </div>
        </section>

        <section class="kualitas-air">
          <h2>KUALITAS AIR</h2>
          <div class="card-ka-container">
            <div class="card-ka">
              <h3>pH</h3>
              <p>Normal <span>6 Kolam</span></p>
              <p>Abnormal <span>6 Kolam</span></p>
            </div>
            <div class="card-ka">
              <h3>pH</h3>
              <p>Normal <span>6 Kolam</span></p>
              <p>Abnormal <span>6 Kolam</span></p>
            </div>
          </div>
        </section>
      </main>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
export default defineComponent({
  name: "Tab1Page",
  components: {
    IonPage,
    IonContent,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

header,
main {
  background-color: #1f1d2b;
}
header {
  position: fixed;
  width: 100%;
}

nav {
  margin: 10px 24px;
}

main {
  margin-top: 48px;
  height: 100vh;
}

.dashboard {
  display: flex;
  flex-wrap: wrap;
  margin-right: 24px;
  margin-left: 24px;
  padding-top: 10px;
  gap: 16px 40px;
}

.card-dashboard {
  background-color: white;
  color: #1f1d2b;
  padding: 8px;
  width: 163px;
  height: 85px;
  border-radius: 14px;
}

.card-dashboard h3,
.card-bi h3 {
  font-size: 18px;
  font-weight: 600;
}

.card-dashboard p {
  font-size: 30px;
  font-weight: 700;
}

.card-dashboard p span {
  font-size: 20px;
  font-weight: 500;
}

.berat-ikan,
.kualitas-air {
  margin-right: 24px;
  margin-left: 24px;
  padding-top: 18px;
}

.card-bi-container,
.card-ka-container {
  margin-top: 14px;
  display: flex;
  gap: 0px 30px;
}

.card-bi,
.card-ka {
  background-color: white;
  color: #1f1d2b;
  padding: 20px;
  border-radius: 14px;
}

.card-bi p {
  color: #2c96f1;
  font-size: 20px;
  font-weight: 600;
}

.card-ka {
  padding: 8px;
}
.card-ka h3 {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 12px;
}
.card-ka p {
  font-size: 16px;
  font-weight: 400;
}

.card-ka p span {
  color: #2c96f1;
  font-weight: 600;
}
</style>
