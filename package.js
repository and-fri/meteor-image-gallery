Package.describe({
  summary: "Blueimp's image gallery packed for Meteor"
});

Package.on_use(function(api) {
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