import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetInfoComponent } from './planet-info/planet-info.component';
import { HttpClientModule } from "@angular/common/http";
import {MatExpansionModule} from '@angular/material/expansion'
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    PlanetInfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatExpansionModule,
    MatPaginatorModule
  ],
  exports: [PlanetInfoComponent]
})
export class PlanetsModule { }
