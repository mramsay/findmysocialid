 Meteor.methods({
        search: function(query, options) {
            options = options || {};

            // guard against client-side DOS: hard limit to 50
            if (options.limit) {
                options.limit = Math.min(20, Math.abs(options.limit));
            } else {
                options.limit = 20;
            }

            // TODO fix regexp to support multiple tokens
            var regex = new RegExp("^" + query);
            // th = BigTypeaheadCollection.find({Youtube_Username: {$regex:regex}}, {skip: 0, limit: 2}).fetch();
            // console.log(th)
            // return BigTypeaheadCollection.find({name: {$regex:regex}}, {skip: 0, limit: 20}).fetch();
            return BigTypeaheadCollection.find({name: {$regex:regex}}, options).fetch();
        }
    });
