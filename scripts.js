const translations = {
    en: {
      "site-title": "Rabbit Care Instructions",
      "checklist-title": "Daily Health Checklist",
      "checklist-item-1": "Check if the rabbit is eating and drinking.",
      "checklist-item-2": "Ensure the rabbit’s litter box is clean.",
      "checklist-item-3": "Inspect the rabbit’s fur for any signs of mats or parasites.",
      "checklist-item-4": "Check for any signs of distress or unusual behavior.",
      "checklist-item-5": "Ensure the rabbit has enough space to hop and stretch.",
      "contact-title": "Contact Vet",
      "contact-info": "For any health concerns, contact our vet:",
      "vet-phone": "Phone: +1 123-456-7890",
      "vet-email": "Email: vet@example.com",
      "articles-title": "Helpful Rabbit Articles",
      "article-1": "Rabbit Care Guide",
      "article-2": "PetMD - Rabbit Care",
      "article-3": "The Spruce Pets - Rabbit Care"
    },
    ru: {
      "site-title": "Инструкции по уходу за кроликами",
      "checklist-title": "Ежедневная проверка здоровья",
      "checklist-item-1": "Проверьте, ест ли кролик и пьет ли воду.",
      "checklist-item-2": "Убедитесь, что туалет кролика чист.",
      "checklist-item-3": "Осмотрите шерсть кролика на наличие запутанных участков или паразитов.",
      "checklist-item-4": "Проверьте, нет ли признаков стресса или необычного поведения.",
      "checklist-item-5": "Убедитесь, что у кролика есть достаточно места для прыжков и растяжек.",
      "contact-title": "Контакт с ветеринаром",
      "contact-info": "Если у вас есть проблемы со здоровьем, свяжитесь с нашим ветеринаром:",
      "vet-phone": "Телефон: +1 123-456-7890",
      "vet-email": "Электронная почта: vet@example.com",
      "articles-title": "Полезные статьи о кроликах",
      "article-1": "Руководство по уходу за кроликами",
      "article-2": "PetMD - Уход за кроликами",
      "article-3": "The Spruce Pets - Уход за кроликами"
    }
  };
  
  function toggleLanguage(language) {
    const translation = translations[language];
    for (const id in translation) {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = translation[id];
      }
    }
  }
  