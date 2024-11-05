<template>
  <div class="container mt-5">
    <h1 class="text-center">Crear Personaje</h1>
    <form @submit.prevent="insertarPersonaje" class="mt-3">
      <div class="form-group">
        <label>Nombre</label>
        <input
          v-model="personaje.nombre"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label>Imagen URL</label>
        <input
          v-model="personaje.imagen"
          type="text"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label>Serie</label>
        <select v-model="personaje.idSerie" class="form-control" required>
          <option
            v-for="serie in series"
            :key="serie.idSerie"
            :value="serie.idSerie"
          >
            {{ serie.nombre }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Crear</button>
    </form>
  </div>
</template>

<script>
import servicePersonajes from "@/services/servicePersonajes";
import serviceSeries from "@/services/serviceSeries";

const serviceP = new servicePersonajes();
const serviceS = new serviceSeries();

export default {
  name: "CreatePersonaje",
  data() {
    return {
      personaje: {
        nombre: "",
        imagen: "",
        idSerie: null,
      },
      series: [],
    };
  },
  methods: {
    cargarSeries() {
      serviceS.getSeries().then((result) => {
        this.series = result;
      });
    },
    insertarPersonaje() {
      serviceP.insertarPersonaje(this.personaje).then(() => {
        alert("Personaje creado correctamente.");
        this.$router.push("/series/" + this.personaje.idSerie);
      });
    },
  },
  mounted() {
    this.cargarSeries();
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>
