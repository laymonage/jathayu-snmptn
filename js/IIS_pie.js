// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Status', 'Jumlah'],
  ['Lolos', 1],
  ['Lolos pilihan 1', 6],
  ['Lolos pilihan 2', 0],
  ['Belum lolos', 12],
  ['Tidak ada data', 10]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Statistik SNMPTN Jathayu 57', 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}