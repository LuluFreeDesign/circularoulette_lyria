# Intégration iframe auto-resize dans Wagtail

## Configuration de l'iframe dans Wagtail

### 1. Code HTML de l'iframe

Dans votre template Wagtail, ajoutez l'iframe avec une hauteur initiale de **900px** :

```html
<iframe 
  id="circula-roulette-iframe"
  src="https://votre-url-circula-roulette.com"
  width="100%"
  height="900"
  frameborder="0"
  style="border: none; overflow: hidden;"
  title="CirculaRoulette SNCF"
></iframe>
```

### 2. Script JavaScript d'auto-resize

Ajoutez ce script **après** l'iframe dans votre template Wagtail :

```html
<script>
(function() {
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'iframe-resize') {
      var iframe = document.getElementById('circula-roulette-iframe');
      if (iframe) {
        var newHeight = event.data.height + 20;
        iframe.style.height = newHeight + 'px';
      }
    }
  });
})();
</script>
```

## Comment ça fonctionne

1. L'iframe démarre avec 900px de hauteur (valeur fixe dans Wagtail)
2. L'application React calcule sa vraie hauteur et l'envoie au parent via `postMessage`
3. Le script JavaScript dans Wagtail reçoit la hauteur et ajuste dynamiquement l'iframe
4. L'iframe s'adapte automatiquement quand on passe de la roue au quiz ou vice-versa

**Valeur à saisir dans Wagtail : 900**
