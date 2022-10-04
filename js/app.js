window.onload = function () {
	setTimeout(function () {
		let div = document.getElementById('circle');
		div.style.width = 200 * 2 + 'px';
		div.style.height = 200 * 2 + 'px';
		document.body.classList.remove('loading');
		document.body.classList.toggle('loaded');
		Draggable.create(".gallery", {
			bounds: 'body',
			inertia: true,
			cursor: 'none',
			transform: 'none'
		});
	}, 200);
}