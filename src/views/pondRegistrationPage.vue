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
          v-model="name"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Lokasi Kolom</ion-label>
        <ion-input
          :clear-on-edit="true"
          placeholder="Blok A"
          v-model="location"
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
        <ion-select v-model="shape">
          <ion-select-option value="Bundar">Bundar</ion-select-option>
          <ion-select-option value="Persegi">Persegi</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-button @click.prevent="submitRegister()">Registrasi</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
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
      location: "",
      material: "",
      shape: "",
    };
  },
  methods: {
    submitRegister() {
      let dataRegist = {
        name: this.nama,
        location: this.location,
        shape: this.shape,
        material: this.material,
      };

      axios
        .post("http://127.0.0.1:5000/registerPond", dataRegist, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
});
</script>
