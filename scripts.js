
  // Adding toggle functionality for checklist
  const checkboxes = document.querySelectorAll('.check-item');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        this.nextElementSibling.style.textDecoration = 'line-through';
      } else {
        this.nextElementSibling.style.textDecoration = 'none';
      }
    });
  });
  