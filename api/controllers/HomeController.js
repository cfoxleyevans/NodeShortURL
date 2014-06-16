/**
 * HomeController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  index: function(req, res) {
  	if (req.params.url) {
  		Url.find()
  		.where({shortCode: req.params.url})
  		.exec(function(err, urls) {
  			console.log(err, urls)
  			if(err) {
  				res.send(404);
  			} else {
  				if(urls.length >= 1) {
  					res.redirect(urls[0].url)	
  				} else {
  					res.send(404);
  				}
  			}
  		})
  	} else {
  		res.view();
  	}

  	
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to HomeController)
   */
  _config: {}

  
};
