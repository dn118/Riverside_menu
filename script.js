const dishes = [
  {
    name: "Aperol Spritz",
    category: "Бар",
    price: 8.5,
    tag: "Аперитив",
    description: "Aperol, prosecco, содовая, апельсин. 250 мл.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Campari Orange",
    category: "Бар",
    price: 7.5,
    tag: "Классика",
    description: "Campari, апельсиновый сок, лед. 200 мл.",
    image:
      "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Espresso",
    category: "Кофе",
    price: 2.5,
    tag: "30 мл",
    description: "Классический крепкий кофе с плотной крема.",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Americano",
    category: "Кофе",
    price: 2.8,
    tag: "180 мл",
    description: "Эспрессо с горячей водой, легкий и чистый вкус.",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cappuccino",
    category: "Кофе",
    price: 3.5,
    tag: "180 мл",
    description: "Эспрессо и взбитое молоко с мягкой молочной пеной.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Latte",
    category: "Кофе",
    price: 3.8,
    tag: "250 мл",
    description: "Мягкий кофейный напиток на молоке.",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ice Coffee",
    category: "Кофе",
    price: 4.2,
    tag: "300 мл",
    description: "Охлажденный кофе с молоком, льдом и мягкой сладостью.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Coca-Cola",
    category: "Софты",
    price: 3.2,
    tag: "330 мл",
    description: "Классический газированный напиток.",
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Fanta",
    category: "Софты",
    price: 3.2,
    tag: "330 мл",
    description: "Апельсиновый газированный напиток.",
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sprite",
    category: "Софты",
    price: 3.2,
    tag: "330 мл",
    description: "Газированный напиток со вкусом лимона и лайма.",
    image:
      "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tonic",
    category: "Софты",
    price: 3.2,
    tag: "250 мл",
    description: "Тоник с выраженной горчинкой.",
    image:
      "https://images.unsplash.com/photo-1560508180-03f285f67ded?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Лимонад киви-яблоко",
    category: "Холодные напитки",
    price: 9.5,
    tag: "1 л",
    description: "Домашний лимонад с киви, яблоком, льдом и содовой.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Лимонад маракуя-манго",
    category: "Холодные напитки",
    price: 9.5,
    tag: "1 л",
    description: "Тропический лимонад с маракуйей, манго, льдом и содовой.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Лимонад гренадин-ягоды",
    category: "Холодные напитки",
    price: 9.5,
    tag: "1 л",
    description: "Ягодный лимонад с гренадином, льдом и содовой.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Лимонад киви-яблоко",
    category: "Холодные напитки",
    price: 4.8,
    tag: "400 мл",
    description: "Стакан домашнего лимонада с киви и яблоком.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Лимонад маракуя-манго",
    category: "Холодные напитки",
    price: 4.8,
    tag: "400 мл",
    description: "Стакан тропического лимонада с маракуйей и манго.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Лимонад гренадин-ягоды",
    category: "Холодные напитки",
    price: 4.8,
    tag: "400 мл",
    description: "Стакан ягодного лимонада с гренадином.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Детокс вода",
    category: "Холодные напитки",
    price: 3.5,
    tag: "400 мл",
    description: "Охлажденная вода с лимоном, огурцом и мятой.",
    image:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Virgin Mojito",
    category: "Безалкогольные коктейли",
    price: 6.0,
    tag: "300 мл",
    description: "Лайм, мята, сахарный сироп, содовая и лед.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tropical Cooler",
    category: "Безалкогольные коктейли",
    price: 6.5,
    tag: "300 мл",
    description: "Манго, маракуйя, апельсиновый сок и лед.",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Bumbu",
    category: "Ром",
    price: 7.5,
    tag: "40 мл",
    description: "Ром с мягкими пряными и карамельными нотами.",
    image:
      "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Diplomatico Reserva",
    category: "Ром",
    price: 8.5,
    tag: "40 мл",
    description: "Венесуэльский ром с округлым сладким вкусом.",
    image:
      "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dead Man's Fingers",
    category: "Ром",
    price: 6.8,
    tag: "40 мл",
    description: "Пряный ром с ванилью и карамелью.",
    image:
      "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Don Papa",
    category: "Ром",
    price: 8.0,
    tag: "40 мл",
    description: "Филиппинский ром с фруктовыми и ванильными нотами.",
    image:
      "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Bacardi",
    category: "Ром",
    price: 5.5,
    tag: "40 мл",
    description: "Светлый ром для классических коктейлей.",
    image:
      "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Monkey Shoulder",
    category: "Виски",
    price: 7.0,
    tag: "40 мл",
    description: "Blended malt whisky с мягким медовым вкусом.",
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chivas 12 YO",
    category: "Виски",
    price: 7.2,
    tag: "40 мл",
    description: "Шотландский виски с фруктовыми и медовыми нотами.",
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Jack Daniel's",
    category: "Виски",
    price: 6.5,
    tag: "40 мл",
    description: "Tennessee whiskey с древесными и карамельными нотами.",
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Jameson",
    category: "Виски",
    price: 6.2,
    tag: "40 мл",
    description: "Ирландский виски с мягким зерновым вкусом.",
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Macallan 12 YO",
    category: "Виски",
    price: 12.0,
    tag: "40 мл",
    description: "Односолодовый виски с дубовыми и сухофруктовыми нотами.",
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chivas 18 YO",
    category: "Виски",
    price: 13.0,
    tag: "40 мл",
    description: "Выдержанный шотландский виски с глубоким вкусом.",
    image:
      "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Grey Goose",
    category: "Водка",
    price: 7.5,
    tag: "40 мл",
    description: "Французская премиальная водка.",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Stolichnaya",
    category: "Водка",
    price: 5.0,
    tag: "40 мл",
    description: "Классическая водка с чистым сухим вкусом.",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Beluga",
    category: "Водка",
    price: 7.0,
    tag: "40 мл",
    description: "Премиальная водка с мягким послевкусием.",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Olmeca Reposado",
    category: "Текила",
    price: 6.2,
    tag: "40 мл",
    description: "Выдержанная текила с мягкими древесными нотами.",
    image:
      "https://images.unsplash.com/photo-1563223771-375783ee91ad?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Rooster Rojo Blanco",
    category: "Текила",
    price: 6.5,
    tag: "40 мл",
    description: "Светлая текила с ярким агавовым вкусом.",
    image:
      "https://images.unsplash.com/photo-1563223771-375783ee91ad?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Rooster Rojo Reposado",
    category: "Текила",
    price: 6.8,
    tag: "40 мл",
    description: "Выдержанная текила с ванильными и пряными нотами.",
    image:
      "https://images.unsplash.com/photo-1563223771-375783ee91ad?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Baileys",
    category: "Ликеры",
    price: 5.2,
    tag: "40 мл",
    description: "Сливочный ирландский ликер.",
    image:
      "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cointreau",
    category: "Ликеры",
    price: 5.8,
    tag: "40 мл",
    description: "Апельсиновый ликер с чистым цитрусовым вкусом.",
    image:
      "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Jagermeister",
    category: "Ликеры",
    price: 5.4,
    tag: "40 мл",
    description: "Травяной ликер с насыщенным пряным вкусом.",
    image:
      "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Limoncello",
    category: "Ликеры",
    price: 5.0,
    tag: "40 мл",
    description: "Лимонный итальянский ликер.",
    image:
      "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Martini Bianco",
    category: "Вермуты",
    price: 5.0,
    tag: "80 мл",
    description: "Белый сладкий вермут с ванильными нотами.",
    image:
      "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Absinthe",
    category: "Вермуты",
    price: 6.5,
    tag: "40 мл",
    description: "Крепкий травяной напиток с анисовым вкусом.",
    image:
      "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Martini Rosato",
    category: "Вермуты",
    price: 5.0,
    tag: "80 мл",
    description: "Розовый вермут с пряными и фруктовыми нотами.",
    image:
      "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Martini Extra Dry",
    category: "Вермуты",
    price: 5.0,
    tag: "80 мл",
    description: "Сухой вермут с травяным ароматом.",
    image:
      "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Monkey 47",
    category: "Джин",
    price: 9.5,
    tag: "40 мл",
    description: "Премиальный джин с насыщенной ботаникой.",
    image:
      "https://images.unsplash.com/photo-1626124165080-372e31020468?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hendrick's",
    category: "Джин",
    price: 7.4,
    tag: "40 мл",
    description: "Джин с нотами огурца, розы и специй.",
    image:
      "https://images.unsplash.com/photo-1626124165080-372e31020468?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cross Keys Black Currant",
    category: "Джин",
    price: 6.5,
    tag: "40 мл",
    description: "Джин с яркой нотой черной смородины.",
    image:
      "https://images.unsplash.com/photo-1626124165080-372e31020468?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cross Keys Sea Buckthorn",
    category: "Джин",
    price: 6.5,
    tag: "40 мл",
    description: "Джин с облепиховыми и цитрусовыми нотами.",
    image:
      "https://images.unsplash.com/photo-1626124165080-372e31020468?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cross Keys",
    category: "Джин",
    price: 6.0,
    tag: "40 мл",
    description: "Латвийский джин с чистым можжевеловым вкусом.",
    image:
      "https://images.unsplash.com/photo-1626124165080-372e31020468?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hennessy VS",
    category: "Коньяк",
    price: 7.8,
    tag: "40 мл",
    description: "Французский коньяк с фруктовыми и дубовыми нотами.",
    image:
      "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hennessy VSOP",
    category: "Коньяк",
    price: 11.0,
    tag: "40 мл",
    description: "Более выдержанный Hennessy с округлым вкусом.",
    image:
      "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hennessy XO",
    category: "Коньяк",
    price: 24.0,
    tag: "40 мл",
    description: "Премиальный коньяк с глубокими пряными нотами.",
    image:
      "https://images.unsplash.com/photo-1606765962248-7ff407b51667?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pinot Grigio",
    category: "Вино белое",
    price: 5.8,
    tag: "150 мл",
    description: "Легкое сухое белое вино с фруктовым ароматом.",
    image:
      "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Riesling",
    category: "Вино белое",
    price: 6.0,
    tag: "150 мл",
    description: "Белое вино с живой кислотностью и фруктовыми нотами.",
    image:
      "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sauvignon Blanc",
    category: "Вино белое",
    price: 6.0,
    tag: "150 мл",
    description: "Сухое белое вино с цитрусовыми нотами.",
    image:
      "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chianti Vernaiolo",
    category: "Вино красное",
    price: 6.4,
    tag: "150 мл",
    description: "Итальянское красное вино с вишневыми нотами.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Shiraz",
    category: "Вино красное",
    price: 6.2,
    tag: "150 мл",
    description: "Насыщенное красное вино с пряным характером.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pinot Noir",
    category: "Вино красное",
    price: 6.5,
    tag: "150 мл",
    description: "Легкое красное вино с ягодной ароматикой.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Primitivo di Manduria",
    category: "Вино красное",
    price: 7.0,
    tag: "150 мл",
    description: "Плотное итальянское красное вино с темными ягодами.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Prosecco",
    category: "Вино игристое",
    price: 6.5,
    tag: "150 мл",
    description: "Сухое игристое вино с свежей фруктовой кислотностью.",
    image:
      "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Corona",
    category: "Пиво",
    price: 4.8,
    tag: "330 мл",
    description: "Светлое мексиканское пиво.",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Black",
    category: "Пиво",
    price: 4.8,
    tag: "500 мл",
    description: "Темное пиво с солодовыми нотами.",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Madonas",
    category: "Пиво",
    price: 5.0,
    tag: "500 мл",
    description: "Локальное пиво с мягким освежающим вкусом.",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mojito",
    category: "Алкогольные коктейли",
    price: 8.0,
    tag: "250 мл",
    description: "Ром, лайм, мята, сахарный сироп и содовая.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Whiskey Sour",
    category: "Алкогольные коктейли",
    price: 8.5,
    tag: "160 мл",
    description: "Виски, лимонный сок, сахарный сироп и белок.",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Earl Grey",
    category: "Чай",
    price: 3.5,
    tag: "450 мл",
    description: "Черный чай с бергамотом.",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Зеленый жасмин",
    category: "Чай",
    price: 3.5,
    tag: "450 мл",
    description: "Зеленый чай с мягким цветочным ароматом.",
    image:
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "New York Cheesecake",
    category: "Десерты",
    price: 6.8,
    tag: "150 г",
    description: "Классический сливочный чизкейк с ягодным соусом.",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chocolate Fondant",
    category: "Десерты",
    price: 7.2,
    tag: "140 г",
    description: "Теплый шоколадный фондан с ванильным мороженым.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Картофель фри",
    category: "Гарнир",
    price: 3.8,
    tag: "180 г",
    description: "Хрустящий картофель фри с морской солью.",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Рис жасмин",
    category: "Гарнир",
    price: 3.5,
    tag: "160 г",
    description: "Ароматный рис на пару.",
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Spicy mayo",
    category: "Соусы",
    price: 1.2,
    tag: "40 г",
    description: "Пикантный майонезный соус для суши и закусок.",
    image:
      "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Teriyaki",
    category: "Соусы",
    price: 1.2,
    tag: "40 г",
    description: "Сладко-соленый японский соус.",
    image:
      "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Gyoza с курицей",
    category: "Gyoza",
    price: 7.5,
    tag: "6 шт",
    description: "Жареные японские пельмени с курицей и соусом понзу.",
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Gyoza с креветкой",
    category: "Gyoza",
    price: 8.2,
    tag: "6 шт",
    description: "Гедза с креветкой, имбирем и зеленым луком.",
    image:
      "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Лосось терияки",
    category: "A la carte",
    price: 16.5,
    tag: "260 г",
    description: "Филе лосося, соус терияки, рис и овощи.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Курица карри",
    category: "A la carte",
    price: 13.8,
    tag: "300 г",
    description: "Курица в сливочном карри с рисом жасмин.",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Philadelphia roll",
    category: "Sushi",
    price: 10.5,
    tag: "8 шт",
    description: "Лосось, сливочный сыр, огурец и рис.",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "California roll",
    category: "Sushi",
    price: 9.8,
    tag: "8 шт",
    description: "Краб, авокадо, огурец, тобико и рис.",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Мисо суп",
    category: "Супы",
    price: 5.2,
    tag: "300 мл",
    description: "Мисо бульон, тофу, водоросли вакаме и зеленый лук.",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Том ям",
    category: "Супы",
    price: 8.5,
    tag: "350 мл",
    description: "Острый тайский суп с креветками, грибами и кокосовым молоком.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Caesar с курицей",
    category: "Салаты",
    price: 9.5,
    tag: "230 г",
    description: "Романо, курица, пармезан, сухари и соус Caesar.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Салат с лососем",
    category: "Салаты",
    price: 11.2,
    tag: "220 г",
    description: "Микс салата, лосось, авокадо, огурец и цитрусовая заправка.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Edamame",
    category: "Закуски",
    price: 5.0,
    tag: "150 г",
    description: "Соевые бобы с морской солью.",
    image:
      "https://images.unsplash.com/photo-1631714755861-8f6f127ab9d4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Креветки темпура",
    category: "Закуски",
    price: 9.0,
    tag: "6 шт",
    description: "Креветки в легкой темпуре с соусом sweet chili.",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb36?auto=format&fit=crop&w=900&q=80",
  },
];

const menuGroups = {
  Бар: [
    "Бар",
    "Кофе",
    "Софты",
    "Холодные напитки",
    "Безалкогольные коктейли",
    "Ром",
    "Виски",
    "Водка",
    "Текила",
    "Ликеры",
    "Вермуты",
    "Джин",
    "Коньяк",
    "Вино белое",
    "Вино красное",
    "Вино игристое",
    "Пиво",
    "Алкогольные коктейли",
    "Чай",
  ],
  Кухня: [
    "Десерты",
    "Гарнир",
    "Соусы",
    "Gyoza",
    "A la carte",
    "Sushi",
    "Супы",
    "Салаты",
    "Закуски",
  ],
};

const mainCategoryList = document.querySelector("#mainCategoryList");
const categoryList = document.querySelector("#categoryList");
const menuGrid = document.querySelector("#menuGrid");
const activeCategoryTitle = document.querySelector("#activeCategoryTitle");
const activeCategoryCount = document.querySelector("#activeCategoryCount");

const mainCategories = Object.keys(menuGroups);
let activeMainCategory = mainCategories[0];
let activeCategory = menuGroups[activeMainCategory][0];

function formatPrice(value) {
  return `${value.toFixed(2)} EUR`;
}

function getItemWord(count) {
  if (count % 10 === 1 && count % 100 !== 11) return "позиция";
  if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return "позиции";
  return "позиций";
}

function renderMainCategories() {
  mainCategoryList.innerHTML = mainCategories
    .map((category) => {
      const count = menuGroups[category].length;

      return `
        <button class="main-category-button ${category === activeMainCategory ? "active" : ""}" type="button" data-main-category="${category}">
          <strong>${category}</strong>
          <span>${count}</span>
        </button>
      `;
    })
    .join("");
}

function renderCategories() {
  const categories = menuGroups[activeMainCategory];

  categoryList.innerHTML = categories
    .map((category) => {
      const count = dishes.filter((dish) => dish.category === category).length;

      return `
        <button class="category-button ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">
          <strong>${category}</strong>
          <span>${count}</span>
        </button>
      `;
    })
    .join("");
}

function renderMenu() {
  const categoryDishes = dishes.filter((dish) => dish.category === activeCategory);

  activeCategoryTitle.textContent = activeCategory;
  activeCategoryCount.textContent = `${categoryDishes.length} ${getItemWord(categoryDishes.length)}`;
  menuGrid.innerHTML = categoryDishes
    .map(
      (dish) => `
        <article class="dish-card">
          <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
          <div class="dish-body">
            <div class="dish-title">
              <h4>${dish.name}</h4>
              <span class="price">${formatPrice(dish.price)}</span>
            </div>
            <p>${dish.description}</p>
            <div class="dish-meta">
              <span class="badge">${dish.tag}</span>
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

mainCategoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-main-category]");
  if (!button) return;

  activeMainCategory = button.dataset.mainCategory;
  activeCategory = menuGroups[activeMainCategory][0];
  renderMainCategories();
  renderCategories();
  renderMenu();
});

categoryList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;
  renderCategories();
  renderMenu();
});

renderMainCategories();
renderCategories();
renderMenu();
