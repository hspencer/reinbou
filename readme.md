#reinbou

**reinbou** is a js color selector ui library element based on [p5.js](https://p5js.org)

Currently pure p5js, no - to recompile css run:

`sass --watch sass/rb.scss:css/rb.css --style compressed`


###To Do

Construir una biblioteca js
* para `<input type="color" id="nodeNum" class="rb">`

```html
<!-- create an element, pass in a pointer,
and attach it to the body -->
<!DOCTYPE html>
<head>
  <script src='rb.js'></script>
</head>
<body>
  <script>
  var sketch = function(p) {
    p.setup = function(){
      p.createCanvas(100, 100);
      p.background(0);
    }
  };
  var node = document.createElement('div');
  new p5(sketch, node);
  window.document.getElementsByTagName('body')[0].appendChild(node);
  </script>
</body>
</html>
```