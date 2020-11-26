import { image } from './brand-image.constant';
import { map } from 'rxjs/operators';
import { element } from 'protractor';

export const info = (report) => {
  return ({
    content: [
      {
        columns: [
      {
        image: image,
        width: 150
      },
      {
        text: `Av. Jorge Chávez N° 154, /n
        piso 10, Miraflores /n
        +51(1) 33 6000`,
        style: 'header',
        color: '#009A3F'
      },
      {
        text: `www.ransa.net`,
        style: 'header',
        color: '#F39200'
      },
          ]
        },
        {
          text: 'INFORME DE PERSONAL',
          alignment: 'center',
          fontSize: 25,
          margin: [10, 20]
        },
        {
          text: `De: ${report.reportante} `,
          style: 'content'
        },
        {
          text: `Para: Gestor de GH `,
          style: 'content'
        },
        {
          text: `Fecha: ${new Date().toLocaleString()}`,
          style: 'content'
        },
        {
          text: `
          Estimado(a),

          Mediante la presente, procedo a informar el incidente sucitado, según el detalle siguiente:

          - Personal involucrado: ${report.trabajador}
          - Fecha y hora de ocurrencia del evento: xxx
          - Fecha y hora de detección del evento: ${report.fecha.toLocaleString()}
          - Lugar del evento: ${report.lugar}
          - Descripción del evento: ${report.relato}

          Se ha identificado como causas probables las siguientes:

                  ${report.causas.map((element) => `-${element}` )}

          Se emite el presente informe para los fines del caso:
          Atentamente,



          ${report.reportante}
          NOMBRE Y FIRMA DEL REPORTANTE
          `,
          style: 'content'
        }
      ],
      styles: {
        header: {
          fontSize: 10,
          bold: true,
          alignment: 'center',
        },
        content: {
          fontSize: 12,
        }
      }
  });
};