window.addEventListener('popstate',async() => {
	await loadArticle();
});

window.onpopstate=async() => {
	await loadArticle();
}

// разница?
