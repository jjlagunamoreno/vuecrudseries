<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container-fluid">
        <img
          src="@/assets/images/logo.png"
          alt="imagen-logo"
          style="width: 5%"
        />

        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" :to="'/'"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="'/createpersonaje'"
                >Nuevo personaje</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="'/updatepersonaje'"
                >Modificar personaje</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Series</a
              >
              <ul class="dropdown-menu">
                <li v-for="serie in series" :key="serie.idSerie">
                  <router-link
                    class="dropdown-item"
                    :to="'/series/' + serie.idSerie"
                    >{{ serie.nombre }}</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
          <form role="search">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceSeries from "@/services/serviceSeries";

const service = new ServiceSeries();

export default {
  name: "MenuComponent",
  data() {
    return {
      series: [],
    };
  },
  mounted() {
    // Llama al servicio para obtener las series al montar el componente
    service
      .getSeries()
      .then((result) => {
        this.series = result;
      })
      .catch((error) => {
        console.error("Error al cargar las series:", error);
      });
  },
};
</script>
