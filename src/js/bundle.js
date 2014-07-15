var mdEditor = require('./lib/markdown-editor');
var htmlEditor = require('./lib/html-editor');
var parse = require('./lib/parse');

var example = [
	'# markdown title',
	'',
	'## markdown lists',
	'* hoge',
	'* fuga',
	'',
	'- [ ] foo',
	'- [x] bar',
	'',
	'```javascript',
	'var hoge = \'fuga\';',
	'',
	'console.log(hoge);',
	'```',
	''
];

window.addEventListener('DOMContentLoaded', function() {
	mdEditor(example.join('\n'));
	htmlEditor(parse(example.join('\n')));

	var $mdarea = document.querySelector('#markdown-editor');

	$mdarea.addEventListener('keydown', function() {
		var self = this;
		var text;

		setTimeout(function() {
			text = self.querySelector('.ace_content').innerText;
			document.getElementById('html-result').innerHTML = htmlEditor(parse.call(self, text));
		}, 250);
	});
}, false);


