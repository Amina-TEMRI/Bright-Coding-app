import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

   count=signal<number>(0);
  deblCount=computed(()=>this.count()*2);//derived signal

  constructor() { 
    effect(()=>{
      console.log('one of the signals is executed', this.count());
      localStorage.setItem('count', JSON.stringify(this.count()))
    })
  }
  increment(){
    this.count.update((value)=>value+1);

  }
    decrement(){
    this.count.update((value)=>value-1);

  }
  reset(){
    this.count.set(0);
  }
}
