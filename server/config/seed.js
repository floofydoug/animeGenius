/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Media = require('../api/media/media.model');

Thing.find({}).remove(function () {
  Thing.create({
    name: 'Development Tools',
    info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name: 'Server and Client integration',
    info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name: 'Smart Build System',
    info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  }, {
    name: 'Modular Structure',
    info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
  }, {
    name: 'Optimized Build',
    info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  }, {
    name: 'Deployment Ready',
    info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});


Media.find({}).remove(function () {
  Media.create({
    id: 20,
    title: "Naruto",
    english: "Naruto",
    synonyms: [],
    episodes: 220,
    score: 7.77,
    type: "TV",
    status: "Finished Airing",
    start_date: "2002-10-03",
    end_date: "2007-02-08",
    synopsis: "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure," +
      "the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, " +
      " the Nine-tailed Fox, attacked Konohagakure and wreaked havoc." +
      "In order to put an end to the Kyuubi's rampage, the leader of the village," +
      "the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. &lt;br /&gt; & lt;br / & gt;" +
      "Shunned because of the presence of the Kyuubi inside him," +
      "Naruto struggles to find his place in the village.He strives to become the Hokage of Konohagakure," +
      "and he meets many friends and foes along the way. & lt;br / & gt; & lt;br / & gt;" +
      "[Written by MAL Rewrite]",
    image: "http://cdn.myanimelist.net/images/anime/13/17405.jpg"
  }, {
    id: 2472,
    title: "Naruto: Shippuuden Movie 1",
    english: "",
    synonyms: ["Naruto Shippuuden Movie; Naruto Movie 4", "Gekijouban Naruto Shippuuden"],
    episodes: 1,
    score: 7.48,
    type: "Movie",
    status: "Finished Airing",
    start_date: "2007-08-04",
    end_date: "2007-08-04",
    synopsis: "Demons that once almost destroyed the world, are revived by someone. To prevent the world from being destroyed, the demon has to be sealed and the only one who can do it is the shrine maiden Shion from the country of demons, who has two powers; one is sealing demons and the other is predicting the deaths of humans. This time Naruto's mission is to guard Shion, but she predicts Naruto's death. The only way to escape it, is to get away from Shion, which would leave her unguarded, then the demon, whose only goal is to kill Shion will do so, thus meaning the end of the world. Naruto decides to challenge this &amp;quot;prediction of death,&amp;quot; but fails to prove Shion's prediction wrong and supposedly dies in vain.&lt;br /&gt;",
    image: "http://cdn.myanimelist.net/images/anime/8/23849.jpg"
  });
});

User.find({}).remove(function () {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function () {
    console.log('finished populating users');
  });
});