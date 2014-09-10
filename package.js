Package.describe({
  summary: "Blueimp's image gallery packed for Meteor",
  version: "0.0.1",
  git: "https://github.com/andruschka/meteor-image-gallery.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['jquery'], 'client');
  api.add_files(
    [
      'lib/blueimp-gallery.js', 
      'lib/blueimp-helper.js', 
      'lib/blueimp-gallery.min.css', 
      'lib/jquery.blueimp-gallery.js'
    ]
    , 'client'
  );
  api.add_files(['lib/loading.gif'], 'client');
});