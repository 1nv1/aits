# aits

Array indexed by timestamp. It's a very simple class to handle an array using timestamp as a key. Just that.

The timestamp is incremental.

## How can test the class quickly?

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

Create the array and fill with **value**. By default **value** is *null*.

```js
let arr = new aits(<timestamp1>, <timestamp2>, <value>);
```

### Get stored value associate with some timestamp

```js
let value = <instance>.get(<timestamp>);
```

If success return the **value** if not return **false**.

### Set value by timestamp

```js
let value = <instance>.set(<timestamp>, <value>);
```

If success return **true** if not return **false**.

### Print all values stored

By default **callback** is **console.log**.

```js
<instance>.print(<callback>);
```

### Scroll array

Move values list from **timestamp** to beginning of array and fill the rest with **value**.

By default **value** is *null*.

```js
<instance>.scroll(<timestamp>, <value>);
```

If success return **true** if not return **false**.
