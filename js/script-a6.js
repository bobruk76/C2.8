const buttons = [7,3,1]

function addProgress(evetn) {
  $("#progressbar").each(function() {
    let procent = $(evetn.target).data("progress");
    let current_progress = procent + parseInt($(this).attr("aria-valuenow"));
    $(this)
      .attr("aria-valuenow",current_progress)
      .css("width", current_progress + "%")
      .text(current_progress+"%");

    $(".btn").each(function(){
      if( $( this ).data("progress") > (100-current_progress)){
      $( this ).attr('disabled','disabled');
     }})
  });
}

function init() {
  buttons.forEach(Item => {
    const $button = $(`<button type="button" class="btn btn-dark ml-3" data-progress="${Item}">+${Item}%</button>`);
    $button.insertAfter( $(".progress") );
  });
  $(".btn").click(addProgress);
}

 $(document).ready(init);