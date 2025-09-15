// Scripts para Círculo del Chi - Centro de Terapias Chinas Ancestrales

// Variables globales
let navegacionPrincipal;
let botonMenuMovil;
let menuNavegacion;
let modalServicio;
let modalTerapeuta;
let particulasEnergia;

// Datos de servicios
const datosServicios = {
    1: {
        titulo: "Fitoterapia",
        subtitulo: "Medicina herbal china que utiliza plantas medicinales para restaurar el equilibrio del organismo y tratar diversas afecciones.",
        descripcion: `
            <div class="contenido-servicio-modal">
                <div class="imagen-servicio-modal">
                    <img src="img/fitoterapia.jpg" alt="Fitoterapia" class="imagen-modal">
                </div>
                <div class="texto-servicio-modal">
                    <h4>Beneficios Comprobados:</h4>
                    <ul>
                        <li>Fortalece el sistema inmunológico</li>
                        <li>Mejora la digestión</li>
                        <li>Reduce la inflamación</li>
                        <li>Equilibra las emociones</li>
                    </ul>
                </div>
            </div>
        `
    },
    2: {
        titulo: "Acupuntura",
        subtitulo: "Técnica milenaria que utiliza agujas finas en puntos específicos para regular el flujo de qi y restaurar el equilibrio.",
        descripcion: `
            <div class="contenido-servicio-modal">
                <div class="imagen-servicio-modal">
                    <img src="img/acupuntura.jpg" alt="Acupuntura" class="imagen-modal">
                </div>
                <div class="texto-servicio-modal">
                    <h4>Beneficios Comprobados:</h4>
                    <ul>
                        <li>Alivio efectivo del dolor</li>
                        <li>Reducción del estrés</li>
                        <li>Mejora la calidad del sueño</li>
                        <li>Equilibra el sistema nervioso</li>
                    </ul>
                </div>
            </div>
        `
    },
    3: {
        titulo: "Tuina",
        subtitulo: "Masaje terapéutico que combina técnicas manuales para estimular puntos de acupuntura y meridianos energéticos.",
        descripcion: `
            <div class="contenido-servicio-modal">
                <div class="imagen-servicio-modal">
                    <img src="img/tuina.jpg" alt="Tuina" class="imagen-modal">
                </div>
                <div class="texto-servicio-modal">
                    <h4>Beneficios Comprobados:</h4>
                    <ul>
                        <li>Alivia dolores musculares</li>
                        <li>Mejora la circulación sanguínea</li>
                        <li>Reduce el estrés y ansiedad</li>
                    </ul>
                </div>
            </div>
        `
    },
    4: {
        titulo: "Ventosas",
        subtitulo: "Terapia milenaria que utiliza copas de succión para mejorar la circulación y eliminar bloqueos energéticos.",
        descripcion: `
            <div class="contenido-servicio-modal">
                <div class="imagen-servicio-modal">
                    <img src="img/ventosas.jpg" alt="Ventosas" class="imagen-modal">
                </div>
                <div class="texto-servicio-modal">
                    <h4>Beneficios Comprobados:</h4>
                    <ul>
                        <li>Mejora la circulación sanguínea</li>
                        <li>Alivia contracturas musculares</li>
                        <li>Facilita la desintoxicación</li>
                        <li>Reduce la inflamación</li>
                    </ul>
                </div>
            </div>
        `
    },
    5: {
        titulo: "Moxibustión",
        subtitulo: "Técnica que utiliza calor de artemisa sobre puntos específicos para tonificar el qi del organismo.",
        descripcion: `
            <div class="contenido-servicio-modal">
                <div class="imagen-servicio-modal">
                    <img src="img/moxibustion.jpg" alt="Moxibustión" class="imagen-modal">
                </div>
                <div class="texto-servicio-modal">
                    <h4>Beneficios Comprobados:</h4>
                    <ul>
                        <li>Fortalece la energía vital</li>
                        <li>Mejora la digestión</li>
                        <li>Alivia fatiga crónica</li>
                        <li>Regula el sistema inmune</li>
                    </ul>
                </div>
            </div>
        `
    },
    6: {
        titulo: "Chikung",
        subtitulo: "Arte milenario que combina movimientos, respiración y meditación para cultivar y equilibrar la energía vital.",
        descripcion: `
            <div class="contenido-servicio-modal">
                <div class="imagen-servicio-modal">
                    <img src="img/chikung.jpg" alt="Chikung" class="imagen-modal">
                </div>
                <div class="texto-servicio-modal">
                    <h4>Beneficios Comprobados:</h4>
                    <ul>
                        <li>Reduce el estrés y ansiedad</li>
                        <li>Mejora la flexibilidad</li>
                        <li>Fortalece el equilibrio</li>
                        <li>Aumenta la vitalidad</li>
                    </ul>
                </div>
            </div>
        `
    },
    7: {
        titulo: "Diagnóstico",
        subtitulo: "Evaluación integral mediante técnicas tradicionales chinas: observación, palpación del pulso, análisis de la lengua y interrogatorio.",
        descripcion: `
            <div class="contenido-servicio-modal">
                <div class="imagen-servicio-modal">
                    <img src="img/diagnostico.jpg" alt="Diagnóstico" class="imagen-modal">
                </div>
                <div class="texto-servicio-modal">
                    <h4>Beneficios Comprobados:</h4>
                    <ul>
                        <li>Identifica desequilibrios energéticos</li>
                        <li>Prevención temprana</li>
                        <li>Tratamiento personalizado</li>
                        <li>Seguimiento de la evolución</li>
                    </ul>
                </div>
            </div>
        `
    },
    8: {
        titulo: "Terapia con Oligoelementos",
        subtitulo: "Tratamiento con minerales esenciales para corregir desequilibrios metabólicos y fortalecer las funciones orgánicas.",
        descripcion: `
            <div class="contenido-servicio-modal">
                <div class="imagen-servicio-modal">
                    <img src="img/oligoelementos.jpg" alt="Terapia con Oligoelementos" class="imagen-modal">
                </div>
                <div class="texto-servicio-modal">
                    <h4>Beneficios Comprobados:</h4>
                    <ul>
                        <li>Regula el sistema nervioso</li>
                        <li>Mejora la absorción de nutrientes</li>
                        <li>Fortalece el sistema inmune</li>
                        <li>Equilibra las emociones</li>
                    </ul>
                </div>
            </div>
        `
    },
    9: {
        titulo: "Dietoterapia China",
        subtitulo: "Nutrición terapéutica basada en las propiedades energéticas de los alimentos según la medicina tradicional china.",
        descripcion: `
            <div class="contenido-servicio-modal">
                <div class="imagen-servicio-modal">
                    <img src="img/dietoterapia.jpg" alt="Dietoterapia China" class="imagen-modal">
                </div>
                <div class="texto-servicio-modal">
                    <h4>Beneficios Comprobados:</h4>
                    <ul>
                        <li>Equilibra el metabolismo</li>
                        <li>Mejora la digestión</li>
                        <li>Fortalece órganos internos</li>
                        <li>Previene enfermedades</li>
                    </ul>
                </div>
            </div>
        `
    }
};

// Datos de terapeutas
const datosTerapeutas = {
    gabriel: {
        nombre: "Gabriel Masip",
        especialidad: "Terapeuta en Medicina China, Fitoterapia y Movimiento Funcional y Energético",
        imagen: "img/gabriel-.jpg",
        contenido: `
            <div class="contenido-terapeuta-modal">
                <div class="header-terapeuta">
                    <img src="img/gabriel-.jpg" alt="Gabriel Masip" class="imagen-terapeuta-modal">
                    <div class="info-header-terapeuta">
                        <h2 class="nombre-terapeuta-modal">Gabriel Masip</h2>
                        <p class="especialidad-terapeuta-modal">🌿 Medicina China | Fitoterapia<br>⚡ Movimiento Funcional y Energético (Chi Kung)</p>
                        <p class="lema-terapeuta">"Salud integral, desde la raíz hasta el movimiento"</p>
                    </div>
                </div>
                
                <div class="secciones-terapeuta">
                    <div class="seccion-terapeuta">
                        <h3>Enfoque integral</h3>
                        <p>Combino la Medicina Tradicional China, la fitoterapia aplicada y el Chi Kung (Qigong) para acompañar procesos de salud desde una perspectiva holística. Mi práctica se centra en:</p>
                        <ul>
                            <li><strong>Armonización del Qi:</strong> A través de la MTC, el Chi Kung y el uso de plantas medicinales.</li>
                            <li><strong>Movimiento terapéutico:</strong> Ejercicios funcionales inspirados en el Qigong, adaptados a las necesidades individuales para mejorar la postura, la movilidad y la conexión cuerpo-mente.</li>
                        </ul>
                    </div>
                    
                    <div class="seccion-terapeuta">
                        <h3>¿Por qué el Chi Kung?</h3>
                        <p>El Qigong es una práctica milenaria que integra respiración, movimiento suave y atención plena para cultivar la energía vital. Lo incorporo como herramienta terapéutica para:</p>
                        <ul>
                            <li>Reducir el estrés y la tensión acumulada</li>
                            <li>Mejorar la circulación de energía y la flexibilidad</li>
                            <li>Complementar tratamientos de MTC y fitoterapia</li>
                        </ul>
                    </div>
                    
                    <div class="seccion-terapeuta">
                        <h3>Áreas de trabajo</h3>
                        <ul>
                            <li><strong>Consultas personalizadas:</strong> Diagnóstico y tratamiento con MTC y fitoterapia.</li>
                            <li><strong>Clases de Chi Kung y entrenamiento funcional:</strong> Rutinas adaptadas para todos los niveles, con énfasis en la salud y el bienestar (no en el rendimiento deportivo)</li>
                            <li><strong>Talleres integrativos:</strong> Movilidad consciente, respiración y hábitos saludables</li>
                        </ul>
                    </div>
                    
                    <div class="seccion-terapeuta">
                        <h3>Filosofía</h3>
                        <p>Creo en un enfoque de salud que une la sabiduría ancestral con prácticas accesibles para la vida moderna. Mi objetivo es empoderar a las personas para que recuperen su equilibrio físico, emocional y energético.</p>
                    </div>
                </div>
            </div>
        `
    },
    laura: {
        nombre: "Laura Aguirre",
        especialidad: "Terapeuta en Medicina China y Profesora de Taichí y Qi Gong",
        imagen: "img/Laura.jpg",
        contenido: `
            <div class="contenido-terapeuta-modal">
                <div class="header-terapeuta">
                    <img src="img/Laura.jpg" alt="Laura Aguirre" class="imagen-terapeuta-modal">
                    <div class="info-header-terapeuta">
                        <h2 class="nombre-terapeuta-modal">Laura Aguirre</h2>
                        <p class="especialidad-terapeuta-modal">Terapeuta en Medicina China y Profesora de Taichí y Qi Gong</p>
                        <p class="lema-terapeuta">"Cultivando equilibrio y armonía a través de la sabiduría ancestral"</p>
                    </div>
                </div>
                
                <div class="secciones-terapeuta">
                    <div class="seccion-terapeuta">
                        <h3>Especialidad</h3>
                        <p>Laura Aguirre es terapeuta en Medicina China y profesora de Taichí y Qi Gong, con una trayectoria dedicada a integrar el movimiento consciente, la filosofía taoísta y las terapias holísticas. Su enfoque combina técnicas tradicionales con una visión contemporánea, promoviendo el bienestar físico, emocional y espiritual.</p>
                    </div>
                    
                    <div class="seccion-terapeuta">
                        <h3>Actividades</h3>
                        <ul>
                            <li><strong>Terapias de Medicina China:</strong> Acupuntura, masaje Tui Na, moxibustión, herbología y dietoterapia china, orientadas a restaurar el equilibrio energético del cuerpo.</li>
                            <li><strong>Clases de Taichí y Qi Gong:</strong> Sesiones grupales e individuales, presenciales y online, para todas las edades. Enfocadas en mejorar la postura, la respiración y la conexión mente-cuerpo.</li>
                            <li><strong>Talleres de Filosofía Taoísta:</strong> Espacios de reflexión y práctica para explorar los principios del Tao, el Yin-Yang y su aplicación en la vida cotidiana.</li>
                            <li><strong>Consultoría Holística:</strong> Asesoramiento personalizado en hábitos de vida, alimentación y movimiento, basado en la medicina tradicional china.</li>
                        </ul>
                    </div>
                    
                    <div class="seccion-terapeuta">
                        <h3>Filosofía</h3>
                        <p>Laura cree en el <strong>poder transformador de la filosofía taoísta</strong> como guía para vivir en armonía con uno mismo y el entorno. Su trabajo se centra en:</p>
                        <ul>
                            <li><strong>La conexión:</strong> Entre el cuerpo, la mente y el espíritu.</li>
                            <li><strong>El movimiento consciente:</strong> Como herramienta para cultivar energía (Qi) y vitalidad.</li>
                            <li><strong>La difusión del Tao:</strong> A través de talleres y charlas, busca compartir los valores de simplicidad, fluidez y respeto por los ciclos naturales.</li>
                        </ul>
                        <p><em>"El Taichí y el Qi Gong no son solo prácticas físicas, son caminos para reconectar con nuestra esencia y encontrar paz en el movimiento."</em></p>
                    </div>
                </div>
            </div>
        `
    }
};

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    inicializarComponentes();
    configurarEventos();
    crearParticulasEnergia();
    inicializarAnimacionesScroll();
});

// Inicializar componentes principales
function inicializarComponentes() {
    navegacionPrincipal = document.getElementById('navegacionPrincipal');
    botonMenuMovil = document.getElementById('botonMenuMovil');
    menuNavegacion = document.querySelector('.menu-navegacion');
    modalServicio = document.getElementById('modalServicio');
    modalTerapeuta = document.getElementById('modalTerapeuta');
    particulasEnergia = document.getElementById('particulasEnergia');
}

// Configurar todos los eventos
function configurarEventos() {
    // Navegación scroll
    window.addEventListener('scroll', manejarScrollNavegacion);
    
    // Menú móvil
    if (botonMenuMovil) {
        botonMenuMovil.addEventListener('click', alternarMenuMovil);
    }
    
    // Enlaces de navegación
    const enlacesNavegacion = document.querySelectorAll('.enlace-navegacion');
    enlacesNavegacion.forEach(enlace => {
        enlace.addEventListener('click', manejarClicNavegacion);
    });
    
    // Servicios
    const serviciosItems = document.querySelectorAll('.servicio-item');
    serviciosItems.forEach(item => {
        item.addEventListener('click', abrirModalServicio);
    });
    
    // Modal Servicios
    const cerrarModal = document.getElementById('cerrarModal');
    if (cerrarModal) {
        cerrarModal.addEventListener('click', cerrarModalServicio);
    }
    
    if (modalServicio) {
        modalServicio.addEventListener('click', function(e) {
            if (e.target === modalServicio) {
                cerrarModalServicio();
            }
        });
    }
    
    // Modal Terapeutas
    const cerrarModalTerapeutaBtn = document.getElementById('cerrarModalTerapeuta');
    if (cerrarModalTerapeutaBtn) {
        cerrarModalTerapeutaBtn.addEventListener('click', cerrarModalTerapeuta);
    }
    
    if (modalTerapeuta) {
        modalTerapeuta.addEventListener('click', function(e) {
            if (e.target === modalTerapeuta) {
                cerrarModalTerapeuta();
            }
        });
    }
    
    // Formulario de contacto
    const formularioContacto = document.querySelector('.formulario-contacto');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', manejarEnvioFormulario);
    }
    
    // Escape key para cerrar modales
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modalServicio && modalServicio.classList.contains('activo')) {
                cerrarModalServicio();
            }
            if (modalTerapeuta && modalTerapeuta.classList.contains('activo')) {
                cerrarModalTerapeuta();
            }
        }
    });
}

// Manejar scroll de navegación
function manejarScrollNavegacion() {
    if (window.scrollY > 50) {
        navegacionPrincipal.classList.add('scrolled');
    } else {
        navegacionPrincipal.classList.remove('scrolled');
    }
    
    // Actualizar enlace activo
    actualizarEnlaceActivo();
}

// Alternar menú móvil
function alternarMenuMovil() {
    botonMenuMovil.classList.toggle('activo');
    menuNavegacion.classList.toggle('activo');
}

// Manejar clic en navegación
function manejarClicNavegacion(e) {
    e.preventDefault();
    const objetivo = e.target.getAttribute('href');
    scrollToSection(objetivo.substring(1));
    
    // Cerrar menú móvil si está abierto
    if (menuNavegacion.classList.contains('activo')) {
        alternarMenuMovil();
    }
}

// Scroll suave a sección
function scrollToSection(seccionId) {
    const seccion = document.getElementById(seccionId);
    if (seccion) {
        const offsetTop = seccion.offsetTop - 80; // Altura de navegación
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Actualizar enlace activo en navegación
function actualizarEnlaceActivo() {
    const secciones = document.querySelectorAll('section[id]');
    const enlaces = document.querySelectorAll('.enlace-navegacion');
    
    let seccionActual = '';
    
    secciones.forEach(seccion => {
        const rect = seccion.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            seccionActual = seccion.getAttribute('id');
        }
    });
    
    enlaces.forEach(enlace => {
        enlace.classList.remove('activo');
        if (enlace.getAttribute('href') === '#' + seccionActual) {
            enlace.classList.add('activo');
        }
    });
}

// Abrir modal de servicio
function abrirModalServicio(e) {
    const servicioId = e.currentTarget.getAttribute('data-servicio');
    const datosServicio = datosServicios[servicioId];
    
    if (datosServicio) {
        const cuerpoModal = document.getElementById('cuerpoModal');
        cuerpoModal.innerHTML = `
            <h2 class="titulo-modal">${datosServicio.titulo}</h2>
            <p class="subtitulo-modal">${datosServicio.subtitulo}</p>
            ${datosServicio.descripcion}
            <div class="botones-modal">
                <button class="boton-primario" onclick="agendarConsulta('${datosServicio.titulo}')">
                    Agendar Consulta
                </button>
                <button class="boton-secundario" onclick="cerrarModalServicio()">
                    Cerrar
                </button>
            </div>
        `;
        
        modalServicio.classList.add('activo');
        document.body.style.overflow = 'hidden';
    }
}

// Cerrar modal de servicio
function cerrarModalServicio() {
    modalServicio.classList.remove('activo');
    document.body.style.overflow = 'auto';
}

// Abrir modal de terapeuta
function abrirModalTerapeuta(terapeutaId) {
    const datosTerapeuta = datosTerapeutas[terapeutaId];
    
    if (datosTerapeuta) {
        const cuerpoModal = document.getElementById('cuerpoModalTerapeuta');
        cuerpoModal.innerHTML = `
            ${datosTerapeuta.contenido}
            <div class="botones-modal">
                <button class="boton-primario" onclick="contactarTerapeuta('${terapeutaId}')">
                    Contactar por WhatsApp
                </button>
                <button class="boton-secundario" onclick="cerrarModalTerapeuta()">
                    Cerrar
                </button>
            </div>
        `;
        
        modalTerapeuta.classList.add('activo');
        document.body.style.overflow = 'hidden';
        
        // Resetear scroll del modal al inicio
        const contenidoModal = modalTerapeuta.querySelector('.contenido-modal');
        if (contenidoModal) {
            contenidoModal.scrollTop = 0;
        }
    }
}

// Cerrar modal de terapeuta
function cerrarModalTerapeuta() {
    modalTerapeuta.classList.remove('activo');
    document.body.style.overflow = 'auto';
}

// Contactar terapeuta por WhatsApp
function contactarTerapeuta(terapeutaId) {
    const urls = {
        gabriel: 'https://wa.me/541168226039?text=Hola%20Gabriel%2C%20quiero%20consultar%20sobre%20tus%20servicios%20de%20C%C3%ADrculo%20del%20Chi%3A',
        laura: 'https://wa.me/541150248975?text=Hola%20Laura%2C%20quiero%20consultar%20sobre%20tus%20servicios%20de%20C%C3%ADrculo%20del%20Chi%3A'
    };
    
    if (urls[terapeutaId]) {
        window.open(urls[terapeutaId], '_blank');
    }
}

// Agendar consulta
function agendarConsulta(servicio) {
    cerrarModalServicio();
    scrollToSection('contacto');
    
    // Pre-llenar el formulario
    const selectServicio = document.getElementById('servicio');
    if (selectServicio) {
        const opciones = selectServicio.options;
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].text.toLowerCase().includes(servicio.toLowerCase())) {
                selectServicio.selectedIndex = i;
                break;
            }
        }
    }
    
    // Focus en el campo nombre
    setTimeout(() => {
        const campoNombre = document.getElementById('nombre');
        if (campoNombre) {
            campoNombre.focus();
        }
    }, 500);
}

// Manejar envío de formulario
async function manejarEnvioFormulario(e) {
    e.preventDefault();
    
    // Obtener referencia al botón de envío
    const botonEnviar = document.querySelector('.boton-enviar');
    
    // Desactivar el botón y cambiar texto durante el envío
    if (botonEnviar) {
        botonEnviar.disabled = true;
        botonEnviar.textContent = 'Enviando...';
    }
    
    try {
        // Obtener datos del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const servicio = document.getElementById('servicio').value;
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validar campos requeridos
        if (!nombre || !email || !servicio || !mensaje) {
            mostrarNotificacion('Por favor, completa todos los campos requeridos.', 'error');
            return;
        }
        
        // Mapear el valor del servicio al texto legible para el asunto
        const mapaServicios = {
            'fitoterapia': 'Consulta sobre Fitoterapia',
            'acupuntura': 'Consulta sobre Acupuntura',
            'tuina': 'Consulta sobre Tuina',
            'ventosas': 'Consulta sobre Ventosas',
            'moxibustion': 'Consulta sobre Moxibustión',
            'chikung': 'Consulta sobre Chikung',
            'diagnostico': 'Consulta sobre Diagnóstico',
            'oligoelementos': 'Consulta sobre Terapia con Oligoelementos',
            'dietoterapia': 'Consulta sobre Dietoterapia China'
        };
        const asunto = mapaServicios[servicio] || 'Consulta General - Círculo del Chi';
        
        // Construir el objeto JSON para enviar a n8n
        const datosEnvio = {
            nombre,
            email,
            telefono,
            servicio,
            asunto,
            mensaje,
            destinatarios: ['gabrielmasip@gmail.com'], // Email del terapeuta
            origen: 'Círculo del Chi - Website'
        };
        
        // Enviar los datos al webhook n8n
        const respuesta = await fetch('https://n8napi.nexserver.ar/webhook/3659dfa3-824e-41d4-ae2d-fe1c18a32823', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosEnvio)
        });
        
        if (respuesta.ok) {
            mostrarNotificacion('¡Consulta enviada exitosamente! Te contactaremos pronto.', 'exito');
            e.target.reset();
        } else {
            mostrarNotificacion('Ocurrió un error al enviar la consulta. Por favor, intenta nuevamente.', 'error');
        }
        
    } catch (error) {
        console.error('Error al enviar formulario:', error);
        mostrarNotificacion('Error de conexión. Por favor, verifica tu conexión a internet e intenta más tarde.', 'error');
    } finally {
        // Reactivar el botón y restaurar texto original
        if (botonEnviar) {
            botonEnviar.disabled = false;
            botonEnviar.textContent = 'Enviar Consulta';
        }
    }
}

// Mostrar notificación
function mostrarNotificacion(mensaje, tipo) {
    const notificacion = document.createElement('div');
    notificacion.className = `notificacion ${tipo}`;
    notificacion.textContent = mensaje;
    
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${tipo === 'exito' ? 'background: #27ae60;' : 'background: #e74c3c;'}
    `;
    
    document.body.appendChild(notificacion);
    
    // Animar entrada
    setTimeout(() => {
        notificacion.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notificacion.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 5000);
}

// Crear partículas de energía
function crearParticulasEnergia() {
    if (!particulasEnergia) return;
    
    for (let i = 0; i < 20; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.left = Math.random() * 100 + '%';
        particula.style.animationDelay = Math.random() * 4 + 's';
        particula.style.animationDuration = (3 + Math.random() * 2) + 's';
        particulasEnergia.appendChild(particula);
    }
}

// Inicializar animaciones de scroll
function inicializarAnimacionesScroll() {
    // Configurar AOS (Animate On Scroll) si está disponible
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 100
        });
    }
}

// Función para optimizar rendimiento en móviles
function optimizarRendimientoMovil() {
    if (window.innerWidth <= 768) {
        // Reducir partículas en móviles
        const particulas = document.querySelectorAll('.particula');
        particulas.forEach((particula, index) => {
            if (index > 10) {
                particula.remove();
            }
        });
        
        // Simplificar animaciones
        document.body.classList.add('modo-movil');
    }
}

// Ejecutar optimización en carga y resize
window.addEventListener('load', optimizarRendimientoMovil);
window.addEventListener('resize', optimizarRendimientoMovil);

// Funciones de utilidad
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimizar scroll con debounce
window.addEventListener('scroll', debounce(manejarScrollNavegacion, 10));

// Precargar imágenes importantes
function precargarImagenes() {
    const imagenesImportantes = [
        'img/CHI.jpg',
        'img/fitoterapia.jpg',
        'img/acupuntura.jpg',
        'img/tuina.jpg',
        'img/ventosas.jpg',
        'img/moxibustion.jpg',
        'img/chikung.jpg',
        'img/diagnostico.jpg',
        'img/oligoelementos.jpg',
        'img/dietoterapia.jpg'
    ];
    
    imagenesImportantes.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Ejecutar precarga
window.addEventListener('load', precargarImagenes);
