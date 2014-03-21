Package.describe({
  summary: "Mapbox.js module for meteor"
});

Package.on_use(function (api, where) {
  api.add_files('lib/mapbox.js', ['client']);
  api.add_files('lib/mapbox.css', ['client']);
  api.export('L', 'client');
});