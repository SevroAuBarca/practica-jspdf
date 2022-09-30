import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import * as Dayjs from 'dayjs';
@Component({
  selector: 'app-constancia',
  templateUrl: './constancia.component.html',
  styleUrls: ['./constancia.component.css'],
})
export class ConstanciaComponent implements OnInit {
  encargado: string = 'Lic. Roberto Marcio Cuauhtle Pluma';
  nombre: string = '';
  nControl: number | undefined;
  carrera: string = '';
  actividad: string = '';
  desempeno: string = '';
  valor: number | undefined = 1;
  creditos: number | undefined = 1;
  periodoEscolar: string = '';
  document: jsPDF = new jsPDF();
  constructor() {}

  ngOnInit(): void {}

  printConstancia() {
    console.log(this.carrera);
    const word = this.document.splitTextToSize(
      `El que suscribe ${this.encargado.toUpperCase()}, por este medio se permite hacer su conocimiento que el(la) estudiante ${this.nombre.toUpperCase()} con un numero de control ${
        this.nControl
      } de la carrera ${this.carrera.toUpperCase()} ha ACREDITADO la actividad complementaria ${this.actividad.toUpperCase()}, con un nivel de desempeño ${this.desempeno.toUpperCase()} con un valor numerico de ${
        this.valor
      } durante el periodo escolar ${this.periodoEscolar.toUpperCase()} con un valor curricular de ${
        this.creditos
      } creditos`,
      190
    );

    this.addFont('bold', 10);
    this.printLogos();
    this.setText(
      'constancia de acreditacion de actividad complementaria'.toUpperCase(),
      50
    );
    this.setText('lic.viridiana baylon saenz'.toUpperCase(), 70, false, 'left');
    this.setText(
      'jefa de depatamento de servicios escolares'.toUpperCase(),
      75,
      false,
      'left'
    );
    this.setText('presente'.toUpperCase(), 80, false, 'left');
    this.addFont('normal', 13);
    this.setText(word, 100, false, 'left');
    this.setText(
      'Se extiende la presente en la H.H Cuautla Mor. a los 29 dias de ',
      160,
      false,
      'left'
    );
    this.setText('atentamente'.toUpperCase(), 180, false, 'left');
    this.document.text('Vo.Bo.', 120, 180, { align: 'left' });
    /*     this.document.setLineWidth(0.5); */
    this.document.line(30, 210, 90, 210);
    this.setText(`${this.encargado.toLowerCase()}`, 220, false, 'left');
    this.setText(`Jefe de departamento de actividades`, 227, false, 'left');
    this.setText(`actividades extrraescolares`, 234, false, 'left');

    this.document.line(180, 210, 120, 210);
    this.document.text('Lic. Yolanda Hernandez Tamayo', 120, 220, {
      align: 'left',
    });
    this.document.text('Subdirectora de planeacion y vinculacion', 120, 227, {
      align: 'left',
    });

    this.document.save('ejemplo.pdf');
  }

  addFont(weight, font): void {
    this.document.setFont('helvetica', weight);
    this.document.setFontSize(font);
  }
  setOpacity(opacity: number): void {
    this.document.saveGraphicsState();
    this.document.setGState(this.document.GState({ opacity: opacity }));
  }

  printLogos(): void {
    this.document.addImage('../../assets/logo1.png', 'PNG', 10, 10, 50, 30);
    this.document.addImage('../../assets/tecnm.png', 'PNG', 170, 10, 30, 30);
  }
  printBackground() {
    this.document.addImage(
      '../../assets/aguila.png',
      'PNG',
      100,
      300,
      300,
      500
    );
  }
  setText(
    text: string,
    coordY: number,
    center: boolean = true,
    position: 'left' | 'center' | 'right' | 'justify' | undefined = 'center'
  ): void {
    this.document.text(
      text,
      center ? this.document.internal.pageSize.getWidth() / 2 : 30,
      coordY,
      { align: position }
    );
  }
}
