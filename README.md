## Теоретичне питання
Поясніть своїми словами, що таке AJAX і чим він корисний при розробці Javascript.
  - AJAX - підхід, що дає змогу взаємодіяти із сервером без перезавантаження сторінки. 

## Завдання
Отримати список фільмів серії `Зоряні війни` та вивести на екран список персонажів для кожного з них.

#### Технічні вимоги:
- Надіслати AJAX запит на адресу `https://ajax.test-danit.com/api/swapi/films` та отримати список усіх фільмів серії `Зоряні війни`
- Для кожного фільму отримати з сервера список персонажів, які були показані у цьому фільмі. Список персонажів можна отримати з властивості `characters`.
- Як тільки з сервера буде отримана інформація про фільми, відразу вивести список усіх фільмів на екрані. Необхідно вказати номер епізоду, назву фільму, а також короткий зміст (поля `episodeId`, `name`, `openingCrawl`).
- Як тільки з сервера буде отримано інформацію про персонажів будь-якого фільму, вивести цю інформацію на екран під назвою фільму.

## Примітка
Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

#### Література:
- [Використання Fetch на MDN](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)
- [Fetch](https://learn.javascript.ru/fetch)
- [CSS анімація](https://html5book.ru/css3-animation/)
- [Події DOM](https://learn.javascript.ru/introduction-browser-events)
