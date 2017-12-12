document.addEventListener('DOMContentLoaded', function() {

	//setting up vars
	var boardSize = 3;
	var board = [];
	var turn = 1; 							//this is the var that hold player turn

	//funcitons
	function myFunction(){
		
		console.log(this);

		let x = parseInt( this.id[0] );
		let y = parseInt( this.id[1] );

		console.log( x + " " + y );

		if(board[x][y][1] == 1 || board[x][y][1] == -1){
			alert("DON'T CHEET");
		}else{
			
			board[x][y][2] = turn; 												//remnence of a dead feture

			if( turn % 2 == 0 ){
				board[x][y][1] = 1;
				board[x][y][0].innerHTML = "X"
				board[x][y][0].classList.add("xSpot")
				document.getElementById("title").innerHTML = "O's Turn"
				console.log( board[x][y][1] );
			}else{
				board[x][y][1] = -1;
				board[x][y][0].innerHTML = "O"
				board[x][y][0].classList.add("oSpot")
				document.getElementById("title").innerHTML = "X's Turn"
				console.log( board[x][y][1] );
			}



			turn = turn + 1;
		}
			
		//isGameOver();
		//getting x and y
		// var x = parseInt( this.id[0] );
		// var y = parseInt( this.id[1] );

		//divs we need
		let win = false;
		let row = [];
		let col = [];
		let diOne = 0;
		let diTwo = 0;


		//should be up half the winning logic
		let newSize = boardSize;
		for(let i = 0; i < boardSize; i++){
			row[i] = 0;
			col[i] = 0;
			for(let ii = 0; ii < boardSize; ii++ ){
				
				row[i] = board[i][ii][1] + row[i];
				console.log( "line 103 " + board[i][ii][2] )
				console.log( row[i] );
				col[i] = board[ii][i][1] + col[i];
				console.log( col[i] );

				if(i == ii){
					diOne = board[i][ii][1] + diOne; 
				}
				if(ii - newSize == i ){
					diTwo = board[i][ii][1] + diTwo;
				}

				console.log(board[i][ii][1]);

			}
		}

		
		//the other half of the winning logic
		for( let i = 0; i < row.length; i++){
			if (row[i] == boardSize  || col[i] == boardSize){
				win == true;
				document.getElementById("title").innerHTML = "X WINS";
			}
			if (row[i] == boardSize * -1  || col[i] == boardSize  * -1){
				win = true;
				document.getElementById("title").innerHTML = "O WINS";
			}
		}

		if( diOne == boardSize ||  diTwo == boardSize ){
			win = true;
			document.getElementById("title").innerHTML = "X WINS";
		}
		if( diOne == -boardSize ||  diTwo == -boardSize ){
			win = true;
			document.getElementById("title").innerHTML = "O WINS";
		}
	}

	for(let i = 0; i < boardSize; i++){

		board[i] = [];

		for(let ii = 0; ii < boardSize; ii++){
			board[i][ii] = [];
			board[i][ii][0] = document.createElement("button");						//the divs
			board[i][ii][0].classList.add("gameSpot");
			board[i][ii][0].innerHTML = "_";

			let toString = i.toString() + ii.toString();
			console.log(" pleas jsut work " + toString);
			board[i][ii][0].setAttribute("id", toString )

			//driver of the hole thing
			board[i][ii][0].addEventListener('click', myFunction);

			document.getElementById("InBody").appendChild(board[i][ii][0]);

			board[i][ii][1] = 0;													//who ouns the thing
			console.log( board[i][ii][1] );
			board[i][ii][2] = 0;													//the turn number it was played on

		}

		var make = document.createElement("div");
	 	make.classList.add("newLine");
		document.getElementById("InBody").appendChild( make );

	}

});