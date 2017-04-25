'use strict';

module.exports = function(Comment) {
	Comment.observe('before save', function (ctx, next) {
		if (ctx.isNewInstance) {
			if (ctx.instance) {
				ctx.instance.userId = ctx.options && ctx.options.accessToken && ctx.options.accessToken.userId;
			} else {
				delete ctx.data.verificado;
			}
		}
		next();
	});
};
