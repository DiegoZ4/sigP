import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-cargar-prestacion',
  templateUrl: './cargar-prestacion.component.html',
  styleUrls: ['./cargar-prestacion.component.scss']
})
export class CargarPrestacionComponent implements OnInit {

  startDate = new Date();
  afiliado = '';

  keyword = 'codigo';
  codigos = [];
  piezas = [];

  posiblesAfiliados: any = [];
  selectedAfiliado = null;
  prestador: any;
  consultorios: any;
  codigo_id: any;
  pieza_id: any;
  consultorio_id: any;
  caraDental: string = '';
  requierePieza = false;
  requiereCaras = false;
  showNoAfiliados = false;
  showSubmitError = false;
  showSubmitOk = false;

  constructor(
    private loginService: LoginServiceService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {

    this.httpService.getter('externos/codigo-prestacional')
        .subscribe( (resp: any) => {
          console.log( resp );
          this.codigos = resp.data
        })

    this.httpService.getter('externos/pieza-dental')
        .subscribe( (resp: any) => {
          console.log( resp );
          this.piezas = resp.data
        })

    this.loginService.getUserInfo()
        .subscribe( (resp: any) => {
          console.log(resp);
          this.prestador = resp.Prestador;
          this.consultorios = resp.Prestador.ConsultorioPrestador;

          this.consultorios.length === 1 ? this.consultorio_id = this.consultorios[0].id : this.consultorio_id = null;
        })

  }

  selectCodigo( item:any ) {
    console.log(item)
    this.codigo_id = item.id;
    this.requierePieza = item.requierePieza
    this.requiereCaras = item.requiereCaras
  }

  selectPieza( item:any ) {
    this.pieza_id = item.id;
  }

  searchAfiliado() {
    const input = this.afiliado;
    const fechaFormat = this.formatDate();

    if ( input.length >= 5 ) {
      this.httpService.searchAfiliado(input, fechaFormat)
          .subscribe( (resp:any) => {
            console.log(resp);
            this.posiblesAfiliados = resp.data;

            if ( this.posiblesAfiliados.length === 0 ) {
              this.showNoAfiliados = true;
              setTimeout(() => {
                this.showNoAfiliados = false;
              }, 2000);
            }
          })
    }
  }

  formatDate() {
    
    const fecha = this.startDate;

    const currentMonth = fecha.getMonth() < 10 ? '0'+(fecha.getMonth()+1) : fecha.getMonth()+1;
    const currentDay = fecha.getDay() < 10 ? '0'+(fecha.getDay()+1) : fecha.getDay()+1;

    return currentDay+'/'+currentMonth+'/'+fecha.getFullYear();
  }

  seleccionarAfiliado(e:any, afiliado:any) {
    console.log( e.target.checked );
    console.log(afiliado);

    e.target.checked ? this.selectedAfiliado = afiliado.id : this.selectedAfiliado = null;
  }

  seleccionarConsultorio(e:any) {
    this.consultorio_id = e.target.value;
  }

  send() {
    const input = {
      codigoPrestacional_id: this.codigo_id,
      caraDental : this.caraDental,
      piezaDental_id: this.pieza_id,
      fechaEjecucion: this.formatDate(),
      padron_id: this.selectedAfiliado,
      consultorioPrestador_id: this.consultorio_id
    }

    console.log( input )

    this.httpService.poster('externos/prestacion', input)
        .subscribe( resp => {
          console.log( resp );
          this.showSubmitOk = true;
        },
        error => this.showSubmitError = true)
  }

  canSend() {
    if ( this.codigo_id && this.selectedAfiliado && this.consultorio_id ) {
      return false
    } else {
      return true
    }
  }

}
