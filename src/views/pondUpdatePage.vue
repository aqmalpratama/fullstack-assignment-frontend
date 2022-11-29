<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Edit Kolam</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item>
        <ion-label position="stacked">Nama Kolam</ion-label>
        <ion-input :clear-input="true" v-model="name"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Lokasi Kolom</ion-label>
        <ion-input :clear-on-edit="true" v-model="location"></ion-input>
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

      <ion-button @click.prevent="submitEdit()">Edit</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
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
  name: "pondUpdatePage",
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
  setup() {
    const URL = window.location.href;
    const id = URL.split("/").pop();
    const dataPond = ref({});

    onMounted(async () => {
      const response = await axios.get(`http://127.0.0.1:5000/pond/${id}`);
      dataPond.value = response.data[0];
    });

    return {
      id,
      dataPond,
    };
  },
  methods: {
    submitEdit() {
      let dataUpdate = {
        name: this.name,
        location: this.location,
        shape: this.shape,
        material: this.material,
      };
      const id = this.$route.params.id;
      axios
        .put(`http://127.0.0.1:5000/pond/${id}`, dataUpdate, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      name: "",
      location: "",
      shape: "",
      material: "",
    };
  },
});
</script>
