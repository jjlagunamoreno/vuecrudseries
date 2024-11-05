<template>
  <div class="container mt-5">
    <div v-if="serie">
      <h1>{{ serie.nombre }}</h1>
      <img
        :src="serie.imagen"
        alt="Imagen de la serie"
        class="img-fluid"
        style="width: 40%"
      />
      <p><strong>Año:</strong> {{ serie.anyo }}</p>
      <p><strong>Puntuación:</strong> {{ serie.puntuacion }}</p>
      <router-link
        :to="'/series/' + serie.idSerie + '/personajes'"
        class="btn btn-info mt-3"
      >
        Ver Personajes de esta Serie
      </router-link>
    </div>
    <div v-else>
      <p>Cargando datos de la serie...</p>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "@/services/serviceSeries";

const service = new ServiceSeries();

export default {
  name: "SerieComponent",
  data() {
    return {
      serie: null,
      loading: false, // Indicador para el estado de carga
    };
  },
  mounted() {
    // Obtenemos el idSerie de la URL cuando el componente se monta por primera vez
    this.cargarSerie();
  },
  methods: {
    cargarSerie() {
      const idSerie = this.$route.params.idSerie;
      this.loading = true; // Mostramos el indicador de carga
      service
        .getSerieById(idSerie)
        .then((result) => {
          this.serie = result;
          this.loading = false; // Ocultamos el indicador de carga una vez obtenida la serie
        })
        .catch((error) => {
          console.error("Error al cargar los detalles de la serie:", error);
          this.loading = false;
        });
    },
  },
  watch: {
    "$route.params.idSerie"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.loading = true; // Indicador de carga mientras se obtiene la nueva serie
        // Llamamos a cargarSerie con el nuevo idSerie
        this.cargarSerie();
      }
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
