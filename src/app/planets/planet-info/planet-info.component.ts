import { Component } from '@angular/core';
import {PlanetInfoService} from '../planet-info.service'

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent {

  planetData:any;
  residentData:any;
  pageNo:any;
  maxPageNo:any;
  maximunPages:any
  pages:any = [];

  constructor(public planetService: PlanetInfoService){}

  ngOnInit():void{
    this.planetService.get('https://swapi.dev/api/planets/?format=json').subscribe((data)=>{
      this.planetData = data;
      console.log(this.planetData)
      this.pageNo = 1;
      this.maxPageNo = Math.ceil(this.planetData.count / this.planetData.results.length);
      // this.maximunPages = Math.min(5, this.maxPageNo);

      // this.pages.push('<<');
      // for(let i = 0; i < this.maximunPages; i++){
      //   this.pages.push(i+1);
      // }
      // this.pages.push('>>');
      console.log(this.pages)

    })
  }

  callResident(url:string){
    this.planetService.get(url).subscribe((data)=>{
      this.residentData = data
    })
  }

  paginatorController(type:any){
    // console.log(type)
    // if(type === '<<'){
    //   this.pageNo = this.pageNo - 1;
    //   this.pages.splice(-2, 1);
    //   this.pages.splice(1, 0, this.pageNo)
    // }

    // if(type === '>>'){
    //   this.pageNo = this.pageNo + 1;
    //   this.pages.splice(1, 1);
    //   let nextPage = this.pages[this.pages.length - 2] + 1
    //   this.pages.splice(this.pages.length - 1, 0, nextPage);
    // }

    if(type === 'Next'){
      this.pageNo = this.pageNo + 1;
      const nextPage = this.planetData.next;
      this.planetService.get(nextPage).subscribe((data)=>{
      this.planetData = data;
      console.log(this.planetData)
    })

    }
    else{
      this.pageNo = this.pageNo - 1;
      const previousPage = this.planetData.previous;
      this.planetService.get(previousPage).subscribe((data)=>{
      this.planetData = data;
      console.log(this.planetData)
    })

    }
  }

}
