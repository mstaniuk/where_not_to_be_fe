export const adscore = {
  options: {
    chart: {
      id: "adscore-chart"
    },
    xaxis: {
      categories: ["01-2020", "02-2020", "03-2020", "04-2020", "05-2020"]
    }
  },
  series: [
    {
      name: "Total result",
      data: [4920, 6210, 8701, 7938, 10284]
    }
  ]
};

export const users = {
  options: {
    chart: {
      id: "users-chart",
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ["01-2020", "02-2020", "03-2020", "04-2020", "05-2020"]
    },
    fill: {
      colors: ["#302b5c"]
    },
    stroke: {
      colors: ["#302b5c"],
      width: 1.5
    },
    tooltip: {
      enabled: false
    },
    dataLabels: {
      style: {
        colors: ["#302b5c"]
      },
      offsetY: -5,
      background: {
        enabled: false
      }
    }
  },
  series: [
    {
      name: "Users",
      data: [200, 803, 1314, 2208, 5492]
    }
  ]
};

export const cured = {
  options: {
    chart: {
      id: "cured-chart",
      toolbar: {
        show: false
      }
    },
    xaxis: {
      categories: ["01-2020", "02-2020", "03-2020", "04-2020", "05-2020"]
    },
    fill: {
      colors: ["#47b932"]
    },
    stroke: {
      colors: ["#47b932"],
      width: 1.5
    },
    tooltip: {
      enabled: false
    },
    dataLabels: {
      style: {
        colors: ["#fff"]
      },
      offsetY: -5,
      background: {
        enabled: false
      }
    }
  },
  series: [
    {
      name: "Cured people",
      data: [110, 291, 543, 682, 893]
    }
  ]
};

export const donations = {
  options: {
    chart: {
      id: "donations-chart",
      toolbar: {
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        }
      }
    },
    xaxis: {
      categories: ["01-2020", "02-2020", "03-2020", "04-2020", "05-2020"]
    },
    fill: {
      colors: ["#eca58d"]
    },
    stroke: {
      colors: ["#eca58d"],
      width: 1.5
    },
    tooltip: {
      enabled: false
    },
    dataLabels: {
      style: {
        colors: ["#bf5754"]
      },
      offsetY: -5,
      background: {
        enabled: false
      }
    }
  },
  series: [
    {
      name: "Cured people",
      data: [10029, 11228, 11575, 11128, 12383]
    }
  ]
};
