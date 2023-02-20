################################
# переходы по истории браузера #
################################

window.addEventListener('popstate',async() => {
	await loadArticle();
});

window.onpopstate=async() => {
	await loadArticle();
}




#################
# большие числа #
#################

const limit  = '9223372036854775807'; //предел bigserial (https://postgrespro.ru/docs/postgresql/9.6/datatype-numeric)
let   invite = location.search.split('invite=')[1];

if( BigInt(invite) > BigInt(limit) ){
	console.error(invite+' - инвайт превышает BIGSERIAL базы Postgres!!!');
	return;
}

if( invite.length === 19 ) {
	for(let key in invite){
		if( Number(invite[key]) > Number(limit[key]) ){
			console.error(invite+' - инвайт превышает BIGSERIAL базы Postgres!!!');
			return;
		}
	}
}
