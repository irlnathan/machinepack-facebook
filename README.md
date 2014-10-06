# machinepack-facebook

Machines for working with the facebook.

## Basic Usage

```javascript
var Facebook = require('machinepack-facebook');

Facebook.getLoginUrl({
  // ...
})
.exec(function (err, result) {
  // ...
});
```

For more info about working with machines, see the [node-machine repo](http://github.com/mikermcneil/node-machine).


## License

MIT &copy; Mike McNeil 2014
