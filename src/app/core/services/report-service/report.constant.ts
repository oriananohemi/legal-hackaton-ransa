export const info = {
  content: [
    {
      columns: [

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
        }
      ]
    },
    {
      text: 'INFORME DE PERSONAL',
      alignment: 'center',
      fontSize: 25,
      margin: [10, 15]
    },
    {
      text: 'De: Solicitante',
      style: 'content'
    },
    {
      text: 'Para: Gestor de GH',
      style: 'content'
    },
    {
      text: 'Fecha: 20/10/2020',
      style: 'content'
    },
    {
      text: `
      Estimado(a),

      Mediante la presente, procedo a informar el incidente sucitado, según el detalle siguiente:
      
      - Personal involucrado: xxx
      - Fecha y hora de ocurrencia del evento: xxx
      - Fecha y hora de detección del evento: xxx
      - Lugar del evento: xxx
      - Descripción del evento: xxx
      
      Se ha identificado como causas probables las siguientes:
      
              - xxx
              - xxx
      
      Se emite el presente informe para los fines del caso:
      Atentamente,
      
      
      
      xxxxxxxxxxx
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
}
