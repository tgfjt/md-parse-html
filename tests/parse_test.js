var test = require('tape');
var parse = require('../src/js/lib/parse');

var example = [
	'# Test',
	'',
	'## TaskLists',
	'- [ ] foo',
	'- [x] bar'
].join('\n');

var res = '<h1 id="test">Test</h1>\n<h2 id="tasklists">TaskLists</h2>\n<ul>\n<li><label>\n  <input type="checkbox" class="task-list-item-checkbox">\n   foo\n</label></li>\n<li><label>\n  <input type="checkbox" class="task-list-item-checkbox" checked>\n   bar\n</label></li>\n</ul>\n';

test('timing test', function (t) {
	t.plan(1);

	t.equal(res, parse(example));
});
