import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
      exports: [//lo que vamos a hacer visibles
        ListadoComponent
    ],
    imports:[ //van modulos
        CommonModule
    ]
})

export class HeroesModule{}