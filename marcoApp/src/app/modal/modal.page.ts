import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  // Data passed in by componentProps
  @Input() nome: string;
  @Input() bairro: string;
  @Input() idade: int;
  @Input() cidade: string;
  @Input() modalController: ModalController;

  constructor() { }

  ngOnInit() {
  }

	dismissModal() {
		this.modalController.dismiss({
		  'dismissed': true
		});
	}

}