var events = [
  {'Date': new Date(2019, 10, 18), 'Title': 'Event1'},
  {'Date': new Date(2019, 10, 19), 'Title': 'Event2'},
  {'Date': new Date(2019, 10, 20), 'Title': 'Event2'},
  {'Date': new Date(2019, 10, 21), 'Title': 'Event2'},
  {'Date': new Date(2019, 10, 22), 'Title': 'Event2'},
  {'Date': new Date(2019, 10, 20), 'Title': 'Event3'},
  {'Date': new Date(2019, 10, 23), 'Title': 'Event4'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
