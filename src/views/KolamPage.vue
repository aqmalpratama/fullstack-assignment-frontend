<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <header>
        <nav>
          <h1>Kolam</h1>
          <div class="icon-container">
            <ion-icon :icon="list" size="small"></ion-icon>
            <ion-icon :icon="funnel" size="small"></ion-icon>
          </div>
        </nav>
      </header>

      <main>
        <section class="kolam-list">
          <div class="card-kl">
            <div class="card-kl-header">
              <h3>Alpha</h3>
              <button class="btn btn-aktif">Aktif</button>
            </div>
            <div class="card-kl-info">
              <p><ion-icon :icon="calendar"></ion-icon> 01-09-2022</p>
              <p><ion-icon :icon="calendarNumber"></ion-icon> 90 Hari</p>
              <p><ion-icon :icon="fish"></ion-icon> 200 Ekor</p>
            </div>
          </div>
          <div class="card-kl">
            <div class="card-kl-header">
              <h3>Beta</h3>
              <button class="btn btn-nonaktif">Tidak Aktif</button>
            </div>
            <div class="card-kl-info">
              <p><ion-icon :icon="calendar"></ion-icon> 01-09-2022</p>
              <p><ion-icon :icon="calendarNumber"></ion-icon> 90 Hari</p>
              <p><ion-icon :icon="fish"></ion-icon> 200 Ekor</p>
            </div>
          </div>
          <div class="card-kl">
            <div class="card-kl-header">
              <h3>Charlie</h3>
              <button class="btn btn-aktif">Aktif</button>
            </div>
            <div class="card-kl-info">
              <p><ion-icon :icon="calendar"></ion-icon> 01-09-2022</p>
              <p><ion-icon :icon="calendarNumber"></ion-icon> 90 Hari</p>
              <p><ion-icon :icon="fish"></ion-icon> 200 Ekor</p>
            </div>
          </div>
          <div class="card-kl">
            <div class="card-kl-header">
              <h3>Delta</h3>
              <button class="btn btn-aktif">Aktif</button>
            </div>
            <div class="card-kl-info">
              <p><ion-icon :icon="calendar"></ion-icon> 01-09-2022</p>
              <p><ion-icon :icon="calendarNumber"></ion-icon> 90 Hari</p>
              <p><ion-icon :icon="fish"></ion-icon> 200 Ekor</p>
            </div>
          </div>
          <div class="card-kl">
            <div class="card-kl-header">
              <h3>Epsilon</h3>
              <button class="btn btn-aktif">Aktif</button>
            </div>
            <div class="card-kl-info">
              <p><ion-icon :icon="calendar"></ion-icon> 01-09-2022</p>
              <p><ion-icon :icon="calendarNumber"></ion-icon> 90 Hari</p>
              <p><ion-icon :icon="fish"></ion-icon> 200 Ekor</p>
            </div>
          </div>
        </section>
      </main>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <button class="btn-add">+</button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent, IonIcon, IonFab, IonFabButton } from "@ionic/vue";
import {
  list,
  funnel,
  fish,
  calendar,
  calendarNumber,
  add,
} from "ionicons/icons";

export default defineComponent({
  name: "Tab2Page",
  components: {
    IonPage,
    IonContent,
    IonIcon,
    IonFab,
  },
  setup() {
    return {
      list,
      funnel,
      fish,
      calendar,
      calendarNumber,
      add,
    };
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

nav {
  margin: 10px 24px;
  display: flex;
  justify-content: space-between;
}
.icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
}
header {
  position: fixed;
  width: 100%;
}
main {
  margin-top: 48px;
  height: 1200px;
}

.kolam-list {
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  margin-left: 24px;
  padding-top: 10px;
  row-gap: 24px;
}

.card-kl {
  background-color: white;
  padding: 24px;
  color: black;
  border-radius: 16px;
}

.card-kl-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
}

.btn {
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
}

.btn-aktif {
  background-color: #1b7c1a;
}

.btn-nonaktif {
  background-color: #952229;
}

.card-kl-info {
  margin-top: 10px;
}

.btn-add {
  background-color: #6c5ecf;
  color: white;
  border: none;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  font-size: 48px;
  font-weight: 600;
  text-align: center;
}
</style>
