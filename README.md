<img align="center" src="boo-transp.png" style="max-width: 200px;">

# boo

um plugin simples em vanilla js para adicionar classes em elementos visíveis na viewport.

[DEMO](https://frrrnd.design/boo)

## instruções
### chamar o plugin

    <script src="boo.js"></script>

### adicionar o atributo data-appear no elemento

    <div class="element" data-appear></div>

### controlar a animação via css

    /* classe padrão que pode ser alterada */

    .makeMeAppear { 
        animation: makeMeAppear .8s ease 1s forwards; 
    }

    @keyframes makeMeAppear {
        0% { 
            opacity: 0;
            transform: translateY(55px);
        }
        
        100% { 
            opacity: 1;
            transform: translateY(0);
        }
    }

---