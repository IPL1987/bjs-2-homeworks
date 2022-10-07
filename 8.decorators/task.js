function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    let hash = args.join(','); // получаем правильный хэш
    let objectInCache = cache.find(cacheItem => cacheItem.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache) {
      console.log('Из кэша: ' + objectInCache.value);
      return 'Из кэша: ' + objectInCache.value;
    }
    let value = func.call(this, ...args);
    console.log('Вычисляем: ' + value);
    cache.push({ hash, value }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    return 'Вычисляем: ' + value;
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timeout = null;
  function wrapper(...args) {
    if (timeout) {
      wrapper.count++;
      wrapper.allCount.push(args);
      return ;
    }
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      wrapper.count++;
    }, ms);
  };
  wrapper.count = 0;
  wrapper.allCount = [];

  return wrapper;
}