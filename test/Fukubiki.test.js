import Fukubiki from '../dist/index.js';

let length = 10;
let loop = 99;
let fukubiki = new Fukubiki(length);
const results = [];

test('maxLength', () => {
  expect(fukubiki.maxLength).toBe(length);
});

test ('length', () => {
  expect(fukubiki.length).toBe(length);
});

test ('select', () => {
  for (let i = 0; i < fukubiki.maxLength * 2; ++i) {
    let result = fukubiki.select();

    if (i < fukubiki.maxLength) {
      results.forEach((_, i) => {
        expect(results[i] !== result).toBe(false);
      });

      expect(typeof result).toBe('number');
      expect(fukubiki.length).toBe(length - (i + 1));
    } else {
      expect(result).toBe(null);
    }
  }
});

test ('reset', () => {
  fukubiki.reset();

  expect(fukubiki.length).toBe(fukubiki.maxLength);
});

test ('autoReset', () => {
  let fukubiki = new Fukubiki(length, {
    autoReset: true
  });

  for (let i = 0; i < fukubiki.maxLength * loop; ++i) {
    let result = fukubiki.select();

    results.forEach((_, i) => {
      expect(results[i] !== result).toBe(false);
    });

    expect(typeof result).toBe('number');

    if (i % length !== fukubiki.maxLength - 1) {
      expect(fukubiki.length).toBe(length - (i % length + 1));
    } else {
      expect(fukubiki.length).toBe(length);
    }
  }
});

test ('callback', () => {
  const callback = jest.fn();
  let fukubiki = new Fukubiki(length, {
    callback
  });

  for (let i = 0; i < fukubiki.maxLength * loop; ++i) {
    let result = fukubiki.select();

    if (i < fukubiki.maxLength) {
      results.forEach((_, i) => {
        expect(results[i] !== result).toBe(false);
      });

      expect(typeof result).toBe('number');
      expect(fukubiki.length).toBe(length - (i % length + 1));
    } else {
      expect(result).toBe(null);
      expect(callback).toBeCalled();
    }
  }
});