const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumber-json",
  reportPath: "./cypress/cucumber-report",
  metadata: {
    browser: {
      name: "chrome",
      version: "121",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "freecrm" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Feb 17th 2024" },
      { label: "Execution End Time", value: "Feb 17th 2024" },
    ],
  },
});