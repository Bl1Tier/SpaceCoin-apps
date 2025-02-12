const express = require("express");
var { VK } = require("vk-io");
const { verify } = require("hcaptcha");
var vk = new VK({
	token: "vk1.a.OMD-jUtB0hiQRWDpeJRpPNrmsxxpIU6DMtWEWNW29Z30JPxirlwGDNWNCdfKRa79UkkFPe5plSmkgR3Q6ThQsQ7eE82UHVvA6EVroTulHnSFPfJOvECghLXw5Vp5PADbbhW_WYjricOmuJqod_CHfoG7aZSgz1eS8osoXTg5gEMBfdiPQKH1I7MzrO9jZawYUy2rF8XuKn6XR3vgOa3piw",
});
const topsum_ads = [
	250_000_000,
	175_000_000,
	125_000_000
];
var fs = require("fs");
var md5 = require("md5");
var { getUnix, getUrlVars, validateAppUrl, random, save, number_format, str_rand, generateMines, validateWalletUrl } = require("./addons/Utils");
const options = {
	key: fs.readFileSync("key.key"),
	cert: fs.readFileSync("crt.crt"),
};
const generateMinesToString = (v) => {
	var r = [];
	v.filter((x, i) => {
		if (x === true) r.push(i);
	});
	return r.toString();
};
var dataPosts = require("./database/dataPosts.json");
var dataTimes = require("./database/data.json");
const app = express(options);
var users = require("./database/users.json");
var onlineUsers = [];
var https = require("https").createServer(options, app);
var cors = require("cors");
const io = require("socket.io")(https, {
	cors: {
		origin: "*",
	},
	pingInterval: 25000,
	pingTimeout: 5000,
});
var history = require("./database/history.json");
var proms = require("./database/proms.json");
var wheelhistory = getWheelHistory();
var b7shistory = getWheelHistory();
var dicehistory = getDiceHistory();
var dice2history = getDice2History();
var dice3history = getDice3History();
var doublehistory = getDoubleHistory();
var dreamhistory = getDreamHistory();
var alcoslotshistory = getAlcoSlotsHistory();
var clans = require("./database/clans.json");
var games = require("./database/games.json");
function getWheelHistory() {
	var index_wheel_history = 0;
	var wheelhistory_res = [];
	history.filter((x) => {
		if (x.title == "wheel" && index_wheel_history < 15) {
			index_wheel_history++;
			wheelhistory_res.push(x);
		}
	});
	return wheelhistory_res;
}
function getDoubleHistory() {
	var index_double_history = 0;
	var doublehistory_res = [];
	history.filter((x) => {
		if (x.title == "double" && index_double_history < 15) {
			index_double_history++;
			doublehistory_res.push(x);
		}
	});
	return doublehistory_res;
}
function getDiceHistory() {
	var index_dice_history = 0;
	var dicehistory_res = [];
	history.filter((x) => {
		if (x.title == "dice" && index_dice_history < 15) {
			index_dice_history++;
			dicehistory_res.push(x);
		}
	});
	return dicehistory_res;
}
function getMinesHistory() {
	var index_mines_history = 0;
	var mineshistory_res = [];
	history.filter((x) => {
		if (x.title == "mines" && index_mines_history < 15) {
			index_mines_history++;
			mineshistory_res.push(x);
		}
	});
	return mineshistory_res;
}
function getTowerHistory() {
	var index_tower_history = 0;
	var towerhistory_res = [];
	history.filter((x) => {
		if (x.title == "tower" && index_tower_history < 15) {
			index_tower_history++;
			towerhistory_res.push(x);
		}
	});
	return towerhistory_res;
}
function getThimbleHistory() {
	var index_thimble_history = 0;
	var thimblehistory_res = [];
	history.filter((x) => {
		if (x.title == "thimble" && index_thimble_history < 15) {
			index_thimble_history++;
			thimblehistory_res.push(x);
		}
	});
	return thimblehistory_res;
}
function getDice2History() {
	var index_dice2_history = 0;
	var dice2history_res = [];
	history.filter((x) => {
		if (x.title == "dice2" && index_dice2_history < 15) {
			index_dice2_history++;
			dice2history_res.push(x);
		}
	});
	return dice2history_res;
}
function getAlcoSlotsHistory() {
	var index_history = 0;
	var history_res = [];
	history.filter((x) => {
		if (x.title == "alcoslots" && index_history < 15) {
			index_history++;
			history_res.push(x);
		}
	});
	return history_res;
}
function getGoldWestHistory() {
	var index_history = 0;
	var history_res = [];
	history.filter((x) => {
		if (x.title == "goldwest" && index_history < 15) {
			index_history++;
			history_res.push(x);
		}
	});
	return history_res;
}
function getKenoHistory() {
	var index_history = 0;
	var history_res = [];
	history.filter((x) => {
		if (x.title == "keno" && index_history < 15) {
			index_history++;
			history_res.push(x);
		}
	});
	return history_res;
}
function getNvutiHistory() {
	var index_history = 0;
	var history_res = [];
	history.filter((x) => {
		if (x.title == "nvuti" && index_history < 15) {
			index_history++;
			history_res.push(x);
		}
	});
	return history_res;
}
function getDice3History() {
	var index_dice3_history = 0;
	var dice3history_res = [];
	history.filter((x) => {
		if (x.title == "dice3" && index_dice3_history < 15) {
			index_dice3_history++;
			dice3history_res.push(x);
		}
	});
	return dice3history_res;
}
function getB7sHistory() {
	var index_b7s_history = 0;
	var b7shistory_res = [];
	history.filter((x) => {
		if (x.title == "b7s" && index_b7s_history < 15) {
			index_b7s_history++;
			b7shistory_res.push(x);
		}
	});
	return b7shistory_res;
}
function getDreamHistory() {
	var index_dream_history = 0;
	var dreamhistory_res = [];
	history.filter((x) => {
		if (x.title == "dream" && index_dream_history < 15) {
			index_dream_history++;
			dreamhistory_res.push(x);
		}
	});
	return dreamhistory_res;
}
/*AlcoSlots*/
setInterval(async () => {
	var alcoslotshistory = getAlcoSlotsHistory();
	var game = games.find((x) => x.id === 8);
	if (game.bank.length > 0) {
		game.isActive = true;
		game.state = 1;
	} else {
		game.isActive = false;
		game.state = 0;
	}
	var bets = [];
	game.bank.sort((a, b) => {
		return b.sum - a.sum;
	});
	game.bank.filter((x) => {
		bets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	if (game.isActive && game.time > 0) {
		game.time--;
		io.to("alcoslots").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			history: alcoslotshistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time == -8) {
		game.time--;
		game.state = 2;
		var result = game.bank.filter((x) => x.win === 0);
		if (result.length > 0) {
			for (var i = 0; i < result.length; i++) {
				var user = users.find((x) => x.uid === result[i].user);
				if (
					result[i].type === "1x1" &&
					(game.result.win[0] === 0 ||
						game.result.win[1] === 0 ||
						game.result.win[2] === 0)
				) {
					user.coins += result[i].sum * 1.3;
					result[i].sum = result[i].sum * 1.3;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type === "2x1" &&
					(game.result.win[0] === 1 ||
						game.result.win[1] === 1 ||
						game.result.win[2] === 1)
				) {
					user.coins += result[i].sum * 1.3;
					result[i].sum = result[i].sum * 1.3;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type === "3x1" &&
					(game.result.win[0] === 2 ||
						game.result.win[1] === 2 ||
						game.result.win[2] === 2)
				) {
					user.coins += result[i].sum * 1.3;
					result[i].sum = result[i].sum * 1.3;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type === "1x2" &&
					((game.result.win[0] === 0 && game.result.win[1] === 0) ||
						(game.result.win[2] === 0 && game.result.win[1] === 0) ||
						(game.result.win[0] === 0 && game.result.win[2] === 0))
				) {
					user.coins += result[i].sum * 3.5;
					result[i].sum = result[i].sum * 3.5;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type === "2x2" &&
					((game.result.win[0] === 1 && game.result.win[1] === 1) ||
						(game.result.win[2] === 1 && game.result.win[1] === 1) ||
						(game.result.win[0] === 1 && game.result.win[2] === 1))
				) {
					user.coins += result[i].sum * 3.5;
					result[i].sum = result[i].sum * 3.5;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type === "3x2" &&
					((game.result.win[0] === 2 && game.result.win[1] === 2) ||
						(game.result.win[2] === 2 && game.result.win[1] === 2) ||
						(game.result.win[0] === 2 && game.result.win[2] === 2))
				) {
					user.coins += result[i].sum * 3.5;
					result[i].sum = result[i].sum * 3.5;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type === "1x3" &&
					game.result.win[0] === 0 &&
					game.result.win[1] === 0 &&
					game.result.win[2] === 0
				) {
					user.coins += result[i].sum * 20;
					result[i].sum = result[i].sum * 20;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type === "2x3" &&
					game.result.win[0] === 1 &&
					game.result.win[1] === 1 &&
					game.result.win[2] === 1
				) {
					user.coins += result[i].sum * 20;
					result[i].sum = result[i].sum * 20;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type === "3x3" &&
					game.result.win[0] === 2 &&
					game.result.win[1] === 2 &&
					game.result.win[2] === 2
				) {
					user.coins += result[i].sum * 20;
					result[i].sum = result[i].sum * 20;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else {
					result[i].win = 2;
					user.uptop -= result[i].sum;
				}
			}
			var bets = [];
			game.bank.sort((a, b) => {
				return b.sum - a.sum;
			});
			game.bank.filter((x) => {
				bets.push({
					type: x.type,
					sum: x.sum,
					user: x.user,
					win: x.win,
					color: x.color,
					nick: x.nick,
					photo: x.photo,
					defsum: x.defsum,
					unix: x.unix,
				});
			});
			io.to("alcoslots").emit(`message`, {
				type: "update",
				hash: game.hash,
				state: game.state,
				time: game.time,
				bets,
				result: game.result,
				history: alcoslotshistory,
				game: game.title,
			});
			io.to(game.title).emit(`message`, {
				type: "requestCall",
				a: "getUser",
			});
		}
	}
	if (game.isActive && game.time <= 0) {
		game.time--;
		game.state = 2;
		io.to("alcoslots").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			result: game.result,
			history: alcoslotshistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time === -15) {
		if (history.filter((x) => x.title === "alcoslots").length >= 14) {
			var j = history.filter((x) => x.title === "alcoslots");
			j.pop();
		}
		history.unshift({
			title: "alcoslots",
			id: history.length,
			hash: game.hash,
			unix: getUnix(),
			result: game.result,
		});
		save("history", history);
		alcoslotshistory = getAlcoSlotsHistory();
		users.filter((user) => {
			if (user.uptop > 0) {
				user.stats.day.win++;
				user.stats.all.win++;
				user.stats.topDay += user.uptop;
				user.stats.topWeek += user.uptop;
			} else if (user.uptop < 0) {
				user.stats.day.lose++;
				user.stats.all.lose++;
			}
			user.uptop = 0;
		});
		game.time = 30;
		game.state = 0;
		game.bank = [];
		var num = [random(0, 2), random(0, 2), random(0, 2)];
		game.result = {
			win: num,
			md5: `${str_rand(11)}@${num.toString()}`,
		};
		game.hash = md5(game.result.md5);
		io.to("alcoslots").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			viewnum: 0,
			bets: [],
			history: alcoslotshistory,
			game: game.title,
		});
		save("games", games);
	}
}, 1000);
/*Wheel*/
setInterval(async () => {
	wheelhistory = getWheelHistory();
	var game = games.find((x) => x.id === 0);
	if (game.bank.length > 0) {
		game.isActive = true;
		game.state = 1;
	} else {
		game.isActive = false;
		game.state = 0;
	}
	var rbets = [];
	game.bank.sort((a, b) => {
		return b.unix - a.unix;
	});
	game.bank.filter((x) => {
		rbets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	var bets = [];
	game.bank.sort((a, b) => {
		return b.sum - a.sum;
	});
	game.bank.filter((x) => {
		bets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	if (game.isActive && game.time > 0) {
		game.time--;
		io.to("wheel").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			viewnum: 0,
			bets,
			rbets,
			history: wheelhistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time == -11) {
		game.state = 2;
		var result = game.bank.filter((x) => x.win === 0);
		if (result.length > 0) {
			for (i in result) {
				var user = users.find((x) => x.uid === result[i].user);
				if (result[i].type == game.result.color) {
					result[i].sum = Number(Number(result[i].sum * 2).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (result[i].type == "range" + game.result.range[1]) {
					result[i].sum = Number(Number(result[i].sum * 3).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (result[i].type == game.result.type) {
					result[i].sum = Number(Number(result[i].sum * 2).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (result[i].type == "range" + game.result.range[0]) {
					result[i].sum = Number(Number(result[i].sum * 2).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (!isNaN(result[i].type)) {
					if (Number(result[i].type) == Number(game.result.num)) {
						result[i].sum = Number(Number(result[i].sum * 36).toFixed(2));
						user.coins += result[i].sum;
						result[i].win = 1;
						user.uptop += result[i].sum;
					} else {
						user.uptop -= result[i].defsum;
						result[i].win = 2;
					}
				} else {
					user.uptop -= result[i].defsum;
					result[i].win = 2;
				}
			}
			save("games", games);

			var bets = [];
			game.bank.filter((x) => {
				bets.push({
					type: x.type,
					sum: x.sum,
					user: x.user,
					win: x.win,
					color: x.color,
					nick: x.nick,
					photo: x.photo,
					defsum: x.defsum,
					unix: x.unix,
				});
			});
			io.to("wheel").emit(`message`, {
				type: "update",
				hash: game.hash,
				state: game.state,
				time: game.time,
				viewnum: 0,
				bets,
				rbets,
				result: game.result,
				history: wheelhistory,
				game: game.title,
			});
			io.to("wheel").emit(`message`, {
				type: "requestCall",
				a: "getUser",
			});
		}
	}
	if (game.isActive && game.time <= 0 && game.time > -12) {
		game.state = 2;
		game.time--;
		io.to("wheel").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			viewnum: 0,
			bets,
			rbets,
			result: game.result,
			history: wheelhistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time <= -12) {
		game.time--;
		game.state = 2;
		io.to("wheel").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			viewnum: 1,
			bets,
			rbets,
			result: game.result,
			history: wheelhistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time === -20) {
		if (history.filter((x) => x.title === "wheel").length >= 14) {
			var j = history.filter((x) => x.title === "wheel");
			j.pop();
		}
		history.unshift({
			title: "wheel",
			id: history.length,
			hash: game.hash,
			unix: getUnix(),
			result: game.result,
		});
		save("history", history);
		wheelhistory = getWheelHistory();
		users.filter((user) => {
			if (user.uptop > 0) {
				user.stats.day.win++;
				user.stats.all.win++;
				user.stats.topDay += user.uptop;
				user.stats.topWeek += user.uptop;
			} else if (user.uptop < 0) {
				user.stats.day.lose++;
				user.stats.all.lose++;
			}
			user.uptop = 0;
		});
		game.time = 30;
		game.state = 0;
		game.bank = [];
		var num = random(0, 36);
		var isRed = [
			1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
		];
		game.result = {
			num,
			color: isRed.find((x) => x === num)
				? "red"
				: num === 0
				? "green"
				: "black",
			type: num % 2 === 0 ? "odd" : "notodd",
			range: [
				num >= 1 && num <= 18 ? 1 : 2,
				num >= 1 && num <= 12 ? 3 : num >= 13 && num <= 24 ? 4 : 5,
			],
			adddeg: random(150, 300),
			md5: `${str_rand(11)}|${num}|${str_rand(11)}`,
		};
		game.hash = md5(game.result.md5);
		io.to("wheel").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			viewnum: 0,
			bets: [],
			rbets: [],
			history: wheelhistory,
			game: game.title,
		});
		save("games", games);
	}
}, 1000);
/*Big7Small*/
setInterval(async () => {
	b7shistory = getB7sHistory();
	var game = games.find((x) => x.id === 1);
	if (game.bank.length > 0) {
		game.isActive = true;
		game.state = 1;
	} else {
		game.isActive = false;
		game.state = 0;
	}
	var bets = [];
	game.bank.sort((a, b) => {
		return b.sum - a.sum;
	});
	game.bank.filter((x) => {
		bets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	if (game.isActive && game.time > 0) {
		game.time--;
		io.to("b7s").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			history: b7shistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time == 0) {
		game.state = 2;
		var result = game.bank.filter((x) => x.win === 0);
		if (result.length > 0) {
			for (i in result) {
				// console.log(result);
				var nums = game.result.nums;
				var user = users.find((x) => x.uid === result[i].user);
				var user1 = result[i];
				if (Number(result[i].type) === 2 && nums[0] + nums[1] > 7) {
					user1.sum = Number(Number(result[i].sum * 2.3).toFixed(2));
					user.coins += user1.sum;
					user1.win = 1;
					user.uptop += user1.sum;
				} else if (Number(result[i].type) === 0 && nums[0] + nums[1] < 7) {
					user1.sum = Number(Number(result[i].sum * 2.3).toFixed(2));
					user.coins += user1.sum;
					user1.win = 1;
					user.uptop += user1.sum;
				} else if (Number(result[i].type) === 1 && nums[0] + nums[1] === 7) {
					user1.sum = Number(Number(result[i].sum * 5.8).toFixed(2));
					user.coins += user1.sum;
					user1.win = 1;
					user.uptop += user1.sum;
				} else {
					user.uptop -= user1.defsum;
					user1.win = 2;
				}
			}
			save("games", games);

			var bets = [];
			game.bank.filter((x) => {
				bets.push({
					type: x.type,
					sum: x.sum,
					user: x.user,
					win: x.win,
					color: x.color,
					nick: x.nick,
					photo: x.photo,
					defsum: x.defsum,
					unix: x.unix,
				});
			});
			io.to("b7s").emit(`message`, {
				type: "update",
				hash: game.hash,
				state: game.state,
				time: game.time,
				bets,
				history: b7shistory,
				result: game.result,
				game: game.title,
			});
			io.to("b7s").emit(`message`, {
				type: "requestCall",
				a: "getUser",
			});
		}
	}
	if (game.isActive && game.time <= 0) {
		game.state = 2;
		game.time--;
		io.to("b7s").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			result: game.result,
			history: b7shistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time === -12) {
		if (history.filter((x) => x.title === "b7s").length >= 14) {
			var j = history.filter((x) => x.title === "b7s");
			j.pop();
		}
		history.unshift({
			title: "b7s",
			id: history.length,
			hash: game.hash,
			unix: getUnix(),
			result: game.result,
		});
		save("history", history);
		users.filter((user) => {
			if (user.uptop > 0) {
				user.stats.day.win++;
				user.stats.all.win++;
				user.stats.topDay += user.uptop;
				user.stats.topWeek += user.uptop;
			} else if (user.uptop < 0) {
				user.stats.day.lose++;
				user.stats.all.lose++;
			}
			user.uptop = 0;
		});
		b7shistory = getB7sHistory();
		game.time = 15;
		game.state = 0;
		game.bank = [];
		var nums = [random(1, 6), random(1, 6)];
		game.result = {
			nums,
			md5: `${str_rand(11)}|${nums.toString()}|${str_rand(11)}`,
			r: random(0, [nums[0] - 1, 6 - nums[1]].sort((a, b) => b - a)[1]),
		};
		// console.log([nums[0] - 1, 6 - nums[1]].sort((a, b) => b - a)[1]);
		game.hash = md5(game.result.md5);
		io.to("b7s").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets: [],
			history: b7shistory,
			game: game.title,
		});
		save("games", games);
	}
}, 1000);
/*Dice*/
setInterval(async () => {
	dicehistory = getDiceHistory();
	var game = games.find((x) => x.id === 2);
	if (game.bank.length > 0) {
		game.isActive = true;
		game.state = 1;
	} else {
		game.isActive = false;
		game.state = 0;
	}
	var bets = [];
	game.bank.sort((a, b) => {
		return b.sum - a.sum;
	});
	game.bank.filter((x) => {
		bets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	if (game.isActive && game.time > 0) {
		game.time--;
		io.to("dice").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			history: dicehistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time == 1) {
		var result = game.bank.filter((x) => x.win === 0);
		if (result.length > 0) {
			for (i in result) {
				var num = game.result.num;
				var user = users.find((x) => x.uid === result[i].user);
				if (result[i].type == "odd" && num % 2 == 0 && num != 0) {
					result[i].sum = Number(Number(result[i].sum * 1.9).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (result[i].type == "notodd" && num % 2 != 0 && num != 0) {
					result[i].sum = Number(Number(result[i].sum * 1.9).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (Number(result[i].type) == num) {
					result[i].sum = Number(Number(result[i].sum * 5).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else {
					user.uptop -= Number(Number(result[i].sum).toFixed(2));
					result[i].win = 2;
				}
			}
			save("games", games);

			var bets = [];
			game.bank.filter((x) => {
				bets.push({
					type: x.type,
					sum: x.sum,
					user: x.user,
					win: x.win,
					color: x.color,
					nick: x.nick,
					photo: x.photo,
					defsum: x.defsum,
					unix: x.unix,
				});
			});
			io.to("dice").emit(`message`, {
				type: "update",
				hash: game.hash,
				state: game.state,
				time: game.time,
				bets,
				history: dicehistory,
				game: game.title,
			});
			io.to("dice").emit(`message`, {
				type: "requestCall",
				a: "getUser",
			});
		}
	}
	if (game.isActive && game.time <= 0) {
		game.state = 2;
		game.time--;
		io.to("dice").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			result: game.result,
			history: dicehistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time === -14) {
		if (history.filter((x) => x.title === "dice").length >= 14) {
			var j = history.filter((x) => x.title === "dice");
			j.pop();
		}
		history.unshift({
			title: "dice",
			id: history.length,
			hash: game.hash,
			unix: getUnix(),
			result: game.result,
		});
		save("history", history);
		users.filter((user) => {
			if (user.uptop > 0) {
				user.stats.day.win++;
				user.stats.all.win++;
				user.stats.topDay += user.uptop;
				user.stats.topWeek += user.uptop;
			} else if (user.uptop < 0) {
				user.stats.day.lose++;
				user.stats.all.lose++;
			}
			user.uptop = 0;
		});
		dicehistory = getDiceHistory();
		game.time = 30;
		game.state = 0;
		game.bank = [];
		var num = random(1, 6);
		game.result = {
			num,
			md5: `${str_rand(11)}|${num}|${str_rand(11)}`,
		};
		game.hash = md5(game.result.md5);
		io.to("dice").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets: [],
			history: dicehistory,
			game: game.title,
		});
		save("games", games);
	}
}, 1000);
/*Dice2*/
setInterval(async () => {
	dice2history = getDice2History();
	var game = games.find((x) => x.id === 3);
	if (game.bank.length > 0) {
		game.isActive = true;
		game.state = 1;
	} else {
		game.isActive = false;
		game.state = 0;
	}
	var bets = [];
	game.bank.sort((a, b) => {
		return b.sum - a.sum;
	});
	game.bank.filter((x) => {
		bets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	if (game.isActive && game.time > 0) {
		game.time--;
		io.to("dice2").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			history: dice2history,
			game: game.title,
		});
	}
	if (game.isActive && game.time == 1) {
		var result = game.bank.filter((x) => x.win === 0);
		var coefs = [
			{ num: 8, coef: 6 },
			{ num: 9, coef: 8 },
			{ num: 10, coef: 11 },
			{ num: 11, coef: 17 },
			{ num: 12, coef: 34 },
		];
		if (result.length > 0) {
			for (i in result) {
				var nums = game.result.nums;
				var user = users.find((x) => x.uid === result[i].user);
				if (
					result[i].type == "odd" &&
					(nums[0] + nums[1]) % 2 == 0 &&
					nums[0] + nums[1] != 0
				) {
					result[i].sum = Number(Number(result[i].sum * 1.75).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "notodd" &&
					(nums[0] + nums[1]) % 2 != 0 &&
					nums[0] + nums[1] != 0
				) {
					result[i].sum = Number(Number(result[i].sum * 2.1).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "1&1" &&
					nums[0] === 1 &&
					nums[1] === nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 34).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "2&2" &&
					nums[0] === 2 &&
					nums[1] === nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 34).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "3&3" &&
					nums[0] === 3 &&
					nums[1] === nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 34).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "4&4" &&
					nums[0] === 4 &&
					nums[1] === nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 34).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "5&5" &&
					nums[0] === 5 &&
					nums[1] === nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 34).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "6&6" &&
					nums[0] === 6 &&
					nums[1] === nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 34).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (Number(result[i].type) == nums[0] + nums[1]) {
					if (Number(result[i].type) <= 7) {
						result[i].sum = Number(
							Number(result[i].sum * (34 / Number(result[i].type))).toFixed(2)
						);
						user.coins += result[i].sum;
						result[i].win = 1;
						user.uptop += result[i].sum;
					} else {
						if (coefs.find((x) => x.num === Number(result[i].type))) {
							result[i].sum = Number(
								Number(
									result[i].sum * coefs.find((x) => Number(result[i].type)).coef
								).toFixed(2)
							);
							user.coins += result[i].sum;
							result[i].win = 1;
							user.uptop += result[i].sum;
						}
					}
				} else {
					user.uptop -= Number(Number(result[i].sum).toFixed(2));
					result[i].win = 2;
				}
			}
			save("games", games);

			var bets = [];
			game.bank.filter((x) => {
				bets.push({
					type: x.type,
					sum: x.sum,
					user: x.user,
					win: x.win,
					color: x.color,
					nick: x.nick,
					photo: x.photo,
					defsum: x.defsum,
					unix: x.unix,
				});
			});
			io.to("dice2").emit(`message`, {
				type: "update",
				hash: game.hash,
				state: game.state,
				time: game.time,
				bets,
				history: dice2history,
				game: game.title,
			});
			io.to("dice2").emit(`message`, {
				type: "requestCall",
				a: "getUser",
			});
		}
	}
	if (game.isActive && game.time <= 0) {
		game.state = 2;
		game.time--;
		io.to("dice2").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			result: game.result,
			history: dice2history,
			game: game.title,
		});
	}
	if (game.isActive && game.time === -14) {
		if (history.filter((x) => x.title === "dice2").length >= 14) {
			var j = history.filter((x) => x.title === "dice2");
			j.pop();
		}
		history.unshift({
			title: "dice2",
			id: history.length,
			hash: game.hash,
			unix: getUnix(),
			result: game.result,
		});
		save("history", history);
		users.filter((user) => {
			if (user.uptop > 0) {
				user.stats.day.win++;
				user.stats.all.win++;
				user.stats.topDay += user.uptop;
				user.stats.topWeek += user.uptop;
			} else if (user.uptop < 0) {
				user.stats.day.lose++;
				user.stats.all.lose++;
			}
			user.uptop = 0;
		});
		dice2history = getDice2History();
		game.time = 30;
		game.state = 0;
		game.bank = [];
		var nums = [random(1, 6), random(1, 6)];
		game.result = {
			nums,
			md5: `${str_rand(11)}|${nums.toString()}|${str_rand(11)}`,
		};
		game.hash = md5(game.result.md5);
		io.to("dice2").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets: [],
			history: dice2history,
			game: game.title,
		});
		save("games", games);
	}
}, 1000);
/*Dice3*/
setInterval(async () => {
	dice3history = getDice3History();
	var game = games.find((x) => x.id === 4);
	if (game.bank.length > 0) {
		game.isActive = true;
		game.state = 1;
	} else {
		game.isActive = false;
		game.state = 0;
	}
	var bets = [];
	game.bank.sort((a, b) => {
		return b.sum - a.sum;
	});
	game.bank.filter((x) => {
		bets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	if (game.isActive && game.time > 0) {
		game.time--;
		io.to("dice3").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			history: dice3history,
			game: game.title,
		});
	}
	if (game.isActive && game.time == 1) {
		var result = game.bank.filter((x) => x.win === 0);
		var coefs = [
			{ num: 3, coef: 205 },
			{ num: 4, coef: 68 },
			{ num: 5, coef: 34 },
			{ num: 6, coef: 20 },
			{ num: 7, coef: 13 },
			{ num: 8, coef: 9 },
			{ num: 9, coef: 8 },
			{ num: 10, coef: 7 },
		];
		if (result.length > 0) {
			for (i in result) {
				var nums = game.result.nums;
				var user = users.find((x) => x.uid === result[i].user);
				if (
					result[i].type == "odd" &&
					(nums[0] + nums[1] + nums[2]) % 2 === 0 &&
					nums[0] + nums[1] + nums[2] !== 0
				) {
					result[i].sum = Number(Number(result[i].sum * 1.9).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "notodd" &&
					(nums[0] + nums[1] + nums[2]) % 2 !== 0 &&
					nums[0] + nums[1] + nums[2] !== 0
				) {
					result[i].sum = Number(Number(result[i].sum * 1.9).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "1&1&1" &&
					nums[0] == 1 &&
					(nums[2] == nums[1]) == nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 205).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "2&2&2" &&
					nums[0] === 2 &&
					(nums[2] == nums[1]) == nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 205).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "3&3&3" &&
					nums[0] === 3 &&
					(nums[2] == nums[1]) == nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 205).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "4&4&4" &&
					nums[0] === 4 &&
					(nums[2] == nums[1]) == nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 205).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "5&5&5" &&
					nums[0] === 5 &&
					(nums[2] == nums[1]) == nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 205).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (
					result[i].type == "6&6&6" &&
					nums[0] === 6 &&
					(nums[2] == nums[1]) == nums[0]
				) {
					result[i].sum = Number(Number(result[i].sum * 205).toFixed(2));
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else if (Number(result[i].type) == nums[0] + nums[1] + nums[2]) {
					if (Number(result[i].type) <= 10) {
						coefs.sort((a, b) => {
							return b.coef - a.coef;
						});
						result[i].sum = Number(
							Number(
								result[i].sum *
									coefs[Number(result[i].type) - 3].coef.toFixed(2)
							)
						);
						user.coins += result[i].sum;
						result[i].win = 1;
						user.uptop += result[i].sum;
					} else {
						coefs.sort((a, b) => {
							return b.num - a.num;
						});
						result[i].sum = Number(
							Number(
								result[i].sum *
									coefs[Number(result[i].type) - 11].coef.toFixed(2)
							)
						);
						user.coins += result[i].sum;
						result[i].win = 1;
						user.uptop += result[i].sum;
					}
				} else {
					user.uptop -= Number(Number(result[i].sum).toFixed(2));
					result[i].win = 2;
				}
			}
			save("games", games);

			var bets = [];
			game.bank.filter((x) => {
				bets.push({
					type: x.type,
					sum: x.sum,
					user: x.user,
					win: x.win,
					color: x.color,
					nick: x.nick,
					photo: x.photo,
					defsum: x.defsum,
					unix: x.unix,
				});
			});
			io.to("dice3").emit(`message`, {
				type: "update",
				hash: game.hash,
				state: game.state,
				time: game.time,
				bets,
				history: dice3history,
				game: game.title,
			});
			io.to("dice3").emit(`message`, {
				type: "requestCall",
				a: "getUser",
			});
		}
	}
	if (game.isActive && game.time <= 0) {
		game.state = 2;
		game.time--;
		io.to("dice3").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			result: game.result,
			history: dice3history,
			game: game.title,
		});
	}
	if (game.isActive && game.time === -14) {
		if (history.filter((x) => x.title === "dice3").length >= 14) {
			var j = history.filter((x) => x.title === "dice3");
			j.pop();
		}
		history.unshift({
			title: "dice3",
			id: history.length,
			hash: game.hash,
			unix: getUnix(),
			result: game.result,
		});
		save("history", history);
		users.filter((user) => {
			if (user.uptop > 0) {
				user.stats.day.win++;
				user.stats.all.win++;
				user.stats.topDay += user.uptop;
				user.stats.topWeek += user.uptop;
			} else if (user.uptop < 0) {
				user.stats.day.lose++;
				user.stats.all.lose++;
			}
			user.uptop = 0;
		});
		dice3history = getDice3History();
		game.time = 30;
		game.state = 0;
		game.bank = [];
		var nums = [random(1, 6), random(1, 6), random(1, 6)];
		game.result = {
			nums,
			md5: `${str_rand(11)}|${nums.toString()}|${str_rand(11)}`,
		};
		game.hash = md5(game.result.md5);
		io.to("dice3").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets: [],
			history: dice3history,
			game: game.title,
		});
		save("games", games);
	}
}, 1000);
/*Dream*/
setInterval(async () => {
	dreamhistory = getDreamHistory();
	var game = games.find((x) => x.id === 5);
	if (game.bank.length > 0) {
		game.isActive = true;
		game.state = 1;
	} else {
		game.isActive = false;
		game.state = 0;
	}
	var rbets = [];
	game.bank.sort((a, b) => {
		return b.unix - a.unix;
	});
	game.bank.filter((x) => {
		rbets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	var bets = [];
	game.bank.sort((a, b) => {
		return b.sum - a.sum;
	});
	game.bank.filter((x) => {
		bets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	if (game.isActive && game.time > 0) {
		game.time--;
		return io.to("dream").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			rbets,
			history: dreamhistory,
			game: game.title,
		});
	}
	if (
		game.isActive &&
		(game.result.act === 0 ? game.time === -10 : game.time === -5)
	) {
		game.time--;
		game.state = 2;
		var result = game.bank.filter((x) => x.win === 0);
		if (result.length > 0) {
			for (i in result) {
				var num = game.result.num;
				var user = users.find((x) => x.uid === result[i].user);
				if (`${game.result.num}`.match(/x/i)) {
				} else {
					if (Number(result[i].type) == num) {
						result[i].sum = Number(
							Number(
								result[i].sum *
									num *
									(game.result.act != 0 ? game.result.act : 1) +
									result[i].sum
							).toFixed(2)
						);
						user.coins += result[i].sum;
						result[i].win = 1;
						user.uptop += result[i].sum;
					} else {
						user.uptop -= Number(Number(result[i].sum).toFixed(2));
						result[i].win = 2;
					}
				}
			}
			save("games", games);

			var bets = [];
			game.bank.filter((x) => {
				bets.push({
					type: x.type,
					sum: x.sum,
					user: x.user,
					win: x.win,
					color: x.color,
					nick: x.nick,
					photo: x.photo,
					defsum: x.defsum,
					unix: x.unix,
				});
			});
			io.to("dream").emit(`message`, {
				type: "update",
				hash: game.hash,
				state: game.state,
				time: game.time,
				bets,
				rbets,
				result: game.result,
				history: dreamhistory,
				game: game.title,
				...(game.time === -10 ? { viewnum: 1 } : null),
			});
			return io.to("dream").emit(`message`, {
				type: "requestCall",
				a: "getUser",
			});
		}
	}
	if (game.isActive && game.time <= 1 && game.time != -20) {
		game.state = 2;
		game.time--;
		return io.to("dream").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			rbets,
			result: game.result,
			history: dreamhistory,
			game: game.title,
			...(game.time < -10 ? { viewnum: 1 } : null),
		});
	}
	if (game.isActive && game.time === 0) {
		game.state = 2;
		io.to("dream").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			rbets,
			result: game.result,
			history: dreamhistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time === -20) {
		if (/(.*)x(.*)/i.test(`${game.result.num}`)) {
			if (history.filter((x) => x.title === "dream").length >= 14) {
				var j = history.filter((x) => x.title === "dream");
				j.pop();
			}
			history.unshift({
				title: "dream",
				hash: game.hash,
				id: history.filter((x) => x.title === "dream").length,
				result: game.result,
			});
			save("history", history);

			var nums = [
				"2X",
				1,
				10,
				2,
				1,
				5,
				2,
				1,
				2,
				1,
				2,
				1,
				5,
				40,
				1,
				10,
				1,
				2,
				1,
				5,
				2,
				1,
				20,
				1,
				2,
				1,
				"7X",
				1,
				2,
				10,
				1,
				2,
				1,
				5,
				1,
				2,
				5,
				1,
				2,
				5,
				1,
				2,
				1,
				10,
				1,
				2,
				1,
				2,
				1,
				20,
				1,
				2,
				5,
				1,
			];
			var win = random(0, nums.length - 1);
			var num = nums[win];
			var md5_ = `${str_rand(11)}@${num}`;
			game.result = {
				num: num,
				act:
					Number(`${game.result.num}`.replace(/x/i, "")) +
					Number(`${`${num}`.match(/x/i) ? num : "0"}`.replace(/x/i, "")),
				md5: md5_,
				win: win,
			};
			game.hash = md5(md5_);
			game.time = 10;
			game.state = 1;
		} else {
			if (history.filter((x) => x.title === "dream").length >= 14) {
				var j = history.filter((x) => x.title === "dream");
				j.pop();
			}
			history.unshift({
				title: "dream",
				hash: game.hash,
				id: history.filter((x) => x.title === "dream").length,
				result: game.result,
			});
			users.filter((user) => {
				if (user.uptop > 0) {
					user.stats.day.win++;
					user.stats.all.win++;
					user.stats.topDay += user.uptop;
					user.stats.topWeek += user.uptop;
				} else if (user.uptop < 0) {
					user.stats.day.lose++;
					user.stats.all.lose++;
				}
				user.uptop = 0;
			});
			dreamhistory = getDreamHistory();
			save("history", history);

			game.bank = [];
			var nums = [
				"2X",
				1,
				10,
				2,
				1,
				5,
				2,
				1,
				2,
				1,
				2,
				1,
				5,
				40,
				1,
				10,
				1,
				2,
				1,
				5,
				2,
				1,
				20,
				1,
				2,
				1,
				"7X",
				1,
				2,
				10,
				1,
				2,
				1,
				5,
				1,
				2,
				5,
				1,
				2,
				5,
				1,
				2,
				1,
				10,
				1,
				2,
				1,
				2,
				1,
				20,
				1,
				2,
				5,
				1,
			];
			var num = random(0, nums.length - 1);
			var md5_ = `${str_rand(11)}@${nums[num]}`;
			game.result = {
				num: nums[num],
				act: /(.*)x(.*)/i.test(`${num}`) ? Number(nums[num].replace(/x/i)) : 0,
				md5: md5_,
				win: num,
			};
			game.hash = md5(md5_);
			game.time = 20;
			game.state = 0;
		}
		save("games", games);
		return io.to("dream").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: 0,
			time: game.time,
			bets: [],
			rbets: [],
			history: getDreamHistory(),
			game: game.title,
		});
	}
}, 1000);
/*Double*/
setInterval(async () => {
	doublehistory = getDoubleHistory();
	var game = games.find((x) => x.id === 6);
	if (game.bank.length > 0) {
		game.isActive = true;
		game.state = 1;
	} else {
		game.isActive = false;
		game.state = 0;
	}
	var rbets = [];
	game.bank.sort((a, b) => {
		return b.unix - a.unix;
	});
	game.bank.filter((x) => {
		rbets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	var bets = [];
	game.bank.sort((a, b) => {
		return b.sum - a.sum;
	});
	game.bank.filter((x) => {
		bets.push({
			type: x.type,
			sum: x.sum,
			user: x.user,
			win: x.win,
			color: x.color,
			nick: x.nick,
			photo: x.photo,
			defsum: x.defsum,
			unix: x.unix,
		});
	});
	if (game.isActive && game.time > 0) {
		game.time--;
		return io.to("double").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			rbets,
			history: doublehistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time === -12) {
		game.time--;
		game.state = 2;
		var result = game.bank.filter((x) => x.win === 0);
		if (result.length > 0) {
			for (i in result) {
				var num = game.result.num;
				var user = users.find((x) => x.uid === result[i].user);
				if (Number(result[i].type) == num) {
					result[i].sum = Number(
						Number(
							result[i].sum *
								(num === 0
									? 2
									: num === 1
									? 3
									: num === 2
									? 5
									: num === 3
									? 50
									: 1)
						).toFixed(2)
					);
					user.coins += result[i].sum;
					result[i].win = 1;
					user.uptop += result[i].sum;
				} else {
					user.uptop -= Number(Number(result[i].sum).toFixed(2));
					result[i].win = 2;
				}
			}
		}
	}
	if (game.isActive && game.time <= 1 && game.time != -20) {
		game.state = 2;
		game.time--;
		return io.to("double").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			rbets,
			result: game.result,
			history: doublehistory,
			game: game.title,
			...(game.time < -11 ? { viewnum: 1 } : null),
		});
	}
	if (game.isActive && game.time === 0) {
		game.state = 2;
		io.to("double").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: game.state,
			time: game.time,
			bets,
			rbets,
			result: game.result,
			history: doublehistory,
			game: game.title,
		});
	}
	if (game.isActive && game.time === -20) {
		if (history.filter((x) => x.title === "double").length >= 14) {
			var j = history.filter((x) => x.title === "double");
			j.pop();
		}
		history.unshift({
			title: "double",
			hash: game.hash,
			id: history.filter((x) => x.title === "double").length,
			result: game.result,
		});
		users.filter((user) => {
			if (user.uptop > 0) {
				user.stats.day.win++;
				user.stats.all.win++;
				user.stats.topDay += user.uptop;
				user.stats.topWeek += user.uptop;
			} else if (user.uptop < 0) {
				user.stats.day.lose++;
				user.stats.all.lose++;
			}
			user.uptop = 0;
		});
		doublehistory = getDoubleHistory();
		save("history", history);

		game.bank = [];
		var nums = [
			0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 0,
			1, 0, 2, 0, 2, 0, 1, 0, 1, 0, 1, 0, 2, 3, 2, 0, 1, 0, 1, 0, 1, 0, 2, 0, 2,
			0, 1, 0, 1,
		];
		var num = random(0, nums.length - 1);
		var md5_ = `${str_rand(11)}@${nums[num]}`;
		game.result = {
			num: nums[num],
			md5: md5_,
			win: num,
		};
		game.hash = md5(md5_);
		game.time = 20;
		game.state = 0;
		save("games", games);
		return io.to("double").emit(`message`, {
			type: "update",
			hash: game.hash,
			state: 0,
			time: game.time,
			bets: [],
			rbets: [],
			history: getDoubleHistory(),
			game: game.title,
		});
	}
}, 1000);
/*Tower*/
setInterval(async () => {
	for (var i = 0; i < users.length; i++) {
		var data = towerData.find(
			(x) => x.user === users[i].uid && x.key === users[i]?.keyTowerData
		);
		if (data && users[i].game === "tower") {
			var user = users[i];
			io.to(user.token).emit(`message`, {
				type: "update",
				balance: {
					coins: user.coins,
				},
				RCs: data.RCs,
				hash: data.hash,
				history: getTowerHistory(),
				state: data.state,
				...(data.state === 3
					? {
							fields: data.fields,
							md5: data.md5,
					  }
					: null),
				...(data.state >= 2
					? {
							open: data.open,
							bet: data.bet,
							win: data.win,
							line: data.line,
					  }
					: null),
				game: user.game,
				...(data.loseItem != null ? { loseItem: data.loseItem } : null),
			});
		}
	}
}, 3000);
/*Mines*/
setInterval(async () => {
	for (var i = 0; i < users.length; i++) {
		var data = minesData.find(
			(x) => x.user === users[i].uid && x.key === users[i]?.keyMinesData
		);
		if (data && users[i].game === "mines") {
			var user = users[i];
			io.to(user.token).emit(`message`, {
				type: "update",
				balance: {
					coins: user.coins,
				},
				RCs: data.RCs,
				hash: data.hash,
				history: getMinesHistory(),
				state: data.state,
				...(data.state === 3
					? {
							fields: data.fields,
							md5: data.md5,
					  }
					: null),
				...(data.state >= 2
					? {
							open: data.open,
							bet: data.bet,
							win: data.win,
					  }
					: null),
				game: user.game,
				...(data.loseItem != null ? { loseItem: data.loseItem } : null),
			});
		}
	}
}, 3000);
/*Thimble*/
setInterval(async () => {
	for (var i = 0; i < users.length; i++) {
		var data = thimbleData.find(
			(x) => x.user === users[i].uid && x.key === users[i]?.keyThimbleData
		);
		if (data && users[i].game === "thimble") {
			var user = users[i];
			io.to(user.token).emit(`message`, {
				type: "update",
				balance: {
					coins: user.coins,
				},
				hash: data.hash,
				history: getThimbleHistory(),
				state: data.state,
				...(data.state === 3
					? {
							fields: data.fields,
							md5: data.md5,
							res: data.res,
					  }
					: null),
				...(data.state >= 2
					? {
							open: data.open,
							bet: data.bet,
							win: data.win,
					  }
					: null),
				game: user.game,
			});
		}
	}
}, 3000);
/*Nvuti*/
setInterval(async () => {
	for (var i = 0; i < users.length; i++) {
		var data = nvutiData.find(
			(x) => x.user === users[i].uid && x.key === users[i]?.keyNvutiData
		);
		if (data && users[i].game === "nvuti") {
			var user = users[i];
			io.to(user.token).emit(`message`, {
				type: "update",
				balance: {
					coins: user.coins,
				},
				hash: data.hash,
				history: getNvutiHistory(),
				state: data.state,
				...(data.state === 3
					? {
							number: data.number,
							win: data.win,
							bet: data.bet,
							md5: data.md5,
					  }
					: null),
				game: user.game,
			});
		}
	}
}, 3000);
/*Keno*/
setInterval(async () => {
	for (var i = 0; i < users.length; i++) {
		var data = kenoData.find(
			(x) => x.user === users[i].uid && x.key === users[i]?.keyKenoData
		);
		if (data && users[i].game === "keno") {
			var user = users[i];
			io.to(user.token).emit(`message`, {
				type: "update",
				balance: {
					coins: user.coins,
				},
				hash: data.hash,
				history: getKenoHistory(),
				state: data.state,
				...(data.state === 3
					? {
							win: data.win,
							bet: data.bet,
							md5: data.md5,
							fields: data.fields,
					  }
					: null),
				game: user.game,
			});
		}
	}
}, 3000);
/*GoldWest*/
setInterval(async () => {
	for (var i = 0; i < users.length; i++) {
		var data = goldWestData.find(
			(x) => x.user === users[i].uid && x.key === users[i]?.keyGoldWestData
		);
		if (data && users[i].game === "goldwest") {
			var user = users[i];
			io.to(user.token).emit(`message`, {
				type: "update",
				balance: {
					coins: user.coins,
				},
				RCs: data.RCs,
				hash: data.hash,
				history: getGoldWestHistory(),
				state: data.state,
				...(data.state === 3
					? {
							fields: data.fields,
							md5: data.md5,
					  }
					: null),
				...(data.state >= 2
					? {
							open: data.open,
							bet: data.bet,
							win: data.win,
							line: data.line,
					  }
					: null),
				game: user.game,
				...(data.loseItem != null ? { loseItem: data.loseItem } : null),
			});
		}
	}
}, 3000);
var isStartGraph = false;
var minesData = [];
var towerData = [];
var thimbleData = [];
var goldWestData = [];
var nvutiData = [];
var kenoData = [];
var tokens = [];
io.on("connection", async (socket) => {
	socket.on("disconnect", async (msg) => {
		if (tokens.find((x) => x.token === socket.id))
			tokens = tokens.filter((x) => x.token !== socket.id);
		users.find((x) => x.token === socket.id)
			? (users.find((x) => x.token === socket.id).token = null)
			: null;
	});
	socket.on("message", async (msg) => {
		if (msg.type === "init") {
			var validate = validateAppUrl(msg.referer);
			if (validate.status) {
				var vars = getUrlVars(msg.referer);
				if (Number(msg.user) === Number(vars.id)) {
					var user = users.find((x) => x.uid === Number(msg.user));
					if (user) {
						if (
							tokens.find((x) => x.token === user?.token)?.user ===
							Number(msg.user)
						) {
							socket.emit("message", {
								error: "Вы уже подключены с другого устройства!",
								status: false,
								type: "init",
							});
							socket.disconnect();
						} else {
							user.token = socket.id;
							user.game = msg.game;
							socket.emit("message", {
								roomId: 0,
								status: true,
								token: user.token,
								type: "init",
							});
						}
					}
				}
			}
		}
		if (msg.type === "join") {
			var user = users.find((x) => x.uid === Number(msg.user));
			if (
				user.token === msg.token &&
				!tokens.find((x) => x.token === user.token && x.user === user.uid)
			) {
				if (
					user.game !== "mines" &&
					user.game !== "tower" &&
					user.game != "thimble" &&
					user.game != "goldwest" &&
					user.game !== "nvuti" &&
					user.game !== "keno"
				) {
					socket.join(user.game);
					tokens.push({
						token: user.token,
						unix: getUnix(),
						user: user.uid,
						id: tokens.length,
					});
					socket.emit("message", {
						balance: {
							coins: user.coins,
						},
						type: "balance",
					});
					var game = games.find((x) => x.title === msg.game);
					var rbets = [];
					game.bank.sort((a, b) => {
						return b.unix - a.unix;
					});
					game.bank.filter((x) => {
						rbets.push({
							type: x.type,
							sum: x.sum,
							user: x.user,
							win: x.win,
							color: x.color,
							nick: x.nick,
							photo: x.photo,
							defsum: x.defsum,
							unix: x.unix,
						});
					});
					var bets = [];
					game.bank.sort((a, b) => {
						return b.sum - a.sum;
					});
					game.bank.filter((x) => {
						bets.push({
							type: x.type,
							sum: x.sum,
							user: x.user,
							win: x.win,
							color: x.color,
							nick: x.nick,
							photo: x.photo,
							defsum: x.defsum,
							unix: x.unix,
						});
					});
					io.to(msg.game).emit(`message`, {
						type: "update",
						hash: game.hash,
						state: game.state,
						time: game.time,
						...(msg.game === "wheel"
							? { rbets, viewnum: game.time <= -14 ? 1 : 0 }
							: null),
						bets,
						...(msg.game === "dream" ? { rbets } : null),
						history: eval(`${msg.game}history`),
						...(game.state === 2
							? {
									result: game.result,
									md5: game.md5,
							  }
							: null),
						game: game.title,
					});
					save("games", games);
				} else {
					if (user.game === "mines") {
						var fields = generateMines(5);
						var md5_ = `${str_rand(11)}@${generateMinesToString(fields)}`;
						var open = [];
						fields.filter((x, i) => {
							open.push(-1);
						});
						var unix = getUnix();
						var key = str_rand(11);
						minesData.push({
							user: user.uid,
							id: minesData.length,
							RCs: 5,
							bet: 0,
							hash: md5(md5_),
							md5: md5_,
							fields,
							open,
							unix,
							state: 1,
							win: 0,
							loseItem: null,
							key,
						});
						var data = minesData.find(
							(x) => x.user === user.uid && x.key === key
						);
						user.keyMinesData = key;
						socket.send({
							type: "update",
							balance: {
								coins: user.coins,
							},
							RCs: data.RCs,
							hash: data.hash,
							history: getMinesHistory(),
							state: data.state,
							...(data.state === 3
								? {
										fields: data.fields,
										md5: data.md5,
								  }
								: null),
							...(data.state >= 2
								? {
										open: data.open,
										bet: data.bet,
										win: data.win,
								  }
								: null),
							game: user.game,
							...(data.loseItem != null ? { loseItem: data.loseItem } : null),
						});
					} else if (user.game === "tower") {
						var fields = [];
						var open = [];
						var fields1 = "";
						var fields2 = [];
						for (var i = 0; i < 10; i++) {
							fields.push(generateMines(2, 1));
							open.push(-1);
						}
						for (var i = 0; i < fields.length; i++) {
							for (var j = 0; j < fields[i].length; j++) {
								if (fields[i][j] === true) {
									fields2.push(j);
								}
							}
							fields1 += fields2.toString();
							fields2 = [];
							if (i != 9) {
								fields1 += ";";
							}
						}
						var md5_ = `${str_rand(11)}@${fields1}`;
						var unix = getUnix();
						var key = str_rand(11);
						towerData.push({
							user: user.uid,
							id: towerData.length,
							RCs: 2,
							bet: 0,
							hash: md5(md5_),
							md5: md5_,
							fields,
							open,
							unix,
							state: 1,
							win: 0,
							loseItem: null,
							key,
							line: 0,
						});
						var data = towerData.find(
							(x) => x.user === user.uid && x.key === key
						);
						user.keyTowerData = key;
						socket.send({
							type: "update",
							balance: {
								coins: user.coins,
							},
							RCs: data.RCs,
							hash: data.hash,
							history: getTowerHistory(),
							state: data.state,
							...(data.state === 3
								? {
										fields: data.fields,
										md5: data.md5,
								  }
								: null),
							...(data.state >= 2
								? {
										open: data.open,
										bet: data.bet,
										win: data.win,
										line: data.line,
								  }
								: null),
							game: user.game,
							...(data.loseItem != null ? { loseItem: data.loseItem } : null),
						});
					} else if (user.game === "thimble") {
						var fields = generateMines(1, 1);
						var open = [];
						var res = 0;
						fields.filter((x, i) => {
							open.push(-1);
							if (x === true) {
								res = i;
							}
						});
						var md5_ = `${str_rand(11)}@${res + 1}`;
						var key = str_rand(11);
						user.keyThimbleData = key;
						var unix = getUnix();
						thimbleData.push({
							user: user.uid,
							id: thimbleData.length,
							bet: 0,
							hash: md5(md5_),
							md5: md5_,
							fields,
							open,
							unix,
							state: 1,
							win: 0,
							key,
							res,
						});
						socket.send({
							type: "update",
							balance: {
								coins: user.coins,
							},
							history: getThimbleHistory(),
							hash: md5(md5_),
							state: 1,
							open,
							game: user.game,
						});
					} else if (user.game == "goldwest") {
						var fields = [];
						var open = [];
						var fields1 = "";
						var fields2 = [];
						for (var i = 0; i < 10; i++) {
							function pick1(array) {
								var r = random(0, array.length - 1);
								array[r] = false;
								return array;
							}
							fields.push(pick1([true, true]));
							open.push(-1);
						}
						for (var i = 0; i < fields.length; i++) {
							for (var j = 0; j < fields[i].length; j++) {
								if (fields[i][j] === true) {
									fields2.push(j);
								}
							}
							fields1 += fields2.toString();
							fields2 = [];
							if (i != 9) {
								fields1 += ";";
							}
						}
						var md5_ = `${str_rand(11)}@${fields1}`;
						var unix = getUnix();
						var key = str_rand(11);
						goldWestData.push({
							user: user.uid,
							id: goldWestData.length,
							RCs: 2,
							bet: 0,
							hash: md5(md5_),
							md5: md5_,
							fields,
							open,
							unix,
							state: 1,
							win: 0,
							loseItem: null,
							key,
							line: 0,
						});
						var data = goldWestData.find(
							(x) => x.user === user.uid && x.key === key
						);
						user.keyGoldWestData = key;
						socket.send({
							type: "update",
							balance: {
								coins: user.coins,
							},
							RCs: data.RCs,
							hash: data.hash,
							history: getGoldWestHistory(),
							state: data.state,
							...(data.state === 3
								? {
										fields: data.fields,
										md5: data.md5,
								  }
								: null),
							...(data.state >= 2
								? {
										open: data.open,
										bet: data.bet,
										win: data.win,
										line: data.line,
								  }
								: null),
							game: user.game,
							...(data.loseItem != null ? { loseItem: data.loseItem } : null),
						});
					} else if (user.game == "nvuti") {
						var key = str_rand(11);
						var number = random(1, 999999);
						var md5_ = `${str_rand(11)}@${number}`;
						nvutiData.push({
							id: nvutiData.length,
							user: user.uid,
							hash: md5(md5_),
							key,
							md5: md5_,
							number,
							unix: getUnix(),
							state: 1,
							win: 0,
							bet: 0,
						});
						user.keyNvutiData = key;
						socket.send({
							type: "update",
							balane: {
								coins: user.coins,
							},
							game: user.game,
							state: 1,
							history: getNvutiHistory(),
							hash: md5(md5_),
						});
					} else if (user.game === "keno-") {
						var fields = generateMines(10, 8, 5);
						var md5_ = `${str_rand(11)}@${generateMinesToString(fields)}`;
						var unix = getUnix();
						var key = str_rand(11);
						kenoData.push({
							user: user.uid,
							id: kenoData.length,
							bet: 0,
							hash: md5(md5_),
							md5: md5_,
							fields,
							unix,
							state: 1,
							win: 0,
							key,
						});
						var data = kenoData.find(
							(x) => x.user === user.uid && x.key === key
						);
						user.keyKenoData = key;
						socket.send({
							type: "update",
							balance: {
								coins: user.coins,
							},
							hash: data.hash,
							history: getKenoHistory(),
							state: data.state,
							...(data.state === 3
								? {
										fields: data.fields,
										md5: data.md5,
								  }
								: null),
							game: user.game,
						});
					}
				}
			} else {
				socket.emit("error", {
					type: "join",
					desc: "Ключ соединения не действителен! Повторите попытку!",
				});
			}
		}
		if (msg.type === "action") {
			var user = users.find((x) => x.uid === msg.user);
			tokens.find((y) => y.token === user.token)
				? (tokens.find((y) => y.token === user.token).unix = getUnix())
				: null;
			if (msg.a === "setBet") {
				if (user.token === msg.token) {
					if (msg.bet > 1_000_000_000) {
						return socket.emit(`message`, {
							type: "setBet",
							status: false,
							desc: "Сумма должна быть меньше 1ККК Coins",
							private: {
								balance: {
									coins: user.coins,
								},
							},
						});
					}
					if (
						user.game !== "mines" &&
						user.game !== "tower" &&
						user.game !== "thimble" &&
						user.game !== "goldwest" &&
						user.game !== "nvuti" &&
						user.game !== "keno-"
					) {
						var game = games.find((x) => x.title === user.game);
						if (game.state !== 2) {
							if (user.coins >= msg.bet) {
								if (msg.bet <= 10)
									return socket.emit(`message`, {
										type: "setBet",
										status: false,
										desc: "Сумма должна быть меньше 10 Coins",
										private: {
											balance: {
												coins: user.coins,
											},
										},
									});
								user.coins -= msg.bet;
								var game = games.find((x) => x.title === user.game);
								if (
									game.bank.find((x) => x.type === msg.t && x.user === msg.user)
								) {
									if (
										msg.bet +
											game.bank.find(
												(x) => x.type === msg.t && x.user === msg.user
											).sum >
										1_000_000_000
									) {
										return socket.emit(`message`, {
											type: "setBet",
											status: false,
											desc: "Сумма должна быть меньше 1ККК Coins",
											private: {
												balance: {
													coins: user.coins,
												},
											},
										});
									}
									game.bank.find(
										(x) => x.type === msg.t && x.user === msg.user
									).ip = socket.handshake.address;
									game.bank.find(
										(x) => x.type === msg.t && x.user === msg.user
									).sum += msg.bet;
									game.bank.find(
										(x) => x.type === msg.t && x.user === msg.user
									).defsum += msg.bet;
								} else {
									if (
										((user.game === "b7s" ||
											user.game === "double" ||
											user.game == "crash") &&
											!games
												.find((x) => x.title === user.game)
												.bank.find((x) => x.user === msg.user)) ||
										(user.game !== "b7s" &&
											user.game !== "double" &&
											user.game != "crash")
									) {
										vars = JSON.parse(socket.handshake.query.params);
										game.bank.push({
											type: msg.t,
											sum: Number(Number(msg.bet).toFixed(2)),
											unix: getUnix(),
											user: user.uid,
											ip: socket.handshake.address,
											win: 0,
											defsum: Number(Number(msg.bet).toFixed(2)),
											color: user.color,
											nick: user.nick
												? user.nick
												: `${vars.nick.first} ${vars.nick.last}`,
											photo: vars.photo._200,
											...(user.game === "crash"
												? {
														give: false,
												  }
												: null),
										});
									} else {
										return socket.emit(`message`, {
											type: "setBet",
											status: false,
											private: {
												balance: {
													coins: user.coins,
												},
											},
										});
									}
								}
								return socket.emit(`message`, {
									type: "setBet",
									status: true,
									private: {
										balance: {
											coins: user.coins,
										},
									},
								});
							} else {
								return socket.emit(`message`, {
									type: "setBet",
									status: false,
									desc: "На балансе не хватает Coins.",
									private: {
										balance: {
											coins: user.coins,
										},
									},
								});
							}
						}
					} else {
						if (user.game === "mines") {
							var mines = minesData.find(
								(x) => x.user === user.uid && x.key === user.keyMinesData
							);
							if (mines) {
								if (mines.state === 1) {
									if (msg.bet <= user.coins) {
										if (msg.bet > 10) {
											user.coins -= msg.bet;
											mines.bet = msg.bet;
											mines.win = mines.bet;
											mines.state = 2;
											socket.send({
												type: "update",
												balance: {
													coins: user.coins,
												},
												RCs: mines.RCs,
												hash: mines.hash,
												history: getMinesHistory(),
												state: mines.state,
												...(mines.state === 3
													? {
															fields: mines.fields,
															md5: mines.md5,
													  }
													: null),
												...(mines.state >= 2
													? {
															open: mines.open,
															bet: mines.bet,
															win: mines.win,
													  }
													: null),
												game: user.game,
												...(mines.loseItem != null
													? { loseItem: mines.loseItem }
													: null),
											});
										} else {
											return socket.emit(`message`, {
												type: "setBet",
												status: false,
												desc: "Сумма должна быть больше 10 Coins.",
												private: {
													balance: {
														coins: user.coins,
													},
												},
											});
										}
									} else {
										return socket.emit(`message`, {
											type: "setBet",
											status: false,
											desc: "На вашем балансе недостаточно Coins.",
											private: {
												balance: {
													coins: user.coins,
												},
											},
										});
									}
								} else {
									return socket.emit(`message`, {
										type: "setBet",
										status: false,
										desc: "Ставки можно делать только в начале игры.",
										private: {
											balance: {
												coins: user.coins,
											},
										},
									});
								}
							}
						} else if (user.game === "tower") {
							var tower = towerData.find(
								(x) => x.user === user.uid && x.key === user.keyTowerData
							);
							if (tower) {
								if (tower.state === 1) {
									if (msg.bet <= user.coins) {
										if (msg.bet > 10) {
											user.coins -= msg.bet;
											tower.bet = msg.bet;
											tower.win = tower.bet;
											tower.state = 2;
											socket.send({
												type: "update",
												balance: {
													coins: user.coins,
												},
												RCs: tower.RCs,
												hash: tower.hash,
												history: getTowerHistory(),
												state: tower.state,
												...(tower.state === 3
													? {
															fields: tower.fields,
															md5: tower.md5,
													  }
													: null),
												...(tower.state >= 2
													? {
															open: tower.open,
															bet: tower.bet,
															win: tower.win,
															line: tower.line,
													  }
													: null),
												game: user.game,
												...(tower.loseItem != null
													? { loseItem: tower.loseItem }
													: null),
											});
										} else {
											return socket.emit(`message`, {
												type: "setBet",
												status: false,
												desc: "Сумма должна быть больше 10 Coins.",
												private: {
													balance: {
														coins: user.coins,
													},
												},
											});
										}
									} else {
										return socket.emit(`message`, {
											type: "setBet",
											status: false,
											desc: "На вашем балансе недостаточно Coins.",
											private: {
												balance: {
													coins: user.coins,
												},
											},
										});
									}
								} else {
									return socket.emit(`message`, {
										type: "setBet",
										status: false,
										desc: "Ставки можно делать только в начале игры.",
										private: {
											balance: {
												coins: user.coins,
											},
										},
									});
								}
							}
						} else if (user.game === "thimble") {
							var data = thimbleData.find(
								(x) => x.user === user.uid && x.key === user.keyThimbleData
							);
							if (data) {
								if (data.state === 1) {
									if (msg.bet <= user.coins) {
										if (msg.bet > 10) {
											user.coins -= msg.bet;
											data.bet = msg.bet;
											data.win = data.bet;
											data.state = 2;
											socket.send({
												type: "update",
												state: 2,
												bet: data.bet,
												open: data.open,
												hash: data.hash,
												game: user.game,
												history: getThimbleHistory(),
												win: data.win,
												balance: {
													coins: user.coins,
												},
											});
										} else {
											return socket.emit(`message`, {
												type: "setBet",
												status: false,
												desc: "Сумма должна быть больше 10 Coins.",
												private: {
													balance: {
														coins: user.coins,
													},
												},
											});
										}
									} else {
										return socket.emit(`message`, {
											type: "setBet",
											status: false,
											desc: "На вашем балансе недостаточно Coins.",
											private: {
												balance: {
													coins: user.coins,
												},
											},
										});
									}
								} else {
									return socket.emit(`message`, {
										type: "setBet",
										status: false,
										desc: "Ставки можно делать только в начале игры.",
										private: {
											balance: {
												coins: user.coins,
											},
										},
									});
								}
							}
						} else if (user.game === "goldwest") {
							var goldWest = goldWestData.find(
								(x) => x.user === user.uid && x.key === user.keyGoldWestData
							);
							if (goldWest) {
								if (goldWest.state === 1) {
									if (msg.bet <= user.coins) {
										if (msg.bet > 10) {
											user.coins -= msg.bet;
											goldWest.bet = msg.bet;
											goldWest.win = goldWest.bet;
											goldWest.state = 2;
											socket.send({
												type: "update",
												balance: {
													coins: user.coins,
												},
												RCs: goldWest.RCs,
												hash: goldWest.hash,
												history: getGoldWestHistory(),
												state: goldWest.state,
												...(goldWest.state === 3
													? {
															fields: goldWest.fields,
															md5: goldWest.md5,
													  }
													: null),
												...(goldWest.state >= 2
													? {
															open: goldWest.open,
															bet: goldWest.bet,
															win: goldWest.win,
															line: goldWest.line,
													  }
													: null),
												game: user.game,
												...(goldWest.loseItem != null
													? { loseItem: goldWest.loseItem }
													: null),
											});
										} else {
											return socket.emit(`message`, {
												type: "setBet",
												status: false,
												desc: "Сумма должна быть больше 10 Coins.",
												private: {
													balance: {
														coins: user.coins,
													},
												},
											});
										}
									} else {
										return socket.emit(`message`, {
											type: "setBet",
											status: false,
											desc: "На вашем балансе недостаточно Coins.",
											private: {
												balance: {
													coins: user.coins,
												},
											},
										});
									}
								} else {
									return socket.emit(`message`, {
										type: "setBet",
										status: false,
										desc: "Ставки можно делать только в начале игры.",
										private: {
											balance: {
												coins: user.coins,
											},
										},
									});
								}
							}
						} else if (user.game === "nvuti") {
							var data = nvutiData.find(
								(x) => x.user === user.uid && x.key === user.keyNvutiData
							);
							if (data) {
								if (msg.bet <= user.coins) {
									if (msg.bet > 10) {
										if (data.state === 1) {
											user.coins -= msg.bet;
											if (msg.t === 0) {
												if (
													data.number >= 1 &&
													data.number <= 9999 + msg.v * 10000 - 10000
												) {
													data.bet = msg.bet;
													data.win = data.bet;
													user.coins +=
														data.bet *
														Number(((100 / msg.v) * 0.95).toFixed(2));
													data.win =
														data.bet *
														Number(((100 / msg.v) * 0.95).toFixed(2));
													data.state = 3;
													user.stats.topDay += Number(
														((100 / msg.v) * 0.95).toFixed(2)
													);
													user.stats.topWeek += Number(
														((100 / msg.v) * 0.95).toFixed(2)
													);
													user.stats.day.win++;
													user.stats.all.win++;
													vars = JSON.parse(socket.handshake.query.params);
													if (
														history.filter((x) => x.title === "nvuti").length >=
														14
													) {
														var j = history.filter((x) => x.title === "nvuti");
														j.pop();
													}
													history.unshift({
														title: "nvuti",
														id: history.length,
														hash: data.hash,
														unix: getUnix(),
														user: user.uid,
														color: user.color,
														nick: user.nick
															? user.nick
															: `${vars.nick.first} ${vars.nick.last}`,
														photo: vars.photo._200,
														bet: data.win,
														win: 1,
														v: msg.v,
														md5: data.md5,
														resultGame: data.number,
													});
													save("history", history);
												} else if (data.number > 9999 + msg.v * 10000 - 10000) {
													data.bet = msg.bet;
													data.win = data.bet;
													data.win = 0;
													data.state = 3;
													user.stats.day.lose++;
													user.stats.all.lose++;
													vars = JSON.parse(socket.handshake.query.params);
													if (
														history.filter((x) => x.title === "nvuti").length >=
														14
													) {
														var j = history.filter((x) => x.title === "nvuti");
														j.pop();
													}
													history.unshift({
														title: "nvuti",
														id: history.length,
														hash: data.hash,
														unix: getUnix(),
														user: user.uid,
														color: user.color,
														nick: user.nick
															? user.nick
															: `${vars.nick.first} ${vars.nick.last}`,
														photo: vars.photo._200,
														bet: data.bet,
														win: 2,
														v: msg.v,
														md5: data.md5,
														resultGame: data.number,
													});
													save("history", history);
												}
											} else if (msg.t === 1) {
												if (
													data.number >= 990000 - msg.v * 10000 + 10000 &&
													data.number <= 999999
												) {
													data.bet = msg.bet;
													data.win = data.bet;
													user.coins +=
														data.bet *
														Number(((100 / msg.v) * 0.95).toFixed(2));
													data.win =
														data.bet *
														Number(((100 / msg.v) * 0.95).toFixed(2));
													data.state = 3;
													user.stats.topDay += Number(
														((100 / msg.v) * 0.95).toFixed(2)
													);
													user.stats.topWeek += Number(
														((100 / msg.v) * 0.95).toFixed(2)
													);
													user.stats.day.win++;
													user.stats.all.win++;
													vars = JSON.parse(socket.handshake.query.params);
													if (
														history.filter((x) => x.title === "nvuti").length >=
														14
													) {
														var j = history.filter((x) => x.title === "nvuti");
														j.pop();
													}
													history.unshift({
														title: "nvuti",
														id: history.length,
														hash: data.hash,
														unix: getUnix(),
														user: user.uid,
														color: user.color,
														nick: user.nick
															? user.nick
															: `${vars.nick.first} ${vars.nick.last}`,
														photo: vars.photo._200,
														bet: data.win,
														win: 1,
														v: msg.v,
														md5: data.md5,
														resultGame: data.number,
													});
													save("history", history);
												} else if (
													data.number <
													990000 - msg.v * 10000 + 10000
												) {
													data.bet = msg.bet;
													data.win = data.bet;
													data.win = 0;
													data.state = 3;
													user.stats.day.lose++;
													user.stats.all.lose++;
													vars = JSON.parse(socket.handshake.query.params);
													if (
														history.filter((x) => x.title === "nvuti").length >=
														14
													) {
														var j = history.filter((x) => x.title === "nvuti");
														j.pop();
													}
													history.unshift({
														title: "nvuti",
														id: history.length,
														hash: data.hash,
														unix: getUnix(),
														user: user.uid,
														color: user.color,
														nick: user.nick
															? user.nick
															: `${vars.nick.first} ${vars.nick.last}`,
														photo: vars.photo._200,
														bet: data.bet,
														win: 2,
														v: msg.v,
														md5: data.md5,
														resultGame: data.number,
													});
													save("history", history);
												}
											}
											socket.send({
												type: "update",
												game: user.game,
												state: data.state,
												number: data.number,
												win: data.win,
												bet: data.bet,
												hash: data.hash,
												md5: data.md5,
											});
										} else {
											return socket.emit(`message`, {
												type: "setBet",
												status: false,
												desc: "Ставки можно делать только в начале игры.",
												private: {
													balance: {
														coins: user.coins,
													},
												},
											});
										}
									} else {
										return socket.emit(`message`, {
											type: "setBet",
											status: false,
											desc: "Сумма должна быть больше 10 Coins.",
											private: {
												balance: {
													coins: user.coins,
												},
											},
										});
									}
								} else {
									return socket.emit(`message`, {
										type: "setBet",
										status: false,
										desc: "На вашем балансе недостаточно Coins.",
										private: {
											balance: {
												coins: user.coins,
											},
										},
									});
								}
							}
						} else if (user.game === "keno") {
							var data = kenoData.find(
								(x) => x.user === user.uid && x.key === user.keyKenoData
							);
							if (data) {
								if (data.state === 1) {
									if (msg.bet <= user.coins) {
										if (msg.bet > 10) {
											const getCoefs = [
												[3.8],
												[1.7, 5.2],
												[0, 2.7, 48],
												[0, 1.7, 10, 84],
												[0, 1.4, 4, 14, 290],
												[0, 0, 3, 9, 160, 720],
												[0, 0, 2, 7, 30, 280, 800],
												[0, 0, 2, 4, 10, 50, 300, 850],
												[0, 0, 2.5, 4.5, 12, 60, 320, 900],
												[0, 0, 1.5, 2, 4, 6, 22, 80, 400, 1000],
											];
											data.bet = msg.bet;
											data.win = data.bet;
											user.coins -= data.bet;
											var open = [];
											msg.items.filter((x, i) => {
												if (data.fields[x - 1] === true) {
													open.push(1);
												}
											});
											if (open.length === 0) {
												data.win = 0;
											} else {
												data.win =
													data.bet *
													getCoefs[msg.items.length - 1][open.length - 1];
											}
											data.state = 3;
											vars = JSON.parse(socket.handshake.query.params);
											if (
												history.filter((x) => x.title === "keno").length >= 14
											) {
												var j = history.filter((x) => x.title === "keno");
												j.pop();
											}
											user.coins += data.win;
											user.stats.topDay += data.win;
											user.stats.topWeek += data.win;
											if (data.win > 0) {
												user.stats.day.win++;
												user.stats.all.win++;
											} else {
												user.stats.day.lose++;
												user.stats.all.lose++;
											}
											history.unshift({
												title: "keno",
												id: history.length,
												hash: data.hash,
												unix: getUnix(),
												user: user.uid,
												color: user.color,
												nick: user.nick
													? user.nick
													: `${vars.nick.first} ${vars.nick.last}`,
												photo: vars.photo._200,
												bet: data.win !== 0 ? data.win : data.bet,
												win: data.win === 0 ? 2 : 1,
												coef: getCoefs[msg.items.length - 1][open.length - 1],
												md5: data.md5,
												resultGame: generateMinesToString(data.fields),
											});
											save("history", history);
											socket.send({
												type: "update",
												win: data.win,
												bet: data.bet,
												hash: data.hash,
												md5: data.md5,
												history: getKenoHistory(),
												state: data.state,
												game: user.game,
												balance: {
													coins: user.coins,
												},
												fields: data.fields,
											});
										}
									}
								}
							}
						}
					}
				} else {
					return socket.emit(`update`, {
						type: "setBet",
						status: false,
						desc: "Ваш токен не действителен!",
						private: {
							balance: {
								coins: user.coins,
							},
						},
					});
				}
			}
			if (msg.a === "open") {
				if (user.game === "mines") {
					var data = minesData.find(
						(x) => x.user === user.uid && x.key === user.keyMinesData
					);
					if (data) {
						if (data.state === 2) {
							const genCoefs = (t) => {
								for (var a = 1, e = [], i = 0; i < 25 - t; i++) {
									a *= 1 - t / (25 - i);
									var r = Math.floor((0.9 / a) * 100) / 100;
									e.push(r);
								}
								return e;
							};
							if (data.open[msg.item] === -1) {
								if (data.fields[msg.item] === false) {
									data.open[msg.item] = false;
									data.win =
										data.bet *
										genCoefs(data.RCs)[
											data.open.filter((x) => x === false).length - 1
										];
									socket.send({
										type: "update",
										balance: {
											coins: user.coins,
										},
										RCs: data.RCs,
										hash: data.hash,
										history: getMinesHistory(),
										state: data.state,
										...(data.state === 3
											? {
													fields: data.fields,
													md5: data.md5,
											  }
											: null),
										...(data.state >= 2
											? {
													open: data.open,
													bet: data.bet,
													win: data.win,
											  }
											: null),
										game: user.game,
										...(data.loseItem != null
											? { loseItem: data.loseItem }
											: null),
									});
								} else {
									data.open[msg.item] = true;
									data.win = 0;
									user.stats.all.lose++;
									user.stats.day.lose++;
									data.loseItem = msg.item;
									data.state = 3;
									vars = JSON.parse(socket.handshake.query.params);
									if (history.filter((x) => x.title === "mines").length >= 14) {
										var j = history.filter((x) => x.title === "mines");
										j.pop();
									}
									var fields = [];
									data.fields.filter((x, i) => {
										if (x === true) {
											fields.push(i);
										}
									});
									history.unshift({
										title: "mines",
										id: history.length,
										hash: data.hash,
										unix: getUnix(),
										user: user.uid,
										color: user.color,
										nick: user.nick
											? user.nick
											: `${vars.nick.first} ${vars.nick.last}`,
										photo: vars.photo._200,
										bet: data.bet,
										win: 2,
										coef: genCoefs(data.RCs)[
											data.open.filter((x) => x != -1).length - 1
										],
										md5: data.md5,
										resultGame: fields.toString(),
									});
									save("history", history);
									socket.send({
										type: "update",
										balance: {
											coins: user.coins,
										},
										RCs: data.RCs,
										hash: data.hash,
										history: getMinesHistory(),
										state: data.state,
										...(data.state === 3
											? {
													fields: data.fields,
													md5: data.md5,
											  }
											: null),
										...(data.state >= 2
											? {
													open: data.open,
													bet: data.bet,
													win: data.win,
											  }
											: null),
										game: user.game,
										...(data.loseItem != null
											? { loseItem: data.loseItem }
											: null),
									});
								}
							}
						}
					}
				} else if (user.game === "tower") {
					var data = towerData.find(
						(x) => x.user === user.uid && x.key === user.keyTowerData
					);
					if (data) {
						if (data.state === 2) {
							const genCoefs = (t) => {
								if (t === 1) {
									return [
										1.12, 1.4, 1.75, 2.19, 2.74, 3.43, 4.29, 5.36, 6.7, 8.38,
									];
								} else if (t === 2) {
									return [
										1.5, 2.5, 4.16, 6.94, 11.57, 19.29, 32.15, 53.58, 89.3,
										148.84,
									];
								} else if (t === 3) {
									return [
										2.25, 5.62, 14.06, 35.15, 87.89, 219.72, 549.31, 1373.29,
										3433.22, 8583.06,
									];
								} else if (t === 4) {
									return [
										4.5, 22.5, 112.5, 562.5, 2812.5, 14062.5, 70312.5, 351562.5,
										1757812.5, 8789062.5,
									];
								}
							};
							if (data.fields[data.line][msg.item] === false) {
								data.open[data.line] = msg.item;
								data.win = data.bet * genCoefs(data.RCs)[data.line];
								data.line++;
								socket.send({
									type: "update",
									balance: {
										coins: user.coins,
									},
									RCs: data.RCs,
									hash: data.hash,
									Coefs: genCoefs(data.RCs),
									history: getTowerHistory(),
									state: data.state,
									...(data.state === 3
										? {
												fields: data.fields,
												md5: data.md5,
										  }
										: null),
									...(data.state >= 2
										? {
												open: data.open,
												bet: data.bet,
												win: data.win,
												line: data.line,
										  }
										: null),
									game: user.game,
									...(data.loseItem != null
										? { loseItem: data.loseItem }
										: null),
								});
							} else {
								data.open[data.line] = true;
								data.win = 0;
								user.stats.all.lose++;
								user.stats.day.lose++;
								data.loseItem = msg.item;
								data.state = 3;
								vars = JSON.parse(socket.handshake.query.params);
								if (history.filter((x) => x.title === "tower").length >= 14) {
									var j = history.filter((x) => x.title === "tower");
									j.pop();
								}
								var fields1 = "";
								var fields2 = [];
								for (var i = 0; i < data.fields.length; i++) {
									for (var j = 0; j < data.fields[i].length; j++) {
										if (data.fields[i][j] === true) {
											fields2.push(j);
										}
									}
									fields1 += fields2.toString();
									fields2 = [];
									if (i != 9) {
										fields1 += ";";
									}
								}
								history.unshift({
									title: "tower",
									id: history.length,
									hash: data.hash,
									unix: getUnix(),
									user: user.uid,
									color: user.color,
									nick: user.nick
										? user.nick
										: `${vars.nick.first} ${vars.nick.last}`,
									photo: vars.photo._200,
									bet: data.bet,
									win: 2,
									coef: genCoefs(data.RCs)[data.line],
									md5: data.md5,
									resultGame: fields1,
								});
								save("history", history);
								socket.send({
									type: "update",
									balance: {
										coins: user.coins,
									},
									RCs: data.RCs,
									hash: data.hash,
									Coefs: genCoefs(data.RCs),
									history: getGoldWestHistory(),
									state: data.state,
									...(data.state === 3
										? {
												fields: data.fields,
												md5: data.md5,
										  }
										: null),
									...(data.state >= 2
										? {
												open: data.open,
												bet: data.bet,
												win: data.win,
												line: data.line,
										  }
										: null),
									game: user.game,
									...(data.loseItem != null
										? { loseItem: data.loseItem }
										: null),
								});
							}
						}
					}
				} else if (user.game === "thimble") {
					var data = thimbleData.find(
						(x) => x.user === user.uid && x.key === user.keyThimbleData
					);
					if (data) {
						if (data.state === 2) {
							vars = JSON.parse(socket.handshake.query.params);
							if (data.res === msg.item) {
								if (history.filter((x) => x.title === "thimble").length >= 14) {
									var j = history.filter((x) => x.title === "thimble");
									j.pop();
								}
								history.unshift({
									title: "thimble",
									id: history.length,
									hash: data.hash,
									unix: getUnix(),
									user: user.uid,
									color: user.color,
									nick: user.nick
										? user.nick
										: `${vars.nick.first} ${vars.nick.last}`,
									photo: vars.photo._200,
									bet:
										data.bet *
										(data.open.filter((x) => x !== -1).length === 0
											? 4.5
											: data.open.filter((x) => x !== -1).length === 1
											? 2
											: data.open.filter((x) => x !== -1).length === 2
											? 0.95
											: 0),
									win: 1,
									coef:
										data.open.filter((x) => x !== -1).length === 0
											? 4.5
											: data.open.filter((x) => x !== -1).length === 1
											? 2
											: data.open.filter((x) => x !== -1).length === 2
											? 0.95
											: 0,
									md5: data.md5,
									resultGame: msg.item,
								});
								save("history", history);
								data.state = 3;
								data.win =
									data.bet *
									(data.open.filter((x) => x !== -1).length === 0
										? 4.5
										: data.open.filter((x) => x !== -1).length === 1
										? 2
										: data.open.filter((x) => x !== -1).length === 2
										? 0.95
										: 0);
								user.stats.topDay += data.win;
								user.stats.all.win++;
								user.stats.day.win++;
								user.stats.topWeek += data.win;
								user.coins += data.win;
								data.open[msg.item] = msg.item;
								socket.send({
									type: "update",
									hash: data.hash,
									md5: data.md5,
									bet: data.bet,
									win: data.win,
									open: data.open,
									res: data.res,
									history: getThimbleHistory(),
									state: data.state,
									game: user.game,
									balance: {
										coins: user.coins,
									},
								});
							} else {
								if (data.open.find((x) => x === msg.item)) return;
								if (
									data.open.filter((x) => x === -1).length < 4 ||
									user.coins <
										data.bet / data.open.filter((x) => x !== -1).length
								) {
									data.state = 3;
									data.win = 0;
									user.stats.all.lose++;
									user.stats.day.lose++;
									if (
										history.filter((x) => x.title === "thimble").length >= 14
									) {
										var j = history.filter((x) => x.title === "thimble");
										j.pop();
									}
									history.unshift({
										title: "thimble",
										id: history.length,
										hash: data.hash,
										unix: getUnix(),
										user: user.uid,
										color: user.color,
										nick: user.nick
											? user.nick
											: `${vars.nick.first} ${vars.nick.last}`,
										photo: vars.photo._200,
										bet: data.bet,
										win: 2,
										coef: null,
										md5: data.md5,
										resultGame: data.res,
									});
									save("history", history);
								}
								if (data.open.filter((x) => x === -1).length != 5) {
									user.coins -=
										data.bet / data.open.filter((x) => x !== -1).length;
									data.bet +=
										data.bet / data.open.filter((x) => x !== -1).length;
								}
								data.open[msg.item] = msg.item;
								socket.send({
									type: "update",
									hash: data.hash,
									md5: data.md5,
									bet: data.bet,
									win: data.win,
									open: data.open,
									history: getThimbleHistory(),
									state: data.state,
									game: user.game,
									...(data.state === 3
										? {
												res: data.res,
										  }
										: null),
									balance: {
										coins: user.coins,
									},
								});
							}
						}
					}
				} else if (user.game === "goldwest") {
					var data = goldWestData.find(
						(x) => x.user === user.uid && x.key === user.keyGoldWestData
					);
					if (data) {
						if (data.state === 2) {
							const genCoefs = function (t) {
								var a = 1,
									e = [],
									i = 1,
									r = 2;
								2 === t && ((i = 2), (r = 3));
								for (var s = 0; s < 10; s++) {
									a *= 1 - i / r;
									var n = Math.floor((0.95 / a) * 100) / 100;
									e.push(n);
								}
								return e;
							};
							if (data.fields[data.line][msg.item] === false) {
								data.open[data.line] = msg.item;
								data.win = data.bet * genCoefs(data.RCs)[data.line];
								data.line++;
								socket.send({
									type: "update",
									balance: {
										coins: user.coins,
									},
									RCs: data.RCs,
									hash: data.hash,
									Coefs: genCoefs(data.RCs),
									history: getGoldWestHistory(),
									state: data.state,
									...(data.state === 3
										? {
												fields: data.fields,
												md5: data.md5,
										  }
										: null),
									...(data.state >= 2
										? {
												open: data.open,
												bet: data.bet,
												win: data.win,
												line: data.line,
										  }
										: null),
									game: user.game,
									...(data.loseItem != null
										? { loseItem: data.loseItem }
										: null),
								});
							} else {
								data.open[data.line] = true;
								data.win = 0;
								user.stats.all.lose++;
								user.stats.day.lose++;
								data.loseItem = msg.item;
								data.state = 3;
								vars = JSON.parse(socket.handshake.query.params);
								if (
									history.filter((x) => x.title === "goldwest").length >= 14
								) {
									var j = history.filter((x) => x.title === "goldwest");
									j.pop();
								}
								var fields1 = "";
								var fields2 = [];
								for (var i = 0; i < data.fields.length; i++) {
									for (var j = 0; j < data.fields[i].length; j++) {
										if (data.fields[i][j] === true) {
											fields2.push(j);
										}
									}
									fields1 += fields2.toString();
									fields2 = [];
									if (i != 9) {
										fields1 += ";";
									}
								}
								history.unshift({
									title: "goldwest",
									id: history.length,
									hash: data.hash,
									unix: getUnix(),
									user: user.uid,
									color: user.color,
									nick: user.nick
										? user.nick
										: `${vars.nick.first} ${vars.nick.last}`,
									photo: vars.photo._200,
									bet: data.bet,
									win: 2,
									coef: genCoefs(data.RCs)[data.line],
									md5: data.md5,
									resultGame: fields1,
								});
								save("history", history);
								socket.send({
									type: "update",
									balance: {
										coins: user.coins,
									},
									RCs: data.RCs,
									hash: data.hash,
									Coefs: genCoefs(data.RCs),
									history: getGoldWestHistory(),
									state: data.state,
									...(data.state === 3
										? {
												fields: data.fields,
												md5: data.md5,
										  }
										: null),
									...(data.state >= 2
										? {
												open: data.open,
												bet: data.bet,
												win: data.win,
												line: data.line,
										  }
										: null),
									game: user.game,
									...(data.loseItem != null
										? { loseItem: data.loseItem }
										: null),
								});
							}
						}
					}
				}
			}
			if (msg.a === "continue") {
				if (user.game === "mines") {
					var data = minesData.find(
						(x) => x.user === user.uid && x.key === user.keyMinesData
					);
					if (data) {
						if (data.state === 3) {
							var fields = generateMines(5);
							var md5_ = `${str_rand(11)}@${generateMinesToString(fields)}`;
							var open = [];
							fields.filter(() => {
								open.push(-1);
							});
							var unix = getUnix();
							data.open = open;
							data.win = 0;
							data.bet = 0;
							data.fields = fields;
							data.md5 = md5_;
							data.hash = md5(md5_);
							data.RCs = 5;
							data.unix = unix;
							data.state = 1;
							data.loseItem = null;
							socket.send({
								type: "update",
								balance: {
									coins: user.coins,
								},
								RCs: data.RCs,
								hash: data.hash,
								history: getMinesHistory(),
								state: data.state,
								...(data.state === 3
									? {
											fields: data.fields,
											md5: data.md5,
									  }
									: null),
								...(data.state >= 2
									? {
											open: data.open,
											bet: data.bet,
											win: data.win,
									  }
									: null),
								game: user.game,
								...(data.loseItem != null ? { loseItem: data.loseItem } : null),
							});
						}
					}
				} else if (user.game === "tower") {
					var data = towerData.find(
						(x) => x.user === user.uid && x.key === user.keyTowerData
					);
					if (data) {
						if (data.state === 3) {
							var fields = [];
							var open = [];
							for (var i = 0; i < 10; i++) {
								fields.push(generateMines(2, 1));
								open.push(-1);
							}
							var fields1 = "";
							var fields2 = [];
							for (var i = 0; i < fields.length; i++) {
								for (var j = 0; j < fields[i].length; j++) {
									if (data.fields[i][j] === true) {
										fields2.push(j);
									}
								}
								fields1 += fields2.toString();
								fields2 = [];
								if (i != 9) {
									fields1 += ";";
								}
							}
							var md5_ = `${str_rand(11)}@${fields1}`;
							var unix = getUnix();
							data.open = open;
							data.win = 0;
							data.bet = 0;
							data.fields = fields;
							data.md5 = md5_;
							data.hash = md5(md5_);
							data.RCs = 2;
							data.unix = unix;
							data.state = 1;
							data.loseItem = null;
							data.line = 0;
							socket.send({
								type: "update",
								balance: {
									coins: user.coins,
								},
								RCs: data.RCs,
								hash: data.hash,
								history: getTowerHistory(),
								state: data.state,
								...(data.state === 3
									? {
											fields: data.fields,
											md5: data.md5,
									  }
									: null),
								...(data.state >= 2
									? {
											open: data.open,
											bet: data.bet,
											win: data.win,
											line: data.line,
									  }
									: null),
								game: user.game,
								...(data.loseItem != null ? { loseItem: data.loseItem } : null),
							});
						}
					}
				} else if (user.game === "thimble") {
					var data = thimbleData.find(
						(x) => x.user === user.uid && x.key === user.keyThimbleData
					);
					if (data) {
						if (data.state === 3) {
							data.state = 1;
							data.bet = 0;
							data.win = 0;
							data.open = [-1, -1, -1, -1, -1];
							data.res = random(0, 4);
							data.md5 = `${str_rand(11)}@${data.res + 1}`;
							data.hash = md5(data.md5);
							socket.send({
								type: "update",
								state: data.state,
								hash: data.hash,
								history: getThimbleHistory(),
								open: data.open,
								win: data.win,
								bet: data.bet,
								game: "thimble",
							});
						}
					}
				} else if (user.game === "goldwest") {
					var data = goldWestData.find(
						(x) => x.user === user.uid && x.key === user.keyGoldWestData
					);
					if (data) {
						if (data.state === 3) {
							var fields = [];
							var open = [];
							for (var i = 0; i < 10; i++) {
								function pick1(array) {
									var r = random(0, array.length - 1);
									array[r] = false;
									return array;
								}
								fields.push(
									pick1(data.RCs === 1 ? [true, true] : [true, true, true])
								);
								open.push(-1);
							}
							var fields1 = "";
							var fields2 = [];
							for (var i = 0; i < fields.length; i++) {
								for (var j = 0; j < fields[i].length; j++) {
									if (data.fields[i][j] === true) {
										fields2.push(j);
									}
								}
								fields1 += fields2.toString();
								fields2 = [];
								if (i != 9) {
									fields1 += ";";
								}
							}
							var md5_ = `${str_rand(11)}@${fields1}`;
							var unix = getUnix();
							data.open = open;
							data.win = 0;
							data.bet = 0;
							data.fields = fields;
							data.md5 = md5_;
							data.hash = md5(md5_);
							data.RCs = 1;
							data.unix = unix;
							data.state = 1;
							data.loseItem = null;
							data.line = 0;
							socket.send({
								type: "update",
								balance: {
									coins: user.coins,
								},
								RCs: data.RCs,
								hash: data.hash,
								history: getGoldWestHistory(),
								state: data.state,
								...(data.state === 3
									? {
											fields: data.fields,
											md5: data.md5,
									  }
									: null),
								...(data.state >= 2
									? {
											open: data.open,
											bet: data.bet,
											win: data.win,
											line: data.line,
									  }
									: null),
								game: user.game,
								...(data.loseItem != null ? { loseItem: data.loseItem } : null),
							});
						}
					}
				} else if (user.game === "nvuti") {
					var data = nvutiData.find(
						(x) => x.user === user.uid && x.key === user.keyNvutiData
					);
					if (data) {
						if (data.state === 3) {
							data.number = random(1, 999999);
							data.md5 = `${str_rand(11)}@${data.number}`;
							data.hash = md5(data.md5);
							data.unix = getUnix();
							data.state = 1;
							socket.send({
								type: "update",
								history: getNvutiHistory(),
								state: 1,
								hash: data.hash,
								game: user.game,
							});
						}
					}
				} else if (user.game === "keno") {
					var data = kenoData.find(
						(x) => x.user === user.uid && x.key === user.keyKenoData
					);
					if (data) {
						if (data.state === 3) {
							var fields = generateMines(10, 8, 5);
							var md5_ = `${str_rand(11)}@${generateMinesToString(fields)}`;
							data.md5 = md5_;
							data.hash = md5(md5_);
							data.fields = fields;
							data.state = 1;
							data.bet = 0;
							data.win = 0;
							socket.send({
								type: "update",
								game: user.game,
								state: data.state,
								win: data.win,
								bet: data.bet,
								hash: data.hash,
								history: getKenoHistory(),
								balance: {
									coins: user.coins,
								},
							});
						}
					}
				}
			}
			if (msg.a === "getBet") {
				const genCoefs = (t) => {
					for (var a = 1, e = [], i = 0; i < 25 - t; i++) {
						a *= 1 - t / (25 - i);
						var r = Math.floor((0.9 / a) * 100) / 100;
						e.push(r);
					}
					return e;
				};
				if (user.game === "mines") {
					var data = minesData.find(
						(x) => x.user === user.uid && x.key === user.keyMinesData
					);
					if (data) {
						if (
							data.state === 2 &&
							data.open.filter((x) => x === false).length > 0
						) {
							user.coins += data.win;
							data.state = 3;
							vars = JSON.parse(socket.handshake.query.params);
							if (history.filter((x) => x.title === "mines").length >= 14) {
								var j = history.filter((x) => x.title === "mines");
								j.pop();
							}
							var fields = [];
							data.fields.filter((x, i) => {
								if (x === true) {
									fields.push(i);
								}
							});
							history.unshift({
								title: "mines",
								id: history.length,
								hash: data.hash,
								unix: getUnix(),
								user: user.uid,
								color: user.color,
								nick: user.nick
									? user.nick
									: `${vars.nick.first} ${vars.nick.last}`,
								photo: vars.photo._200,
								bet: data.win,
								win: 1,
								coef: genCoefs(data.RCs)[
									data.open.filter((x) => x != -1).length - 1
								],
								md5: data.md5,
								resultGame: fields.toString(),
							});
							save("history", history);
							user.stats.topDay += data.win;
							user.stats.all.win++;
							user.stats.day.win++;
							user.stats.topWeek += data.win;
							socket.send({
								type: "update",
								balance: {
									coins: user.coins,
								},
								RCs: data.RCs,
								hash: data.hash,
								history: getMinesHistory(),
								state: data.state,
								...(data.state === 3
									? {
											fields: data.fields,
											md5: data.md5,
									  }
									: null),
								...(data.state >= 2
									? {
											open: data.open,
											bet: data.bet,
											win: data.win,
									  }
									: null),
								game: user.game,
								...(data.loseItem != null ? { loseItem: data.loseItem } : null),
							});
						}
					}
				} else if (user.game === "tower") {
					var data = towerData.find(
						(x) => x.user === user.uid && x.key === user.keyTowerData
					);
					if (data) {
						if (
							data.state === 2 &&
							data.open.filter((x) => x != -1).length > 0
						) {
							user.coins += data.win;
							user.stats.topDay += data.win;
							user.stats.all.win++;
							user.stats.day.win++;
							user.stats.topWeek += data.win;
							data.state = 3;
							vars = JSON.parse(socket.handshake.query.params);
							if (history.filter((x) => x.title === "tower").length >= 14) {
								var j = history.filter((x) => x.title === "tower");
								j.pop();
							}
							var fields1 = "";
							var fields2 = [];
							for (var i = 0; i < data.fields.length; i++) {
								for (var j = 0; j < data.fields[i].length; j++) {
									if (data.fields[i][j] === true) {
										fields2.push(j);
									}
								}
								fields1 += fields2.toString();
								fields2 = [];
								if (i != 9) {
									fields1 += ";";
								}
							}
							history.unshift({
								title: "tower",
								id: history.length,
								hash: data.hash,
								unix: getUnix(),
								user: user.uid,
								color: user.color,
								nick: user.nick
									? user.nick
									: `${vars.nick.first} ${vars.nick.last}`,
								photo: vars.photo._200,
								bet: data.win,
								win: 1,
								coef: genCoefs(data.RCs)[
									data.open.filter((x) => x != -1).length - 1
								],
								md5: data.md5,
								resultGame: fields1,
							});
							save("history", history);
							socket.send({
								type: "update",
								balance: {
									coins: user.coins,
								},
								RCs: data.RCs,
								hash: data.hash,
								history: getTowerHistory(),
								state: data.state,
								...(data.state === 3
									? {
											fields: data.fields,
											md5: data.md5,
									  }
									: null),
								...(data.state >= 2
									? {
											open: data.open,
											bet: data.bet,
											win: data.win,
									  }
									: null),
								game: user.game,
								...(data.loseItem != null ? { loseItem: data.loseItem } : null),
							});
						}
					}
				} else if (user.game === "crash") {
					var game = games.find((x) => x.title === "crash");
					if (game.state === 2) {
						if (
							game.bank.find((x) => x.user === user.uid) &&
							game.bank.find((x) => x.user === user.uid).give === false
						) {
							game.bank.find((x) => x.user === user.uid).give = true;
						}
					}
				} else if (user.game === "thimble") {
					var data = thimbleData.find(
						(x) => x.user === user.uid && x.key === user.keyThimbleData
					);
					if (data) {
						if (data.state === 2) {
							data.state = 3;
							data.win = 0;
							user.stats.all.lose++;
							user.stats.day.lose++;
							socket.send({
								type: "update",
								hash: data.hash,
								md5: data.md5,
								bet: data.bet,
								win: data.win,
								open: data.open,
								history: getThimbleHistory(),
								state: data.state,
								game: user.game,
								res: data.res,
								balance: {
									coins: user.coins,
								},
							});
						}
					}
				} else if (user.game === "goldwest") {
					var data = goldWestData.find(
						(x) => x.user === user.uid && x.key === user.keyGoldWestData
					);
					if (data) {
						if (
							data.state === 2 &&
							data.open.filter((x) => x != -1).length > 0
						) {
							user.coins += data.win;
							user.stats.topDay += data.win;
							user.stats.all.win++;
							user.stats.day.win++;
							user.stats.topWeek += data.win;
							data.state = 3;
							vars = JSON.parse(socket.handshake.query.params);
							if (history.filter((x) => x.title === "goldwest").length >= 14) {
								var j = history.filter((x) => x.title === "goldwest");
								j.pop();
							}
							var fields1 = "";
							var fields2 = [];
							for (var i = 0; i < data.fields.length; i++) {
								for (var j = 0; j < data.fields[i].length; j++) {
									if (data.fields[i][j] === true) {
										fields2.push(j);
									}
								}
								fields1 += fields2.toString();
								fields2 = [];
								if (i != 9) {
									fields1 += ";";
								}
							}
							history.unshift({
								title: "goldwest",
								id: history.length,
								hash: data.hash,
								unix: getUnix(),
								user: user.uid,
								color: user.color,
								nick: user.nick
									? user.nick
									: `${vars.nick.first} ${vars.nick.last}`,
								photo: vars.photo._200,
								bet: data.win,
								win: 1,
								coef: genCoefs(data.RCs)[
									data.open.filter((x) => x != -1).length - 1
								],
								md5: data.md5,
								resultGame: fields1,
							});
							save("history", history);
							socket.send({
								type: "update",
								balance: {
									coins: user.coins,
								},
								RCs: data.RCs,
								hash: data.hash,
								history: getGoldWestHistory(),
								state: data.state,
								...(data.state === 3
									? {
											fields: data.fields,
											md5: data.md5,
									  }
									: null),
								...(data.state >= 2
									? {
											open: data.open,
											bet: data.bet,
											win: data.win,
									  }
									: null),
								game: user.game,
								...(data.loseItem != null ? { loseItem: data.loseItem } : null),
							});
						}
					}
				}
			}
			if (msg.a === "setRCs") {
				if (user.game === "mines") {
					var data = minesData.find(
						(x) => x.user === user.uid && x.key === user.keyMinesData
					);
					if (data.state === 1) {
						data.RCs = msg.RCs;
						var fields = generateMines(msg.RCs);
						var md5_ = `${str_rand(11)}@${generateMinesToString(fields)}`;
						var open = [];
						data.hash = md5(md5_);
						fields.filter(() => {
							open.push(-1);
						});
						data.open = open;
						data.fields = fields;
						data.md5 = md5_;
						socket.send({
							type: "update",
							balance: {
								coins: user.coins,
							},
							RCs: data.RCs,
							hash: data.hash,
							history: getMinesHistory(),
							state: data.state,
							...(data.state === 3
								? {
										fields: data.fields,
										md5: data.md5,
								  }
								: null),
							...(data.state >= 2
								? {
										open: data.open,
										bet: data.bet,
										win: data.win,
								  }
								: null),
							game: user.game,
							...(data.loseItem != null ? { loseItem: data.loseItem } : null),
						});
					}
				} else if (user.game === "tower") {
					var data = towerData.find(
						(x) => x.user === user.uid && x.key === user.keyTowerData
					);
					if (data.state === 1) {
						data.RCs = msg.RCs;
						var fields = [];
						var open = [];
						var fields1 = "";
						var fields2 = [];
						for (var i = 0; i < 10; i++) {
							fields.push(generateMines(msg.RCs, 1));
							open.push(-1);
						}
						for (var i = 0; i < fields.length; i++) {
							for (var j = 0; j < fields[i].length; j++) {
								if (fields[i][j] === true) {
									fields2.push(j);
								}
							}
							fields1 += fields2.toString();
							fields2 = [];
							if (i != 9) {
								fields1 += ";";
							}
						}
						var md5_ = `${str_rand(11)}@${fields1}`;
						data.hash = md5(md5_);
						data.open = open;
						data.fields = fields;
						data.md5 = md5_;
						socket.send({
							type: "update",
							balance: {
								coins: user.coins,
							},
							RCs: data.RCs,
							hash: data.hash,
							history: getTowerHistory(),
							state: data.state,
							...(data.state === 3
								? {
										fields: data.fields,
										md5: data.md5,
								  }
								: null),
							...(data.state >= 2
								? {
										open: data.open,
										bet: data.bet,
										win: data.win,
										line: data.line,
								  }
								: null),
							game: user.game,
							...(data.loseItem != null ? { loseItem: data.loseItem } : null),
						});
					}
				} else if (user.game === "goldwest") {
					var data = goldWestData.find(
						(x) => x.user === user.uid && x.key === user.keyGoldWestData
					);
					if (data.state === 1) {
						data.RCs = msg.RCs;
						var fields = [];
						var open = [];
						var fields1 = "";
						var fields2 = [];
						for (var i = 0; i < 10; i++) {
							function pick1(array) {
								var r = random(0, array.length - 1);
								array[r] = false;
								return array;
							}
							fields.push(
								pick1(data.RCs === 1 ? [true, true] : [true, true, true])
							);
							open.push(-1);
						}
						for (var i = 0; i < fields.length; i++) {
							for (var j = 0; j < fields[i].length; j++) {
								if (fields[i][j] === true) {
									fields2.push(j);
								}
							}
							fields1 += fields2.toString();
							fields2 = [];
							if (i != 9) {
								fields1 += ";";
							}
						}
						var md5_ = `${str_rand(11)}@${fields1}`;
						data.hash = md5(md5_);
						data.open = open;
						data.fields = fields;
						data.md5 = md5_;
						socket.send({
							type: "update",
							balance: {
								coins: user.coins,
							},
							RCs: data.RCs,
							hash: data.hash,
							history: getGoldWestHistory(),
							state: data.state,
							...(data.state === 3
								? {
										fields: data.fields,
										md5: data.md5,
								  }
								: null),
							...(data.state >= 2
								? {
										open: data.open,
										bet: data.bet,
										win: data.win,
										line: data.line,
								  }
								: null),
							game: user.game,
							...(data.loseItem != null ? { loseItem: data.loseItem } : null),
						});
					}
				}
			}
		}

		save("games", games);
	});
});
app.use(cors());
app.use(express.json());
app.post(`/capi`, async (request, response) => {
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "application/json");
	var data = request.body;
	var validate = validateAppUrl(data.referer);
	if (validate.status) {
		var vars = getUrlVars(data.referer);
		if (Number(vars.id) === Number(data.uid)) {
			if (data.query === "getUser") {
				var user = users.find((x) => x.uid === Number(vars.id));
				if (!user) {
					user = await vk.api.users.get({
						user_ids: `id${Number(vars.id)}`,
						fields: "photo_100,photo_200,sex",
					});
					var startSum = 0;
					if (
						users.find((x) => x.uid === Number(data.data.ref)) &&
						users.find((x) => x.uid === Number(data.data.ref)).uid !==
							Number(vars.id)
					) {
						users.find((x) => x.uid === Number(data.data.ref)).coins += 5000000;
						startSum += 5000000;
						await vk.api.messages
							.send({
								message: `По вашей ссылке перешел [id${vars.id}|${user[0].first_name} ${user[0].last_name}], вы получили 5кк за рефа!`,
								random_id: 0,
								peer_id: users.find((x) => x.uid === Number(data.data.ref)).uid,
							})
							.catch(() => {});
						await vk.api.messages
							.send({
								message: `Вы перешли по ссылке [id${
									users.find((x) => x.uid === Number(data.data.ref)).uid
								}|${
									users.find((x) => x.uid === Number(data.data.ref)).first_name
								} ${
									users.find((x) => x.uid === Number(data.data.ref)).last_name
								}] и получили 5кк!`,
								random_id: 0,
								peer_id: vars.id,
							})
							.catch(() => {});
					}
					users.push({
						uid: Number(vars.id),
						coins: startSum,
						photo: {
							_100: user[0].photo_100,
							_200: user[0].photo_200,
						},
						stats: {
							day: {
								lose: 0,
								win: 0,
							},
							all: {
								lose: 0,
								win: 0,
							},
							topDay: 0,
							topWeek: 0,
							topHour: 0,
						},
						bonus: true,
						bonusTime: 0,
						bonusWallet: 0,
						sex: user[0].sex,
						color: "white",
						ban: false,
						nick: null,
						lastActive: getUnix(),
						token: null,
						uptop: 0,
						game: null,
						clanId: null,
						ip: request.socket.remoteAddress,
						keyMinesData: null,
						first_name: user.first_name,
						last_name: user.last_name,
						ref: data?.data?.ref
							? users.find((x) => x.uid === Number(data.data.ref))
								? users.find((x) => x.uid === Number(data.data.ref)).uid
								: Number(vars.id)
							: Number(vars.id),
							ads: 0,
							ads_week: 0
					});
				}
				var user1 = await vk.api.users.get({
					user_ids: `id${Number(vars.id)}`,
					fields: "photo_100,photo_200,sex",
				});
				user = users.find((x) => x.uid === Number(vars.id));
				user.ip = request.socket.remoteAddress;
				user.lastActive = getUnix();
				user.first_name = user1[0].first_name;
				user.last_name = user1[0].last_name;
				user.photo = {
					_100: user1[0].photo_100,
					_200: user1[0].photo_200,
				};
				var responseData = JSON.stringify({
					status: "ok",
					userData: {
						ban: user.ban,
						coins: user.coins,
						nick: user.nick,
						vk: {
							id: user.uid,
							sex: user.sex,
							lastActive: user.lastActive,
						},
						stats: {
							...user.stats,
						},
						bonus: {
							isActive: user.bonus,
							time: user.bonusTime,
						},
						online: onlineUsers.length,
						clan: user.clanId,
					},
				});
				if (!onlineUsers.find((y) => y === user.uid)) {
					onlineUsers.push(user.uid);
				}

				return response.end(responseData);
			}
			if (data.query === "getBonus") {
				var user = users.find((x) => x.uid === Number(vars.id));
				user.lastActive = getUnix();
				if (user.bonus) {
					user.bonus = false;
					user.bonusTime = getUnix() + 14400000;
					user.coins += 2500000;
					var responseData = JSON.stringify({
						status: "ok",
						userData: {
							ban: user.ban,
							coins: user.coins,
							nick: user.nick,
							vk: {
								id: user.uid,
								sex: user.sex,
								lastActive: user.lastActive,
							},
							stats: {
								...user.stats,
							},
							bonus: {
								isActive: user.bonus,
								time: user.bonusTime,
							},
							online: onlineUsers.length,
							clan: user.clanId,
						},
					});

					return response.end(responseData);
				} else {
					var responseData = JSON.stringify({
						status: "error",
						userData: {
							ban: user.ban,
							coins: user.coins,
							nick: user.nick,
							vk: {
								id: user.uid,
								sex: user.sex,
								lastActive: user.lastActive,
							},
							stats: {
								...user.stats,
							},
							bonus: {
								isActive: user.bonus,
								time: user.bonusTime,
							},
							online: onlineUsers.length,
							clan: user.clanId,
						},
					});
					return response.end(responseData);
				}
			}
			if (data.query === "clans") {
				if (data.data.a === "getClanInfo") {
					if (clans.find((x) => x.id === data.data.id)) {
						var clan = clans.find((x) => x.id === data.data.id);
						var user = users.find((x) => x.uid === Number(vars.id));
						var ratingList = [];
						clan.users.sort((a, b) => {
							return b.score - a.score;
						});
						clan.users.filter((x) => {
							ratingList.push(x);
						});
						var responseData = JSON.stringify({
							status: "ok",
							data: {
								admins: clan.admins,
								avatar: clan.avatar,
								closed: clan.closed,
								description: clan.description,
								id: clan.id,
								inv: [],
								name: clan.name,
								owner: clan.owner,
								position: 1,
								score: clan.stats.week,
								ratingList,
							},
							userData: {
								ban: user.ban,
								coins: user.coins,
								nick: user.nick,
								vk: {
									id: user.uid,
									sex: user.sex,
									lastActive: user.lastActive,
								},
								stats: {
									...user.stats,
								},
								bonus: {
									isActive: user.bonus,
									time: user.bonusTime,
								},
								online: onlineUsers.length,
								clan: user.clanId ? user.clanId : null,
							},
						});
						return response.end(responseData);
					}
				}
				if (data.data.a === "invRequest") {
					if (clans.find((x) => x.id === data.data.cid)) {
						var clan = clans.find((x) => x.id === data.data.cid);
						var user = users.find((x) => x.uid === Number(vars.id));
						if (clan.closed) {
							clan.inv.push({
								unix: getUnix(),
								user: user.uid,
							});
						} else {
							user.clanId = clan.id;
						}
						var responseData = JSON.stringify({
							status: "ok",
							invType: true,
							userData: {
								ban: user.ban,
								coins: user.coins,
								nick: user.nick,
								vk: {
									id: user.uid,
									sex: user.sex,
									lastActive: user.lastActive,
								},
								stats: {
									...user.stats,
								},
								bonus: {
									isActive: user.bonus,
									time: user.bonusTime,
								},
								online: onlineUsers.length,
								clan: user.clanId ? user.clanId : null,
							},
						});
						return response.end(responseData);
					}
				}
				if (data.data.a === "get") {
					var user = users.find((x) => x.uid === Number(vars.id));
					var clan = clans.find((x) => x.id === user.clanId);
					if (clan) {
						var responseData = JSON.stringify({
							status: "ok",
							userData: {
								ban: user.ban,
								coins: user.coins,
								nick: user.nick,
								vk: {
									id: user.uid,
									sex: user.sex,
									lastActive: user.lastActive,
								},
								stats: {
									...user.stats,
								},
								bonus: {
									isActive: user.bonus,
									time: user.bonusTime,
								},
								online: onlineUsers.length,
								clan: user.clanId ? user.clanId : null,
							},
							clanData: {
								...clan,
							},
						});
						return response.end(responseData);
					}
				}
			}
			if (data.query === "getTop") {
				var user = users.find((x) => x.uid === Number(vars.id));
				user.lastActive = getUnix();
				var topDay = [],
					topWeek = [],
					topHour = [],
					topClans = [];
				var topDayRes = [],
					topWeekRes = [],
					topHourRes = [],
					topClansRes = [];
				var myPositionWeek = 0,
					myPositionDay = 0,
					myPositionHour = 0,
					myPositionClans = 0;
				users.filter((x) => {
					topWeek.push({
						id: x.uid,
						value: x.stats.topWeek,
						color: x.color,
						nick: x.nick,
					});
					topDay.push({
						id: x.uid,
						value: x.stats.topDay,
						color: x.color,
						nick: x.nick,
					});
					topHour.push({
						id: x.uid,
						value: x.stats.topHour,
						color: x.color,
						nick: x.nick,
					});
				});
				clans.filter((x) => {
					topClans.push({
						id: x.id,
						value: x.stats.week,
						color: x.color,
						name: x.name,
						avatar: x.avatar,
					});
				});
				topWeek.sort((a, b) => {
					return b.value - a.value;
				});
				topDay.sort((a, b) => {
					return b.value - a.value;
				});
				topHour.sort((a, b) => {
					return b.value - a.value;
				});
				topClans.sort((a, b) => {
					return b.value - a.value;
				});
				topWeek.filter((x, i) => {
					if (i <= 25) {
						topWeekRes.push(x);
					}
					if (x.id === user.uid) {
						myPositionWeek = i;
					}
				});
				topDay.filter((x, i) => {
					if (i <= 50) {
						topDayRes.push(x);
					}
					if (x.id === user.uid) {
						myPositionDay = i;
					}
				});
				topHour.filter((x, i) => {
					if (i <= 25) {
						topHourRes.push(x);
					}
					if (x.id === user.uid) {
						myPositionHour = i;
					}
				});
				topClans.filter((x, i) => {
					if (i <= 25) {
						topClansRes.push(x);
					}
					if (x.id === user.clanId) {
						myPositionClans = i;
					}
				});
				var responseData = JSON.stringify({
					status: "ok",
					data: {
						clans: {
							myData: user.clanId
								? user.clanId != null
									? clans.find((x) => x.id === user.clanId)
										? clans.find((x) => x.id === user.clanId)
										: null
									: null
								: null,
							rating: topClansRes,
							myPosition: myPositionClans,
						},
						week: {
							rating: topWeekRes,
							myPosition: myPositionWeek,
						},
						day: {
							rating: topDayRes,
							myPosition: myPositionDay,
						},
						hour: {
							rating: topHourRes,
							myPosition: myPositionHour,
						},
					},
					online: onlineUsers.length,
				});

				return response.end(responseData);
			}
			if (data.query === "actions") {
				if (data.data.a === "activatePromo") {
					var user = users.find((x) => x.uid === Number(vars.id));
					var promo = proms.find(
						(x) =>
							x.name === data.data.promo.trim() &&
							x.availableActivations > 0 &&
							!x.activateUsers.find((y) => y.user === user.uid)
					);
					if (promo) {
						promo.availableActivations--;
						user.coins += promo.sum;
						promo.activateUsers.push({
							user: user.uid,
							unix: getUnix(),
							ip: request.socket.remoteAddress,
						});
						var responseData = JSON.stringify({
							status: "success",
							sum: promo.sum,
						});
						if (dataTimes.fast.count % 2 != 0) {
							dataTimes.fast.count++;
							dataTimes.fast.start = getUnix();
							dataTimes.fast.users = [];
							save("data", dataTimes);
						}
					} else {
						proms = proms.filter(
							(x) =>
								x.name !== data.data.promo.trim() || x.availableActivations <= 0
						);
						var responseData = JSON.stringify({
							status: "error",
							desc: "Промокод не найден!",
						});
					}
					return response.end(responseData);
				}
			}
		}
	}
});
app.get("/app", async (req, res) => {
	return res.sendFile(__dirname + "/index.html");
});
app.get("/static/*", async (req, res) => {
	if (req.originalUrl.match(/(.*)(\.\.)(.*)/i)) return res.sendStatus(403);
	return res.sendFile(__dirname + req.originalUrl);
});
https.listen(1111, () => {});
var admins = [698329888, 701879613];
var owners = [698329888, 701879613];
function number_format(number, decimals, dec_point, thousands_sep) {
	decimals = false;
	var i, j, kw, kd, km;
	if (isNaN((decimals = Math.abs(decimals)))) {
		decimals = 2;
	}
	if (dec_point == undefined) {
		dec_point = ".";
	}
	if (thousands_sep == undefined) {
		thousands_sep = " ";
	}

	i = parseInt((number = (+number || 0).toFixed(decimals))) + "";

	if ((j = i.length) > 3) {
		j = j % 3;
	} else {
		j = 0;
	}

	km = j ? i.substr(0, j) + thousands_sep : "";
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	kd = decimals
		? dec_point +
		  Math.abs(number - i)
				.toFixed(decimals)
				.replace(/-/, 0)
				.slice(2)
		: "";
	return km + kw + kd;
}
vk.updates.on("wall_repost", async (msg) => {
	var post = dataPosts.find(
		(x) =>
			x.id === msg.wall.copyHistory[0].id &&
			x.createdAt + 62 * 60 * 60 * 1000 > getUnix()
	);
	if (post) {
		if (
			post.users.find((x) => x[0] === msg.wall.ownerId && x[1] === -1) ||
			!post.users.find((x) => x[0] === msg.wall.ownerId)
		) {
			var user = users.find((x) => x.uid === msg.wall.ownerId);
			if (user) {
				user.coins += post.amount;
				if (post.users.find((x) => x[0] === msg.wall.ownerId && x[1] === -1))
					post.users.find((x) => x[0] === msg.wall.ownerId && x[1] === -1)[1] = 1;
				else if (!post.users.find((x) => x[0] === msg.wall.ownerId))
					post.users.push([msg.wall.ownerId, 2]);
				save("dataPosts", dataPosts);
			}
		}
	}
});
vk.updates.on("message_new", async (message) => {
	if (!message?.text) return;
	else if (message.text.match(/^((\/|)Клавиатура)$/i)) {
		return message.send("Клавиатура подключена!", {
			keyboard: JSON.stringify({
				buttons: [
					[{
						action: {
							"type": "open_link",
          					"link": "https://vk.me/unidentifier",						
          					"label": "За заказом пишите)"
						}
					}],
					[{
						action: {
							"type": "open_app",
          					"app_id": 51855904,						
          					"label": "Играть"
						}
					},{
						action: {
							type: "text",
							label: "Профиль",
							payload: `{"cmd":"profile"}`
						}
					}],
					[{
						action: {
							type: "text",
							label: "Топ дня",
							payload: `{"cmd":"top_day"}`
						}
					}, {
						action: {
							type: "text",
							label: "Топ недели",
							payload: `{"cmd":"top_week"}`
						}
					}]
				]
			})
		});
	}
	var messagePayload = message.messagePayload ? message.messagePayload.cmd ? message.messagePayload.cmd : "null" : "null";
	if (/^profile$/i.test(messagePayload)) {
		var toUser1 = users.find(
			(x) =>
				x.uid ===
				(message.replyMessage
					? message.replyMessage.senderId
					: message.senderId)
		);
		var toUser2 = await vk.api.users.get({
			user_ids: toUser1.uid,
			name_case: "nom",
		});
		message.send(`👤 Профиль [id${toUser1.uid}|${toUser2[0].first_name + " " + toUser2[0].last_name}]\n\n💰 ${number_format(toUser1.coins)} RC\n\nВыиграно за этот день: ${number_format(toUser1.stats.topDay)} RC\nВыиграно за эту неделю: ${number_format(toUser1.stats.topWeek)} RC`);
	}
	if (/^top_day$/i.test(messagePayload)) {
		const topsum = [100_000_000, 75_000_000, 50_000_000, 25_000_000, 15_000_000, 10_000_000,
			5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000,
			5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000,
			5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000];
		var top = getTopDay();
		var text = "";
		top.filter((x, i)=> {
			text += `${i + 1}) [id${x.user}|Пользователь] выиграл ${number_format(x.value)} коинов (приз: ${number_format(x.id < 11 ? topsum[i]: "0")} RC)\n`;
		});
		message.send(`🔥 Топ игроков ежедневного рейтинга:\n\n${text}`);
	}
	if (/^top_week$/i.test(messagePayload)) {
		const topsum = [350_000_000, 275_000_000, 225_000_000, 150_000_000, 100_000_000, 75_000_000,
			50_000_000, 25_000_000, 15_000_000, 10_000_000, 5_000_000, 5_000_000,
			5_000_000, 5_000_000, 5_000_000];
		var top = getTopWeek();
		var text = "";
		top.filter((x, i)=> {
			text += `${i + 1}) [id${x.user}|Пользователь] выиграл ${number_format(x.value)} коинов (приз: ${number_format(x.id < 11 ? topsum[i]: "0")} RC)\n`;
		});
		message.send(`🔥 Топ игроков еженедельного рейтинга:\n\n${text}`);
	}
	if (message.text.match(/^(\/|)(начать|app|start)$/i)) {
		return message.send(`Приложение: https://vk.com/app51855904`);
	}
	if (message.text.match(/^\/post.(.+)$/i)) {
		if (!admins.find((x) => x === message.senderId)) return;
		var hh = message.text.match(/^\/post.(.+)$/i);
		if (isNaN(hh[1])) return message.send("Только число!");
		if (
			!owners.find((x) => x === message.senderId) &&
			dataPosts.find((x) => x.id === message.attachments[0].id)
		) {
			dataPosts = dataPosts.filter((x) => x.id !== message.attachments[0].id);
			return message.send("Запись удалена!");
		}
		dataPosts.push({
			id: message.attachments[0].id,
			amount: Number(hh[1]),
			users: [],
			createdAt: new Date().getTime(),
		});
		save("dataPosts", dataPosts);
		return message.send("Успешно!");
	} 
	else if (message.text.match(/^\/raspost (.*)$/i)) {
		if (!admins.find((x) => x === message.senderId)) return;
		var hh = message.text.match(/^\/raspost (.*)$/i)[1];
		var users_c = 0,
			users_r = 0;
		var time_post = new Date().getTime();
		users.map(async (x) => {
			await vk.api.messages.send({ random_id: 0, message: hh, attachment: "wall" + message.attachments[0].ownerId + "_" + message.attachments[0].id, peer_id: x.uid }).then(() => users_c++, () => users_r++);
		});
		return message.send(
			`Успешно!\nВ рассылку попало: ${users_c} человек. А пролетело: ${users_r} человек. \nРассылка прошла успешно за ${
				Math.floor(new Date().getTime() - time_post) / 1000
			} сек.`
		);
	} 
	else if (message.text.match(/^\/rastext (.*)$/i)) {
		if (!admins.find((x) => x === message.senderId)) return;
		var hh = message.text.match(/^\/rastext (.*)$/i)[1];
		var users_c = 0,
			users_r = 0;
		var time_post = new Date().getTime();
		users.map(async (x) => {
			await vk.api.messages.send({ random_id: 0, message: hh, attachment: "wall" + message.attachments[0].ownerId + "_" + message.attachments[0].id, peer_id: x.uid }).then(() => users_c++, () => users_r++);
		});
		return message.send(`Успешно!\nВ рассылку попало: ${users_c} человек. А пролетело: ${users_r} человек. \nРассылка прошла успешно за ${Math.floor(new Date().getTime() - time_post) / 1000} сек.`);
	} 
	else if (message.text.match(/^\/eval\(([^]*)\);(-|)$/i)) {
		if (!owners.find((x) => x === message.senderId)) return;
		var hh = message.text.match(/^\/eval\(([^]*)\);(-|)$/i);
		try {
			eval(hh[1]);
			message.send("Скрипт выполнен удачно!");
		} catch (e) {
			message.send("В скрипте найдены ошибки!");
			console.error(e);
			message.send("Все данные оправлены в кансоль!");
		}
	} 
	else if (message.text.match(/^(id|)([0-9]+|.*) \/setBal ((-|)[0-9]+)$/i)) {
		if (!admins.find((x) => x === message.senderId)) return;
		var res = message.text.match(/^(id|)([0-9]+|.*) \/setBal ((-|)[0-9]+)$/i);
		if (Number(res[2])) {
			var nick = res[1] + res[2];
			var user = users.find((x) => x.uid === Number(res[2]));
			if (!user) return message.send("Пользователь не найден!");
			if (Number(res[3])) {
				if (res[4] == "") {
					user.coins += Number(res[3]);
					await vk.api.users.get({
						user_ids: nick,
						name_case: "dat",
					}).then((data) => {
						message.send(`[id${user.uid}|${data[0].first_name} ${data[0].last_name}] успешно прибавленно ${number_format(Number(res[3]))} SC`);
					});
				} 
				else if (res[4] == "-") {
					user.coins += Number(res[3]);
					await vk.api.users.get({
						user_ids: nick,
						name_case: "dat",
					}).then((data) => {
						message.send(`[id${user.uid}|${data[0].first_name} ${data[0].last_name}] успешно прибавленно -${number_format(Number(res[3]))} SC`);
					});
				}
			}
		} 
		else if (res[2]) {
			var nick = res[1] + res[2];
			await vk.api.users.get({
				user_ids: nick,
				name_case: "dat",
			}).then((data) => {
				var user = users.find((x) => x.uid === data[0].id);
				if (!user) return message.send("Пользователь не найден!");
				if (Number(res[3])) {
					if (res[4] == "") {
						user.coins += Number(res[3]);
						message.send(`[id${user.uid}|${data[0].first_name} ${data[0].last_name}] успешно прибавленно ${number_format(Number(res[3]))} SC`);
					} 
					else if (res[4] == "-") {
						user.coins += Number(res[3]);
						message.send(`[id${user.uid}|${data[0].first_name} ${data[0].last_name}] успешно прибавленно ${number_format(Number(res[3]))} SC`);
					}
				}
			})
		}
	} 
	else if (message.text.match(/^(\/|)(bal|бал|Баланс|баланс)$/i)) {
		if (message.peerId !== 2000000001) return;
		var toUser1 = users.find((x) => x.uid === (message.replyMessage? message.replyMessage.senderId: message.senderId));
		var toUser2 = await vk.api.users.get({
			user_ids: toUser1.uid,
			name_case: "nom",
		});
		message.send(`[id${toUser1.uid}|${toUser2[0].first_name + " " + toUser2[0].last_name}], твой баланс: ${number_format(toUser1.coins)} SC`);
	} 
	else if (message.text.match(/^(.*) ((\/|)bal|(\/|)бал)$/i)) {
		if (message.peerId !== 2000000001) return;
		var hh = message.text.match(/^(.*) ((\/|)bal|(\/|)бал)$/i);
		var nick = hh[1].replace(/https:\/\/vk.com\//i, "");
		nick = nick.replace(/vk.com\//i, "");
		var toUser2 = await vk.api.users.get({
			user_ids: nick,
			name_case: "nom",
		});
		var toUser1 = users.find((x) => x.uid === toUser2[0].id);
		message.send(`[id${toUser1.uid}|${toUser2[0].first_name + " " + toUser2[0].last_name}], на балансе: ${number_format(toUser1.coins)} SC`);
	} 
	else if (message.text.match(/^(\/|)(Перевод|перевод) (([0-9]+)((k|к)*))$/i)) {
		if (message.peerId !== 2000000001) return;
		var hh = message.text.match(/^(\/|)(Перевод|перевод) (([0-9]+)((k|к)*))$/i);
		var amount = Number(hh[4]) * Number("1" + "000".repeat(hh[5].length));
		if (!admins.find((x) => x === message.senderId)) {
			var user = users.find((x) => x.uid === message.senderId);
			if (user.coins < amount)
				return message.send(`На вашем балансе нехватает SC!`);
			var toUser1 = users.find((x) => x.uid === (message.replyMessage? message.replyMessage.senderId: message.senderId));
			toUser1.coins += amount;
			user.coins -= amount;
			var toUser2 = await vk.api.users.get({
				user_ids: toUser1.uid,
				name_case: "nom",
			});
			return message.send(`[id${toUser1.uid}|${toUser2[0].first_name + " " + toUser2[0].last_name}], Теперь на Вашем балансе: ${number_format(toUser1.coins)} SC`);
		} 
		else {
			var toUser1 = users.find((x) => x.uid === (message.replyMessage? message.replyMessage.senderId: message.senderId));
			var toUser2 = await vk.api.users.get({
				user_ids: toUser1.uid,
				name_case: "nom",
			});
			users.find((x) => x.uid === toUser1.uid).coins += amount;
			return message.send(`[id${toUser1.uid}|${toUser2[0].first_name + " " + toUser2[0].last_name}], Теперь на Вашем балансе: ${number_format(toUser1.coins)} SC`);
		}
	} 
	else if (message.text.match(/^(.*) (\/|)(send|сенд|перевести|тр|перевод) (([0-9]+)((k|к)*))$/i)) {
		if (message.peerId !== 2000000001) return;
		var hh = message.text.match(
			/^(.*) (\/|)(send|сенд|перевести|тр|перевод) (([0-9]+)((k|к)*))$/i
		);
		var amount = Number(hh[5]) * Number("1" + "000".repeat(hh[6].length));
		var nick = hh[1].replace(/https:\/\/vk\.com\//i, "");
		nick = nick.replace(/vk\.com\//i, "");
		var toUser2 = await vk.api.users.get({
			user_ids: nick,
			name_case: "nom",
		});
		toUser1 = users.find((x) => x.uid === toUser2[0].id);
		if (!admins.find((x) => x === message.senderId)) {
			if (user.coins < amount)
				return message.send(`На вашем балансе нехватает SC!`);
			user.coins -= amount;
		}
		toUser1.coins += amount;
		return message.send(`[id${toUser1.uid}|${toUser2[0].first_name + " " + toUser2[0].last_name}], Теперь на балансе: ${number_format(toUser1.coins)} SC`);
	} 
	else if (message.text.match(/^\/cp (.*) (([0-9]+)((k|к)*)) ([0-9]+)$/i)) {
		var hh = message.text.match(/^\/cp (.*) (([0-9]+)((k|к)*)) ([0-9]+)$/i);
		var amount = Number(hh[3]) * Number("1" + "000".repeat(hh[4].length));
		if (isNaN(amount)) return;
		var user = users.find((x) => x.uid === message.senderId);
		if (hh[1].trim().toLowerCase().length < 6 || hh[1].trim().toLowerCase().length > 46)
			return message.send(`Имя должно быть длинной более 5 символов но не больше 46 символов!`);
		if (proms.find((x) => x.name === hh[1].trim().toLowerCase()))
			return message.send(`Это имя уже занято! Удали промокод с таким именем или введи другое.`);
		if (!admins.find((x) => x === message.senderId)) {
			if (user.coins < amount * Math.round(Number(hh[6])))
				return message.send(`Нехватает баланса!`);
			user.coins -= amount * Math.round(Number(hh[6]));
		}
		proms.push({
			uid: message.senderId,
			sum: amount,
			name: hh[1].trim(),
			count: Math.round(Number(hh[6])),
			availableActivations: Math.round(Number(hh[6])),
			created: getUnix(),
			activateUsers: [],
		});
		save("proms", proms);
		return message.send(`Промокод успешно создан!`);
	}  
	else if (message.text.match(/^\/list(.*([0-9]+)|)$/i)) {
		if (!admins.find((x) => x === message.senderId)) return;
		var hh = message.text.match(/^\/list(.*([0-9]+)|)$/i);
		var text_p = ``;
		for (var i = 0; i < proms.length; i++) {
			if (Number(hh[2]) == i + 2) return;
			var date_c = new Date(proms[i].created);
			text_p += `\n\nПромокод "${proms[i].name}":\nОсталось активаций: ${proms[i].activecount}\nВсего активаций: ${proms[i].count}\nЗа активацию +${number_format(proms[i].sum)} SC\nСоздан: ${date_c.toLocaleDateString("en-US").replace(/\//gi, ".") + " в " + date_c.toLocaleTimeString("en-GB").substring(0, date_c.toLocaleTimeString("en-GB").length - 3)}`;
		}
		message.send(`Список промокодов:` + text_p);
	}
	else if (message.text.match(/^\/rp (.*)$/i)) {
		if (!admins.find((x) => x === message.senderId)) return;
		var hh = message.text.match(/^\/rp (.*)$/i);
		if (!proms.find((x) => x.name === hh[1].trim().toLowerCase()))
			return message.send(`Промокодов с таким именем не найдено!`);
		for (i in proms) {
			if (proms[i].name.trim().toLowerCase() === hh[1].trim().toLowerCase()) {
				proms.splice(i, 1);
				save("proms", proms);
				return message.send(`Промокод успешно удалён!\nЧтобы посмотреть подробнее или созданные промокоды напиши "/list"`);
			}
		}
	} 
	else if (message.text.match(/^((\/|)(фаст|fast))$/i)) {
		if (dataTimes.fast.users.find((x) => x === message.senderId)) message.send("Вы уже голосовали!\n\nПрогресс: " + dataTimes.fast.users.length + "/10");
		if (dataTimes.fast.start + 1000 * 60 * 15 > getUnix()) {
			var time = new Date(dataTimes.fast.start + 1000 * 60 * 15 - getUnix());
			return message.send(`Отдых 15 мин.\nОсталось: ${time.getMinutes()}:${time.getSeconds()}`);
		}
		if (dataTimes.fast.users.length < 10 && dataTimes.fast.start + 1000 * 60 * 15 < getUnix() && !dataTimes.fast.users.find((x) => x === message.senderId) && dataTimes.fast.count % 2 === 0) {
			dataTimes.fast.users.push(message.senderId);
			save("data", dataTimes);
			save("dataTimes", dataTimes);
			message.send("Вы приняли участие в ФАСТ!\n\nПрогресс: " + dataTimes.fast.users.length +"/10");
		}
		if (dataTimes.fast.users.length >= 10 && dataTimes.fast.start + 1000 * 60 * 15 < getUnix() && dataTimes.fast.count % 2 === 0) {
			var words = ["+", "-"];
			var primer = `${random(-1111, 9999)} ${words[random(0, 1)]} ${random(-1111,9999)}`;
			var sum = random(10000000, 15000000);
			dataTimes.fast.count++;
			proms.push({
				uid: 0,
				sum,
				name: `${eval(primer)}`,
				count: 3,
				availableActivations: 3,
				created: getUnix(),
				activateUsers: [],
			});
			save("data", dataTimes);
			save("proms", proms);
			return message.send(`Запуск!\nТолько 3 человека смогут забрать приз!\n@id${dataTimes.fast.users.join(", @id")}\n\nРешите пример: ${primer}\n\nНаграда: ${sum}\n\nВАЖНО: Промокод - это ответ на пример!`);
		}
	} 
	else if (message.text.match(/^(\/|)obnull$/i)) {
		const user = users.find((x) => x.uid === message.senderId);
		if (!admins.includes(user.uid)) return;
		if (message.replyMessage) {
			const user = users.find((x) => x.uid === message.replyMessage.senderId);
			if (!user) return;
			user.coins = 0;
			user.stats.all.lose = 0;
			user.stats.all.win = 0;
			user.stats.day.lose = 0;
			user.stats.day.win = 0;
			user.stats.topDay = 0;
			user.stats.topHour = 0;
			user.stats.topWeek = 0;
			return message.send(`Пользователь был обнулен!`, {
				reply_to: message.id,
			});
		} else {
			proms = [];
			save("proms", proms);
			dataPosts = [];
			save("dataPosts", dataPosts);
			users.filter((x) => {
				x.coins = 0;
				x.stats.all.lose = 0;
				x.stats.all.win = 0;
				x.stats.day.lose = 0;
				x.stats.day.win = 0;
				x.stats.topDay = 0;
				x.stats.topHour = 0;
				x.stats.topWeek = 0;
			});
			return message.send(`Пользователи были обнулены!`, {
				reply_to: message.id,
			});
		}
	} 
	else if (message.text.match(/^(\/|)(Топ реклама)/i)) {
		var ads_top = users.sort((a,b) => (b?.ads_week ?? 0) - (a?.ads_week ?? 0)).filter((x, i) => i < 15);
		var text = ads_top.map((x, i)=> `${i + 1}) [id${x.uid}|${x.first_name}] - ${x?.ads_week ?? 0} реклам ${topsum_ads?.[i] ? ` (приз ${number_format(topsum_ads[i], 0)} WX)` : ''}`);
		return message.send(`Топ по рекламе:\n\n`+text.join('\n'));
	}
});
setInterval(async () => {
	users.filter((x) => {
		if (getUnix() > x.bonusTime) {
			x.bonus = true;
		}
		if (300000 + x.lastActive < getUnix()) {
			for (i in onlineUsers) {
				if (onlineUsers[i] === x.uid) {
					return onlineUsers.splice(i, 1);
				}
			}
		} else {
			if (!onlineUsers.find((y) => y === x.uid)) {
				onlineUsers.push(x.uid);
			}
		}
		// console.log(x.token != null && tokens.find(y=> (y.user === x.uid && y.token === x.token)));
		// console.log(tokens.find(y=> (y.user === x.uid && y.token === x.token)) && getUnix() >= tokens.find(y=> (y.user === x.uid && y.token === x.token)).unix + 120000);
		if (
			x.token != null &&
			tokens.find((y) => y.user === x.uid && y.token === x.token) &&
			getUnix() >=
				tokens.find((y) => y.user === x.uid && y.token === x.token).unix +
					300000
		) {
			// console.log(tokens);
			io.to(x.token).emit(`message`, {
				type: "NotAction",
			});
			io.to(x.token).emit(`exit`);
			tokens.splice(tokens.find((y) => y.token === x.token).id, 1);
			x.token = null;
			// console.log(tokens);
		}
	});
}, 1000);
function getTopDay() {
	var top = [];
	var resArr = [];
	users.filter((x) => {
		top.push({
			id: 0,
			user: x.uid,
			value: x.stats.topDay,
		});
	});
	top.sort((a, b) => {
		return b.value - a.value;
	});
	top.filter((x, i) => {
		if (i <= 50) {
			x.id = i + 1;
			resArr.push(x);
		}
	});
	return resArr;
}
function getTopWeek() {
	var top = [];
	var resArr = [];
	users.filter((x) => {
		top.push({
			id: 0,
			user: x.uid,
			value: x.stats.topWeek,
		});
	});
	top.sort((a, b) => {
		return b.value - a.value;
	});
	top.filter((x, i) => {
		if (i <= 25) {
			x.id = i + 1;
			resArr.push(x);
		}
	});
	return resArr;
}
setInterval(() => {
	const topsum = [
		100_000_000, 75_000_000, 50_000_000, 25_000_000, 15_000_000, 10_000_000,
		5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000,
		5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000,
		5_000_000, 5_000_000, 5_000_000, 5_000_000, 5_000_000,
	];
	var now = new Date();
	var d = now.getDay();
	var h = now.getHours();
	if (dataTimes.d != d && h >= 0) {
		dataTimes.days++;
		dataTimes.d = d;
		save("data", dataTimes);
		var top = getTopDay();
		var text = "";
		for (var i = 0; i < topsum.length; i++) {
			if (top[i]) {
				var user = users.find((x) => x.uid === top[i].user);
				if (user) {
					text += `\n${i + 1}), [id${user.uid}|${
						user.first_name
					}], за топ дня получил ${number_format(topsum[i])} койнов.`;
					user.coins += topsum[i];
				}
			}
		}
		vk.api.messages.send({
			peer_id: 2000000001,
			message: `Топ дня:\n${text}`,
			random_id: 0,
		});
		users.filter((x) => {
			x.stats.day.lose = 0;
			x.stats.day.win = 0;
			x.stats.topDay = 0;
		});
	}
	if (dataTimes.days >= 7) {
		const topsum = [
			350_000_000, 275_000_000, 225_000_000, 150_000_000, 100_000_000,
			75_000_000, 50_000_000, 25_000_000, 15_000_000, 10_000_000, 5_000_000,
			5_000_000, 5_000_000, 5_000_000, 5_000_000,
		];
		dataTimes.days = 0;
		dataTimes.d = d;
		save("data", dataTimes);
		var top = getTopWeek();
		var text = "";
		for (var i = 0; i < topsum.length; i++) {
			if (top[i]) {
				var user = users.find((x) => x.uid === top[i].user);
				if (user) {
					text += `\n${i + 1}), [id${user.uid}|${
						user.first_name
					}], за топ недели получил ${number_format(topsum[i])} койнов.`;
					user.coins += topsum[i];
				}
			}
		}
		vk.api.messages.send({
			peer_id: 2000000001,
			message: `Топ недели:\n${text}`,
			random_id: 0,
		});
		text = "";
		top = users.sort((a,b) => (b?.ads_week ?? 0) - (a?.ads_week ?? 0)).filter((x,i) => i < topsum_ads.length);
		for (var i = 0; i < topsum_ads.length; i++) {
			if (top[i]) {
				var user = users.find((x) => x.uid === top[i].user);
				if (user) {
					text += `\n${i + 1}), [id${user.uid}|${
						user.first_name
					}], за топ недели получил ${number_format(topsum_ads[i])} койнов.`;
					user.coins += topsum_ads[i];
				}
			}
		}
		vk.api.messages.send({
			peer_id: 2000000001,
			message: `Топ по рекламе:\n${text}`,
			random_id: 0,
		});
		users.filter((x) => {
			x.stats.topWeek = 0;
			x.ads_week = 0;
		});
	}
	save("md", minesData);
}, 1000);
vk.updates.on("wall_reply_new", async (msg) => {
	var post = dataPosts.find(
		(x) =>
			x.id === msg.objectId && x.createdAt + 62 * 60 * 60 * 1000 > getUnix()
	);
	if (!post) return;
	if (/^(\[(public|club)([0-9]+)\|(.*)\](,|)\s*|)крутить$/i.test(msg.text)) {
		if (!post.users.find((x) => x[0] === msg.fromId) || post.users.find((x) => x[0] === msg.fromId && x[1] >= 0)) {
			if (post.users.find((x) => x[0] === msg.fromId))
			if (post.users.find((x) => x[0] === msg.fromId)[1] > 0)
			post.users.find((x) => x[0] === msg.fromId)[1]--;
			else return await vk.api.wall.createComment({ 
				owner_id: msg.ownerId,
				post_id: msg.objectId,
				from_group: 1,
				message: `Попытки закончились!`,
				reply_to_comment: msg.id,
			}).catch(() => {});
			else post.users.push([msg.fromId, -1]);
			save("dataPosts", dataPosts);
			var sum = random(1000000, 3000000);
			var user = users.find((x) => x.uid === msg.fromId);
			if (user) {
				user.coins += sum;
				return await vk.api.wall.createComment({
					owner_id: msg.ownerId,
					post_id: msg.objectId,
					from_group: 1,
					message: `[id${msg.fromId}|${user.first_name ?? "Юзер"}], Вы выиграли ${number_format(sum, 0)} SC!`,
					reply_to_comment: msg.id,
				}).catch(() => {});
			} 
			else {
				return await vk.api.wall.createComment({
					owner_id: msg.ownerId,
					post_id: msg.objectId,
					from_group: 1,
					message: `Зарегистрируйтесь, чтобы выиграть!`,
					reply_to_comment: msg.id,
				}).catch(() => {});
			}
		} 
		else if (post.users.find((x) => x[0] === msg.fromId && x[1] === -1)) {
			return await vk.api.wall.createComment({
				owner_id: msg.ownerId,
				post_id: msg.objectId,
				from_group: 1,
				message: `Сделайте репост, чтобы получить ещё попытку!`,
				reply_to_comment: msg.id,
			}).catch(() => {});
		}
	}
});
vk.updates.start().catch(() => {});
setInterval(async () => {
	save("users", users);
	save("proms", proms);
}, 1000);
app.post("/wapi", async (req, res) => {
	res.setHeader("Content-Type", "application/json");
	var result = null;
	const data = req.body;
	if (!data || !data?.referer || !data?.uid) return;
	var validate = validateWalletUrl(data.referer);
	if (validate.status) {
		var vars = getUrlVars(data.referer);
		if (Number(vars.id) === Number(data.uid)) {
			var user = users.find((x) => x.uid === Number(vars.id));
			if (!user) {
				user = await vk.api.users.get({
					user_ids: `id${Number(vars.id)}`,
					fields: "photo_100,photo_200,sex",
				});
				var startSum = 0;
				if (
					users.find((x) => x.uid === Number(data.data.ref)) &&
					users.find((x) => x.uid === Number(data.data.ref)).uid !==
						Number(vars.id)
				) {
					users.find((x) => x.uid === Number(data.data.ref)).coins += 5000000;
					startSum += 5000000;
					await vk.api.messages
						.send({
							message: `По вашей ссылке перешел [id${vars.id}|${user[0].first_name} ${user[0].last_name}], вы получили 5кк за рефа!`,
							random_id: 0,
							peer_id: users.find((x) => x.uid === Number(data.data.ref)).uid,
						})
						.catch(() => {});
					await vk.api.messages
						.send({
							message: `Вы перешли по ссылке [id${
								users.find((x) => x.uid === Number(data.data.ref)).uid
							}|${
								users.find((x) => x.uid === Number(data.data.ref)).first_name
							} ${
								users.find((x) => x.uid === Number(data.data.ref)).last_name
							}] и получили 5кк!`,
							random_id: 0,
							peer_id: vars.id,
						})
						.catch(() => {});
				}
				users.push({
					uid: Number(vars.id),
					coins: startSum,
					photo: {
						_100: user[0].photo_100,
						_200: user[0].photo_200,
					},
					stats: {
						day: {
							lose: 0,
							win: 0,
						},
						all: {
							lose: 0,
							win: 0,
						},
						topDay: 0,
						topWeek: 0,
						topHour: 0,
					},
					bonus: true,
					bonusTime: 0,
					bonusWallet: 0,
					sex: user[0].sex,
					color: "white",
					ban: false,
					nick: null,
					lastActive: getUnix(),
					token: null,
					uptop: 0,
					game: null,
					clanId: null,
					ip: req.socket.remoteAddress,
					keyMinesData: null,
					first_name: user.first_name,
					last_name: user.last_name,
					ref: data?.data?.ref
						? users.find((x) => x.uid === Number(data.data.ref))
							? users.find((x) => x.uid === Number(data.data.ref)).uid
							: Number(vars.id)
						: Number(vars.id),
					ads: 0,
					ads_week: 0
				});
			}
			user = users.find((x) => x.uid === Number(vars.id));
			if (user) {
				if (data.m === "getUser") {
					var user1 = await vk.api.users.get({
						user_ids: `id${Number(vars.id)}`,
						fields: "photo_100,photo_200,sex",
					});
					user = users.find((x) => x.uid === Number(vars.id));
					user.ip = req.socket.remoteAddress;
					user.lastActive = getUnix();
					user.first_name = user1[0].first_name;
					user.last_name = user1[0].last_name;
					user.photo = {
						_100: user1[0].photo_100,
						_200: user1[0].photo_200,
					};
					result = {
						error: false,
						response: {
							ban: user.ban,
							coins: user.coins,
							nick: user.nick,
							vk: {
								id: user.uid,
								sex: user.sex,
								lastActive: user.lastActive,
							},
							stats: {
								...user.stats,
							},
							bonusWallet: user.bonusWallet,
							online: onlineUsers.length,
							clan: user.clanId,
						},
					};
					if (!onlineUsers.find((y) => y === user.uid)) {
						onlineUsers.push(user.uid);
					}
				}
				if (data.m === "getBonus") {
					var sum = 0;
					if(getUnix() - user.bonusWallet > 0) {
						sum = random(2_000_000, 4_000_000);
						user.bonusWallet = getUnix() + 14400000;
						user.coins += sum;
					}
					result = {
						error: false,
						response: {
							ban: user.ban,
							coins: user.coins,
							nick: user.nick,
							vk: {
								id: user.uid,
								sex: user.sex,
								lastActive: user.lastActive,
							},
							stats: {
								...user.stats,
							},
							bonusWallet: user.bonusWallet,
							online: onlineUsers.length,
							clan: user.clanId,
						},
						sum
					};
				} else if (data.m === "ad_watched") {
					const secret = "ES_080727ea8760446389bec09b9d4df122";
					const token = data?.d?.token ?? "";
					await verify(secret, token)
						.then((data) => {
							if (data.success === true) {
								const sum = random(1_000_000, 2_000_000);
								user.coins += sum;
								user.ads = (user?.ads ?? 0) + 1;
								user.ads_week = (user?.ads_week ?? 0) + 1;
								result = { error: false, response: { sum, coins: user.coins } };
							} else {
								result = { error: true };
							}
						})
						.catch(console.error);
				}
			}
			return res.end(JSON.stringify(result));
		}
	}
});
//require('./market/index.js')