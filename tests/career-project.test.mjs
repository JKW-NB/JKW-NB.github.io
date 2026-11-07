import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';

for (const page of ['fintech/index.html', 'analytics/index.html', 'ai-product/index.html']) {
  test(`${page}: shows the V1 project with its evidence canvas and integration`, () => {
    const html = readFileSync(new URL('../' + page, import.meta.url), 'utf8').replace(/\r\n/g, '\n');
    const cards = html.match(/<article class="work-card" data-project="career-copilot">[\s\S]*?<\/article>\n/g) ?? [];
    assert.equal(cards.length, 1);
    const card = cards[0];
    assert.match(card, /https:\/\/github.com\/JKW-NB\/career-copilot/);
    assert.match(card, /作品集 V1/);
    assert.match(card, /https:\/\/github.com\/reactive-resume\/reactive-resume/);
    assert.match(card, /<img src="..\/assets\/career-copilot-evidence.png" alt="[^"]+"/);
    const screenshot = readFileSync(new URL('../assets/career-copilot-evidence.png', import.meta.url));
    assert.equal(screenshot.subarray(1, 4).toString(), 'PNG');
    assert.match(card, /预览和明确确认后应用/);
    assert.match(card, /待审查/);
    assert.match(card, /rel="noopener noreferrer"/);
    for (const tag of ['article', 'div', 'section', 'ul']) {
      assert.equal((html.match(new RegExp('<' + tag + '(?:\\s|>)', 'g')) ?? []).length,
        (html.match(new RegExp('</' + tag + '>', 'g')) ?? []).length, `${tag} tags balance`);
    }
  });
}
