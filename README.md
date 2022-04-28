## Desafio "bla bla"

![captura presentación][0]

|Bootcamp 2022 Modulo x|bla bla|
|----|-----|
|**Unidad n°**||
|**Día Bootcamp**|x|
|**Día Modulo**|x/x|



El desafío 'bla bla' es ....más bla bla.

<hr>

## Referencias: *'cause we nerds... love them!! :)*

* [MDN sobre clamp()][1]

<hr>

### Requerimientos

|N°|Estado|Requisito|Puntaje|
|:-------:|:------:|:------:|:------:|
|1|--|--|--|
|2|--|--|--|
|3|--|--|--|
|4|--|--|--|
|5|--|--|--|

* **Tipografía** 
  * Ubuntu 400 700
  * ...
* **Colores:**
  * Esquema 1:
    * ...
  * Esquema ...: 
    * ...
* **Iconos:**
  * `<i class="fa-regular fa-thumbs-up"></i>`
  * ...

<hr>

### IMPLEMENTACIÓN

* bla bla bla
* bla bla ...

<hr>

## NOTAS

1. Data necesaria desde el objeto `data` :
   1. Para la card:
      1. IMAGEN: `data.image.url`
      2. Nombre: `data.name`
      3. Conexiones: `data.connections.group-affiliation` (depurar)
      4. Publicado por: `data.biography.publisher`
      5. Ocupación: `data.work.occupation`
      6. Primera aparición: `data.biography.first-appearance` (depurar)
      7. Altura: `data.appearance.height` (depurar??)
      8. Peso: `data.appearance.weight` (depurar??)
      9. Alianzas: `data.biography.aliases` (esto está ok??)
   2.  Para el gráfico:
       1.  `data.powerstats.intelligence` (inteligencia)
       2.  `data.powerstats.strength` (Fuerza)
       3.  `data.powerstats.speed` (Velocidad)
       4.  `data.powerstats.durability` (Durabilidad)
       5.  `data.powerstats.power` (Poder)
       6.  `data.powerstats.combat` (Combate)
2.  Sería entrete utilizar los 6 colores básicos de Bootstrap para personalizar los colores del gráfico pero también para pintar de fondo la `.card` según el color de la habilidad dominante del súper heroe.
    1.  Los colores de bootstrap son: 
        1.  bg-primary - #0d6efd
        2.  bg-secondary - #6c757d
        3.  bg-success - #198754
        4.  bg-info - #0dcaf0
        5.  bg-warning - #ffc107
        6.  bg-danger - #dc3545
        7.  El color para el texto cambiará entre $white y $dark
3.  El uso de guiones provoca sintaxis inválida en las strings que representan invocan una referencia a un objeto, por lo que no pueden usar sintaxis de punto de deben utilizar sintaxis de corchetes: 

```javascript
let dataSet = {
  firstAppearance: data.biography.first-appearance,    // es codigo inválido.
  firstAppearance: data.biography['first-appearance'], // es código válido.
}
```






<hr>


[1]:https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
[0]:https://developer.mozilla.org/en-US/docs/Web/CSS/clamp


<!--TODO -->
<!--TODO -->
<!--TODO -->
<!--TODO -->
<!--TODO -->
