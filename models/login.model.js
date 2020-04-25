const shortid = require('shortid');
var games = {};
class Game{
	consturctor(){
	}
	create(start,end){
		const number = ~~(Math.random()*end+start)
		const id = shortid.generate();
		let game = {'number':number,'start':start,'end':end,'gameover':false};
		games[id] = game;
		//console.log(`${id}: `,games[id]);
		return id;
	}
	get(id){
		if (games[id]!=null){
			const{number,...data} = games[id];
			return data;
		}
		else{
			return null
		}
	}
	guess(id,guess){
		if(!games[id]){
			return null;
		}
		const game = games[id];
		if(game.gameover == true){
			return {'guess':'gameover'}
		}
		else if(game.number == guess){
			game.gameover = true;
			return {'guess':'correct'}
		}
		else if(game.number > guess){
			return {'guess':'too low'}
		}
		else if(game.number < guess){
			return {'guess': 'too high'}
		}
		else{
			return{'guess':'error'}
		}
	}
	reset(id){
		if (games[id] && games[id].gameover){
			const game = games[id];
			game.number = ~~(Math.random() * game.end +game.start)
			game.gameover = false;
			const{number,...data}= game;
			return(data);
		}
		return null;
	}
}

module.exports = new Game();