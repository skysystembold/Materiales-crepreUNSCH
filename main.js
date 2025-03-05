// main.js

// Función para cargar el contenido en el contenedor "contenidoPDF"

function cargarContenido(lista) {
  const contPDF = document.querySelector("#contenidoPDF");
  lista.forEach(item => {
    // Extraer el ID del enlace de Google Drive (nuevo formato)
    const match = item.link.match(/\/d\/([^\/]+)/);
    const fileId = match ? match[1] : "default";
    
    // Construir el enlace para descarga directa
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Crear la sección del curso
    const newSection = document.createElement("section");
    newSection.className = "curso-container";
    newSection.id = `link-element-${item.id}`;
    newSection.innerHTML = `
      <img class="curso-img" src="/imgPdf/${fileId}.png" alt="Imagen Portada">
      <a class="curso-descargar" href="${downloadLink}" download>Descargar</a>
    `;
    contPDF.appendChild(newSection);
  });
}
////////////////////////////
// DEFINICIÓN DE ARRAYS
////////////////////////////

// COMUNICACIÓN
let rv = [
  {
    "link": "https://drive.google.com/file/d/11wsQn0y6hqe2z_polLaxZgEuG4Pt-V2i/view?usp=drivesdk"
  }
];

let lenguje = [];

let literatura = [];

let rm = [
  {
    "link": "https://drive.google.com/file/d/10l0lQe2JjA3SpIIEzYkJpMEtuJJRaSCS/view?usp=drivesdk"
  },
  {
    "link": "https://drive.google.com/file/d/10zLo_npXk7er_uSI29MRgfuLSINdIzcX/view?usp=drivesdk"
  }
];

let aritmetica = [];

let algebra = [];

let geometria = [
  {
    "link": "https://drive.google.com/file/d/10wKRHpSIJPom_kkRKPJtpJUO6xSiMfdY/view?usp=drivesdk"
  },{
    "link": "https://drive.google.com/file/d/115jvjDorCk_fKsMSivhS8TG6OUEYYu2U/view?usp=drivesdk"
  }
];

let trigonometria = [];

let fisica = [];

let quimica = [];

let biologia = [
  {
    "link": "https://drive.google.com/file/d/10lhKGrVxhzwEr4lblTYVxGHZmAHFb3lI/view?usp=drivesdk"
  },
  {
    "link": "https://drive.google.com/file/d/10yYpMI0wg-51_SyP4OOkdwxYJ-nDIP7o/view?usp=drivesdk"
  },{
    "link": "https://drive.google.com/file/d/124EEh_XVFV6dhXMiDSyqGFFDxSi8RwKk/view?usp=drivesdk"
  }
];

let anatomia = [
  {
    "link": "https://drive.google.com/file/d/11c8NeauT-nrGYiUGGHdtTtBMoUviE1Kj/view?usp=drivesdk"
  }
];

let hu = [
  {
    "link": "https://drive.google.com/file/d/119ivFSiaxlD4qNnIpSyk6kn6ekZHacuh/view?usp=drivesdk"
  },
  {
    "link": "https://drive.google.com/file/d/11Y-kQD_rj5ocBaxHk1mGiXFC0aM9TDDI/view?usp=drivesdk"
  },
  {
    "link": "https://drive.google.com/file/d/11ZyVoGDUak93sFrSIdAgXgRneYVbu4Eb/view?usp=drivesdk"
  },
  {
    "link": "https://drive.google.com/file/d/11ckRl04fak38OVRj3BA39_4DgA9sOmaP/view?usp=drivesdk"
  }
];

let hp = [];

let geografia = [
  {
    "link": "https://drive.google.com/file/d/1153llGVFu3_qRYZIfJPdATV7Gi05ncOX/view?usp=drivesdk"
  }];

let economia = [];

let fc = [];

let civica = [];



////////////////////////////
// MAPEO DE RUTAS A CONTENIDO
////////////////////////////

const pageMapping = {
  "literatura.html": literatura,
  "rv.html": rv,
  "lenguaje.html": lenguje,
  "rm.html": rm,
  "aritmetica.html": aritmetica,
  "algebra.html": algebra,
  "geometria.html": geometria,
  "trigonometria.html": trigonometria,
  "fisica.html": fisica,
  "quimica.html": quimica,
  "biologia.html": biologia,
  "anatomia.html": anatomia,
  "hu.html": hu,
  "hp.html": hp,
  "geografia.html": geografia,
  "economia.html": economia,
  "fc.html": fc,
  "civica.html": civica
};

////////////////////////////
// CARGA DINÁMICA SEGÚN RUTA
////////////////////////////

const currentPath = window.location.pathname;

if (currentPath.includes("index.html")) {
} else {
  // Se recorre el mapeo y se carga el contenido de la primera coincidencia
  for (const [page, lista] of Object.entries(pageMapping)) {
    if (currentPath.includes(page)) {
      cargarContenido(lista);
      break;
    }
  }
}
