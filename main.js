      
Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
  // Inicializar el método de clasificación de imágenes con MobileNet
//clasificador = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/X_KQVmanw/model.json',modelLoaded);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/X_KQVmanw/model.json',modelLoaded);

  // Cuando el modelo está cargado.
  function modelLoaded() {
    console.log('¡Modelo cargado!');
  }
      
  function check()
  {
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
  }


// Una función que se ejecuta cuando tenemos algún error y los resultados.
function gotResult(error, results) {
  // Mostrar error en la consola.
  if (error) {
    console.error(error);
  } else {
    // Los resultados están en una matriz ordenados por la confianza.
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}
