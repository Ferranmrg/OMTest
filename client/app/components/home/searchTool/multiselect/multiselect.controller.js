class MultiselectController {
  constructor() {
    this.selected = []
  }

  $onInit(){
    $(document).ready(() => {
         $('[id="multiselect"]').multiselect();
     });
  }

  changeSelected(){
    this.onSelect({$event : {selected : this.selected}});
  }
}

export default MultiselectController;
