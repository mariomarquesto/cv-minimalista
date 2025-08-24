import React from 'react';
import { Globe, Phone, Mail, Home } from 'lucide-react'; // Importa iconos de Lucide React aquí

const ContactInfo = ({ email, phone, website, address }) => {
  return (
    <div className="z-10 w-full flex flex-col gap-4">
      <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2 mb-4">CONTACTO</h2>
      <p className="flex items-center gap-2 text-sm">
        <Globe size={16} className="text-teal-400" /> {website}
      </p>
      <p className="flex items-center gap-2 text-sm">
        <Phone size={16} className="text-teal-400" /> {phone}
      </p>
      <p className="flex items-center gap-2 text-sm">
        <Mail size={16} className="text-teal-400" /> {email}
      </p>
      <p className="flex items-center gap-2 text-sm">
        <Home size={16} className="text-teal-400" /> {address}
      </p>
    </div>
  );
};

export default ContactInfo;
