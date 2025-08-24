import React, { useRef, useEffect } from "react";
import './index.css'; // Asegúrate de que este archivo CSS exista en src/
import { Globe, Phone, Mail, Home } from 'lucide-react'; // Importa iconos de Lucide React

export default function App() {
  // Datos estáticos para Felipe Sáenz, basados en el PDF proporcionado
  const personalInfo = {
    name: "FELIPE SÁENZ",
    title: "Marketing Manager",
    email: "hola@sitioincreible.com",
    phone: "1234-5678",
    website: "@sitioincreible",
    address: "Calle Cualquiera 123, Cualquier Lugar.",
    profileImage: "./image/imagen.jpg", // Placeholder o imagen real si se incluye
  };

  const profileSummary = "Con más de 5 años de experiencia en agencias de publicidad, soy un profesional de equipo, resolutivo y proactivo; apasionado por los nuevos retos y tendencias de interacción con el cliente.";

  const strengths = [
    "SEO",
    "UI/UX",
    "Diseño de Marca",
    "Diseño Web",
    "Trabajo en equipo",
  ];

  const languages = [
    { name: "Español", level: "nativo" },
    { name: "Inglés", level: "avanzado" },
    { name: "Portugués", level: "intermedio" },
  ];

  const education = [
    {
      title: "Licenciatura en Marketing y Publicidad",
      institution: "Universidad Fauget",
      years: "2012-2016",
    },
    {
      title: "Grado en Marketing e Investigación de Mercados",
      institution: "Universidad Fauget",
      years: "2014-2018",
    },
    {
      title: "Técnico en Comunicación",
      institution: "Secundaria Borcelle",
      years: "2004-2010",
    },
  ];

  const experience = [
    {
      position: "Responsable de Marketing",
      company: "En Ensigna",
      period: "septiembre 2021 - presente",
      description: [
        "Planificación de contenido para cinco copywriters.",
        "Gestión de la comunicación digital.",
        "Creación de campañas digitales.",
      ],
    },
    {
      position: "Analista de Marketing",
      company: "En Borcelle",
      period: "abril 2019 - septiembre 2021",
      description: [
        "Mantenimiento y mejora de páginas web.",
        "Generación de informes y conversión de la analítica en recomendaciones de mejora (SEO, SEA, SEM, etc.)",
      ],
    },
    {
      position: "Asistente de Marketing",
      company: "En Borcelle",
      period: "mayo 2017 - marzo 2019",
      description: [
        "Redacción de contenido.",
        "Gestión de redes sociales para 20 marcas.",
        "Elaboración de propuestas comerciales.",
      ],
    },
  ];

  const cvRef = useRef();

  // Mantenemos el useEffect para el fondo del body por si acaso
  useEffect(() => {
    const originalBodyBackground = document.body.style.backgroundColor;
    const originalBodyBackgroundImage = document.body.style.backgroundImage;

    document.body.style.backgroundColor = '#f8f8f8'; // Un gris muy claro
    document.body.style.backgroundImage = 'none';

    return () => {
      document.body.style.backgroundColor = originalBodyBackground;
      document.body.style.backgroundImage = originalBodyBackgroundImage;
    };
  }, []);

  const handleDownloadPDF = () => {
    // Ruta al PDF dentro de la carpeta 'public'.
    // Asegúrate de que tu archivo 'Curriculum Marketing Moderno Negro y celeste.pdf'
    // esté ubicado en la carpeta 'public/files' de tu proyecto React.
    const pdfDownloadUrl = "../public/FelipeSaenz.pdf";
    const fileName = "CV-Felipe-Saenz.pdf"; // Nombre con el que se guardará el archivo

    const link = document.createElement('a');
    link.href = pdfDownloadUrl;
    link.download = fileName;
    document.body.appendChild(link); // Es necesario adjuntarlo al DOM para Firefox
    link.click();
    document.body.removeChild(link); // Limpiar el DOM

    console.log("Descargando PDF directamente.");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 font-['Inter']">
      
      <button
        onClick={handleDownloadPDF}
        className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Descargar CV en PDF (Felipe Sáenz)
      </button>

      <div
        ref={cvRef}
        className="bg-white shadow-2xl rounded-3xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* Columna izquierda - Diseño basado en el PDF */}
        <div className="w-full md:w-1/3 bg-gray-800 text-white p-8 flex flex-col items-center md:items-start gap-6 relative">
         
          <div className="z-10 flex flex-col items-center md:items-start w-full">
            {/* Imagen de Perfil */}
            <img
              src={personalInfo.profileImage} 
              alt="Felipe Sáenz"
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-4 mt-8"
            />
            <h1 className="text-4xl font-extrabold text-center md:text-left mb-2">{personalInfo.name}</h1>
            <p className="text-xl font-light text-center md:text-left text-teal-300 mb-6">{personalInfo.title}</p>
          </div>

          <div className="z-10 w-full flex flex-col gap-4">
            <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 mb-4">CONTACTO</h2>
            <p className="flex items-center gap-2 text-sm">
              <Globe size={16} className="text-teal-400" /> {personalInfo.website}
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-teal-400" /> {personalInfo.phone}
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Mail size={16} className="text-teal-400" /> {personalInfo.email}
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Home size={16} className="text-teal-400" /> {personalInfo.address}
            </p>
          </div>

          <div className="z-10 w-full flex flex-col gap-4 mt-6">
            <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 mb-4">FORTALEZAS</h2>
            <ul className="list-none space-y-2">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <span className="text-teal-400">✓</span> {strength}
                </li>
              ))}
            </ul>
          </div>

          <div className="z-10 w-full flex flex-col gap-4 mt-6 mb-8">
            <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 mb-4">IDIOMAS</h2>
            <ul className="list-none space-y-2">
              {languages.map((lang, index) => (
                <li key={index} className="flex justify-between items-center text-sm">
                  <span>{lang.name}</span>
                  <span className="text-teal-400">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna derecha - Contenido principal */}
        <div className="w-full md:w-2/3 p-8 flex flex-col gap-8 bg-gray-50">
          <p className="text-gray-700 leading-relaxed text-md mb-6">
            {profileSummary}
          </p>

          {/* Experiencia */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">EXPERIENCIA</h2>
            {experience.map((job, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-xl font-semibold text-gray-800">{job.position}</h3>
                <p className="text-md text-gray-600 italic">{job.company}, {job.period}</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                  {job.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Educación */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-6">EDUCACIÓN</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="text-lg font-semibold text-gray-800">{edu.title}</h3>
                <p className="text-md text-gray-600">{edu.institution}, {edu.years}</p>
              </div>
            ))}
          </section>

        </div>
      </div>
    </div>
  );
}
