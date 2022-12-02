import Api from "@/services/Api";

export default {
  index() {
    return Api().get("report");
  },
  show(reportId) {
    return Api().get(`report/${reportId}`);
  },
  add(report) {
    return Api().post("report", report);
  },
  delete(report) {
    return Api().delete(`report/${report.id}`);
  },
  deleteAll() {
    return Api().delete("report");
  },
};
