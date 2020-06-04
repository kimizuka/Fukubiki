# fukubiki
sampling without replacement.

# Example Usage

```
yarn add fukubiki
```

```javascript
import Fukubiki from 'fukubiki';

const fukubiki = new Fukubiki(3);

fukubiki.select(); // => 2
fukubiki.select(); // => 0
fukubiki.select(); // => 1
fukubiki.select(); // => null

fukubiki.reset();

fukubiki.select(); // => 0
fukubiki.select(); // => 2
fukubiki.select(); // => 1
fukubiki.select(); // => null
```


# Option

## callback

```javascript
import Fukubiki from 'fukubiki';

const fukubiki = new Fukubiki(3, {
  callback: () => {
      console.log('finish!');
  }
});

fukubiki.select(); // => 1
fukubiki.select(); // => 0
fukubiki.select(); // => 2 and 'finish!'
```

## autoReset

```javascript
import Fukubiki from 'fukubiki';

const fukubiki = new Fukubiki(3, {
  autoReset: true
});

fukubiki.select(); // => 0
fukubiki.select(); // => 2
fukubiki.select(); // => 1
fukubiki.select(); // => 1
fukubiki.select(); // => 0
fukubiki.select(); // => 1
```
