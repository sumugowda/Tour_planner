const data = [
	{
	  id: 1,
	  name: "Agra",
	  state: "Uttar Pradesh",
	  info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
	  image: "https://cdn.thecodehelp.in/Agra.jpeg",
	  price: "35,758",
	},
	{
	  id: 2,
	  name: "Jaipur",
	  state: "Rajasthan",
	  info: `Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.`,
	  image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
	  price: "82,560",
	},
	{
	  id: 3,
	  name: "Goa",
	  state: "Goa",
	  info: "Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
	  image: "https://cdn.thecodehelp.in/Goa.jpeg",
	  price: "29,695",
	},
	{
	  id: 4,
	  name: "Varanasi",
	  state: "Uttar Pradesh",
	  info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
	  image: "https://cdn.thecodehelp.in/Varanasi.jpeg",
	  price: "31,095",
	},
	{
	  id: 5,
	  name: "Darjeeling",
	  state: "West Bengal",
	  info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
	  image: "https://cdn.thecodehelp.in/Darjeeling.jpeg",
	  price: "78,595",
	},
	{
	  id: 6,
	  name: "Jaisalmer",
	  state: "Rajasthan",
	  info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
	  image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
	  price: "68,595",
	},
	{
	  id: 7,
	  name: "Kochi",
	  state: "Kerala",
	  info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
	  image: "https://cdn.thecodehelp.in/Kochi.jpeg",
	  price: "68,595",
	},
	{
		id: 8,
		name: "Mumbai",
		state: "Maharashtra",
		info: "Mumbai is the financial capital of India for its bustling known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich blends Indian,and other influences influe.",
		image: "https://cdn.pixabay.com/photo/2016/05/03/20/01/mumbai-1370023_1280.jpg",
		price: "50,000",
	  },
	  {
		id: 9,
		name: "Gateway of India",
		state: "Maharashtra",
		info: "The Gateway was later used as a symbolic ceremonial entrance to India for Viceroys and the new Governors of Bombay. It served to allow entry and access to India. The Gateway of India is located on the waterfront at Apollo Bunder area at the end of Chhatrapati Shivaji Marg in South Mumbai and overlooks the Arabian Sea",
		image: "https://cdn.pixabay.com/photo/2010/11/29/india-294_1280.jpg",
		price: "48,900",
	  },
	  
	  {
		id: 10,
		name: "Shimla",
		state: "Himachal Pradesh",
		info: "Shimla is a picturesque hill station in the northern Indian state known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as  blends Indian, Portuguese, and other influences.",
		image: "https://www.holidify.com/images/compressed/686.jpg?v=1.1",
		price: "45,000",
	  },
	  {
		id: 11,
		name: "Bodh Gaya",
		state: "Bihar",
		info: "Bodh Gaya is a religious site and place of pilgrimage associated with the Mahabodhi Temple Complex in Gaya district, Bihar, India. It is famous for being the place where Gautama Buddha is said to have attained enlightenment.",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mahabodhitemple.jpg/500px-Mahabodhitemple.jpg",
		price: "25,000",
	  },
	  {
		id: 12,
		name: "Hundru Falls",
		state: "Jharkhand",
		info: "Hundru Falls is one of the highest waterfalls in Jharkhand,It is famous for being the place located in Ranchi district. It is a beautiful natural cascade formed on the Subarnarekha River.",
		image: "https://cdn.s3waas.gov.in/s32b8a61594b1f4c4db0902a8a395ced93/uploads/bfi_thumb/2018040366-olw7wbs1ybu4s7lagtimonkbz115tox7o2qqt9oway.jpg",
		price: "20,000",
	  },
	  {
		id: 13,
		name: "Coorg",
		state: "Karnataka",
		info: "Kodagu, also known as Coorg, is a rural district in the southwest Indian state of Karnataka. In the area’s north, Madikeri Fort has 2 life-size elephant statues at its entrance, plus a Gothic-style church with a museum on its grounds. Nearby, the Hindu Omkareshwara Temple dates back to the 19th century. Farther north are the domed Raja’s Tomb, a burial place of Kodava kings, and cascading Abbi Falls.",
		image: "https://static-blog.treebo.com/wp-content/uploads/2022/12/family_flickr.jpg",
		price: "50,000",
	  },
	  {
		id: 15,
		name: "Murudeshwar",
		state: "Karnataka",
		info: "Murudeshwar is one of the best places in Karnataka to visit. It is famous for its Shiva statue in a sitting position, which is the second tallest statue in the world. For your information, the figure stands at 123 ft tall. This is an ideal place for all Shiva devotees. ",
		image: "https://www.justahotels.com/wp-content/uploads/2023/09/Murudeshwar.jpg",
		price: "20,000",
	  },
	  {
		id: 16,
		name: "Chikmagalur",
		state: "Karnataka",
		info: "The next best place in Karnataka that is worth visiting is Chikmagalur. This place is famously called the ‘’Coffee Land of Karnataka’’ because of the coffee plantations you will see here. Nestled at the foothills of Mullayangiri Range, Chikmagalur is a beautiful retreat for wildlife lovers and those who love visiting hill stations. ",
		image: "https://karnatakatourism.org/wp-content/uploads/2020/06/chikmagalur3.jpg",
		price: "20,000",
	  },
	  {
		id: 17,
		name: "Udupi",
		state: "Karnataka",
		info: "f you are looking for beach fun with your partner or friends, come to Udupi, the coastal town in Karnataka, popular with its amazing beaches, forests and beautiful ancient temples. Besides this, you must also attend dining at a local Udupi restaurant to enjoy eating vegetarian food.  ",
		image: "https://www.justahotels.com/wp-content/uploads/2023/09/Udupi-1536x1029.jpg",
		price: "20,000",
	  },
	
  ];
  
  export default data;
  