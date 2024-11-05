<template>
  <div style="text-align: center">
    <h1>Personajes de la serie: {{ serie.nombre }}</h1>
    <div v-if="personajesFiltrados.length === 0">
      <p>No hay personajes disponibles para esta serie.</p>
    </div>
    <ul v-else style="list-style: none">
      <li v-for="personaje in personajesFiltrados" :key="personaje.idPersonaje">
        <p>
          <strong>Nombre:</strong> {{ personaje.nombre }} <br />
          <strong>ID Serie:</strong> {{ personaje.idSerie }}
        </p>
        <img
          :src="personaje.imagen"
          alt="Imagen del personaje"
          style="width: 15%"
        />
      </li>
    </ul>
    <button @click="volver" class="btn btn-primary mt-3">
      Volver a la serie
    </button>
  </div>
</template>

<script>
import ServicePersonajes from "@/services/servicePersonajes";
import ServiceSeries from "@/services/serviceSeries";

export default {
  data() {
    return {
      serie: {}, // Información de la serie
      personajes: [], // Todos los personajes
      personajesFiltrados: [], // Personajes filtrados por idSerie
    };
  },
  mounted() {
    this.cargarSerie();
    this.cargarPersonajes();
  },
  methods: {
    // Método para cargar los detalles de la serie
    cargarSerie() {
      const idSerie = this.$route.params.idSerie;
      const serviceS = new ServiceSeries();
      serviceS
        .getSerieById(idSerie)
        .then((data) => {
          this.serie = data;
        })
        .catch((error) => {
          console.error("Error al cargar la serie:", error);
        });
    },
    // Método para cargar y filtrar los personajes
    cargarPersonajes() {
      const idSerie = this.$route.params.idSerie;
      const serviceP = new ServicePersonajes();
      serviceP
        .getAllPersonajes()
        .then((data) => {
          // Filtramos los personajes que coincidan con el idSerie
          this.personajesFiltrados = data.filter(
            (personaje) => personaje.idSerie == idSerie
          );
          console.log("Personajes filtrados:", this.personajesFiltrados);
        })
        .catch((error) => {
          console.error("Error al cargar los personajes:", error);
        });
    },
    volver() {
      this.$router.push(`/series/${this.$route.params.idSerie}`);
    },
  },
};
</script>

<style scoped>
/* Estilos para centrar la imagen y el contenido */
.container {
  text-align: center;
}
</style>
