;(function ($) {
	$.expr[':'].hasAncestor = function (element, i, match) {
		var selector = match[3];
		return $(element).parent().closest(selector).length;
	};

	$.fn.hasAncestor = function (selector) {
		return this.filter(function () {
			return $(this).parent().closest(selector).length;
		});
	};
})(jQuery);