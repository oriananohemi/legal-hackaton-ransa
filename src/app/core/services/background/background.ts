import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TabStopPosition, TabStopType, TextRun } from "docx";

const antecedentes = [
    {
        motivo: "Ausentismo, tardanzas y abandonos",
        nombreJefe: "jefe 4",
        nombreTrabajador: "Trabajador 4"
    }
]

export class Background {
    // tslint:disable-next-line: typedef
    public create([]): Document {
        const document = new Document();

        document.addSection({
            children: [
                new Paragraph({
                    text: "REPORTE DE ANTECEDENTES (sólo para GH y jefes, según su personal)",
                    heading: HeadingLevel.TITLE,
                }),
                new Paragraph({
                    text: antecedentes.map(a => a.motivo).join(),
                    heading: HeadingLevel.HEADING_1,
                    thematicBreak: true,
                })
            ]
        })
        return
    }
}