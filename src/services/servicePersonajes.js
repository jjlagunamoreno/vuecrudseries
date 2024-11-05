import axios from "axios";
import Global from "@/Global";

export default class ServicePersonajes {
    // Método para obtener todos los personajes
    getAllPersonajes() {
        return new Promise((resolve, reject) => {
            let request = "api/Personajes";
            let url = Global.urlApiSeries + request;
            axios
                .get(url)
                .then((response) => {
                    resolve(response.data); // Devolvemos todos los personajes
                })
                .catch((error) => {
                    reject(error);
                    console.error("Error al obtener todos los personajes:", error);
                });
        });
    }

    insertarPersonaje(personaje) {
        return new Promise((resolve, reject) => {
            let request = "api/Personajes";
            let url = Global.urlApiSeries + request;
            axios
                .post(url, personaje)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                    console.error("Error al insertar el personaje:", error);
                });
        });
    }
}
