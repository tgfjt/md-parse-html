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
		var text = this.querySelector('.ace_content').innerText;

		setTimeout(function() {
			document.getElementById('html-result').innerHTML = parse.call(self, text);
		}, 200);
	});
}, false);


