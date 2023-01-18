var estados = [];
var estadoActual;
var id;
$(document).ready(function() {
    id = getUrlParameter("id");

    cargarFormulario(id);
    
  });
function cargarFormulario(id) {
  $("#listaEstados").empty();
  $("#listaObservaciones").empty();
  $("#listaRendiciones").empty();
    $("#solicitudId").text(id);
    //INSERTAR LOADING
    $('#listaEstados').append(`
    <div class="card w-64 bg-base-300 shadow-xl carousel-item" id="estadoLoading">
        <div class="card-body">
            <h2 class="card-title"><progress class="progress w-full"></progress></h2>
            <p><progress class="progress w-full"></progress></p>
            <p><progress class="progress w-full"></progress></p> 
        </div>
    </div>
    
    `);
    
    let headers1 = new Headers();
    headers1.append('Content-Type', 'application/json');
  headers1.append('Accept', '*/*');
  headers1.append('Access-Control-Allow-Origin', '*');
  headers1.append('GET', 'POST', 'OPTIONS');
        fetch(`https://servicios.hcgrupo.com:56334/api/Solicitud/${id}`, {
    //mode: 'no-cors',
    method: 'GET',
    headers: headers1
  })
  .then(response => response.json())
  .then(function (res) {
             console.log(res);
             $("#solicitudSolicitante").text(res.solicitante.nombreApellido);
             $("#solicitudMonto").text(currency(res.solicitudMonto, { precision: 0, symbol: '₲', separator: '.' }).format());
             $("#solicitudFecha").text(moment(res.solicitudFecha).format("DD/MM/YYYY"));
             $("#solicitudModo").text(getModo(res.solicitudModo));
             var row = "";
             var rowObs = "";
             var rowRend = "";
             for (let index = 0; index < res.estados.length; index++) {
                const element = res.estados[index];
                row += `
                <div class="card w-64 bg-base-300 shadow-xl carousel-item">
                    <div class="card-body">
                        <h2 class="card-title">${element.estadoNombre}</h2>
                        <p>${moment(element.estadoFechaHora).format("DD/MM/YYYY HH:mm")}</p>
                        <p>${element.estadoUsuario}</p> 
                    </div>
                </div>`;
                if(element.actual) {
                    estadoActual = element;
                }
                
                

             }
             
             $('#listaEstados').append(row);

             for (let index = 0; index < res.observaciones.length; index++) {
                const element = res.observaciones[index];
                rowObs += `<li class="bordered"><a>${index+1}-${element.observacionMensaje}</a></li>`;

             }
             $('#listaObservaciones').append(rowObs);
             
             if(estadoActual.esFinal == false) {
              cargarListaEstados();
              $("#listaObservaciones").append(`<li class="disabled">
    <label class="block mt-4 text-sm">
      <span class="text-gray-700 dark:text-gray-400">
        Agregar nueva observación
      </span>
      <div
        class="relative text-gray-500 focus-within:text-purple-600"
      >
        <input id="nuevaObservacionInput"
          class="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
          
        />
        <button onclick="agregarObservacion()"
          class="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        </button>
      </div>
    </label>
  </li>`);
            }
             $("#estadoLoading").remove();

             for (let index = 0; index < res.rendiciones.length; index++) {
                const element = res.rendiciones[index];
                rowRend += `
                <div class="card w-64 bg-base-300 shadow-xl carousel-item">
                    <div class="card-body">
                        <h2 class="card-title">Rendición #${element.rendicionId}</h2>
                        <p>${moment(element.rendicionFecha).format("DD/MM/YYYY HH:mm")}</p>
                        <p><button class="btn btn-square btn-outline btn-accent" onClick="traerRendicion(${element.rendicionId})" @click="openModal">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>                        </div></p> 
                    </div>
                </div>`;

                
                

             }
             
             $('#listaRendiciones').append(rowRend);
         })
  .catch(function (error) {
    console.log('Authorization failed : ' + error.message);
    $("#estadoLoading").remove();
  });
    }

    function cargarListaEstados() {
        var row = '';
        let headers1 = new Headers();
    headers1.append('Content-Type', 'application/json');
  headers1.append('Accept', '*/*');
  headers1.append('Access-Control-Allow-Origin', '*');
  headers1.append('GET', 'POST', 'OPTIONS');
  fetch(`https://servicios.hcgrupo.com:56334/api/Estado`, {
    //mode: 'no-cors',
    method: 'GET',
    headers: headers1
  })
  .then(response => response.json())
  .then(function (lista) {
     
             estados = lista;
             console.log(estados);
             row += `<div class="card w-64 bg-base-300 shadow-xl carousel-item" id="agregarEstadoCard">
<div class="card-body">
<select class="select select-bordered w-full max-w-xs" id="selectEstados">
<option disabled selected>Elegir siguiente estado:</option>`;
for (let indexE = 0; indexE < estados.length; indexE++) {
  const elementE = estados[indexE];
  if(elementE.estadoId != estadoActual.estadoId) {
    row += `<option value="${elementE.estadoId}">${elementE.estadoNombre.replace("ado", "ar")}</option>`;
  }
  
}
row+= `</select>
<button class="btn btn-square btn-outline btn-accent" onClick="actualizarEstado()">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>                    </button> 
</div>
</div>`;
if(estadoActual.esFinal == false && tienePermisos(estadoActual.estadoNombre)) {
  $('#listaEstados').append(row);
}


         })
  .catch(error => console.log('Authorization failed : ' + error.message));
    }

    function cargarListaEstadosRendicion(rendicionId, estadoA) {
      
      var row = '';
      let headers1 = new Headers();
  headers1.append('Content-Type', 'application/json');
headers1.append('Accept', '*/*');
headers1.append('Access-Control-Allow-Origin', '*');
headers1.append('GET', 'POST', 'OPTIONS');
fetch(`https://servicios.hcgrupo.com:56334/api/Estado`, {
  //mode: 'no-cors',
  method: 'GET',
  headers: headers1
})
.then(response => response.json())
.then(function (lista) {
   
           estados = lista;
           row += `<div class="card w-64 bg-base-300 shadow-xl carousel-item" id="agregarEstadoCard">
<div class="card-body">
<select class="select select-bordered w-full max-w-xs" id="selectEstadosRendicion">
<option disabled selected>Elegir siguiente estado:</option>`;
for (let indexE = 0; indexE < estados.length; indexE++) {
const elementE = estados[indexE];
row += `<option value="${elementE.estadoId}">${elementE.estadoNombre.replace("ado", "ar")}</option>`;

}
row+= `</select>
<button class="btn btn-square btn-outline btn-accent" onClick="actualizarEstadoRendicion(${rendicionId})">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>                    </button> 
</div>
</div>`;
if(tienePermisos(estadoA.estadoNombre) && (estadoA.estadoNombre != "Finalizado")) {
  console.log(estadoA);
$('#listaEstadosRendicion').append(row);
}


       })
.catch(error => console.log('Authorization failed : ' + error.message));
  }


    
    function getModo(modo) {
        switch(modo){
            case "T":
                return "Transferencia";
            case "E":
                return "Efectivo";
            case "C":
                return "Cheque";
            default:
                return modo;
        }
    }

    function traerRendicion(rendicionId) {
      $("#modal_cargado").hide();
      $("#modal_cargando").show();
      $("#listaEstadosRendicion").empty();
      $("#listaArchivos").empty();
      $("#rendicionId").text(rendicionId);
      var row = '';
        let headers1 = new Headers();
    headers1.append('Content-Type', 'application/json');
  headers1.append('Accept', '*/*');
  headers1.append('Access-Control-Allow-Origin', '*');
  headers1.append('GET', 'POST', 'OPTIONS');
  fetch(`https://servicios.hcgrupo.com:56334/api/Rendicion/${rendicionId}`, {
    //mode: 'no-cors',
    method: 'GET',
    headers: headers1
  })
  .then(response => response.json())
  .then(function (res) {
     console.log(res);
     
     $("#rendicionARendir").text(currency(res.solicitud.solicitudMonto, { precision: 0, symbol: '₲', separator: '.' }).format());
             $("#rendicionFecha").text(moment(res.solicitudFecha).format("DD/MM/YYYY"));
             $("#rendicionMonto").text(currency(res.rendicionMontoUtilizado, { precision: 0, symbol: '₲', separator: '.' }).format());
        
             var row = "";
             var rowArchivos = "";
             for (let index = 0; index < res.estados.length; index++) {
                const element = res.estados[index];
                row += `
                <div class="card w-64 bg-base-300 shadow-xl carousel-item">
                    <div class="card-body">
                        <h2 class="card-title">${element.estadoNombre}</h2>
                        <p>${moment(element.estadoFechaHora).format("DD/MM/YYYY HH:mm")}</p>
                        <p>${element.estadoUsuario}</p> 
                    </div>
                </div>`;
                
             }
             
             $('#listaEstadosRendicion').append(row);
             var estadoA = res.estados.find(x=>x.actual == true);
             cargarListaEstadosRendicion(rendicionId, estadoA);

             $("#rendicionDescripcion").val(res.rendicionDescripcion.replace("\\n", "\\r\\n"));

             for (let index = 0; index < res.archivos.length; index++) {
              const element = res.archivos[index];
              rowArchivos += `
              <div class="card card-side bg-base-100 shadow-xl">
  <figure><img style="width:200px; height:280px; object-fit: cover;"  src="${element.url}" alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">Imagen #${index+1}</h2>
    <p>${moment(element.archivoFechaHora).format("DD/MM/YYYY HH:mm")}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary" for="my-modal-5" onClick="cambiarImagen('${element.url}')">Ver</button>
    
    </div>
  </div>
</div>`;
           }
           $('#listaArchivos').append(rowArchivos);

           $("#modal_cargado").show();
      $("#modal_cargando").hide();

         })
  .catch(error => console.log('Authorization failed : ' + error.message));
    }

    function cambiarImagen(image) {
      $("#imagenZoom").attr("src",image);
      $("#pop-imagen").addClass("modal-open");
    }
    function cerrarModal() {
      
      $("#pop-imagen").removeClass("modal-open");
      
    }

    function actualizarEstado(){
        var estadoNuevo = $("#selectEstados").val();
        var data = {
            solicitudId: parseInt(id),
            estadoId: parseInt(estadoNuevo),
            fechaHora: moment(),
            actual: 'S',
            usuario: JSON.parse(logged).usuario1,
            estado: null,
            solicitud: null
          };
          let headers1 = new Headers();
    headers1.append('Content-Type', 'application/json');
  headers1.append('Accept', '*/*');
  headers1.append('Access-Control-Allow-Origin', '*');
  headers1.append('GET', 'POST', 'OPTIONS');
        fetch(`https://servicios.hcgrupo.com:56334/api/SolicitudEstado`, {
                //mode: 'no-cors',
                method: 'POST',
                headers: headers1,
                body: JSON.stringify(data)
              })
              .then(response => response.json())
              .then(function (res) {
             console.log(res);
             var respuesta = res;
             Swal.fire(
                "Genial!",
                "Actualizado.",
                'success'
              );
              cargarFormulario(id);
             
         })
  .catch(error => console.log('Authorization failed : ' + error.message));
    }

    function actualizarEstadoRendicion(rendicionId){
      var estadoNuevo = $("#selectEstadosRendicion").val();
      var data = {
          rendicionId: parseInt(rendicionId),
          estadoId: parseInt(estadoNuevo),
          fechaHora: moment(),
          actual: 'S',
          usuario: JSON.parse(logged).usuario1,
          estado: null,
          rendicion: null
        };
        let headers1 = new Headers();
  headers1.append('Content-Type', 'application/json');
headers1.append('Accept', '*/*');
headers1.append('Access-Control-Allow-Origin', '*');
headers1.append('GET', 'POST', 'OPTIONS');
      fetch(`https://servicios.hcgrupo.com:56334/api/RendicionEstado`, {
              //mode: 'no-cors',
              method: 'POST',
              headers: headers1,
              body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(function (res) {
           console.log(res);
           var respuesta = res;
           Swal.fire(
              "Genial!",
              "Actualizado.",
              'success'
            );
            traerRendicion(rendicionId);
           
       })
.catch(error => console.log('Authorization failed : ' + error.message));
  }

    function agregarObservacion() {
      var nuevaObservacion = $("#nuevaObservacionInput").val();
      var data = {
        solicitudId: parseInt(id),
        observacionId: 0,
        observacionMensaje: nuevaObservacion,
        observacionNotificar: 'S',
        solicitud: null
      };
      let headers1 = new Headers();
headers1.append('Content-Type', 'application/json');
headers1.append('Accept', '*/*');
headers1.append('Access-Control-Allow-Origin', '*');
headers1.append('GET', 'POST', 'OPTIONS');
    fetch(`https://servicios.hcgrupo.com:56334/api/observacion`, {
            //mode: 'no-cors',
            method: 'POST',
            headers: headers1,
            body: JSON.stringify(data)
          })
          .then(response => response.json())
          .then(function (res) {
         console.log(res);
         var respuesta = res;
         Swal.fire(
            "Genial!",
            "Actualizado.",
            'success'
          );
          cargarFormulario(id);
     })
.catch(error => console.log('Authorization failed : ' + error.message));
    }