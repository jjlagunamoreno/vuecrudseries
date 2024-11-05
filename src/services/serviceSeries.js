import axios from "axios";
import Global from "@/Global";

export default class ServiceSeries {
  getSeries() {
    return new Promise((resolve, reject) => {
      let request = "api/Series";
      let url = Global.urlApiSeries + request;
      axios
        .get(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          console.error("Error al obtener las series:", error);
        });
    });
  }

  // Nuevo método para obtener una serie por su id
  getSerieById(idSerie) {
    return new Promise((resolve, reject) => {
      let request = `api/Series/${idSerie}`;
      let url = Global.urlApiSeries + request;
      axios
        .get(url)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          console.error("Error al obtener la serie:", error);
        });
    });
  }
}
