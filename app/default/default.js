import { Component, OnChanges } from '@angular/core';
import { Router }           from '@angular/router-deprecated';

import ethUtil from 'ethereumjs-util';

@Component({
  templateUrl: 'app/default/default.html',
})
export class DefaultComponent implements OnChanges {
  constructor() {
    let vm = this;
    vm.inputTextMessage = `===== BEGIN SIGNED MESSAGE =====
To the DAO and the Ethereum community,

I have carefully examined the code of The DAO and decided to participate after finding the feature where splitting is rewarded with additional ether. I have made use of this feature and have rightfully claimed 3,641,694 ether, and would like to thank the DAO for this reward. It is my understanding that the DAO code contains this feature to promote decentralization and encourage the creation of "child DAOs".

I am disappointed by those who are characterizing the use of this intentional feature as "theft". I am making use of this explicitly coded feature as per the smart contract terms and my law firm has advised me that my action is fully compliant with United States criminal and tort law. For reference please review the terms of the DAO:

"The terms of The DAO Creation are set forth in the smart contract code existing on the Ethereum blockchain at 0xbb9bc244d798123fde783fcc1c72d3bb8c189413. Nothing in this explanation of terms or in any other document or communication may modify or add any additional obligations or guarantees beyond those set forth in The DAO’s code. Any and all explanatory terms or descriptions are merely offered for educational purposes and do not supercede or modify the express terms of The DAO’s code set forth on the blockchain; to the extent you believe there to be any conflict or discrepancy between the descriptions offered here and the functionality of The DAO’s code at 0xbb9bc244d798123fde783fcc1c72d3bb8c189413, The DAO’s code controls and sets forth all terms of The DAO Creation."

A soft or hard fork would amount to seizure of my legitimate and rightful ether, claimed legally through the terms of a smart contract. Such fork would permanently and irrevocably ruin all confidence in not only Ethereum but also the in the field of smart contracts and blockchain technology. Many large Ethereum holders will dump their ether, and developers, researchers, and companies will leave Ethereum. Make no mistake: any fork, soft or hard, will further damage Ethereum and destroy its reputation and appeal.

I reserve all rights to take any and all legal action against any accomplices of illegitimate theft, freezing, or seizure of my legitimate ether, and am actively working with my law firm. Those accomplices will be receiving Cease and Desist notices in the mail shortly.

I hope this event becomes an valuable learning experience for the Ethereum community and wish you all the best of luck.

Yours truly,
"The Attacker"
===== END SIGNED MESSAGE =====`;
    vm.hash = ethUtil.bufferToHex(ethUtil.sha3(vm.inputTextMessage));

    vm.msgSignature = "0x5f91152a2382b4acfdbfe8ad3c6c8cde45f73f6147d39b072c81637fe81006061603908f692dc15a1b6ead217785cf5e07fb496708d129645f3370a28922136a32";

    vm.verifyResult = this.verifySig(vm.hash, vm.msgSignature);

  }
  verifySig(_hash, _sig) {
    let sig = ethUtil.toBuffer(_sig);

    let v = _sig[64];

    if (v < 27) {
      v += 27;
    }

    let r = sig.slice(0, 32);
    let s = sig.slice(32, 64);

    return this.getSigDetails(_hash, r, s, v);
  }
  getSigDetails(hash, r, s, v) {
      let vm = this;
      vm.vValue = v;
      try {
        let pubKey = ethUtil.ecrecover(
         ethUtil.toBuffer(hash),
         ethUtil.toBuffer(parseInt(v)),
         ethUtil.toBuffer(r),
         ethUtil.toBuffer(s)
       );
       vm.signatureError = null;
       return ethUtil.bufferToHex(ethUtil.publicToAddress(pubKey));
     }
     catch (e) {
       vm.signatureError = e;
     }
  }

  ngOnChanges(changes) {
    let vm = this;
    vm.hash = ethUtil.bufferToHex(ethUtil.sha3(vm.inputTextMessage));
    vm.verifyResult = this.verifySig(vm.hash, vm.msgSignature);
  }
}
