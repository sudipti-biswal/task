function openTab(evt, tabName) {
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
  
    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.getElementById("tab1").style.display = "block";
  document.getElementsByClassName("tab-link")[0].className += " active";

  function toggleMenu() {
    var menuItems = document.querySelector('.left-bar .menu-items');
    var leftBar = document.querySelector('.left-bar');
    var tableSection = document.querySelector('.table-section');
    var rightBar = document.querySelector('.right-bar');
    var arrowImage = document.getElementById('arrowImage');
    var expandBox = document.querySelector('.expand-box');
  
    menuItems.classList.toggle('active');
    menuItems.classList.toggle('width-expanded');
    leftBar.classList.toggle('active');
    tableSection.classList.toggle('left-bar-expanded');
    rightBar.classList.toggle('right-bar-hidden');
  
    if (menuItems.classList.contains('active')) {
      leftBar.style.left = '0px';
      leftBar.style.width = 'fit-content';
      arrowImage.style.transform = 'rotate(180deg)'; // Rotates the arrow image
      expandBox.classList.add('active'); // Add the active class to expandBox
    } else {
      leftBar.style.left = '22px';
      leftBar.style.width = '';
      arrowImage.style.transform = ''; // Removes the rotation transform
      expandBox.classList.remove('active'); // Remove the active class from expandBox
    }
  }
  
  
  
  