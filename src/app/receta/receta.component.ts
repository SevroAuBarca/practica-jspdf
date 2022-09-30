import { Component, OnInit } from '@angular/core';
import html2PDF from 'jspdf-html2canvas';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css'],
})
export class RecetaComponent implements OnInit {
  medicina: string = '';
  tratamiento: string = '';
  listaMedicamentos: Array<any> = [];
  setListRecipes: boolean = true;
  nombre: string = '';
  constructor() {}

  ngOnInit(): void {
    /* html2PDF(document.getElementById('page'), {
      jsPDF: {
        format: 'a4',
      },
      imageType: 'image/jpeg',
      output: './pdf/generate.pdf',
    }); */
  }

  addRecipe() {
    this.listaMedicamentos = [
      ...this.listaMedicamentos,
      { medicamento: this.medicina, tratamiento: this.tratamiento },
    ];
    this.medicina = '';
    this.tratamiento = '';
    console.log(this.listaMedicamentos);
  }
  delLastRecipe() {
    if (this.listaMedicamentos.length === 0) return;
    this.listaMedicamentos.pop();
  }
  delRecipe(item: string) {
    console.log(item);
    this.listaMedicamentos.splice(
      this.listaMedicamentos.findIndex((i) => i.medicamento === item),
      1
    );
  }
  listModal(value) {
    this.setListRecipes = value === 'receta' ? false : true;
  }
}
