Package.describe({
  summary: "A wrapper package for the Humane.js notification library."
});

Package.on_use(function (api, where) {
  api.add_files(['humane.min.js', 'themes/libnotify.css', 'themes/bigbox.css', 'themes/boldlight.css', 'themes/jackedup.css', 'themes/original.css'], 'client');  
});