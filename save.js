navigator.saveBlob = navigator.saveBlob || navigator.msSaveBlob || navigator.mozSaveBlob || navigator.webkitSaveBlob;
window.saveAs = window.saveAs || window.webkitSaveAs || window.mozSaveAs || window.msSaveAs;

function save(code, name) {
  var blob = new Blob([code], {
      type: 'text/plain'
  });
  if (window.saveAs) {
      window.saveAs(blob, name);
  } else if (navigator.saveBlob) {
      navigator.saveBlob(blob, name);
  } else {
      url = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", name);
      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
      link.dispatchEvent(event);
  }
}