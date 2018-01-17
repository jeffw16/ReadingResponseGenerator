$('#submit').on('click', function() {
  update();
});
function update() {
  var doc = new jsPDF({
    orientation: 'portrait',
    format: 'letter'
  });
  // var name = "Harry Potter";
  // var title = "World and Piece";
  // var author = "Leo Toystory";
  // var reaction = 'happy';
  var name = $('#name').val();
  var title = $('#title').val();
  var author = $('#author').val();
  var reaction = $('input[name=reaction]:checked').val();
  var whyreaction = $('#whyreaction').val();
  var plotsummary = $('#plotsummary').val();
  var characters = $('#characters').val();
  var assertion = $('#assertion').val();
  var evidence1 = $('#evidence1').val();
  var evidence2 = $('#evidence2').val();
  var evidence3 = $('#evidence3').val();
  var complication = $('#complication').val();
  var devices = $('#devices').val();
  var themes = $('#themes').val();
  var interest = $('#interest').val();
  var confusion = $('#confusion').val();
  var curiosity = $('#curiosity').val();

  doc.setFontSize(12);

  doc.addImage(pageOne, 'PNG', 0, 0, 216, 279);
  doc.text(125, 16, name);
  doc.text(35, 34, title);
  doc.text(120, 34, author);
  if ( reaction === 'happy' ) {
    doc.circle(73, 39, 3.5, 'S');
  } else if ( reaction === 'unamused' ) {
    doc.circle(80.5, 39, 3.5, 'S');
  } else if ( reaction === 'meh' ) {
    doc.circle(88, 39, 3.5, 'S');
  } else if ( reaction == 'wow' ) {
    doc.circle(95.5, 39, 3.5, 'S');
  } else if ( reaction == 'sad' ) {
    doc.circle(103, 39, 3.5, 'S');
  } else if ( reaction == 'angry' ) {
    doc.circle(110, 39, 3.5, 'S');
  }
  doc.text(26, 52, whyreaction);
  doc.text(26, 77, plotsummary);
  doc.text(26, 118, characters);
  doc.text(26, 154, assertion);
  doc.text(38, 170, evidence1);
  doc.text(38, 180, evidence2);
  doc.text(38, 190, evidence3);
  doc.text(26, 211, complication);
  doc.text(26, 240, "PDF generated with Reading Response Generator (http://jeffw.xyz/public/cephus-rr)");
  doc.addPage();
  doc.addImage(pageTwo, 'PNG', 0, 0, 216, 279);
  doc.text(26, 44, devices);
  doc.text(26, 74, themes);
  doc.text(26, 110, interest);
  doc.text(26, 142, confusion);
  doc.text(26, 172, curiosity);
  doc.text(26, 240, "PDF generated with Reading Response Generator (http://jeffw.xyz/public/cephus-rr)");
  setTimeout(function() {
    if (typeof doc !== 'undefined') try {
      if (navigator.msSaveBlob) {
        // var string = doc.output('datauristring');
        blobcontent = 'http://microsoft.com/thisdoesnotexists';
        console.error('Sorry, we cannot show live PDFs in Internet Explorer.');
      } else {
        blobcontent = doc.output('bloburi');
      }
      $('#preview-pane').attr('src', blobcontent);
    } catch(e) {
      alert('Error ' + e);
    }
  }, 0);
}
var h = window.innerHeight;
$(function() {
  $('#preview-pane').attr('height', h - 25);
  update();
});
