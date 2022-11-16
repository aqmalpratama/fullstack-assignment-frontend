<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Registrasi Kolam</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item>
        <ion-label position="stacked">Nama Kolam</ion-label>
        <ion-input
          :clear-input="true"
          placeholder="Kolam 1"
          v-model="nama"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Lokasi Kolom</ion-label>
        <ion-input
          :clear-on-edit="true"
          placeholder="Blok A"
          v-model="lokasi"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Material Kolam</ion-label>
        <ion-select v-model="material">
          <ion-select-option value="Tanah">Tanah</ion-select-option>
          <ion-select-option value="Pasir">Pasir</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Bentuk Kolam</ion-label>
        <ion-select v-model="bentuk">
          <ion-select-option value="Bundar">Bundar</ion-select-option>
          <ion-select-option value="Persegi">Persegi</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-button @click.prevent="getFormData()">Registrasi</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/vue";

export default defineComponent({
  name: "pondRegistrationPage",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
  },
  data() {
    return {
      nama: "",
      lokasi: "",
      material: "",
      bentuk: "",
    };
  },
  methods: {
    getFormData() {
      // console.log(this.nama);
      // console.log(this.lokasi);
      // console.log(this.material);
      // console.log(this.bentuk);

      let pond = {
        nama: this.nama,
        lokasi: this.lokasi,
        material: this.material,
        bentuk: this.bentuk,
      };
      console.log(pond);
    },
  },
});
</script>
