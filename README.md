# aits

Array indexed by timestamp

## Just test

You can test the class creating an *index.html* file with the next content:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="aits.js"></script>
  </head>
  <body>
  </body>
</html>
```

and then you can use the console from your browser.

## Methods

### Create "array"

Create the array and fill with <value>. By default <value> is *null*.

```js
let arr = new aits(<timestamp1>, <timestamp2>, <value>);
```

### Get stored value associate with some timestamp

```js
let value = <instance>.get(<timestamp>);
```

### Set value by timestamp

```js
let value = <instance>.set(<timestamp>, <value>);
```

### Print all values stored

By default use the callback == console.log

```js
<instance>.print(<callback>);
```

### Print all values stored

By default <callback> is *console.log*.

```js
<instance>.print(<callback>);
```

### Scroll array

Move values list from <timestamp> to beginning of array and fill the rest with <value>.

By default <value> is *null*.

```js
<instance>.scroll(<timestamp>, <value>);
```
