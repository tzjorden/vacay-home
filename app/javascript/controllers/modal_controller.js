import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'


export default class extends Controller {
  
  connect() {

      document.getElementById('modal-wrapper').addEventListener('click', this.closeModal);
  }

  //closes the modal
  closeModal(event){
      const modalPanelClicked = document.getElementById('modal-panel').contains(event.target);

      if(!modalPanelClicked && event.target.id !=='modal-trigger'){
        leave(document.getElementById("modal-wrapper"));
        leave(document.getElementById("modal-backdrop"));
        leave(document.getElementById("modal-panel"));
      }
  }

    //opens the modal
  showModal(){
    enter(document.getElementById("modal-wrapper"));
    enter(document.getElementById("modal-backdrop"));
    enter(document.getElementById("modal-panel"));

  }

}