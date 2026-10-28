import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
import test from 'node:test';

for (const page of ['fintech/index.html', 'analytics/index.html']) {
  test(`${page}: adds one truthful project card without changing existing content`, () => {
    const html = readFileSync(new URL('../' + page, import.meta.url), 'utf8').replace(/\r\n/g, '\n');
    const cards = html.match(/<article class="work-card" data-project="career-copilot">[\s\S]*?<\/article>\n/g) ?? [];
    assert.equal(cards.length, 1);
    const card = cards[0];
    assert.match(card, /https:\/\/github.com\/JKW-NB\/career-copilot/);
    assert.match(card, /真实外部模型效果待配置后验证/);
    assert.match(card, /预览和明确确认后应用/);
    assert.match(card, /待审查/);
    assert.match(card, /rel="noopener noreferrer"/);
    const previous = execFileSync('git', ['show', 'HEAD:' + page], { encoding: 'utf8' }).replace(/\r\n/g, '\n');
    assert.equal(html.replace(cards[0], '').replace(/\n+/g, '\n'), previous.replace(/<article class="work-card" data-project="career-copilot">[\s\S]*?<\/article>\n/g, '').replace(/\n+/g, '\n'));
    for (const tag of ['article', 'div', 'section', 'ul']) {
      assert.equal((html.match(new RegExp('<' + tag + '(?:\\s|>)', 'g')) ?? []).length,
        (html.match(new RegExp('</' + tag + '>', 'g')) ?? []).length, `${tag} tags balance`);
    }
  });
}
