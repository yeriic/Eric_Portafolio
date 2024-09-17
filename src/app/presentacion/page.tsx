'use client';
import Image from "next/image";
import '../presentacion/presentacion.css';
import { FaJava, FaHtml5, FaCss3Alt, FaPhp, FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { useEffect, useState } from 'react';
import ImageCarousel from "../componentes/carruselP";


export default function proyectos() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
 
    <div className="limitador">
        <div className="presentacioncontainer">
        <h1>Presentación</h1>
        </div>
        <ImageCarousel />
        <div className="presentacioncontainer">
          <p> 
            Bienvenido a mi portafolio, aqui veras mi experiencia en diferentes proyecto en lo que he estado, información personal de mi persona. 
            Mi nombre es Eric Bethancourt, tengo 23 años y actualmente estudiando la carrera de Ing. de Software en la Universidad Tecnologica de Panamá
          </p>
        </div>

      <div className="separador"></div>

      <div className="presentacioncontainer">
        <h1>Experiencia</h1>
        <p> 
            Tengo bastante experiencia en varios lenguajes, estan ordenados del que mas tengo experiencia o el que mejor manejo hasta los que menos manejo.
        </p>
        
       
    
        <table>
      <tbody>
        <tr>
          <td><h2>JAVA {isClient && <FaJava size={24}/>}</h2></td>
          <td><progress className="barra" max={100} value={70}></progress></td>
        </tr>
        <tr>
          <td><h2>SQL {isClient && <DiMysql size={24}/>}</h2></td>
          <td><progress className="barra" max={100} value={63}></progress></td>
        </tr>
        <tr>
          <td><h2>HTML {isClient && <FaHtml5 size={24}/>}</h2></td>
          <td><progress className="barra" max={100} value={57}></progress></td>
        </tr>
        <tr>
          <td><h2>CSS {isClient && <FaCss3Alt size={24}/>}</h2></td>
          <td><progress className="barra" max={100} value={55}></progress></td>
        </tr>
        <tr>
          <td><h2>PHP {isClient && <FaPhp size={24}/>}</h2></td>
          <td><progress className="barra" max={100} value={45}></progress></td>
        </tr>
        <tr>
          <td><h2>PYTHON {isClient && <FaPython size={24}/>}</h2></td>
          <td><progress className="barra" max={100} value={34}></progress></td>
        </tr>
        <tr>
          <td><h2>C</h2></td>
          <td><progress className="barra" max={100} value={25}></progress></td>
        </tr>
      </tbody>
    </table>

   
        
      </div>
      <div className="separador"></div> 
    </div>

  );
}
