const recetasExtra = [
  {
    id: 101,
    nombre: "Yogur griego con plátano y crema de cacahuete",
    tipo: "Desayuno",
    calorias: 380,
    proteina: 32,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Sin fuego", "Rápido", "Vegetariano"],
    ingredientes: [
      { nombre: "Yogur griego natural", cantidad: 200, unidad: "g", categoria: "Lácteos y huevos" },
      { nombre: "Plátano", cantidad: 1, unidad: "ud", categoria: "Fruta y verdura" },
      { nombre: "Crema de cacahuete", cantidad: 15, unidad: "g", categoria: "Despensa" }
    ],
    pasos: [
      "Prepara un bol y una cuchara.",
      "Pela el plátano y córtalo en rodajas.",
      "Vierte el yogur griego en el bol.",
      "Añade las rodajas de plátano.",
      "Añade la crema de cacahuete por encima.",
      "Mezcla un poco si quieres un sabor más uniforme.",
      "¡Listo! No necesita cocina."
    ],
    consejos: [
      "Si quieres más proteína, añade un poco de proteína en polvo sin sabor.",
      "Puedes cambiar el plátano por fresas o arándanos."
    ]
  },
  {
    id: 102,
    nombre: "Tostada integral con aguacate y huevo",
    tipo: "Desayuno",
    calorias: 420,
    proteina: 24,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Rápido", "Vegetariano"],
    ingredientes: [
      { nombre: "Pan integral", cantidad: 60, unidad: "g", categoria: "Despensa" },
      { nombre: "Aguacate", cantidad: 50, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Huevo", cantidad: 1, unidad: "ud", categoria: "Lácteos y huevos" }
    ],
    pasos: [
      "Tuuesta el pan integral.",
      "Mientras se tuesta, pon una sartén pequeña a fuego medio.",
      "Corta el aguacate por la mitad, retira el hueso y saca la carne con una cuchara.",
      "Machaca el aguacate con un tenedor y añade sal y limón.",
      "Casa el huevo en la sartén y cocínalo 2 o 3 minutos.",
      "Unta el aguacate sobre la tostada.",
      "Coloca el huevo encima.",
      "Añade sal, pimienta y pimentón si te gusta. ¡Listo!"
    ],
    consejos: [
      "El aguacate está maduro cuando cede al presionarlo suavemente.",
      "Si quieres la yema más hecha, cocina el huevo 1 minuto más."
    ]
  },
  {
    id: 103,
    nombre: "Batido de avena, plátano y proteína",
    tipo: "Desayuno",
    calorias: 400,
    proteina: 35,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Sin fuego", "Rápido", "Para llevar"],
    ingredientes: [
      { nombre: "Avena", cantidad: 40, unidad: "g", categoria: "Despensa" },
      { nombre: "Plátano", cantidad: 1, unidad: "ud", categoria: "Fruta y verdura" },
      { nombre: "Leche o bebida vegetal", cantidad: 250, unidad: "ml", categoria: "Lácteos y huevos" },
      { nombre: "Proteína en polvo", cantidad: 25, unidad: "g", categoria: "Despensa" }
    ],
    pasos: [
      "Prepara una batidora de vaso.",
      "Pela el plátano y córtalo en trozos.",
      "Añade la avena, el plátano, la leche y la proteína al vaso.",
      "Tapa la batidora.",
      "Bat durante 30 o 40 segundos.",
      "Comprueba que no quedan grumos de avena.",
      "Sirve en un vaso grande. ¡Listo!"
    ],
    consejos: [
      "Si queda muy espeso, añade un poco más de leche.",
      "Puedes prepararlo la noche anterior y guardarlo en la nevera."
    ]
  },
  {
    id: 104,
    nombre: "Huevos revueltos con espinacas y tostada",
    tipo: "Desayuno",
    calorias: 390,
    proteina: 28,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Rápido", "Vegetariano"],
    ingredientes: [
      { nombre: "Huevo", cantidad: 3, unidad: "ud", categoria: "Lácteos y huevos" },
      { nombre: "Espinacas", cantidad: 80, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Pan integral", cantidad: 50, unidad: "g", categoria: "Despensa" }
    ],
    pasos: [
      "Tuuesta el pan y resérvalo.",
      "Lava las espinacas y escúrrelas.",
      "Pon una sartén antiadherente a fuego medio.",
      "Añade las espinacas y cocínalas 1 o 2 minutos hasta que se marchiten.",
      "Bate los huevos en un bol con una pizca de sal.",
      "Añade los huevos a la sartén.",
      "Mueve suavemente con una espátula durante 2 o 3 minutos.",
      "Retira cuando todavía estén ligeramente cremosos.",
      "Sirve sobre la tostada. ¡Listo!"
    ],
    consejos: [
      "No cocines los huevos demasiado o quedarán secos.",
      "Puedes añadir queso fresco o champiñones."
    ]
  },
  {
    id: 105,
    nombre: "Bowl de queso cottage con fruta y nueces",
    tipo: "Desayuno",
    calorias: 350,
    proteina: 30,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Sin fuego", "Rápido", "Vegetariano"],
    ingredientes: [
      { nombre: "Queso cottage", cantidad: 200, unidad: "g", categoria: "Lácteos y huevos" },
      { nombre: "Melocotón o fruta", cantidad: 120, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Nueces", cantidad: 15, unidad: "g", categoria: "Despensa" }
    ],
    pasos: [
      "Prepara un bol y una cuchara.",
      "Vierte el queso cottage en el bol.",
      "Lava y corta la fruta en trozos.",
      "Añade la fruta encima del queso.",
      "Pica las nueces con las manos o con un cuchillo.",
      "Añade las nueces por encima.",
      "Mezcla si quieres o déjalo en capas. ¡Listo!"
    ],
    consejos: [
      "Puedes usar piña, kiwi, fresas o melón.",
      "Si quieres más saciedad, añade una cucharada de avena."
    ]
  },
  {
    id: 106,
    nombre: "Tortitas de avena y plátano",
    tipo: "Desayuno",
    calorias: 430,
    proteina: 22,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Rápido", "Vegetariano"],
    ingredientes: [
      { nombre: "Avena", cantidad: 50, unidad: "g", categoria: "Despensa" },
      { nombre: "Plátano", cantidad: 1, unidad: "ud", categoria: "Fruta y verdura" },
      { nombre: "Huevo", cantidad: 2, unidad: "ud", categoria: "Lácteos y huevos" }
    ],
    pasos: [
      "Pon una sartén antiadherente a fuego medio-bajo.",
      "Pela el plátano y machácalo con un tenedor en un bol.",
      "Añade la avena y los huevos.",
      "Mezcla hasta obtener una masa homogénea.",
      "Añade una cucharadita de aceite a la sartén.",
      "Vierte porciones pequeñas de masa.",
      "Cocina cada tortita 2 minutos por cada lado.",
      "Están listas cuando están doradas y se despegan fácilmente.",
      "Sirve con fruta o yogur. ¡Listo!"
    ],
    consejos: [
      "Si la masa queda muy líquida, añade un poco más de avena.",
      "Usa fuego medio-bajo para que no se quemen."
    ]
  },
  {
    id: 107,
    nombre: "Parfait de yogur, kiwi y granola",
    tipo: "Desayuno",
    calorias: 360,
    proteina: 26,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Sin fuego", "Rápido", "Vegetariano"],
    ingredientes: [
      { nombre: "Yogur griego natural", cantidad: 200, unidad: "g", categoria: "Lácteos y huevos" },
      { nombre: "Kiwi", cantidad: 2, unidad: "ud", categoria: "Fruta y verdura" },
      { nombre: "Granola", cantidad: 30, unidad: "g", categoria: "Despensa" }
    ],
    pasos: [
      "Prepara un vaso o bol transparente.",
      "Pela los kiwis y córtalos en rodajas.",
      "Pon una capa de yogur en el vaso.",
      "Añade una capa de kiwi.",
      "Añade una capa de granola.",
      "Repite las capas si el vaso es grande.",
      "Termina con granola por encima. ¡Listo!"
    ],
    consejos: [
      "Prepáralo justo antes de comer para que la granola quede crujiente.",
      "Puedes usar fresas, mango o frutos rojos."
    ]
  },
  {
    id: 108,
    nombre: "Tostada integral con queso fresco y tomate",
    tipo: "Desayuno",
    calorias: 320,
    proteina: 20,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Sin fuego", "Rápido", "Vegetariano"],
    ingredientes: [
      { nombre: "Pan integral", cantidad: 60, unidad: "g", categoria: "Despensa" },
      { nombre: "Queso fresco batido", cantidad: 100, unidad: "g", categoria: "Lácteos y huevos" },
      { nombre: "Tomate", cantidad: 1, unidad: "ud", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Tuuesta el pan integral.",
      "Lava el tomate y córtalo en rodajas finas.",
      "Unta el queso fresco sobre la tostada.",
      "Coloca las rodajas de tomate encima.",
      "Añade sal, pimienta y un chorrito de aceite de oliva.",
      "¡Listo! No necesita cocina."
    ],
    consejos: [
      "Añade orégano o albahaca para más sabor.",
      "Puedes completarlo con un huevo duro para más proteína."
    ]
  },
  {
    id: 109,
    nombre: "Smoothie bowl de frutos rojos",
    tipo: "Desayuno",
    calorias: 380,
    proteina: 28,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Sin fuego", "Rápido", "Vegetariano"],
    ingredientes: [
      { nombre: "Frutos rojos congelados", cantidad: 150, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Yogur griego natural", cantidad: 150, unidad: "g", categoria: "Lácteos y huevos" },
      { nombre: "Avena", cantidad: 30, unidad: "g", categoria: "Despensa" }
    ],
    pasos: [
      "Saca los frutos rojos del congelador.",
      "Añade los frutos rojos, el yogur y la avena a la batidora.",
      "Bat durante 30 segundos.",
      "Si queda muy espeso, añade un poco de leche.",
      "Vierte el batido en un bol.",
      "Añade fruta, nueces o granola por encima.",
      "¡Listo! Cómelo con cuchara."
    ],
    consejos: [
      "Los frutos rojos congelados hacen la textura más cremosa.",
      "Puedes añadir proteína en polvo para llegar a tus objetivos."
    ]
  },
  {
    id: 110,
    nombre: "Wrap de huevo y espinacas",
    tipo: "Desayuno",
    calorias: 400,
    proteina: 26,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Rápido", "Vegetariano", "Para llevar"],
    ingredientes: [
      { nombre: "Tortilla integral", cantidad: 1, unidad: "ud", categoria: "Despensa" },
      { nombre: "Huevo", cantidad: 2, unidad: "ud", categoria: "Lácteos y huevos" },
      { nombre: "Espinacas", cantidad: 60, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon una sartén a fuego medio.",
      "Cocina las espinacas 1 minuto hasta que se marchiten.",
      "Bate los huevos en un bol.",
      "Añade los huevos a la sartén y cuécelos 2 o 3 minutos.",
      "Calienta la tortilla en la sartén 20 segundos por cada lado.",
      "Coloca los huevos y las espinacas sobre la tortilla.",
      "Enrolla el wrap apretando un poco.",
      "Córtalo por la mitad si quieres. ¡Listo!"
    ],
    consejos: [
      "Añade queso fresco o pavo para más proteína.",
      "Envuélvelo en papel de aluminio si te lo llevas."
    ]
  },
  {
    id: 111,
    nombre: "Pollo al curry con arroz",
    tipo: "Comida",
    calorias: 620,
    proteina: 48,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pollo", "Batch cooking", "Con arroz"],
    ingredientes: [
      { nombre: "Pechuga de pollo", cantidad: 180, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Arroz basmati", cantidad: 70, unidad: "g", categoria: "Despensa" },
      { nombre: "Leche de coco light", cantidad: 100, unidad: "ml", categoria: "Despensa" },
      { nombre: "Curry en polvo", cantidad: 5, unidad: "g", categoria: "Despensa" }
    ],
    pasos: [
      "Prepara una olla para el arroz y una sartén grande.",
      "Pon agua a hervir y cocina el arroz según el paquete.",
      "Corta el pollo en dados pequeños.",
      "Pon la sartén a fuego medio-alto con una cucharadita de aceite.",
      "Añade el pollo y cocina 5 o 6 minutos.",
      "El pollo está listo cuando no queda rosa en el centro.",
      "Añade el curry y remueve 30 segundos.",
      "Añade la leche de coco.",
      "Cocina 3 o 4 minutos a fuego medio hasta que la salsa espese un poco.",
      "Escurre el arroz y sírvelo con el pollo al curry. ¡Listo!"
    ],
    consejos: [
      "Si quieres más verdura, añade pimiento o guisantes.",
      "El curry en polvo no pica mucho; añade cayena si te gusta el picante."
    ]
  },
  {
    id: 112,
    nombre: "Pavo salteado con verduras y quinoa",
    tipo: "Comida",
    calorias: 580,
    proteina: 45,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pavo", "Batch cooking", "Con quinoa"],
    ingredientes: [
      { nombre: "Pavo en tiras", cantidad: 160, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Quinoa", cantidad: 70, unidad: "g", categoria: "Despensa" },
      { nombre: "Verduras para saltear", cantidad: 200, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon agua a hervir y cocina la quinoa según el paquete.",
      "Mientras se cuece, corta las verduras en trozos pequeños.",
      "Pon una sartén grande a fuego medio-alto con una cucharadita de aceite.",
      "Añade el pavo y cocina 4 o 5 minutos.",
      "El pavo está listo cuando no queda rosa.",
      "Añade las verduras.",
      "Saltea 5 o 6 minutos, moviendo con una espátula.",
      "Escurre la quinoa.",
      "Mezcla la quinoa con el pavo y las verduras.",
      "Añade salsa de soja o especias al gusto. ¡Listo!"
    ],
    consejos: [
      "Corta todo antes de encender el fuego.",
      "Puedes usar calabacín, pimiento, brócoli o judías verdes."
    ]
  },
  {
    id: 113,
    nombre: "Tacos de pollo con tortilla integral",
    tipo: "Comida",
    calorias: 560,
    proteina: 42,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pollo", "Rápido", "Con tortilla"],
    ingredientes: [
      { nombre: "Pechuga de pollo", cantidad: 150, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Tortillas integrales", cantidad: 2, unidad: "ud", categoria: "Despensa" },
      { nombre: "Tomate", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Lechuga", cantidad: 50, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Corta el pollo en tiras pequeñas.",
      "Pon una sartén a fuego medio-alto con una cucharadita de aceite.",
      "Añade el pollo y cocina 4 o 5 minutos.",
      "Añade especias mexicanas, pimentón o sal al gusto.",
      "Lava y corta el tomate y la lechuga.",
      "Calienta las tortillas 20 segundos por cada lado.",
      "Coloca el pollo, el tomate y la lechuga sobre cada tortilla.",
      "Enrolla los tacos.",
      "Añade yogur natural o salsa si te gusta. ¡Listo!"
    ],
    consejos: [
      "No llenes demasiado las tortillas o será difícil enrollarlas.",
      "Puedes preparar el pollo el día anterior."
    ]
  },
  {
    id: 114,
    nombre: "Lentejas estofadas con verduras",
    tipo: "Comida",
    calorias: 540,
    proteina: 32,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Vegetariano", "Legumbres", "Batch cooking"],
    ingredientes: [
      { nombre: "Lentejas cocidas", cantidad: 250, unidad: "g", categoria: "Despensa" },
      { nombre: "Zanahoria", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Tomate", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Cebolla", cantidad: 50, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pela y corta la cebolla, la zanahoria y el tomate.",
      "Pon una olla a fuego medio con una cucharadita de aceite.",
      "Añade la cebolla y cocina 3 minutos.",
      "Añade la zanahoria y cocina 3 minutos más.",
      "Añade el tomate y remueve.",
      "Añade las lentejas escurridas.",
      "Añade un poco de agua o caldo si queda muy espeso.",
      "Cocina 10 minutos a fuego medio-bajo.",
      "Prueba y añade sal, pimienta o pimentón. ¡Listo!"
    ],
    consejos: [
      "Este plato mejora al día siguiente, ideal para batch cooking.",
      "Añade espinacas al final para más verdura."
    ]
  },
  {
    id: 115,
    nombre: "Garbanzos con espinacas y huevo",
    tipo: "Comida",
    calorias: 520,
    proteina: 30,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Vegetariano", "Legumbres", "Rápido"],
    ingredientes: [
      { nombre: "Garbanzos cocidos", cantidad: 200, unidad: "g", categoria: "Despensa" },
      { nombre: "Espinacas", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Huevo", cantidad: 2, unidad: "ud", categoria: "Lácteos y huevos" }
    ],
    pasos: [
      "Pon una sartén a fuego medio con una cucharadita de aceite.",
      "Añade los garbanzos escurridos.",
      "Cocina 4 o 5 minutos, removiendo de vez en cuando.",
      "Añade las espinacas y cocina hasta que se marchiten.",
      "Añade pimentón, comino o sal al gusto.",
      "Haz un hueco en el centro y casa los huevos.",
      "Tapa la sartén y cocina 3 o 4 minutos.",
      "Los huevos están listos cuando la clara está blanca.",
      "Sirve caliente. ¡Listo!"
    ],
    consejos: [
      "Si no tienes tapa, usa un plato grande encima de la sartén.",
      "Añade tomate triturado para hacer una versión más jugosa."
    ]
  },
  {
    id: 116,
    nombre: "Arroz frito con pollo y huevo",
    tipo: "Comida",
    calorias: 600,
    proteina: 42,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pollo", "Con arroz", "Aprovechamiento"],
    ingredientes: [
      { nombre: "Arroz cocido", cantidad: 200, unidad: "g", categoria: "Despensa" },
      { nombre: "Pechuga de pollo", cantidad: 150, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Huevo", cantidad: 1, unidad: "ud", categoria: "Lácteos y huevos" },
      { nombre: "Guisantes", cantidad: 80, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Corta el pollo en dados pequeños.",
      "Pon una sartén grande a fuego medio-alto con una cucharadita de aceite.",
      "Añade el pollo y cocina 5 minutos.",
      "Añade los guisantes y cocina 2 minutos.",
      "Empuja el pollo hacia un lado y casa el huevo en el otro.",
      "Revuelve el huevo 1 minuto.",
      "Añade el arroz cocido.",
      "Mezcla todo durante 2 o 3 minutos.",
      "Añade salsa de soja, sal o pimienta. ¡Listo!"
    ],
    consejos: [
      "El arroz del día anterior funciona muy bien.",
      "Añade zanahoria o pimiento para más color y verdura."
    ]
  },
  {
    id: 117,
    nombre: "Bowl de salmón, quinoa y aguacate",
    tipo: "Comida",
    calorias: 640,
    proteina: 40,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pescado", "Con quinoa", "Batch cooking"],
    ingredientes: [
      { nombre: "Salmón", cantidad: 150, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Quinoa", cantidad: 70, unidad: "g", categoria: "Despensa" },
      { nombre: "Aguacate", cantidad: 50, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Pepino", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon agua a hervir y cocina la quinoa según el paquete.",
      "Corta el pepino y el aguacate.",
      "Pon una sartén a fuego medio con una cucharadita de aceite.",
      "Coloca el salmón con la piel hacia abajo.",
      "Cocina 4 minutos por cada lado.",
      "El salmón está listo cuando se separa fácilmente con un tenedor.",
      "Escurre la quinoa.",
      "Coloca la quinoa en un bol.",
      "Añade el salmón, el aguacate y el pepino.",
      "Añade limón, sal y pimienta. ¡Listo!"
    ],
    consejos: [
      "No muevas mucho el salmón mientras se cocina.",
      "Puedes comerlo frío al día siguiente."
    ]
  },
  {
    id: 118,
    nombre: "Pasta con pavo y verduras",
    tipo: "Comida",
    calorias: 580,
    proteina: 40,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pavo", "Con pasta", "Batch cooking"],
    ingredientes: [
      { nombre: "Pasta integral", cantidad: 80, unidad: "g", categoria: "Despensa" },
      { nombre: "Pavo picado", cantidad: 150, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Tomate triturado", cantidad: 150, unidad: "g", categoria: "Despensa" },
      { nombre: "Calabacín", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon agua a hervir y cocina la pasta según el paquete.",
      "Corta el calabacín en dados pequeños.",
      "Pon una sartén a fuego medio-alto.",
      "Añade el pavo y cocina 5 o 6 minutos.",
      "Añade el calabacín y cocina 3 minutos.",
      "Añade el tomate triturado.",
      "Cocina 5 minutos a fuego medio.",
      "Escurre la pasta.",
      "Mezcla la pasta con la salsa.",
      "Añade orégano o albahaca. ¡Listo!"
    ],
    consejos: [
      "Guarda un poco del agua de la pasta para ajustar la salsa.",
      "Puedes hacer doble cantidad y guardar raciones en la nevera."
    ]
  },
  {
    id: 119,
    nombre: "Pollo al horno con boniato y brócoli",
    tipo: "Comida",
    calorias: 600,
    proteina: 45,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pollo", "Al horno", "Batch cooking"],
    ingredientes: [
      { nombre: "Pechuga de pollo", cantidad: 180, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Boniato", cantidad: 200, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Brócoli", cantidad: 150, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Precalienta el horno a 200 grados durante 10 minutos.",
      "Lava el boniato y córtalo en dados.",
      "Coloca el boniato en una bandeja con aceite, sal y pimienta.",
      "Hornea el boniato 15 minutos.",
      "Corta el brócoli en ramilletes.",
      "Saca la bandeja y añade el brócoli.",
      "Coloca el pollo en el centro.",
      "Añade aceite, sal y especias.",
      "Hornea 18 o 20 minutos.",
      "El pollo está listo cuando no queda rosa en el centro. ¡Listo!"
    ],
    consejos: [
      "Corta el boniato pequeño para que se haga antes.",
      "Puedes añadir pimentón y ajo en polvo."
    ]
  },
  {
    id: 120,
    nombre: "Ternera con pimientos y arroz",
    tipo: "Comida",
    calorias: 620,
    proteina: 42,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Ternera", "Con arroz", "Rápido"],
    ingredientes: [
      { nombre: "Ternera en tiras", cantidad: 150, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Arroz basmati", cantidad: 70, unidad: "g", categoria: "Despensa" },
      { nombre: "Pimientos", cantidad: 150, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon agua a hervir y cocina el arroz según el paquete.",
      "Corta los pimientos en tiras.",
      "Pon una sartén a fuego medio-alto con una cucharadita de aceite.",
      "Añade la ternera y cocina 3 o 4 minutos.",
      "Retira la ternera y resérvala.",
      "Añade los pimientos y cocina 4 o 5 minutos.",
      "Vuelve a añadir la ternera.",
      "Mezcla 1 minuto.",
      "Escurre el arroz y sírvelo con la ternera y los pimientos. ¡Listo!"
    ],
    consejos: [
      "No cocines demasiado la ternera o quedará dura.",
      "Añade salsa de soja o especias al gusto."
    ]
  },
  {
    id: 121,
    nombre: "Ensalada de quinoa, pollo y aguacate",
    tipo: "Comida",
    calorias: 560,
    proteina: 42,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pollo", "Ensalada", "Batch cooking"],
    ingredientes: [
      { nombre: "Quinoa", cantidad: 70, unidad: "g", categoria: "Despensa" },
      { nombre: "Pechuga de pollo", cantidad: 150, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Aguacate", cantidad: 50, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Tomate cherry", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon agua a hervir y cocina la quinoa según el paquete.",
      "Corta el pollo en tiras.",
      "Pon una sartén a fuego medio-alto.",
      "Cocina el pollo 4 o 5 minutos por cada lado.",
      "Lava los tomates cherry y córtalos por la mitad.",
      "Corta el aguacate en dados.",
      "Escurre la quinoa y déjala templar.",
      "Mezcla la quinoa, el pollo, el tomate y el aguacate.",
      "Añade aceite de oliva, limón, sal y pimienta. ¡Listo!"
    ],
    consejos: [
      "Puedes comerla fría o templada.",
      "Prepara la quinoa y el pollo por adelantado."
    ]
  },
  {
    id: 122,
    nombre: "Crema de calabaza con pollo",
    tipo: "Comida",
    calorias: 480,
    proteina: 38,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pollo", "Sopas y cremas", "Batch cooking"],
    ingredientes: [
      { nombre: "Calabaza", cantidad: 300, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Pechuga de pollo", cantidad: 150, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Cebolla", cantidad: 50, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pela y corta la calabaza y la cebolla.",
      "Pon una olla a fuego medio con una cucharadita de aceite.",
      "Añade la cebolla y cocina 3 minutos.",
      "Añade la calabaza y cubre con agua.",
      "Cocina 15 o 20 minutos hasta que esté tierna.",
      "Mientras tanto, cocina el pollo en una sartén 5 o 6 minutos por cada lado.",
      "Tritura la calabaza con una batidora.",
      "Comprueba que la crema esté caliente.",
      "Desmenuza el pollo y añádelo a la crema.",
      "Añade sal, pimienta y pimentón. ¡Listo!"
    ],
    consejos: [
      "Si la crema queda muy espesa, añade agua o caldo.",
      "Puedes hacer una olla grande y guardar varias raciones."
    ]
  },
  {
    id: 123,
    nombre: "Wok de gambas con verduras y arroz",
    tipo: "Comida",
    calorias: 540,
    proteina: 38,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pescado", "Con arroz", "Rápido"],
    ingredientes: [
      { nombre: "Gambas peladas", cantidad: 150, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Arroz basmati", cantidad: 70, unidad: "g", categoria: "Despensa" },
      { nombre: "Verduras para wok", cantidad: 200, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon agua a hervir y cocina el arroz según el paquete.",
      "Pon una sartén grande a fuego medio-alto.",
      "Añade las verduras y saltea 4 o 5 minutos.",
      "Añade las gambas.",
      "Cocina 2 o 3 minutos, moviendo constantemente.",
      "Las gambas están listas cuando se vuelven rosadas y se enroscan.",
      "Escurre el arroz.",
      "Añade el arroz a la sartén.",
      "Mezcla todo 1 minuto.",
      "Añade salsa de soja, ajo o jengibre. ¡Listo!"
    ],
    consejos: [
      "Las gambas se hacen muy rápido: no las cocines demasiado.",
      "Si usas gambas congeladas, descongélalas antes."
    ]
  },
  {
    id: 124,
    nombre: "Albóndigas de pavo con arroz",
    tipo: "Comida",
    calorias: 600,
    proteina: 45,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pavo", "Batch cooking", "Con arroz"],
    ingredientes: [
      { nombre: "Pavo picado", cantidad: 180, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Arroz basmati", cantidad: 70, unidad: "g", categoria: "Despensa" },
      { nombre: "Tomate triturado", cantidad: 150, unidad: "g", categoria: "Despensa" }
    ],
    pasos: [
      "Pon agua a hervir y cocina el arroz según el paquete.",
      "Mezcla el pavo picado con sal, pimienta y especias.",
      "Forma bolitas pequeñas con las manos.",
      "Pon una sartén a fuego medio con una cucharadita de aceite.",
      "Dora las albóndigas 4 o 5 minutos, girándolas.",
      "Añade el tomate triturado.",
      "Tapa y cocina 8 o 10 minutos a fuego medio-bajo.",
      "Comprueba que una albóndiga no queda rosa en el centro.",
      "Escurre el arroz y sírvelo con las albóndigas. ¡Listo!"
    ],
    consejos: [
      "Si la masa se pega a las manos, mojatelas con agua.",
      "Puedes añadir avena o huevo para ligar mejor la masa."
    ]
  },
  {
    id: 125,
    nombre: "Revuelto de tofu con verduras y arroz",
    tipo: "Comida",
    calorias: 520,
    proteina: 32,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Vegetariano", "Vegano", "Con arroz"],
    ingredientes: [
      { nombre: "Tofu firme", cantidad: 200, unidad: "g", categoria: "Despensa" },
      { nombre: "Arroz basmati", cantidad: 70, unidad: "g", categoria: "Despensa" },
      { nombre: "Pimiento", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Espinacas", cantidad: 60, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon agua a hervir y cocina el arroz según el paquete.",
      "Escurre el tofu y desmenúzalo con un tenedor.",
      "Pon una sartén a fuego medio-alto con una cucharadita de aceite.",
      "Añade el pimiento y cocina 3 minutos.",
      "Añade el tofu y cocina 4 o 5 minutos.",
      "Añade cúrcuma, sal y pimienta.",
      "Añade las espinacas y cocina 1 minuto.",
      "Escurre el arroz.",
      "Mezcla el arroz con el revuelto. ¡Listo!"
    ],
    consejos: [
      "La cúrcuma da color amarillo, como el huevo.",
      "Añade salsa de soja para más sabor."
    ]
  },
  {
    id: 126,
    nombre: "Tortilla de claras con espinacas y ensalada",
    tipo: "Cena",
    calorias: 380,
    proteina: 32,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Vegetariano", "Rápido", "Bajo en calorías"],
    ingredientes: [
      { nombre: "Claras de huevo", cantidad: 200, unidad: "ml", categoria: "Lácteos y huevos" },
      { nombre: "Espinacas", cantidad: 80, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Lechuga", cantidad: 80, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Lava las espinacas y la lechuga.",
      "Pon una sartén antiadherente a fuego medio.",
      "Añade las espinacas y cocina 1 minuto.",
      "Añade las claras.",
      "Cocina 3 o 4 minutos sin mover demasiado.",
      "Cuando la parte de abajo esté cuajada, dobla la tortilla con una espátula.",
      "Sirve con la lechuga al lado.",
      "Añade sal, pimienta y vinagreta ligera. ¡Listo!"
    ],
    consejos: [
      "Si usas claras líquidas, sigue las indicaciones del envase.",
      "Añade champiñones o pimiento para más volumen."
    ]
  },
  {
    id: 127,
    nombre: "Sopa de verduras con pollo desmenuzado",
    tipo: "Cena",
    calorias: 420,
    proteina: 35,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pollo", "Sopas y cremas", "Batch cooking"],
    ingredientes: [
      { nombre: "Pechuga de pollo", cantidad: 150, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Verduras para sopa", cantidad: 250, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Caldo de pollo", cantidad: 500, unidad: "ml", categoria: "Despensa" }
    ],
    pasos: [
      "Corta las verduras en trozos pequeños.",
      "Pon una olla a fuego medio con una cucharadita de aceite.",
      "Añade las verduras y cocina 3 minutos.",
      "Añade el caldo.",
      "Cocina 12 o 15 minutos hasta que las verduras estén tiernas.",
      "Mientras tanto, cocina el pollo en una sartén 5 o 6 minutos por cada lado.",
      "Desmenuza el pollo con dos tenedores.",
      "Añade el pollo a la sopa.",
      "Cocina 2 minutos más. ¡Listo!"
    ],
    consejos: [
      "Puedes añadir fideos o arroz si quieres más saciedad.",
      "Esta sopa se conserva muy bien 3 días en la nevera."
    ]
  },
  {
    id: 128,
    nombre: "Ensalada de garbanzos, atún y verduras",
    tipo: "Cena",
    calorias: 450,
    proteina: 32,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Sin fuego", "Pescado", "Legumbres"],
    ingredientes: [
      { nombre: "Garbanzos cocidos", cantidad: 200, unidad: "g", categoria: "Despensa" },
      { nombre: "Atún al natural", cantidad: 120, unidad: "g", categoria: "Despensa" },
      { nombre: "Tomate", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Pepino", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Escurre los garbanzos y el atún.",
      "Lava el tomate y el pepino.",
      "Corta el tomate y el pepino en dados.",
      "Pon todo en un bol grande.",
      "Añade el atún escurrido.",
      "Añade aceite de oliva, limón, sal y pimienta.",
      "Mezcla suavemente.",
      "¡Listo! No necesita cocina."
    ],
    consejos: [
      "Añade cebolla o pimiento si te gustan.",
      "Prepáralo por la mañana y llévalo al trabajo."
    ]
  },
  {
    id: 129,
    nombre: "Pechuga de pavo a la plancha con ensalada",
    tipo: "Cena",
    calorias: 420,
    proteina: 40,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pavo", "Rápido", "Ensalada"],
    ingredientes: [
      { nombre: "Pechuga de pavo", cantidad: 160, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Lechuga", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Tomate", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon una sartén a fuego medio-alto con una cucharadita de aceite.",
      "Sazona el pavo con sal, pimienta y especias.",
      "Cocina el pavo 4 o 5 minutos por cada lado.",
      "El pavo está listo cuando no queda rosa en el centro.",
      "Lava y corta la lechuga y el tomate.",
      "Coloca la ensalada en un plato.",
      "Añade el pavo encima o al lado.",
      "Añade aceite de oliva y limón. ¡Listo!"
    ],
    consejos: [
      "No cocines el pavo demasiado para que no quede seco.",
      "Puedes añadir queso fresco o aguacate."
    ]
  },
  {
    id: 130,
    nombre: "Revuelto de champiñones y huevo con tostada",
    tipo: "Cena",
    calorias: 420,
    proteina: 26,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Vegetariano", "Rápido"],
    ingredientes: [
      { nombre: "Huevo", cantidad: 3, unidad: "ud", categoria: "Lácteos y huevos" },
      { nombre: "Champiñones", cantidad: 150, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Pan integral", cantidad: 50, unidad: "g", categoria: "Despensa" }
    ],
    pasos: [
      "Tuuesta el pan.",
      "Limpia los champiñones con un papel de cocina.",
      "Corta los champiñones en láminas.",
      "Pon una sartén a fuego medio-alto.",
      "Añade los champiñones y cocina 4 o 5 minutos.",
      "Bate los huevos en un bol.",
      "Añade los huevos a la sartén.",
      "Mueve suavemente 2 o 3 minutos.",
      "Sirve sobre la tostada. ¡Listo!"
    ],
    consejos: [
      "No laves los champiñones bajo el grifo: se llenan de agua.",
      "Añade ajo o perejil para más sabor."
    ]
  },
  {
    id: 131,
    nombre: "Pescado blanco al vapor con verduras",
    tipo: "Cena",
    calorias: 420,
    proteina: 38,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pescado", "Bajo en calorías", "Rápido"],
    ingredientes: [
      { nombre: "Merluza o pescado blanco", cantidad: 180, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Verduras variadas", cantidad: 200, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Patata", cantidad: 150, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon una olla con agua y un vaporizador encima.",
      "Lleva el agua a hervir.",
      "Corta las verduras y la patata en trozos pequeños.",
      "Coloca la patata y las verduras en el vaporizador.",
      "Cocina al vapor 8 minutos.",
      "Añade el pescado encima.",
      "Cocina 6 u 8 minutos más.",
      "El pescado está listo cuando se separa fácilmente con un tenedor.",
      "Añade limón, sal y pimienta. ¡Listo!"
    ],
    consejos: [
      "No pongas demasiado agua: no debe tocar la comida.",
      "El limón realza mucho el pescado blanco."
    ]
  },
  {
    id: 132,
    nombre: "Pollo desmenuzado con boniato y yogur",
    tipo: "Cena",
    calorias: 500,
    proteina: 42,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pollo", "Batch cooking", "Al horno"],
    ingredientes: [
      { nombre: "Pechuga de pollo", cantidad: 160, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Boniato", cantidad: 200, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Yogur griego natural", cantidad: 80, unidad: "g", categoria: "Lácteos y huevos" }
    ],
    pasos: [
      "Precalienta el horno a 200 grados durante 10 minutos.",
      "Lava el boniato y córtalo en dados.",
      "Coloca el boniato en una bandeja con aceite y sal.",
      "Hornea 15 minutos.",
      "Añade el pollo a la bandeja.",
      "Hornea 18 o 20 minutos más.",
      "Comprueba que el pollo no queda rosa en el centro.",
      "Desmenúzalo con dos tenedores.",
      "Sirve con el boniato y el yogur griego. ¡Listo!"
    ],
    consejos: [
      "El yogur griego sustituye muy bien a salsas más pesadas.",
      "Añade pimentón o comino al pollo."
    ]
  },
  {
    id: 133,
    nombre: "Tofu salteado con brócoli y salsa de soja",
    tipo: "Cena",
    calorias: 450,
    proteina: 30,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Vegetariano", "Vegano", "Rápido"],
    ingredientes: [
      { nombre: "Tofu firme", cantidad: 200, unidad: "g", categoria: "Despensa" },
      { nombre: "Brócoli", cantidad: 200, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Salsa de soja", cantidad: 15, unidad: "ml", categoria: "Despensa" }
    ],
    pasos: [
      "Escurre el tofu y córtalo en dados.",
      "Corta el brócoli en ramilletes.",
      "Pon una sartén a fuego medio-alto con una cucharadita de aceite.",
      "Añade el tofu y cocina 5 o 6 minutos hasta que esté dorado.",
      "Retira el tofu y resérvalo.",
      "Añade el brócoli con un poco de agua.",
      "Tapa y cocina 4 o 5 minutos.",
      "Vuelve a añadir el tofu.",
      "Añade la salsa de soja y mezcla 1 minuto. ¡Listo!"
    ],
    consejos: [
      "Escurre muy bien el tofu para que se dore mejor.",
      "Añade sésamo o jengibre si tienes."
    ]
  },
  {
    id: 134,
    nombre: "Crema de calabacín con huevo duro",
    tipo: "Cena",
    calorias: 380,
    proteina: 22,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Vegetariano", "Sopas y cremas", "Batch cooking"],
    ingredientes: [
      { nombre: "Calabacín", cantidad: 400, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Cebolla", cantidad: 50, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Huevo", cantidad: 2, unidad: "ud", categoria: "Lácteos y huevos" }
    ],
    pasos: [
      "Pon un cazo con agua a hervir.",
      "Cocina los huevos 10 minutos.",
      "Mientras tanto, corta el calabacín y la cebolla.",
      "Pon una olla a fuego medio con una cucharadita de aceite.",
      "Añade la cebolla y cocina 3 minutos.",
      "Añade el calabacín y cubre con agua.",
      "Cocina 12 o 15 minutos.",
      "Tritura con una batidora.",
      "Pela los huevos y córtalos.",
      "Sirve la crema con el huevo encima. ¡Listo!"
    ],
    consejos: [
      "Si la crema queda muy líquida, cocina unos minutos más sin tapa.",
      "Añade queso fresco para más proteína."
    ]
  },
  {
    id: 135,
    nombre: "Wrap integral de pavo y verduras",
    tipo: "Cena",
    calorias: 430,
    proteina: 30,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pavo", "Sin fuego", "Para llevar"],
    ingredientes: [
      { nombre: "Tortilla integral", cantidad: 1, unidad: "ud", categoria: "Despensa" },
      { nombre: "Pechuga de pavo", cantidad: 100, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Lechuga", cantidad: 50, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Tomate", cantidad: 80, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Lava la lechuga y el tomate.",
      "Corta el tomate en rodajas.",
      "Calienta la tortilla 20 segundos por cada lado.",
      "Unta yogur natural o queso fresco sobre la tortilla.",
      "Añade la lechuga y el tomate.",
      "Añade el pavo.",
      "Enrolla el wrap apretando un poco.",
      "Córtalo por la mitad. ¡Listo!"
    ],
    consejos: [
      "No lo llenes demasiado para que no se rompa.",
      "Envuélvelo en papel para llevarlo cómodamente."
    ]
  },
  {
    id: 136,
    nombre: "Ensalada templada de lentejas y salmón",
    tipo: "Cena",
    calorias: 520,
    proteina: 38,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pescado", "Legumbres", "Batch cooking"],
    ingredientes: [
      { nombre: "Lentejas cocidas", cantidad: 200, unidad: "g", categoria: "Despensa" },
      { nombre: "Salmón", cantidad: 130, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Espinacas", cantidad: 80, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon una sartén a fuego medio.",
      "Cocina el salmón 4 minutos por cada lado.",
      "El salmón está listo cuando se separa fácilmente con un tenedor.",
      "Lava las espinacas.",
      "Escurre las lentejas.",
      "Pon las lentejas y las espinacas en un bol.",
      "Desmenuza el salmón encima.",
      "Añade aceite de oliva, limón, sal y pimienta.",
      "Mezcla suavemente. ¡Listo!"
    ],
    consejos: [
      "El calor del salmón marchitará un poco las espinacas.",
      "Puedes añadir tomate cherry o pepino."
    ]
  },
  {
    id: 137,
    nombre: "Verduras asadas con huevo y queso feta",
    tipo: "Cena",
    calorias: 450,
    proteina: 24,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Vegetariano", "Al horno", "Batch cooking"],
    ingredientes: [
      { nombre: "Verduras para asar", cantidad: 300, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Huevo", cantidad: 2, unidad: "ud", categoria: "Lácteos y huevos" },
      { nombre: "Queso feta", cantidad: 40, unidad: "g", categoria: "Lácteos y huevos" }
    ],
    pasos: [
      "Precalienta el horno a 200 grados durante 10 minutos.",
      "Corta las verduras en trozos grandes.",
      "Colócalas en una bandeja con aceite, sal y pimienta.",
      "Hornea 20 minutos.",
      "Saca la bandeja con cuidado.",
      "Haz dos huecos entre las verduras y casa los huevos.",
      "Añade el queso feta desmenuzado.",
      "Hornea 6 u 8 minutos más.",
      "Los huevos están listos cuando la clara está blanca. ¡Listo!"
    ],
    consejos: [
      "Usa calabacín, pimiento, cebolla y berenjena.",
      "Añade orégano o tomillo."
    ]
  },
  {
    id: 138,
    nombre: "Salmón a la plancha con ensalada",
    tipo: "Cena",
    calorias: 480,
    proteina: 36,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pescado", "Rápido", "Ensalada"],
    ingredientes: [
      { nombre: "Salmón", cantidad: 150, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Lechuga", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Tomate", cantidad: 100, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Pon una sartén a fuego medio con una cucharadita de aceite.",
      "Coloca el salmón con la piel hacia abajo.",
      "Cocina 4 minutos por cada lado.",
      "El salmón está listo cuando se separa fácilmente con un tenedor.",
      "Lava y corta la lechuga y el tomate.",
      "Coloca la ensalada en un plato.",
      "Añade el salmón encima.",
      "Añade limón, sal y pimienta. ¡Listo!"
    ],
    consejos: [
      "No muevas el salmón mientras se hace.",
      "El limón ayuda a que sepa más fresco."
    ]
  },
  {
    id: 139,
    nombre: "Arroz con verduras y huevo poché",
    tipo: "Cena",
    calorias: 460,
    proteina: 22,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Vegetariano", "Con arroz", "Rápido"],
    ingredientes: [
      { nombre: "Arroz basmati", cantidad: 70, unidad: "g", categoria: "Despensa" },
      { nombre: "Verduras variadas", cantidad: 200, unidad: "g", categoria: "Fruta y verdura" },
      { nombre: "Huevo", cantidad: 2, unidad: "ud", categoria: "Lácteos y huevos" }
    ],
    pasos: [
      "Pon agua a hervir y cocina el arroz según el paquete.",
      "Corta las verduras en trozos pequeños.",
      "Pon una sartén a fuego medio con una cucharadita de aceite.",
      "Añade las verduras y cocina 5 o 6 minutos.",
      "Pon otra olla con agua a hervir suavemente.",
      "Casa los huevos en un cuenco pequeño.",
      "Haz un remolino en el agua y vierte los huevos.",
      "Cocina 3 minutos para huevo poché.",
      "Escurre el arroz y mézclalo con las verduras.",
      "Coloca los huevos encima. ¡Listo!"
    ],
    consejos: [
      "El agua no debe hervir con fuerza para el huevo poché.",
      "Añade un poco de vinagre al agua para que la clara cuaje mejor."
    ]
  },
  {
    id: 140,
    nombre: "Bowl de pollo, arroz y verduras asadas",
    tipo: "Cena",
    calorias: 560,
    proteina: 45,
    favorita: false,
    racionesBase: 1,
    etiquetas: ["Pollo", "Batch cooking", "Con arroz"],
    ingredientes: [
      { nombre: "Pechuga de pollo", cantidad: 160, unidad: "g", categoria: "Carne y pescado" },
      { nombre: "Arroz basmati", cantidad: 70, unidad: "g", categoria: "Despensa" },
      { nombre: "Verduras para asar", cantidad: 200, unidad: "g", categoria: "Fruta y verdura" }
    ],
    pasos: [
      "Precalienta el horno a 200 grados durante 10 minutos.",
      "Corta las verduras y colócalas en una bandeja con aceite y sal.",
      "Hornea las verduras 20 minutos.",
      "Pon agua a hervir y cocina el arroz según el paquete.",
      "Corta el pollo en tiras.",
      "Pon una sartén a fuego medio-alto.",
      "Cocina el pollo 4 o 5 minutos por cada lado.",
      "Escurre el arroz.",
      "Coloca el arroz, las verduras y el pollo en un bol.",
      "Añade especias, salsa de soja o yogur. ¡Listo!"
    ],
    consejos: [
      "Puedes hacer varias raciones y guardarlas en tuppers.",
      "El pollo está listo cuando no queda rosa en el centro."
    ]
  }
];