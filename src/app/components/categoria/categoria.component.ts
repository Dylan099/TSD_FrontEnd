import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../servicio/registration.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: any = [];
  color = "black";
  categoriaForm: FormGroup;
  categoria: any;
  nombreCat: string;
  datosCat: string;
  idCategoria: string;
  textButton: string;

  constructor(protected registrationService: RegistrationService, public fb: FormBuilder, private route: ActivatedRoute) {
    this.textButton = "Agregar";
    this.obtenerParametroUrl();
    this.categoriaForm = this.fb.group({
      idCategoria: [''],
      nombreCategoria: ['', Validators.required],
      datosCategoria: ['', Validators.required],
      colorCategoria: ['']
    });
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  obtenerParametroUrl() {
    this.route.paramMap.subscribe(params => {
      this.idCategoria = params.get('idCategoria');
      if (this.idCategoria) {
        this.registrationService.getCategoria(this.idCategoria).subscribe(res => {
          this.color = res[0].COLOR_CATE;
          this.datosCat = res[0].DATOS_CATE;
          this.nombreCat = res[0].NOMBRE_CATE;
          this.categoriaForm.patchValue({
            idCategoria: [this.idCategoria],
            nombreCategoria: [this.nombreCat],
            datosCategoria: [this.datosCat],
            colorCategoria: [this.color]
          });
          this.textButton = "Actualizar";
        });
      }
    });
  }

  getCategorias() {
    this.registrationService.getCategorias().subscribe(res => {
      this.categorias = res;
    });
  }

  agregarCategoria() {
      this.categoriaForm.controls['colorCategoria'].setValue(this.color);
      this.categoria = this.categoriaForm.value;

      if (!this.idCategoria) {
      this.registrationService.guardarCategoria(this.categoria).subscribe(res => {
        console.log(res);
        this.getCategorias();
      });
    }
    else {
      this.registrationService.actualizarCategoria(this.categoria).subscribe(res =>{
        console.log(res);
        this.getCategorias();
      });
    }
  }

  borrarCategoria(idCategoria) {
    this.registrationService.borrarCategoria(idCategoria).subscribe(res => {
      console.log(res);
      this.getCategorias();
    })
  }

}

