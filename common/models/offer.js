'use strict';

module.exports = function(Offer) {
  Offer.getTheStuff = function(shopId, cb) {
    Offer.app.models.OfferAPI.getStuff()
    .then(result => {
      console.log(result);
      cb(null, result);
    });
  };

  Offer.remoteMethod(
        'getTheStuff',
    {
      http: {path: '/getthestuff', verb: 'get'},
      accepts: {arg: 'id', type: 'string', http: {source: 'query'}},
      returns: {arg: 'name', type: 'string'},
    }
    );
};
