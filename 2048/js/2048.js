window.onload = initPage;

var score = 0;

function initPage()
{
	//初始化游戏,随机出现两个方块
	initGame();
	//绑定键盘事件
	document.onkeydown = KeyPress;

	$("container").on("swipeleft", function() {
		alert("向左划");
	});
	$("container").on("swiperight", function(){
		alert("向右划");
	});
}

function initGame()
{
	//数组frequencyTable表示随机出现2,4,8的概率分别为0.7, 0.2, 0.1
	var frequencyTable = [2, 2, 2, 2, 2, 2, 2, 4, 4, 8];

	//获得所有的小方块
	var tiles = document.getElementById("container").getElementsByTagName("a");

	//首先设置所有的小方块为空白方块
	for (var i = 0, len = tiles.length; i < len; i++)
	{
		tiles[i].innerHTML = "";
		tiles[i].className = "tile valueblank";
	}

	//随机生成[0-15]范围内两个不相等的整数，代表游戏中两个不同方块的位置
	var place1 = Math.floor(Math.random() * 16);
	var place2 = Math.floor(Math.random() * 16);
	while (place2 == place1)
	{
		place2 = Math.floor(Math.random() * 16);
	}

	//随机生成这两个位置上面的数字
	var value1 = frequencyTable[Math.floor(Math.random() * frequencyTable.length)];
	var value2 = frequencyTable[Math.floor(Math.random() * frequencyTable.length)];

	//设置这两个数字所对应位置的两个方块的值和类
	tiles[place1].innerHTML = value1;
	tiles[place1].className = "tile value" + tiles[place1].innerHTML;
	tiles[place2].innerHTML = value2;
	tiles[place2].className = "tile value" + tiles[place2].innerHTML;

	//设置初始分数
	calculateScore();
}

function KeyPress()
{
	if (document.all) //Ie使用event.keyCode获取键盘码
		var key = event.keyCode;
	else //其他浏览器使用arguments[0].keyCode来获取键盘码
		var key = KeyPress.arguments[0].keyCode;
	switch (key)
	{
		case 38: //上
		case 87: //W
			moveUp();
			createARandomTile();
			calculateScore();
			break;
		case 39: //右
		case 68: //D
			moveRight();
			createARandomTile();
			calculateScore();
			break;
		case 40: //下
		case 83: //S
			moveDown();
			createARandomTile();
			calculateScore();
			break;
		case 37: //左
		case 65: //A
			moveLeft();
			createARandomTile();
			calculateScore();
			break;
		default:
			break;
	}
}

//判断传入的小方块是否是空的
function cellIsEmpty(cell)
{
	if (cell.innerHTML == "")
		return true;
	else
		return false;
}

//游戏是否获胜
function isWinTheGame()
{
	var cells = document.getElementById("container").getElementsByTagName("a");
	for (var i = 0; i < cells.length; i++)
	{
		if (!cellIsEmpty(cells[i]) && parseInt(cells[i].innerHTML) >= 2048)
		{
			return true;
		}
	}
	return false;
}

//计算分数,并设置显示分数
function calculateScore()
{
	document.getElementById("score").innerHTML = "SCORE : " + score;
	if (isWinTheGame())
	{
		document.getElementById("score").innerHTML = "Win : " + score;
		document.getElementById("score").className = "win";
	}
}

//在空白的地方随机生成一个小方块
function createARandomTile()
{
	//数组frequencyTable表示随机出现2,4,8的概率分别为0.7, 0.2, 0.1
	var frequencyTable = [2, 2, 2, 2, 2, 2, 2, 4, 4, 8];

	//数组blankTiles记录所有空白方块的位置
	var blankTiles = [];
	var cells = document.getElementById("container").getElementsByTagName("a");
	for (var i = 0, index = 0, len = cells.length; i < len; i++)
	{
		if (cellIsEmpty(cells[i]))
		{
			blankTiles[index] = i;
			index++;
		}
	}
	if (blankTiles.length == 0)
	{
		alert("Game Over!");
		return;
	}
	else
	{
		//生成填充的位置和填充的数值
		var fillPlace = blankTiles[Math.floor(Math.random() * blankTiles.length)];
		var fillValue = frequencyTable[Math.floor(Math.random() * frequencyTable.length)];

		//设置填充位置上的小方块的值和类
		cells[fillPlace].innerHTML = fillValue;
		cells[fillPlace].className = "tile value" + cells[fillPlace].innerHTML;
	}
}

//朝cell1方向处理一行或者一列
function swapTiles(cell1, cell2, cell3, cell4)
{
	var cells = [];
	cells[0] = cell1;
	cells[1] = cell2;
	cells[2] = cell3;
	cells[3] = cell4;

	//数组arraIndex记录非空白方块在cells数组中的下标
	var arrayIndex = [];
	for (var i = 0, index = 0; i < 4; i++)
	{
		if (!cellIsEmpty(cells[i]))
		{
			arrayIndex[index] = i;
			index++;
		}
	}

	//numOfNotBlank表示不是空白方块的数量
	var numOfNotBlank = arrayIndex.length;
	switch (numOfNotBlank)
	{
		//四个方块都是空白的
		case 0:
			break;
			//四个方块中只有一个不是空白的
		case 1:
			if (arrayIndex[0] != 0)
			{
				cell1.innerHTML = cells[arrayIndex[0]].innerHTML;
				cell1.className = "tile value" + cell1.innerHTML;
				cells[arrayIndex[0]].innerHTML = "";
				cells[arrayIndex[0]].className = "tile valueblank";
			}
			break;
			//四个方块只有两个不是空白的
		case 2:
			if (cells[arrayIndex[0]].innerHTML == cells[arrayIndex[1]].innerHTML)
			{
				cell1.innerHTML = parseInt(cells[arrayIndex[0]].innerHTML) * 2;
				cell1.className = "tile value" + cell1.innerHTML;
				cell2.innerHTML = "";
				cell2.className = "tile valueblank";
				score += parseInt(cell1.innerHTML);
			}
			else
			{
				cell1.innerHTML = cells[arrayIndex[0]].innerHTML;
				cell1.className = "tile value" + cell1.innerHTML;
				cell2.innerHTML = cells[arrayIndex[1]].innerHTML;
				cell2.className = "tile value" + cell2.innerHTML;
			}
			cell3.innerHTML = "";
			cell3.className = "tile valueblank";
			cell4.innerHTML = "";
			cell4.className = "tile valueblank";
			break;
			//四个方块中的三个不是空白的
		case 3:
			if (cells[arrayIndex[0]].innerHTML == cells[arrayIndex[1]].innerHTML)
			{
				cell1.innerHTML = parseInt(cells[arrayIndex[0]].innerHTML) * 2;
				cell1.className = "tile value" + cell1.innerHTML;
				cell2.innerHTML = cells[arrayIndex[2]].innerHTML;
				cell2.className = "tile value" + cell2.innerHTML;
				cell3.innerHTML = "";
				cell3.className = "tile valueblank";
				score += parseInt(cell1.innerHTML);
			}
			else if (cells[arrayIndex[1]].innerHTML == cells[arrayIndex[2]].innerHTML)
			{
				cell1.innerHTML = cells[arrayIndex[0]].innerHTML;
				cell1.className = "tile value" + cell1.innerHTML;
				cell2.innerHTML = parseInt(cells[arrayIndex[1]].innerHTML) * 2;
				cell2.className = "tile value" + cell2.innerHTML;
				cell3.innerHTML = "";
				cell3.className = "tile valueblank";
				score += parseInt(cell2.innerHTML);
			}
			else
			{
				cell1.innerHTML = cells[arrayIndex[0]].innerHTML;
				cell1.className = "tile value" + cell1.innerHTML;
				cell2.innerHTML = cells[arrayIndex[1]].innerHTML;
				cell2.className = "tile value" + cell2.innerHTML;
				cell3.innerHTML = cells[arrayIndex[2]].innerHTML;
				cell3.className = "tile value" + cell3.innerHTML;
			}
			cell4.innerHTML = "";
			cell4.className = "tile valueblank";
			break;
			//4个方块都不是空白
		case 4:
			if (cells[arrayIndex[0]].innerHTML == cells[arrayIndex[1]].innerHTML)
			{
				cell1.innerHTML = parseInt(cells[arrayIndex[0]].innerHTML) * 2;
				cell1.className = "tile value" + cell1.innerHTML;
				score += parseInt(cell1.innerHTML);
				if (cells[arrayIndex[2]].innerHTML == cells[arrayIndex[3]].innerHTML)
				{
					cell2.innerHTML = parseInt(cells[arrayIndex[2]].innerHTML) * 2;
					cell2.className = "tile value" + cell2.innerHTML;
					cell3.innerHTML = "";
					cell3.className = "tile valueblank";
					score += parseInt(cell2.innerHTML);
				}
				else
				{
					cell2.innerHTML = cells[arrayIndex[2]].innerHTML;
					cell2.className = "tile value" + cell2.innerHTML;
					cell3.innerHTML = cells[arrayIndex[3]].innerHTML;
					cell3.className = "tile value" + cell3.innerHTML;
				}
				cell4.innerHTML = "";
				cell4.className = "tile valueblank";
			}
			else if (cells[arrayIndex[1]].innerHTML == cells[arrayIndex[2]].innerHTML)
			{
				cell2.innerHTML = parseInt(cells[arrayIndex[1]].innerHTML) * 2;
				cell2.className = "tile value" + cell2.innerHTML;
				cell3.innerHTML = cells[arrayIndex[3]].innerHTML;
				cell3.className = "tile value" + cell3.innerHTML;
				cell4.innerHTML = "";
				cell4.className = "tile valueblank";
				score += parseInt(cell2.innerHTML);
			}
			else if (cells[arrayIndex[2]].innerHTML == cells[arrayIndex[3]].innerHTML)
			{
				cell3.innerHTML = parseInt(cells[arrayIndex[2]].innerHTML) * 2;
				cell3.className = "tile value" + cell3.innerHTML;
				cell4.innerHTML = "";
				cell4.className = "tile valueblank";
				score += parseInt(cell3.innerHTML);
			}
			else
			{}
			break;
	}
}

function moveUp()
{
	var cells = document.getElementById("container").getElementsByTagName("a");
	for (var i = 0; i < 4; i++)
	{
		swapTiles(cells[i], cells[4 + i], cells[8 + i], cells[12 + i]);
	}
}

function moveDown()
{
	var cells = document.getElementById("container").getElementsByTagName("a");
	for (var i = 0; i < 4; i++)
	{
		swapTiles(cells[12 + i], cells[8 + i], cells[4 + i], cells[i]);
	}
}

function moveLeft()
{
	var cells = document.getElementById("container").getElementsByTagName("a");
	for (var i = 0; i < 4; i++)
	{
		swapTiles(cells[i * 4], cells[i * 4 + 1], cells[i * 4 + 2], cells[i * 4 + 3]);
	}
}

function moveRight()
{
	var cells = document.getElementById("container").getElementsByTagName("a");
	for (var i = 0; i < 4; i++)
	{
		swapTiles(cells[i * 4 + 3], cells[i * 4 + 2], cells[i * 4 + 1], cells[i * 4]);
	}
}