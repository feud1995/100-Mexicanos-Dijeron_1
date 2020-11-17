var app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
	port = process.env.PORT || 3000,
	express = require('express');

//---Routes
app.get('/client', function(req, res){
  res.sendFile(__dirname + '/views/client.html');
});
app.get('/client2', function(req, res){
  res.sendFile(__dirname + '/views/client2.html');
});

app.get('/server', function(req, res){
  res.sendFile(__dirname + '/views/server.html');
});
app.get('/server2', function(req, res){
  res.sendFile(__dirname + '/views/server2.html');
});

//---SocketIO Middleware
io.on('connection', function(socket) {
	socket.on('team one', function(teamName) { io.emit('team one', teamName); });
	socket.on('team two', function(teamName) { io.emit('team two', teamName); });

	socket.on('first answer', function(answer) { io.emit('first answer', answer); });
	socket.on('first score', function(score) { io.emit('first score', score); });

	socket.on('second answer', function(answer) { io.emit('second answer', answer); });
	socket.on('second score', function(score) { io.emit('second score', score); });

	socket.on('third answer', function(answer) { io.emit('third answer', answer); });
	socket.on('third score', function(score) { io.emit('third score', score); });

	socket.on('fourth answer', function(answer) { io.emit('fourth answer', answer); });
	socket.on('fourth score', function(score) { io.emit('fourth score', score); });

	socket.on('fifth answer', function(answer) { io.emit('fifth answer', answer); });
	socket.on('fifth score', function(score) { io.emit('fifth score', score); });

	socket.on('score to t1', function() {
		io.emit('score to t1');
	});

	socket.on('score to t2', function() {
		io.emit('score to t2');
	});

	socket.on('update global', function() {
		io.emit('update global');
	});

	socket.on('strike', function() {
		io.emit('strike');
	});

	//---Preguntas Rápidas
	socket.on('person one', function(name) { io.emit('person one', name); });
	socket.on('person two', function(name) { io.emit('person two', name); });

	socket.on('1-answer-1', function(answer) { io.emit('1-answer-1', answer); });
	socket.on('1-answer-2', function(answer) { io.emit('1-answer-2', answer); });

	socket.on('2-answer-1', function(answer) { io.emit('2-answer-1', answer); });
	socket.on('2-answer-2', function(answer) { io.emit('2-answer-2', answer); });

	socket.on('3-answer-1', function(answer) { io.emit('3-answer-1', answer); });
	socket.on('3-answer-2', function(answer) { io.emit('3-answer-2', answer); });

	socket.on('4-answer-1', function(answer) { io.emit('4-answer-1', answer); });
	socket.on('4-answer-2', function(answer) { io.emit('4-answer-2', answer); });
	
	socket.on('5-answer-1', function(answer) { io.emit('5-answer-1', answer); });
	socket.on('5-answer-2', function(answer) { io.emit('5-answer-2', answer); });

	socket.on('1-scores-1', function(score) { io.emit('1-scores-1', score); });
	socket.on('1-scores-2', function(score) { io.emit('1-scores-2', score); });

	socket.on('2-scores-1', function(score) { io.emit('2-scores-1', score); });
	socket.on('2-scores-2', function(score) { io.emit('2-scores-2', score); });

	socket.on('3-scores-1', function(score) { io.emit('3-scores-1', score); });
	socket.on('3-scores-2', function(score) { io.emit('3-scores-2', score); });

	socket.on('4-scores-1', function(score) { io.emit('4-scores-1', score); });
	socket.on('4-scores-2', function(score) { io.emit('4-scores-2', score); });

	socket.on('5-scores-1', function(score) { io.emit('5-scores-1', score); });
	socket.on('5-scores-2', function(score) { io.emit('5-scores-2', score); });

	socket.on('update score', function() {
		io.emit('update score');
	});

	socket.on('respuesta repetida', function() {
		io.emit('respuesta repetida');
	});
});

app.use(express.static(__dirname + '/assets'));

//---App Configuration
http.listen(port, function(){
  console.log('listening on *:' + port);
});
