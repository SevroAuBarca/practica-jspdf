import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import * as Dayjs from 'dayjs';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
})
export class PortadaComponent implements OnInit {
  public document: any;
  nombre: string = '';
  materia: string = '';
  nControl: number | undefined = undefined;
  semestre: number | undefined = undefined;
  profesor: string = '';
  actividad: string = '';
  imgs: string[] = [
    'html',
    'css',
    'JavaScript',
    'angular',
    'react',
    'vue',
    'svelte',
    'node',
    'typescript',
  ];
  constructor() {
    this.document = new jsPDF();
  }

  ngOnInit(): void {}
  printPortada(): void {
    this.addFont();
    this.printLogos();
    this.setOpacity(0.5);
    this.printImgs();
    this.setOpacity(1);
    this.setText('tecnologico nacional de mexico', 70);
    this.setText('tecnologico de cuautla', 80);
    this.setText(`Alumno: ${this.nombre}`, 100);
    this.setText(`Materia: ${this.materia}`, 130);
    this.setText(`No.Control: ${this.nControl}`, 150);
    this.setText(`Semestre: ${this.semestre}`, 170);
    this.setText(`Profesor: ${this.profesor}`, 190);
    this.setText(`Actividad: ${this.actividad}`, 210);
    this.setText(`Fecha: ${Dayjs().format('MM/DD/YYYY')}`, 230);

    this.document.save(`${this.actividad}.pdf`);
  }

  addFont(): void {
    this.document.setFont('helvetica', 'bold');
    this.document.setFontSize(20);
  }

  setOpacity(opacity: number): void {
    this.document.saveGraphicsState();
    this.document.setGState(new this.document.GState({ opacity: opacity }));
  }

  printLogos(): void {
    this.document.addImage('../../assets/itcuautla.png', 'PNG', 10, 10, 30, 30);
    this.document.addImage('../../assets/tecnm.png', 'PNG', 170, 10, 30, 30);
  }

  printImgs(): void {
    let count = 90;
    for (let i = 0; i < this.imgs.length; i++) {
      this.document.addImage(
        `../../assets/${this.imgs[i]}.png`,
        'PNG',
        i % 2 !== 0 ? 70 : 100,
        count,
        40,
        40
      );

      count += 20;
    }
  }

  setText(text: string, coordY: number): void {
    this.document.text(
      text.toUpperCase(),
      this.document.internal.pageSize.getWidth() / 2,
      coordY,
      { align: 'center' }
    );
  }
}
