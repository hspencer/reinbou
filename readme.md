#reinbou
## this is the f**king reinbou color selector 
**reinbou** is a js color selector ui library element based on [p5.js](https://p5js.org)


###To Do

Construir una biblioteca js
* para cada instancia de `<input type="color" id="nodeNum" class="rb">`
* construir dinámicamente el canvas estilo modal pantalla completa y al presionar el botón **ok** del selector, retorna la variable color y deja el `<input>` con `background-color`con la variable ingresada al arreglo de nodos.
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