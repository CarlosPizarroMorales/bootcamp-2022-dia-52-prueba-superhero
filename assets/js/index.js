$(document).ready(function() {

  $('.container').hide();
  //* Función que captura el id del superhéroe:
  $('form').submit(function(e) {
    e.preventDefault();

    let id = $('#heroId').val();

    // TODO hacer con un if para crear una rutina que pinte el mensaje en el form html
    validaId(id) ? getHeroData(id) : console.log('El id ingresado no es válido');
    return undefined;
  })
  
  //* Función que valida el dato ingresado. (innecesario pero requerido en la prueba)
  function validaId(id) {
    return /^\d{1,3}$/.test(id);
  }

  //* Función que genera la consulta a la API:
  function getHeroData(id) {
    $.get(`https://superheroapi.com/api.php/3033707663582647/${id}`, function(data) {
      // console.log(data);

      let cardDataSet = {
        name: data.name,
        publisher: data.biography.publisher, 
        firstAppearance: data.biography['first-appearance'],
        height: data.appearance.height[1],
        weight: data.appearance.weight[1],
        occupation: data.work.occupation,
        alias: data.biography.aliases,
        connections: data.connections['group-affiliation'],
        image: data.image.url,
      };

      let chartDataSet = {
        intelligence: ( data.powerstats.intelligence || 1 ),
        strength: data.powerstats.strength || 1,
        speed: data.powerstats.speed || 1,
        durability: data.powerstats.durability || 1,
        power: data.powerstats.power || 1,
        combat: data.powerstats.combat || 1,
      };

      console.log(typeof chartDataSet.intelligence);
      pintaCard(cardDataSet, chartDataSet, id)
    
    });     
  }
  
  function pintaCard(cardD, chartD, id) {
    console.log(cardD, chartD)

    $('.imagen').attr('src', cardD.image);
    $('.name').text(cardD.name);
    $('.publicado').text(cardD.publisher);
    $('.primera-aparicion').text(cardD.firstAppearance);
    $('.altura').text(cardD.height);
    $('.peso').text(cardD.weight);
    $('.ocupacion').text(cardD.occupation);
    $('.alias').text(cardD.alias);
    $('.conexiones').text(cardD.connections);


    /**=============================================*
     **            CODIGO DEL GRÁFICO              **
     **=============================================*/

     CanvasJS.addColorSet(
      'bootstrapColors',
      [
        "#0d6efd",
        "#d63384",
        "#198754",
        "#0dcaf0",
        "#ffc107",
        "#dc3545",
      ]);


    let options = {
      colorSet: 'bootstrapColors',
      title: {
        text: `Estadísticas de Poder para ${cardD.name}`
      },
      subtitles: [{
        text: `Id de Héroe: ${id}`
      }],
      animationEnabled: true,
      data: [{
        type: "pie",
        startAngle: 40,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: [
          { y: chartD.intelligence, label: "intelligence" },
          { y: chartD.strength, label: "strength" },
          { y: chartD.speed, label: "speed" },
          { y: chartD.durability, label: "durability" },
          { y: chartD.power, label: "power" },
          { y: chartD.combat, label: "combat" },
        ]
      }]
    };
    $("#chartContainer").CanvasJSChart(options);

    $('.container').show();
  }    
});

  
