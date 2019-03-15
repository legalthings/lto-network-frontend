import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeeService } from '../../../core';

@Component({
  selector: 'wallet-new-transfer-modal',
  templateUrl: './new-transfer-modal.component.html',
  styleUrls: ['./new-transfer-modal.component.scss']
})
export class NewTransferModalComponent implements OnInit {
  transferForm = new FormGroup({
    recipient: new FormControl('', [Validators.required]),
    amount: new FormControl(0, [Validators.required]),
    fee: new FormControl(1, [Validators.required]),
    attachment: new FormControl('')
  });

  constructor(private _fee: FeeService) {}

  ngOnInit() {}
}
