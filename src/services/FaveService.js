import Api from "@/services/Api";

export default {
  index() {
    return Api().get("fave");
  },
  show(faveId) {
    return Api().get(`fave/${faveId}`);
  },
  add(fave) {
    return Api().post("fave", fave);
  },
  delete(fave) {
    return Api().delete(`fave/${fave.id}`);
  },
  deleteAll() {
    return Api().delete("fave");
  },
};
