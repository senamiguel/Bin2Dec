import { Component, input } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  valorbin:string = "";
  valordec:string = "";

  binMask(event: Event) {
    const inputBin = event.target as HTMLInputElement;
    let valueBin = inputBin.value;
    const re = /^[0-1]*$/;
  
    if (!re.test(valueBin)) {
      valueBin = valueBin.slice(0, -1);
    }
  
    this.valorbin = valueBin;
    if (valueBin) { 
      this.valordec = parseInt(valueBin, 2).toString(10);
    } else {
      this.valordec = ''; 
    }
  }

  decMask(event: Event) {
    const inputDec = event.target as HTMLInputElement;
    let valueDec = inputDec.value;
    const re = /^[0-9]*$/;
  
    if (!re.test(valueDec)) {
      valueDec = valueDec.slice(0, -1);
    }
    if(parseInt(valueDec) > 255){
      valueDec = "255";
    }
    this.valordec = valueDec;
    inputDec.value = valueDec;
    this.valorbin = (parseInt(this.valordec) >>> 0).toString(2)
  }
}
