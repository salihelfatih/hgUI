import ReportService from "../../services/ReportService";

export default {
  namespaced: true,
  state: {
    reports: [],
    report: null,
  },
  getters: {
    reports: (state) => state.reports,
  },
  actions: {
    async getReports({ commit }) {
      const response = await ReportService.index();
      commit("SET_REPORTS", response.data);
    },
    async getReport({ commit }, reportId) {
      const response = await ReportService.show(reportId);
      commit("SET_REPORT", response.data);
    },
    async filteredReports({ commit }, filter) {
      const response = await ReportService.filter(filter);
      commit("SET_REPORTS", response.data);
    },
    async createReport({ commit }, report) {
      const response = await ReportService.post(report);
      commit("SET_REPORT", response.data);
    },
    async updateReport({ commit }, report) {
      const response = await ReportService.put(report);
      commit("SET_REPORT", response.data);
    },
    async deleteReport({ commit }, reportId) {
      await ReportService.delete(reportId);
      commit("DELETE_REPORT", reportId);
    },
  },
  mutations: {
    SET_REPORTS(state, reports) {
      state.reports = reports;
    },
    SET_REPORT(state, report) {
      state.report = report;
    },
    DELETE_REPORT(state, reportId) {
      state.reports = state.reports.filter((report) => report.id !== reportId);
    },
  },
};
