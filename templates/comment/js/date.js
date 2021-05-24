(function () {
	/*dom elements*/
	var post = document.getElementsByClassName('post-date');
	var comment = document.getElementsByClassName('comment-date');
	var sale = document.getElementsByClassName('sale');
	var footer = document.getElementsByClassName('footer-date');

	/*dates*/
	var now = new Date();
	var weekAgo = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
	var d = weekAgo.getDate();
	var m = weekAgo.getMonth() + 1;
	var y = weekAgo.getFullYear();

	post[0].textContent = buildDate(d, m, y);
	footer[0].textContent = now.getFullYear();
	sale[0].textContent = buildDate(now.getDate(), now.getMonth() + 1, now.getFullYear());

	for (var i = 0; i < comment.length; i++) {
		var commentDate = new Date(weekAgo.getFullYear(), weekAgo.getMonth(), Math.round(weekAgo.getDate() + (i * 0.7)))
		var chooseDate = commentDate < now ? commentDate : now;

		comment[i].textContent = buildDate(chooseDate.getDate(), chooseDate.getMonth() + 1, chooseDate.getFullYear())
	}

	function zero(val) {
		return val.toString().length === 1 ? '0' + val : val;
	}

	function buildDate(d, m, y) {
		return [zero(d), zero(m), y,].join('.');
	}
})();
