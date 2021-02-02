function copyToClipboard(element, attr) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).attr(attr)).select();
    document.execCommand("copy");
    $temp.remove();
  }
  