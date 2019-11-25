import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {

public itens: Array<{ titulo: string; descricao: string} > = [];

  constructor() {
  for (let i = 0; i < 5; i++) {

    let objeto = {
      titulo: 'Item ' + (i+1),
      descricao: 'Este é o Item Número ' + (i+1)
    }
      this.itens.push(objeto);
   }
}


  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
