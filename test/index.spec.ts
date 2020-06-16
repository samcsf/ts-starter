import * as assert from 'assert';
import { add } from '../src/index';

describe('Add function', async () => {
  it('1 + 1 = 2', async () => {
    assert.strictEqual(add(1, 1), 2, 'Should return 2 !');
  });
});

