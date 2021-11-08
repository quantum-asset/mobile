import axios from "axios";
import { ENDPOINT } from "../globals/endpoint";
import { ResponseController } from "./ResponseController";

export class TomaInventarioController {
  static list = async (ID_USUARIO) => {
    try {
      const result = await axios.get(`${ENDPOINT}/toma-inventario/usuario/${ID_USUARIO}`);
      //console.log("login", result);
      if (!result || !result.data || !result.data.payload) {
        return ResponseController.error(
          "Ocurrio un error de conexión, por favor intentelo denuevo mas tarde. Si el error persiste, contacte al administrador de Quantum Asset"
        );
      }
      const { status, payload, message } = result.data;
      return ResponseController.ok(status, message, payload);
    } catch (error) {
      return ResponseController.error(
        "Ocurrio un error inesperado. Si el error persiste, contacte al administrador de Quantum Asset"
      );
    }
  };
  static store = async (data) => {};
  static edit = async (id, data) => {};
}
